/**
 * Soil Health Calculator - Scientific Edition
 * Calculates overall soil health percentage based on sensor data
 * Using scientifically-derived scoring curves for Indian agricultural soils
 * 
 * Scoring Methods:
 * - Nutrients (N, P, K): Sigmoid "More is Better" curve
 * - Salinity (EC): Reverse Sigmoid "Less is Better" curve  
 * - pH & Moisture: Gaussian "Optimum Range" curve
 */

export interface SoilHealthInput {
  nitrogen: number;      // mg/kg
  phosphorus: number;    // mg/kg
  potassium: number;     // mg/kg
  pH: number;
  electricalConductivity: number; // dS/m
  soilMoisture: number;  // %
  soilTemperature: number; // °C
}

export interface SoilHealthResult {
  overallScore: number;
  category: 'Excellent' | 'Good' | 'Poor' | 'Very Poor';
  categoryColor: string;
  scores: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    pH: number;
    ec: number;
    moisture: number;
    temperature: number;
  };
  recommendations: string;
}

// Type for translation function
type TranslationFunction = (key: string) => string;

// Configuration for weights (Sum = 1.0)
// Note: Temperature and Moisture are weighted lower as they are transient.
const WEIGHTS = {
  nitrogen: 0.20,
  phosphorus: 0.20,
  potassium: 0.20,
  pH: 0.20,
  ec: 0.10,
  moisture: 0.05,
  temperature: 0.05,
};

/**
 * Helper: "More is Better" (Sigmoidal)
 * Used for N, P, K, Organic Matter
 * Plants generally thrive with more nutrients up to a plateau
 * 
 * @param x - Current value
 * @param threshold - Value where score is ~0.5 (midpoint)
 * @param slope - Steepness of the curve (default: 0.5)
 * @returns Score from 0 to 1
 */
const scoreMoreIsBetter = (x: number, threshold: number, slope: number = 0.5): number => {
  if (x <= 0) return 0;
  return 1 / (1 + Math.pow(x / threshold, -slope * 5));
};

/**
 * Helper: "Less is Better" (Reverse Sigmoid)
 * Used for Bulk Density, Salts (EC)
 * Low is perfect; as it increases, the score crashes
 * 
 * @param x - Current value
 * @param threshold - Value where score starts to drop significantly
 * @returns Score from 0 to 1
 */
const scoreLessIsBetter = (x: number, threshold: number): number => {
  if (x <= 0) return 1;
  return 1 / (1 + Math.pow(x / threshold, 3));
};

/**
 * Helper: "Optimum Range" (Trapezoidal/Gaussian)
 * Used for pH, Texture, Moisture
 * There is a sweet spot; being too low or too high is equally bad
 * 
 * @param x - Current value
 * @param minOpt - Minimum optimal value
 * @param maxOpt - Maximum optimal value
 * @returns Score from 0 to 1
 */
const scoreOptimum = (x: number, minOpt: number, maxOpt: number): number => {
  if (x >= minOpt && x <= maxOpt) return 1; // Perfect sweet spot
  
  // Penalize deviation
  if (x < minOpt) {
    // Drop off as it gets lower than min
    return Math.max(0, 1 - (minOpt - x) / (minOpt * 0.5));
  } else {
    // Drop off as it gets higher than max
    return Math.max(0, 1 - (x - maxOpt) / (maxOpt * 0.5));
  }
};

/**
 * Get soil health category and color based on score
 */
const getSoilHealthCategory = (
  score: number,
  t: TranslationFunction
): { category: SoilHealthResult['category']; color: string; recommendation: string } => {
  if (score >= 80) {
    return {
      category: 'Excellent',
      color: 'bg-green-100 text-green-800 border-green-200',
      recommendation: t('soilHealth.maintainPractices'),
    };
  } else if (score >= 60) {
    return {
      category: 'Good',
      color: 'bg-lime-100 text-lime-800 border-lime-200',
      recommendation: t('soilHealth.applyBalancedFertilizer'),
    };
  } else if (score >= 40) {
    return {
      category: 'Poor',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      recommendation: t('soilHealth.addOrganicMatter'),
    };
  } else {
    return {
      category: 'Very Poor',
      color: 'bg-red-100 text-red-800 border-red-200',
      recommendation: t('soilHealth.rebuildSoilHealth'),
    };
  }
};

/**
 * Calculate overall soil health percentage using scientific scoring curves
 */
export const calculateSoilHealth = (
  input: SoilHealthInput,
  t: TranslationFunction = (key) => key
): SoilHealthResult => {
  let totalScore = 0;
  let totalWeight = 0;

  // --- Unit Conversion & Normalization ---
  
  // CRITICAL: EC Unit Conversion
  // Many sensors report EC in µS/cm (microsiemens), but formulas expect dS/m (decisiemens)
  // Conversion: 1 dS/m = 1000 µS/cm
  // If EC > 10, it's likely in µS/cm and needs conversion
  const normalizedEC = input.electricalConductivity > 10 
    ? input.electricalConductivity / 1000 
    : input.electricalConductivity;

  // --- Calculate Individual Scores (0-1 scale) ---

  // 1. Nitrogen (More is Better) - Target ~40 mg/kg
  // Using 25 as the midpoint (score 0.5). At 40+ it becomes ~1.0
  const nitrogenScore = scoreMoreIsBetter(input.nitrogen, 25);
  totalScore += nitrogenScore * WEIGHTS.nitrogen;
  totalWeight += WEIGHTS.nitrogen;

  // 2. Phosphorus (More is Better) - Target ~30 mg/kg
  const phosphorusScore = scoreMoreIsBetter(input.phosphorus, 15);
  totalScore += phosphorusScore * WEIGHTS.phosphorus;
  totalWeight += WEIGHTS.phosphorus;

  // 3. Potassium (More is Better) - Target ~150 mg/kg
  const potassiumScore = scoreMoreIsBetter(input.potassium, 80);
  totalScore += potassiumScore * WEIGHTS.potassium;
  totalWeight += WEIGHTS.potassium;

  // 4. pH (Optimum) - Target 6.0 - 7.5
  const pHScore = scoreOptimum(input.pH, 6.0, 7.5);
  totalScore += pHScore * WEIGHTS.pH;
  totalWeight += WEIGHTS.pH;

  // 5. EC (Less is Better) - Threshold ~2 dS/m (Salinity start)
  // Using normalized EC value (converted from µS/cm if necessary)
  const ecScore = scoreLessIsBetter(normalizedEC, 2.0);
  totalScore += ecScore * WEIGHTS.ec;
  totalWeight += WEIGHTS.ec;

  // 6. Moisture (Optimum) - Target 40% - 60%
  const moistureScore = scoreOptimum(input.soilMoisture, 40, 60);
  totalScore += moistureScore * WEIGHTS.moisture;
  totalWeight += WEIGHTS.moisture;

  // 7. Temperature (Optimum) - Target 20°C - 30°C
  const temperatureScore = scoreOptimum(input.soilTemperature, 20, 30);
  totalScore += temperatureScore * WEIGHTS.temperature;
  totalWeight += WEIGHTS.temperature;

  // Normalize to 0-100 scale
  // Prevent division by zero if no data is provided
  const finalIndex = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;

  // Convert individual scores to 0-100 for display
  const scores = {
    nitrogen: Math.round(nitrogenScore * 100),
    phosphorus: Math.round(phosphorusScore * 100),
    potassium: Math.round(potassiumScore * 100),
    pH: Math.round(pHScore * 100),
    ec: Math.round(ecScore * 100),
    moisture: Math.round(moistureScore * 100),
    temperature: Math.round(temperatureScore * 100),
  };

  const { category, color, recommendation } = getSoilHealthCategory(Math.round(finalIndex), t);

  return {
    overallScore: Math.round(finalIndex),
    category,
    categoryColor: color,
    scores,
    recommendations: recommendation,
  };
};

/**
 * Get detailed analysis for each parameter
 */
export const getParameterAnalysis = (
  paramName: string,
  value: number,
  score: number,
  t: TranslationFunction = (key) => key
): string => {
  if (score >= 80) return t('sensorStatus.optimal');
  if (score >= 60) return t('soilHealth.good');
  if (score >= 40) return t('sensorStatus.needsAttention');
  return t('sensorStatus.critical');
};
