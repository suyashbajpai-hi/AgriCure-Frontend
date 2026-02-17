import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "hi" | "pa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.login": "Login",
    "nav.signup": "SignUp",
    "nav.start": "Start",

    // Dashboard
    "dashboard.title": "Dashboard",
    "dashboard.subtitle":
      "Comprehensive soil analysis and fertilizer recommendations powered by real-time data and ML",
    "dashboard.overview": "Farm Overview",
    "dashboard.soilAnalysis": "Real-time Soil Analysis",
    "dashboard.realTimeSensorData": "Real Time Sensor Data",
    "dashboard.sensorData": "Sensor Data",
    "dashboard.fertilizerForm": "Fertilizer Recommendation",
    "dashboard.recommendations": "Recommendations",
    "dashboard.profile": "Profile",
    "dashboard.overallSoilHealth": "Overall Soil Health",
    "dashboard.soilMoisture": "Soil Moisture",
    "dashboard.temperature": "Temperature",
    "dashboard.temp": "Temp",
    "dashboard.humidity": "Humidity",
    "dashboard.npkLevels": "NPK Levels (Real-time)",
    "dashboard.npkDescription": "Current nutrient levels from sensors",
    "dashboard.nitrogen": "Nitrogen (N)",
    "dashboard.phosphorus": "Phosphorus (P)",
    "dashboard.potassium": "Potassium (K)",
    "dashboard.lastUpdated": "Last updated",
    "dashboard.registeredFarms": "Registered Farms",
    "dashboard.farmsDescription": "Overview of all your farm properties",
    "dashboard.addFarm": "Add Farm",
    "dashboard.noFarmsYet": "No farms added yet.",
    "dashboard.editFarm": "Edit Farm",
    "dashboard.saveFarm": "Save Farm",
    "dashboard.updateFarm": "Update Farm",
    "dashboard.northField": "North Field",
    "dashboard.southField": "South Field",
    "dashboard.eastField": "East Field",
    "dashboard.hectares": "hectares",
    "dashboard.twoHoursAgo": "2 hours ago",
    "dashboard.fourHoursAgo": "4 hours ago",
    "dashboard.oneHourAgo": "1 hour ago",
    "dashboard.health": "Health",
    "dashboard.size": "Size",
    "dashboard.sown": "Sown",
    "dashboard.added": "Added",
    "dashboard.crop": "Crop",
    "dashboard.recommendationHistory": "Fertilizer Recommendation History",
    "dashboard.recommendationHistoryDescription":
      "Past recommendations and their application status",
    "dashboard.recommendationDetails": "Recommendation Details",
    "dashboard.appliedQuestion": "Have you applied the fertilizer?",
    "dashboard.viewFullReport": "View Full Report",
    "dashboard.loadingRecommendations": "Loading recommendations...",
    "dashboard.primary": "Primary",
    "dashboard.secondary": "Secondary",
    "dashboard.noRecommendationsYet": "No Recommendations Yet",
    "dashboard.startCreatingRecommendations":
      "Start by creating your first fertilizer recommendation in the ML Recommendations tab.",
    "dashboard.connectedToThingSpeak": "Connected to ThingSpeak",
    "dashboard.usingDemoData": "Using Demo Data",
    "dashboard.refreshData": "Refresh Data",
    "dashboard.soilPH": "Soil pH",
    "dashboard.npkLevelsTrend": "NPK Levels Trend (24h)",
    "dashboard.historicalNutrientLevels": "Historical nutrient levels",
    "dashboard.environmentalConditions": "Environmental Conditions",
    "dashboard.temperatureHumidityMoisture":
      "Temperature, humidity, and moisture levels",
    "dashboard.completeFormForRecommendations":
      "Please complete the enhanced fertilizer form to get detailed recommendations.",
    "dashboard.mlModelPrediction": "ML Model Prediction",
    "dashboard.aiPoweredRecommendation":
      "AI-powered fertilizer recommendation based on your soil and crop data",
    "dashboard.fieldAnalysisSummary": "Field Analysis Summary",
    "dashboard.recommendationsFor": "Recommendations for",
    "dashboard.cropType": "Crop Type",
    "dashboard.soil": "Soil",
    "dashboard.soilConditionAnalysis": "Soil Condition Analysis",
    "dashboard.detailedSoilAnalysis":
      "Detailed analysis of your soil conditions",
    "dashboard.currentStatus": "Current Status",
    "dashboard.phStatus": "pH Status",
    "dashboard.moistureStatus": "Moisture Status",
    "dashboard.nutrientDeficiencies": "Nutrient Deficiencies",
    "dashboard.noneDetected": "None detected",
    "dashboard.currentSoilReport": "Current Soil Report",
    "dashboard.soilData": "Soil Data",
    "dashboard.phLevel": "pH Level",
    "dashboard.electricalConductivity": "Electrical Conductivity",
    "dashboard.soilTemperature": "Soil Temperature",
    "dashboard.environmentReadings": "Environment Readings",
    "dashboard.sunlight": "Sunlight",
    "dashboard.sunlightIntensity": "Sunlight Intensity",
    "dashboard.connectedToDevice":
      "Connected To Device (Product ID: {productId})",
    "dashboard.soilReadings": "Soil Readings",
    "dashboard.historicalNutrientLevels24h":
      "Historical Nutrient Levels (Last 24 Hours)",
    "dashboard.currentTemperatureHumiditySunlight":
      "Current Temperature, Humidity & Sunlight Levels",
    "dashboard.soilNPKLevelsTrend": "Soil NPK Levels Trend",
    "dashboard.primaryFertilizer": "Primary Fertilizer",
    "dashboard.secondaryFertilizer": "Secondary Fertilizer",
    "dashboard.reason": "Reason",
    "dashboard.organicAlternatives": "Organic Alternatives",
    "dashboard.sustainableOptions":
      "Sustainable options for long-term soil health improvement",
    "dashboard.timing": "Timing",
    "dashboard.applicationTiming": "Application Timing",
    "dashboard.organicOptions": "Organic Options",
    "dashboard.costEstimate": "Cost Estimate",
    "dashboard.totalEstimate": "Total Estimate",
    "dashboard.for": "For",
    "dashboard.farmerDashboard": "Farmer Dashboard",

    // Dashboard Tools Section
    "dashboard.exploreTools": "Explore Smart Agriculture Tools",
    "dashboard.exploreToolsSubtitle":
      "Select a feature to continue with AI-powered farming solutions",
    "dashboard.fertilizerRecommendation": "Fertilizer Recommendation",
    "dashboard.fertilizerRecommendationDesc":
      "Get ML-powered fertilizer recommendations for optimal crop growth",
    "dashboard.irrigationPrediction": "Irrigation Prediction",
    "dashboard.irrigationPredictionDesc":
      "Smart water management with AI-based irrigation predictions",
    "dashboard.cropPrediction": "Crop Prediction",
    "dashboard.cropPredictionDesc":
      "Discover the best crops to grow based on soil and climate",
    "dashboard.pesticideGuide": "Pesticide & Insecticide",
    "dashboard.pesticideGuideDesc":
      "Comprehensive protection guide for pest and disease control",
    "dashboard.cropPricePrediction": "Crop Price Prediction",
    "dashboard.cropPricePredictionDesc":
      "Real-time market insights and price predictions",
    "dashboard.seedVarietyRecommendation": "Seed Variety Recommendation",
    "dashboard.seedVarietyRecommendationDesc":
      "Choose the best seed varieties for maximum yield",
    "dashboard.govtSchemes": "Govt Schemes",
    "dashboard.govtSchemesDesc":
      "Latest government schemes and subsidies for farmers",
    "dashboard.illegalFertilizersCheck": "Illegal Fertilizers Check",
    "dashboard.illegalFertilizersCheckDesc":
      "Verify and check for counterfeit fertilizer products",
    "dashboard.badgeMLBased": "ML-BASED",
    "dashboard.badgeGuide": "GUIDE",
    "dashboard.badgeInfo": "INFO",
    "dashboard.badgeVerify": "VERIFY",
    "dashboard.badgeLive": "LIVE",

    // Soil Health Status
    "soilHealth.excellent": "Excellent",
    "soilHealth.good": "Good",
    "soilHealth.poor": "Poor",
    "soilHealth.veryPoor": "Very Poor",
    "soilHealth.moderate": "Moderate",
    "soilHealth.maintainPractices":
      "Maintain current soil management practices",
    "soilHealth.applyBalancedFertilizer":
      "Apply balanced fertilizer to optimize nutrient levels",
    "soilHealth.addOrganicMatter":
      "Add organic matter and adjust nutrient levels urgently",
    "soilHealth.rebuildSoilHealth":
      "Rebuild soil health urgently - consult agronomist",

    // Sensor Status
    "sensorStatus.optimal": "OPTIMAL",
    "sensorStatus.warning": "WARNING",
    "sensorStatus.critical": "CRITICAL",
    "sensorStatus.low": "LOW",
    "sensorStatus.high": "HIGH",
    "sensorStatus.needsAttention": "Needs Attention",

    // Units
    "units.mgkg": "mg/kg",
    "units.lux": "lux",
    "units.celsius": "°C",
    "units.percent": "%",
    "units.uscm": "μS/cm",
    "units.acres": "acres",
    "units.hectares": "hectares",

    // Profile
    "profile.failedToLoad": "Failed to load profile data",
    "profile.profileUpdated": "Profile Updated",
    "profile.profileUpdateSuccess":
      "Your profile has been successfully updated.",
    "profile.failedToUpdate": "Failed to update profile",
    "profile.loadingProfile": "Loading profile...",
    "profile.editProfile": "Edit Profile",
    "profile.updatePersonalInfo":
      "Update your personal information and farm details",
    "profile.fullName": "Full Name",
    "profile.enterFullName": "Enter your full name",
    "profile.email": "Email",
    "profile.enterEmail": "Enter your email",
    "profile.farmLocation": "Farm Location",
    "profile.cityStateCountry": "City, State, Country",
    "profile.phoneNumber": "Phone Number",
    "profile.farmSize": "Farm Size",
    "profile.unit": "Unit",
    "profile.hectares": "Hectares",
    "profile.acres": "Acres",
    "profile.bigha": "Bigha",
    "profile.saving": "Saving...",
    "profile.saveChanges": "Save Changes",

    // Forms
    "form.fieldName": "Field Name",
    "form.fieldSize": "Field Size",
    "form.cropType": "Crop Type",
    "form.soilPH": "Soil pH",
    "form.nitrogen": "Nitrogen (N)",
    "form.phosphorus": "Phosphorus (P)",
    "form.potassium": "Potassium (K)",
    "form.temperature": "Temperature",
    "form.humidity": "Humidity",
    "form.soilMoisture": "Soil Moisture",
    "form.submit": "Get Recommendations",
    "form.generating": "Generating Recommendations...",
    "form.reset": "Reset Form",
    "form.fieldInfo": "Field Information",
    "form.cropSoilInfo": "Crop & Soil Information",
    "form.environmentalConditions": "Environmental Conditions",
    "form.autoFillWithSensorData": "Auto-fill with Sensor Data",
    "form.sensorDataUnavailable": "Sensor Data Unavailable",
    "form.autoFilled": "Auto-filled",
    "form.formFilledWithSensorData":
      "Form has been filled with real-time sensor data",
    "form.noDataAvailable": "No Data Available",
    "form.realTimeSensorDataNotAvailable":
      "Real-time sensor data is not available",
    "form.sowingDate": "Sowing Date",
    "form.selectSowingDate": "Select the date when you sowed/planted the crop",
    "form.selectFarmSubtitle":
      "Select your farm and get ML-powered fertilizer recommendations based on real-time data",
    "form.farmSelection": "Farm Selection",
    "form.selectFarm": "Select Farm *",
    "form.loadingFarms": "Loading farms...",
    "form.chooseFarm": "Choose a farm",
    "form.addFarm": "Add Farm",
    "form.selectedFarmDetails": "Selected Farm Details",
    "form.size": "Size:",
    "form.crop": "Crop:",
    "form.soilChemistry": "Soil Chemistry",
    "form.nitrogenMgKg": "Nitrogen (mg/kg) *",
    "form.phosphorusMgKg": "Phosphorus (mg/kg) *",
    "form.potassiumMgKg": "Potassium (mg/kg) *",
    "form.soilPHStar": "Soil pH *",
    "form.soilMoisturePct": "Soil Moisture (%) *",
    "form.soilTemperatureCelsius": "Soil Temperature (°C) *",
    "form.electricalConductivity": "Electrical Conductivity (μS/cm) *",
    "form.gettingAIRecommendations": "Getting AI Recommendations...",
    "form.getMLRecommendations": "Get ML Recommendations",
    "form.selectFarmFirst":
      "Please select a farm first to get ML-powered recommendations",
    "form.addNewFarm": "Add New Farm",
    "form.addNewFarmDesc": "Add a new farm - all fields are required",
    "form.sowingDateStar": "Sowing Date *",
    "form.fillAllRequiredFields":
      "⚠️ Please fill in all required fields to enable saving",

    // Recommendations Page
    "recommendations.aiPoweredAnalysis": "AI-Powered Analysis",
    "recommendations.enhancedMLLLM": "Enhanced ML + LLM",
    "recommendations.advancedMLDescription":
      "Advanced machine learning with large language model enhancement for",
    "recommendations.fieldSize": "Field Size",
    "recommendations.cropType": "Crop Type",
    "recommendations.soilAnalysis": "Soil Analysis",
    "recommendations.ph": "pH",
    "recommendations.nitrogen": "Nitrogen",
    "recommendations.phosphorus": "Phosphorus",
    "recommendations.potassium": "Potassium",
    "recommendations.nutrientDeficienciesDetected":
      "Nutrient Deficiencies Detected",
    "recommendations.deficient": "Deficient",
    "recommendations.nitrogenDefDesc":
      "Critical for plant growth and chlorophyll production",
    "recommendations.nitrogenDefImpact":
      "Stunted growth, yellowing leaves, reduced yield",
    "recommendations.phosphorusDefDesc":
      "Essential for root development and energy transfer",
    "recommendations.phosphorusDefImpact":
      "Poor root growth, delayed maturity, purple discoloration",
    "recommendations.potassiumDefDesc":
      "Important for water regulation and disease resistance",
    "recommendations.potassiumDefImpact":
      "Weak stems, leaf burn, reduced disease resistance",
    "recommendations.nutrientDefDesc": "Nutrient deficiency detected",
    "recommendations.nutrientDefImpact": "May affect crop health",
    "recommendations.impact": "Impact:",
    "recommendations.soilTestResults": "Soil Test Results",
    "recommendations.soilMoisture": "Soil Moisture",
    "recommendations.soilTemperature": "Soil Temperature",
    "recommendations.electricalConductivity": "Electrical Conductivity",
    "recommendations.overallSoilHealth": "Overall Soil Health",
    "recommendations.healthScore": "Health Score",
    "recommendations.recommendations": "Recommendations",
    "recommendations.primaryFertilizer": "Primary Fertilizer",
    "recommendations.secondaryFertilizer": "Secondary Fertilizer",
    "recommendations.npkRatio": "NPK Ratio:",
    "recommendations.cost": "Cost:",
    "recommendations.applicationNotes": "Application Notes:",
    "recommendations.whyThisFertilizer": "Why this fertilizer:",
    "recommendations.nutrientsProvided": "Nutrients Provided:",
    "recommendations.howItHelps": "How it helps:",
    "recommendations.phAmendment": "pH Amendment",
    "recommendations.whyThisAmendment": "Why this amendment:",
    "recommendations.nutrientsEnhanced": "Nutrients Enhanced:",
    "recommendations.organicAlternatives": "Organic Alternatives",
    "recommendations.sustainableOptionDesc":
      "Sustainable and eco-friendly fertilizer options",
    "recommendations.provides": "Provides:",
    "recommendations.whyUseThis": "Why use this:",
    "recommendations.noOrganicAlternatives":
      "No specific organic alternatives recommended by the model. Consider general organic options like compost or vermicompost.",
    "recommendations.applicationTiming": "Application Timing",
    "recommendations.primaryFertilizerApplication":
      "Primary Fertilizer Application",
    "recommendations.secondaryFertilizerApplication":
      "Secondary Fertilizer Application",
    "recommendations.organicOptionsApplication": "Organic Options Application",
    "recommendations.bestPractices": "Best Practices:",
    "recommendations.importantNotes": "Important Notes:",
    "recommendations.whyApplyBeforeSowing": "Why Apply Before Sowing:",
    "recommendations.applyEarlyOrLate":
      "Apply early morning or late evening when temperature is cooler",
    "recommendations.ensureMoisture":
      "Ensure soil has adequate moisture before application",
    "recommendations.mixWithSoil":
      "Mix fertilizer with soil; don't leave on surface",
    "recommendations.splitDoses":
      "Split application into multiple smaller doses for better uptake",
    "recommendations.avoidOverwatering":
      "Avoid overwatering immediately after application",
    "recommendations.applyAsPerLabel":
      "Apply as foliar spray or soil application as per label",
    "recommendations.dontMixChemicals":
      "Don't mix with other chemicals without expert advice",
    "recommendations.waterAfterApplication":
      "Water the crop after application for better absorption",
    "recommendations.organicMatterDecompose":
      "Organic matter needs time to decompose and release nutrients",
    "recommendations.improveSoilStructure":
      "Improves soil structure and water retention capacity",
    "recommendations.foliarSpray":
      "Can be applied as foliar spray for faster results",
    "recommendations.incorporateWell":
      "Incorporate well with soil for sustained nutrient release",
    "recommendations.beneficialMicrobes":
      "Increases beneficial soil microorganism activity",
    "recommendations.idealConditions":
      "Creates ideal conditions for seed germination and root growth",
    "recommendations.noTimingInfo": "No specific timing information available",
    "recommendations.costAnalysis": "Cost Analysis",
    "recommendations.chemicalFertilizers": "Chemical Fertilizers:",
    "recommendations.primaryFertilizerBracket": "Primary Fertilizer",
    "recommendations.secondaryFertilizerBracket": "Secondary Fertilizer",
    "recommendations.phAmendmentBracket": "pH Amendment",
    "recommendations.organicAlternativesCost": "Organic Alternatives:",
    "recommendations.costNotAvailable":
      "Cost estimation not available. Please check pricing data sources.",
    "recommendations.analysisDetails": "Analysis Details",
    "recommendations.generated": "Generated:",
    "recommendations.region": "Region:",
    "recommendations.currency": "Currency:",
    "recommendations.priceSource": "Price Source:",
    "recommendations.default": "Default",
    "recommendations.localRates": "Local rates",
    "recommendations.notSpecified": "Not specified",
    "recommendations.notNeeded": "Not needed",
    "recommendations.adjustsSoilPH":
      "Adjusts soil pH to optimal range for maximum nutrient availability and absorption",
    "recommendations.soilPHOptimal":
      "Soil pH is within optimal range (6.0-7.5) for most nutrients",
    "recommendations.improvesNutrientAvailability":
      "Improves availability of Nitrogen, Phosphorus, Potassium, and essential micronutrients by optimizing soil pH.",
    "recommendations.createsIdealSoilConditions":
      "Creates ideal soil conditions for nutrient uptake, enhances beneficial microbial activity, reduces nutrient lock-up, and improves overall fertilizer efficiency.",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.yes": "Yes",
    "common.no": "No",
    "common.back": "Back",

    // Language switcher
    "language.english": "English",
    "language.hindi": "हिंदी",
    "language.punjabi": "ਪੰਜਾਬੀ",
    "language.select": "Select Language",

    // Auth pages
    "auth.welcomeBack": "Welcome Back",
    "auth.signInAccount": "Sign in to your AgriCure account",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.login": "Login",
    "auth.backToHome": "Back to Home",
    "auth.loginSuccess": "Login Successful",
    "auth.loginFailed": "Login Failed",
    "auth.invalidCredentials": "Invalid email or password",
    "auth.signup": "Sign Up",
    "auth.createAccount": "Create Account",
    "auth.signupAccount": "Create your AgriCure account",
    "auth.fullName": "Full Name",
    "auth.confirmPassword": "Confirm Password",
    "auth.farmLocation": "Farm Location",
    "auth.accountCreated": "Account Created Successfully",
    "auth.welcomeToAgriCure":
      "Welcome to AgriCure! You can now sign in to your account.",
    "auth.signupFailed": "Signup Failed",
    "auth.failedToCreateAccount": "Failed to create account",
    "auth.passwordsDoNotMatch": "Passwords do not match",
    "auth.haveAccount": "Don't have an account?",
    "auth.signupHere": "Sign up here",
    "auth.alreadyHaveAccount": "Already have an account?",
    "auth.signInHere": "Sign in here",

    // Hero Section
    "hero.title": "Smart Farming for",
    "hero.titleHighlight": "Better Yields",
    "hero.subtitle":
      "Get personalized fertilizer recommendations based on your soil analysis. Maximize your crop yields with data-driven farming decisions.",
    "hero.startTrial": "Start Trial",
    "hero.viewDemo": "View Demo",
    "hero.sensorDriven": "Sensor-Driven Analysis",
    "hero.yieldIncrease": "Yield Increase",
    "hero.cropTypesSupported": "Crop Types Supported",

    // Features Section
    "features.title": "Everything You Need for Smart Farming",
    "features.subtitle":
      "Our comprehensive platform provides all the tools and insights you need to optimize your farming operations.",
    "features.sensorDriven.title": "Sensor-Driven Soil Testing",
    "features.sensorDriven.description":
      "AgriCure uses on-field smart sensors (NPK, pH, moisture, temperature) instead of lab reports for real-time soil health data.",
    "features.aiFertilizer.title": "AI Fertilizer & Nutrient Planning",
    "features.aiFertilizer.description":
      "Get exact fertilizer dose, type, and timing (chemical + organic) based on live soil readings and crop needs.",
    "features.reduceInputCost.title": "Reduce Input Cost, Not Yield",
    "features.reduceInputCost.description":
      "Avoid overuse of urea and DAP by applying only what the crop actually needs.",
    "features.cropSpecific.title": "Crop-Specific Intelligence",
    "features.cropSpecific.description":
      "Recommendations automatically adapt to crop type, soil condition, and growth stage.",
    "features.waterSoilHealth.title": "Water & Soil Health Protection",
    "features.waterSoilHealth.description":
      "Balanced nutrient application prevents soil degradation and groundwater pollution.",
    "features.farmerFirst.title": "Farmer-First Mobile Experience",
    "features.farmerFirst.description":
      "Simple, mobile-friendly app with easy insights, built for farmers—not complex dashboards.",
    "features.smallFarmers.title": "Works Even for Small Farmers",
    "features.smallFarmers.description":
      "Designed to support small and marginal farmers with affordable, practical solutions.",
    "features.dataOwnership.title": "Data You Own, Always",
    "features.dataOwnership.description":
      "Farmer data remains private, secure, and is never sold.",

    // CTA Section
    "cta.title": "Ready to Transform Your Farming?",
    "cta.subtitle":
      "Join thousands of farmers who are already using smart technology to increase their yields and reduce costs.",
    "cta.getStarted": "Get Started Free",
    "cta.alreadyMember": "Already a Member?",

    // How It Works Section
    "howItWorks.title": "How AgriCure Works",
    "howItWorks.subtitle":
      "From sensor deployment to actionable recommendations in four simple steps",
    "howItWorks.step": "STEP",
    "howItWorks.collectSamples.title": "Collect Soil Samples",
    "howItWorks.collectSamples.description":
      "Collect about 1 kg of soil from multiple locations across the field to represent overall soil conditions accurately.",
    "howItWorks.sensorAnalysis.title": "Sensor-Based Soil Analysis",
    "howItWorks.sensorAnalysis.description":
      "The collected soil is analyzed using AgriCure's smart sensors to measure NPK, pH, moisture, temperature, and EC.",
    "howItWorks.aiProcessing.title": "AI & ML Data Processing",
    "howItWorks.aiProcessing.description":
      "AgriCure's AI models analyze soil data along with crop type, soil condition, and growth stage to compute optimal nutrient requirements.",
    "howItWorks.fertilizerPlan.title": "Get Actionable Fertilizer Plan",
    "howItWorks.fertilizerPlan.description":
      "Farmers receive a clear fertilizer plan with recommended fertilizer type, exact dosage, and application timing.",

    // Footer
    "footer.tagline":
      "Empowering farmers with smart technology for sustainable and profitable agriculture.",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.api": "API",
    "footer.support": "Support",
    "footer.helpCenter": "Help Center",
    "footer.contactUs": "Contact Us",
    "footer.community": "Community",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.copyright": "© 2025 AgriCure. All rights reserved.",

    // 404 Page
    "notFound.title": "Page Not Found",
    "notFound.description":
      "Oops! The page you're looking for doesn't exist or has been moved.",
    "notFound.goBack": "Go Back",
    "notFound.returnHome": "Return to Home",

    // Recommendations Page
    "recommendations.title": "Fertilizer Recommendations",
    "recommendations.subtitle": "AI-powered recommendations for your field",

    // ML Model Status
    "mlModel.title": "ML Model Status",
    "mlModel.description":
      "Real-time status of the machine learning prediction model",
    "mlModel.connected": "Connected",
    "mlModel.disconnected": "Disconnected",
    "mlModel.refresh": "Refresh",
    "mlModel.supportedCropTypes": "Supported Crop Types",
    "mlModel.types": "Types",
    "mlModel.modelType": "Model Type",
    "mlModel.totalFeatures": "Total Features",
    "mlModel.targets": "Targets",
    "mlModel.labelEncoders": "Label Encoders",
    "mlModel.unknown": "Unknown",
    "mlModel.usingFallback": "Using Fallback Predictions",
    "mlModel.fallbackDescription":
      "The ML model is unavailable. Predictions are using rule-based algorithms with reduced accuracy.",
    "mlModel.lastChecked": "Last checked",
    "mlModel.fertilizerRecommendationModel": "Fertilizer Recommendation Model",
    "mlModel.fertilizerRecommendationDesc":
      "Provides nutrient-based fertilizer recommendations",
    "form.farmName": "Farm Name",

    // Crop Types
    "crops.tea": "Tea",
    "crops.cotton": "Cotton",
    "crops.maize": "Maize",
    "crops.groundnut": "Groundnut",
    "crops.pulses": "Pulses",
    "crops.millets": "Millets",
    "crops.rice": "Rice",
    "crops.soybean": "Soybean",
    "crops.sugarcane": "Sugarcane",
    "crops.wheat": "Wheat",
    "crops.coffee": "Coffee",

    // Soil Analysis Status
    "soilStatus.acidic": "Acidic",
    "soilStatus.alkaline": "Alkaline",
    "soilStatus.optimal": "Optimal",
    "soilStatus.low": "Low",
    "soilStatus.high": "High",

    // Nutrients
    "nutrients.nitrogen": "Nitrogen",
    "nutrients.phosphorus": "Phosphorus",
    "nutrients.potassium": "Potassium",

    // Fertilizer Application
    "fertilizer.standardApplication":
      "Apply as per standard agricultural practices",
    "fertilizer.phosphorusDeficiency":
      "Addresses phosphorus deficiency identified in soil analysis",
    "fertilizer.basalDose": "Apply as basal dose during soil preparation",
    "fertilizer.potassiumDeficiency":
      "Addresses potassium deficiency for better fruit quality",
    "fertilizer.fruitDevelopment": "Apply during fruit development stage",
    "fertilizer.organicCompost": "Organic Compost",
    "fertilizer.improvesStructure":
      "Improves soil structure and provides slow-release nutrients",
    "fertilizer.incorporateSoil":
      "Apply 2-3 weeks before planting and incorporate into soil",
    "fertilizer.potassiumSulfate": "Potassium sulfate",
    "fertilizer.dap": "DAP",

    // Farm
    "farm.unknownFarm": "Unknown Farm",

    // Integration Tests
    "integration.backendHealth": "Backend Health Check",
    "integration.mlModelStatus": "ML Model Status",
    "integration.basicPrediction": "Basic Prediction Test",
    "integration.enhancedPrediction": "Enhanced Prediction Test",
    "integration.llmEnhanced": "LLM Enhanced Test",
    "integration.locationServices": "Location Services Test",
    "integration.soilData": "Soil Data Integration",
    "integration.checkingBackend": "Checking if backend is accessible...",
    "integration.verifyingML": "Verifying ML model availability...",
    "integration.testingBasic": "Testing basic fertilizer prediction...",
    "integration.testingEnhanced":
      "Testing enhanced prediction with all outputs...",
    "integration.testingLLM": "Testing LLM-enhanced recommendations...",
    "integration.testingLocation": "Testing location-based features...",
    "integration.testingSoilData": "Testing soil data integration...",

    // Signup Form
    "signup.productId": "Product ID",
    "signup.enterProductId": "Enter your product ID",
    "signup.enterFullName": "Enter your full name",
    "signup.enterEmail": "farmer@example.com",
    "signup.createPassword": "Create a password",
    "signup.confirmPassword": "Confirm your password",

    // Footer
    "footer.backendStatus": "Backend Integration Status",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.features": "विशेषताएं",
    "nav.howItWorks": "कैसे काम करता है",
    "nav.login": "लॉगिन",
    "nav.signup": "साइन अप",
    "nav.start": "शुरू",

    // Dashboard
    "dashboard.title": "डैशबोर्ड",
    "dashboard.subtitle":
      "रीयल-टाइम डेटा और ML द्वारा संचालित व्यापक मिट्टी विश्लेषण और उर्वरक सिफारिशें",
    "dashboard.overview": "खेत का अवलोकन",
    "dashboard.soilAnalysis": "रीयल-टाइम मिट्टी विश्लेषण",
    "dashboard.realTimeSensorData": "रीयल टाइम सेंसर डेटा",
    "dashboard.sensorData": "सेंसर डेटा",
    "dashboard.fertilizerForm": "उर्वरक सिफारिश",
    "dashboard.recommendations": "सिफारिशें",
    "dashboard.profile": "प्रोफ़ाइल",
    "dashboard.overallSoilHealth": "समग्र मिट्टी स्वास्थ्य",
    "dashboard.soilMoisture": "मिट्टी की नमी",
    "dashboard.temperature": "तापमान",
    "dashboard.temp": "तापमान",
    "dashboard.humidity": "आर्द्रता",
    "dashboard.npkLevels": "एनपीके स्तर (रीयल-टाइम)",
    "dashboard.npkDescription": "सेंसर से वर्तमान पोषक तत्व स्तर",
    "dashboard.nitrogen": "नाइट्रोजन (N)",
    "dashboard.phosphorus": "फास्फोरस (P)",
    "dashboard.potassium": "पोटैशियम (K)",
    "dashboard.lastUpdated": "अंतिम अपडेट",
    "dashboard.registeredFarms": "पंजीकृत खेत",
    "dashboard.farmsDescription": "आपके सभी खेत संपत्तियों का अवलोकन",
    "dashboard.addFarm": "खेत जोड़ें",
    "dashboard.noFarmsYet": "अभी तक कोई खेत नहीं जोड़ा गया।",
    "dashboard.editFarm": "खेत संपादित करें",
    "dashboard.saveFarm": "खेत सहेजें",
    "dashboard.updateFarm": "खेत अपडेट करें",
    "dashboard.northField": "उत्तर खेत",
    "dashboard.southField": "दक्षिण खेत",
    "dashboard.eastField": "पूर्व खेत",
    "dashboard.hectares": "हेक्टेयर",
    "dashboard.twoHoursAgo": "2 घंटे पहले",
    "dashboard.fourHoursAgo": "4 घंटे पहले",
    "dashboard.oneHourAgo": "1 घंटे पहले",
    "dashboard.health": "स्वास्थ्य",
    "dashboard.size": "आकार",
    "dashboard.sown": "बुवाई",
    "dashboard.added": "जोड़ा गया",
    "dashboard.crop": "फसल",
    "dashboard.recommendationHistory": "उर्वरक सिफारिश इतिहास",
    "dashboard.recommendationHistoryDescription":
      "पिछली सिफारिशें और उनकी अनुप्रयोग स्थिति",
    "dashboard.recommendationDetails": "सिफारिश विवरण",
    "dashboard.appliedQuestion": "क्या आपने उर्वरक लगाया है?",
    "dashboard.viewFullReport": "पूर्ण रिपोर्ट देखें",
    "dashboard.loadingRecommendations": "सिफारिशें लोड हो रही हैं...",
    "dashboard.primary": "प्राथमिक",
    "dashboard.secondary": "द्वितीयक",
    "dashboard.noRecommendationsYet": "अभी तक कोई सिफारिश नहीं",
    "dashboard.startCreatingRecommendations":
      "एमएल सिफारिश टैब में अपनी पहली उर्वरक सिफारिश बनाकर शुरू करें।",
    "dashboard.connectedToThingSpeak": "ThingSpeak से जुड़ा हुआ",
    "dashboard.usingDemoData": "डेमो डेटा का उपयोग कर रहा है",
    "dashboard.refreshData": "डेटा रिफ्रेश करें",
    "dashboard.soilPH": "मिट्टी का pH",
    "dashboard.npkLevelsTrend": "एनपीके स्तर प्रवृत्ति (24 घंटे)",
    "dashboard.historicalNutrientLevels": "ऐतिहासिक पोषक तत्व स्तर",
    "dashboard.environmentalConditions": "पर्यावरणीय स्थितियां",
    "dashboard.temperatureHumidityMoisture": "तापमान, आर्द्रता और नमी स्तर",
    "dashboard.completeFormForRecommendations":
      "विस्तृत सिफारिशें प्राप्त करने के लिए कृपया उन्नत उर्वरक फॉर्म पूरा करें।",
    "dashboard.mlModelPrediction": "एमएल मॉडल भविष्यवाणी",
    "dashboard.aiPoweredRecommendation":
      "आपके मिट्टी और फसल डेटा के आधार पर एआई-संचालित उर्वरक सिफारिश",
    "dashboard.fieldAnalysisSummary": "खेत विश्लेषण सारांश",
    "dashboard.recommendationsFor": "के लिए सिफारिशें",
    "dashboard.cropType": "फसल का प्रकार",
    "dashboard.soil": "मिट्टी",
    "dashboard.soilConditionAnalysis": "मिट्टी की स्थिति विश्लेषण",
    "dashboard.detailedSoilAnalysis":
      "आपकी मिट्टी की स्थितियों का विस्तृत विश्लेषण",
    "dashboard.currentStatus": "वर्तमान स्थिति",
    "dashboard.phStatus": "pH स्थिति",
    "dashboard.moistureStatus": "नमी स्थिति",
    "dashboard.nutrientDeficiencies": "पोषक तत्व की कमी",
    "dashboard.noneDetected": "कोई नहीं मिला",
    "dashboard.currentSoilReport": "वर्तमान मिट्टी रिपोर्ट",
    "dashboard.soilData": "मिट्टी डेटा",
    "dashboard.phLevel": "pH स्तर",
    "dashboard.electricalConductivity": "विद्युत चालकता",
    "dashboard.soilTemperature": "मिट्टी का तापमान",
    "dashboard.environmentReadings": "पर्यावरण रीडिंग",
    "dashboard.sunlight": "सूर्य प्रकाश",
    "dashboard.sunlightIntensity": "सूर्य प्रकाश तीव्रता",
    "dashboard.connectedToDevice":
      "डिवाइस से जुड़ा हुआ (उत्पाद आईडी: {productId})",
    "dashboard.soilReadings": "मिट्टी रीडिंग",
    "dashboard.historicalNutrientLevels24h":
      "ऐतिहासिक पोषक तत्व स्तर (पिछले 24 घंटे)",
    "dashboard.currentTemperatureHumiditySunlight":
      "वर्तमान तापमान, आर्द्रता और सूर्य प्रकाश स्तर",
    "dashboard.soilNPKLevelsTrend": "मिट्टी एनपीके स्तर प्रवृत्ति",
    "dashboard.primaryFertilizer": "प्राथमिक उर्वरक",
    "dashboard.secondaryFertilizer": "द्वितीयक उर्वरक",
    "dashboard.reason": "कारण",
    "dashboard.applicationMethod": "अनुप्रयोग विधि",
    "dashboard.organicAlternatives": "जैविक विकल्प",
    "dashboard.sustainableOptions":
      "दीर्घकालिक मिट्टी स्वास्थ्य सुधार के लिए टिकाऊ विकल्प",
    "dashboard.timing": "समय",
    "dashboard.applicationTiming": "अनुप्रयोग समय",
    "dashboard.organicOptions": "जैविक विकल्प",
    "dashboard.costEstimate": "लागत अनुमान",
    "dashboard.totalEstimate": "कुल अनुमान",
    "dashboard.for": "के लिए",
    "dashboard.farmerDashboard": "किसान डैशबोर्ड",

    // Dashboard Tools Section
    "dashboard.exploreTools": "स्मार्ट कृषि उपकरणों का अन्वेषण करें",
    "dashboard.exploreToolsSubtitle":
      "एआई-संचालित खेती समाधानों के साथ जारी रखने के लिए एक सुविधा चुनें",
    "dashboard.fertilizerRecommendation": "उर्वरक सिफारिश",
    "dashboard.fertilizerRecommendationDesc":
      "इष्टतम फसल वृद्धि के लिए एमएल-संचालित उर्वरक सिफारिशें प्राप्त करें",
    "dashboard.irrigationPrediction": "सिंचाई पूर्वानुमान",
    "dashboard.irrigationPredictionDesc":
      "एआई-आधारित सिंचाई पूर्वानुमान के साथ स्मार्ट पानी प्रबंधन",
    "dashboard.cropPrediction": "फसल पूर्वानुमान",
    "dashboard.cropPredictionDesc":
      "मिट्टी और जलवायु के आधार पर उगाने के लिए सर्वोत्तम फसलों की खोज करें",
    "dashboard.pesticideGuide": "कीटनाशक और कीटनाशक",
    "dashboard.pesticideGuideDesc":
      "कीट और रोग नियंत्रण के लिए व्यापक सुरक्षा गाइड",
    "dashboard.cropPricePrediction": "फसल मूल्य पूर्वानुमान",
    "dashboard.cropPricePredictionDesc":
      "रीयल-टाइम बाजार अंतर्दृष्टि और मूल्य पूर्वानुमान",
    "dashboard.seedVarietyRecommendation": "बीज किस्म सिफारिश",
    "dashboard.seedVarietyRecommendationDesc":
      "अधिकतम उपज के लिए सर्वोत्तम बीज किस्मों का चयन करें",
    "dashboard.govtSchemes": "सरकारी योजनाएं",
    "dashboard.govtSchemesDesc":
      "किसानों के लिए नवीनतम सरकारी योजनाएं और सब्सिडी",
    "dashboard.illegalFertilizersCheck": "अवैध उर्वरक जांच",
    "dashboard.illegalFertilizersCheckDesc":
      "नकली उर्वरक उत्पादों को सत्यापित और जांचें",
    "dashboard.badgeMLBased": "एमएल-आधारित",
    "dashboard.badgeGuide": "गाइड",
    "dashboard.badgeInfo": "जानकारी",
    "dashboard.badgeVerify": "सत्यापित करें",
    "dashboard.badgeLive": "लाइव",

    // Soil Health Status
    "soilHealth.excellent": "उत्कृष्ट",
    "soilHealth.good": "अच्छा",
    "soilHealth.poor": "खराब",
    "soilHealth.veryPoor": "बहुत खराब",
    "soilHealth.moderate": "मध्यम",
    "soilHealth.maintainPractices":
      "वर्तमान मिट्टी प्रबंधन प्रथाओं को बनाए रखें",
    "soilHealth.applyBalancedFertilizer":
      "पोषक तत्व स्तरों को अनुकूलित करने के लिए संतुलित उर्वरक लगाएं",
    "soilHealth.addOrganicMatter":
      "तुरंत जैविक पदार्थ जोड़ें और पोषक तत्व स्तरों को समायोजित करें",
    "soilHealth.rebuildSoilHealth":
      "तुरंत मिट्टी स्वास्थ्य का पुनर्निर्माण करें - कृषि विशेषज्ञ से परामर्श करें",

    // Sensor Status
    "sensorStatus.optimal": "इष्टतम",
    "sensorStatus.warning": "चेतावनी",
    "sensorStatus.critical": "गंभीर",
    "sensorStatus.low": "कम",
    "sensorStatus.high": "उच्च",
    "sensorStatus.needsAttention": "ध्यान देने की आवश्यकता है",

    // Units
    "units.mgkg": "mg/kg",
    "units.lux": "lux",
    "units.celsius": "°C",
    "units.percent": "%",
    "units.uscm": "μS/cm",
    "units.acres": "एकड़",
    "units.hectares": "हेक्टेयर",

    // Profile
    "profile.failedToLoad": "प्रोफ़ाइल डेटा लोड करने में विफल",
    "profile.profileUpdated": "प्रोफ़ाइल अपडेट किया गया",
    "profile.profileUpdateSuccess":
      "आपका प्रोफ़ाइल सफलतापूर्वक अपडेट किया गया है।",
    "profile.failedToUpdate": "प्रोफ़ाइल अपडेट करने में विफल",
    "profile.loadingProfile": "प्रोफ़ाइल लोड हो रहा है...",
    "profile.editProfile": "प्रोफ़ाइल संपादित करें",
    "profile.updatePersonalInfo":
      "अपनी व्यक्तिगत जानकारी और खेत के विवरण अपडेट करें",
    "profile.fullName": "पूरा नाम",
    "profile.enterFullName": "अपना पूरा नाम दर्ज करें",
    "profile.email": "ईमेल",
    "profile.enterEmail": "अपना ईमेल दर्ज करें",
    "profile.farmLocation": "खेत का स्थान",
    "profile.cityStateCountry": "शहर, राज्य, देश",
    "profile.phoneNumber": "फ़ोन नंबर",
    "profile.farmSize": "खेत का आकार",
    "profile.unit": "इकाई",
    "profile.hectares": "हेक्टेयर",
    "profile.acres": "एकड़",
    "profile.bigha": "बीघा",
    "profile.saving": "सहेज रहा है...",
    "profile.saveChanges": "परिवर्तन सहेजें",

    // Forms
    "form.fieldName": "खेत का नाम",
    "form.fieldSize": "खेत का आकार",
    "form.cropType": "फसल का प्रकार",
    "form.soilPH": "मिट्टी का pH",
    "form.nitrogen": "नाइट्रोजन (N)",
    "form.phosphorus": "फास्फोरस (P)",
    "form.potassium": "पोटैशियम (K)",
    "form.temperature": "तापमान",
    "form.humidity": "आर्द्रता",
    "form.soilMoisture": "मिट्टी की नमी",
    "form.submit": "सिफारिशें प्राप्त करें",
    "form.generating": "सिफारिशें तैयार की जा रही हैं...",
    "form.reset": "फॉर्म रीसेट करें",
    "form.fieldInfo": "खेत की जानकारी",
    "form.cropSoilInfo": "फसल और मिट्टी की जानकारी",
    "form.environmentalConditions": "पर्यावरणीय स्थितियां",
    "form.autoFillWithSensorData": "सेंसर डेटा से स्वतः भरें",
    "form.sensorDataUnavailable": "सेंसर डेटा उपलब्ध नहीं है",
    "form.autoFilled": "स्वतः भरा गया",
    "form.formFilledWithSensorData":
      "फॉर्म को रीयल-टाइम सेंसर डेटा से भर दिया गया है",
    "form.noDataAvailable": "कोई डेटा उपलब्ध नहीं है",
    "form.realTimeSensorDataNotAvailable":
      "रीयल-टाइम सेंसर डेटा उपलब्ध नहीं है",
    "form.sowingDate": "बुवाई की तारीख",
    "form.selectSowingDate": "वह तारीख चुनें जब आपने फसल बोई/लगाई थी",
    "form.selectFarmSubtitle":
      "अपना खेत चुनें और रीयल-टाइम डेटा के आधार पर एमएल-संचालित उर्वरक सिफारिशें प्राप्त करें",
    "form.farmSelection": "खेत चयन",
    "form.selectFarm": "खेत चुनें *",
    "form.loadingFarms": "खेत लोड हो रहे हैं...",
    "form.chooseFarm": "एक खेत चुनें",
    "form.addFarm": "खेत जोड़ें",
    "form.selectedFarmDetails": "चयनित खेत विवरण",
    "form.size": "आकार:",
    "form.crop": "फसल:",
    "form.soilChemistry": "मिट्टी रसायन विज्ञान",
    "form.nitrogenMgKg": "नाइट्रोजन (mg/kg) *",
    "form.phosphorusMgKg": "फास्फोरस (mg/kg) *",
    "form.potassiumMgKg": "पोटैशियम (mg/kg) *",
    "form.soilPHStar": "मिट्टी का pH *",
    "form.soilMoisturePct": "मिट्टी की नमी (%) *",
    "form.soilTemperatureCelsius": "मिट्टी का तापमान (°C) *",
    "form.electricalConductivity": "विद्युत चालकता (μS/cm) *",
    "form.gettingAIRecommendations": "एआई सिफारिशें प्राप्त की जा रही हैं...",
    "form.getMLRecommendations": "एमएल सिफारिशें प्राप्त करें",
    "form.selectFarmFirst":
      "एमएल-संचालित सिफारिशें प्राप्त करने के लिए कृपया पहले एक खेत चुनें",
    "form.addNewFarm": "नया खेत जोड़ें",
    "form.addNewFarmDesc": "एक नया खेत जोड़ें - सभी फ़ील्ड आवश्यक हैं",
    "form.sowingDateStar": "बुवाई की तारीख *",
    "form.fillAllRequiredFields":
      "⚠️ सहेजने को सक्षम करने के लिए कृपया सभी आवश्यक फ़ील्ड भरें",

    // Recommendations Page
    "recommendations.aiPoweredAnalysis": "एआई-संचालित विश्लेषण",
    "recommendations.enhancedMLLLM": "उन्नत एमएल + एलएलएम",
    "recommendations.advancedMLDescription":
      "के लिए बड़े भाषा मॉडल संवर्धन के साथ उन्नत मशीन लर्निंग",
    "recommendations.fieldSize": "खेत का आकार",
    "recommendations.cropType": "फसल का प्रकार",
    "recommendations.soilAnalysis": "मिट्टी विश्लेषण",
    "recommendations.ph": "pH",
    "recommendations.nitrogen": "नाइट्रोजन",
    "recommendations.phosphorus": "फास्फोरस",
    "recommendations.potassium": "पोटैशियम",
    "recommendations.nutrientDeficienciesDetected":
      "पोषक तत्व की कमी का पता चला",
    "recommendations.deficient": "कमी",
    "recommendations.nitrogenDefDesc":
      "पौधों की वृद्धि और क्लोरोफिल उत्पादन के लिए महत्वपूर्ण",
    "recommendations.nitrogenDefImpact":
      "अवरुद्ध वृद्धि, पत्तियों का पीला होना, कम उपज",
    "recommendations.phosphorusDefDesc":
      "जड़ विकास और ऊर्जा हस्तांतरण के लिए आवश्यक",
    "recommendations.phosphorusDefImpact":
      "खराब जड़ वृद्धि, विलंबित परिपक्वता, बैंगनी मलिनकिरण",
    "recommendations.potassiumDefDesc":
      "जल नियमन और रोग प्रतिरोध के लिए महत्वपूर्ण",
    "recommendations.potassiumDefImpact":
      "कमजोर तने, पत्ती जलन, कम रोग प्रतिरोध",
    "recommendations.nutrientDefDesc": "पोषक तत्व की कमी का पता चला",
    "recommendations.nutrientDefImpact": "फसल स्वास्थ्य को प्रभावित कर सकता है",
    "recommendations.impact": "प्रभाव:",
    "recommendations.soilTestResults": "मिट्टी परीक्षण परिणाम",
    "recommendations.soilMoisture": "मिट्टी की नमी",
    "recommendations.soilTemperature": "मिट्टी का तापमान",
    "recommendations.electricalConductivity": "विद्युत चालकता",
    "recommendations.overallSoilHealth": "कुल मिट्टी स्वास्थ्य",
    "recommendations.healthScore": "स्वास्थ्य स्कोर",
    "recommendations.recommendations": "सिफारिशें",
    "recommendations.primaryFertilizer": "प्राथमिक उर्वरक",
    "recommendations.secondaryFertilizer": "द्वितीयक उर्वरक",
    "recommendations.npkRatio": "एनपीके अनुपात:",
    "recommendations.cost": "लागत:",
    "recommendations.applicationNotes": "अनुप्रयोग नोट्स:",
    "recommendations.whyThisFertilizer": "यह उर्वरक क्यों:",
    "recommendations.nutrientsProvided": "प्रदान किए गए पोषक तत्व:",
    "recommendations.howItHelps": "यह कैसे मदद करता है:",
    "recommendations.phAmendment": "pH संशोधन",
    "recommendations.whyThisAmendment": "यह संशोधन क्यों:",
    "recommendations.nutrientsEnhanced": "बढ़ाए गए पोषक तत्व:",
    "recommendations.organicAlternatives": "जैविक विकल्प",
    "recommendations.sustainableOptionDesc":
      "टिकाऊ और पर्यावरण के अनुकूल उर्वरक विकल्प",
    "recommendations.provides": "प्रदान करता है:",
    "recommendations.whyUseThis": "इसका उपयोग क्यों करें:",
    "recommendations.noOrganicAlternatives":
      "मॉडल द्वारा कोई विशिष्ट जैविक विकल्प अनुशंसित नहीं। खाद या वर्मीकम्पोस्ट जैसे सामान्य जैविक विकल्पों पर विचार करें।",
    "recommendations.applicationTiming": "अनुप्रयोग समय",
    "recommendations.primaryFertilizerApplication": "प्राथमिक उर्वरक अनुप्रयोग",
    "recommendations.secondaryFertilizerApplication":
      "द्वितीयक उर्वरक अनुप्रयोग",
    "recommendations.organicOptionsApplication": "जैविक विकल्प अनुप्रयोग",
    "recommendations.bestPractices": "सर्वोत्तम प्रथाएं:",
    "recommendations.importantNotes": "महत्वपूर्ण नोट्स:",
    "recommendations.whyApplyBeforeSowing": "बुवाई से पहले क्यों लगाएं:",
    "recommendations.applyEarlyOrLate":
      "सुबह जल्दी या शाम को देर से लगाएं जब तापमान ठंडा हो",
    "recommendations.ensureMoisture":
      "अनुप्रयोग से पहले सुनिश्चित करें कि मिट्टी में पर्याप्त नमी हो",
    "recommendations.mixWithSoil":
      "उर्वरक को मिट्टी के साथ मिलाएं; सतह पर न छोड़ें",
    "recommendations.splitDoses":
      "बेहतर अवशोषण के लिए अनुप्रयोग को कई छोटी खुराक में विभाजित करें",
    "recommendations.avoidOverwatering":
      "अनुप्रयोग के तुरंत बाद अधिक पानी देने से बचें",
    "recommendations.applyAsPerLabel":
      "पानी स्प्रे या मिट्टी में लेबल के अनुसार लगाएं",
    "recommendations.dontMixChemicals":
      "विशेषज्ञ सलाह के बिना अन्य रसायनों के साथ न मिलाएं",
    "recommendations.waterAfterApplication":
      "बेहतर अवशोषण के लिए लगाने के बाद फसल को पानी दें",
    "recommendations.organicMatterDecompose":
      "जैविक पदार्थ को विघटित होने और पोषक तत्व छोड़ने में समय लगता है",
    "recommendations.improveSoilStructure":
      "मिट्टी की संरचना और जल धारण क्षमता में सुधार करता है",
    "recommendations.foliarSpray":
      "तेज़ परिणामों के लिए पत्ती स्प्रे के रूप में लगाया जा सकता है",
    "recommendations.incorporateWell":
      "निरंतर पोषक तत्व रिलीज के लिए मिट्टी के साथ अच्छी तरह से मिलाएं",
    "recommendations.beneficialMicrobes":
      "लाभकारी मिट्टी सूक्ष्मजीव गतिविधि बढ़ाता है",
    "recommendations.idealConditions":
      "बीज अंकुरण और जड़ वृद्धि के लिए आदर्श स्थितियां बनाता है",
    "recommendations.noTimingInfo": "कोई विशिष्ट समय जानकारी उपलब्ध नहीं है",
    "recommendations.costAnalysis": "लागत विश्लेषण",
    "recommendations.chemicalFertilizers": "रासायनिक उर्वरक:",
    "recommendations.primaryFertilizerBracket": "प्राथमिक उर्वरक",
    "recommendations.secondaryFertilizerBracket": "द्वितीयक उर्वरक",
    "recommendations.phAmendmentBracket": "pH संशोधन",
    "recommendations.organicAlternativesCost": "जैविक विकल्प:",
    "recommendations.costNotAvailable":
      "लागत अनुमान उपलब्ध नहीं है। कृपया मूल्य निर्धारण डेटा स्रोत जांचें।",
    "recommendations.analysisDetails": "विश्लेषण विवरण",
    "recommendations.generated": "उत्पन्न:",
    "recommendations.region": "क्षेत्र:",
    "recommendations.currency": "मुद्रा:",
    "recommendations.priceSource": "मूल्य स्रोत:",
    "recommendations.default": "डिफ़ॉल्ट",
    "recommendations.localRates": "स्थानीय दरें",
    "recommendations.notSpecified": "निर्दिष्ट नहीं",
    "recommendations.notNeeded": "आवश्यक नहीं",
    "recommendations.adjustsSoilPH":
      "अधिकतम पोषक तत्व उपलब्धता और अवशोषण के लिए मिट्टी pH को इष्टतम सीमा में समायोजित करता है",
    "recommendations.soilPHOptimal":
      "मिट्टी pH अधिकांश पोषक तत्वों के लिए इष्टतम सीमा (6.0-7.5) के भीतर है",
    "recommendations.improvesNutrientAvailability":
      "मिट्टी pH को अनुकूलित करके नाइट्रोजन, फॉस्फोरस, पोटेशियम और आवश्यक सूक्ष्म पोषक तत्वों की उपलब्धता में सुधार करता है।",
    "recommendations.createsIdealSoilConditions":
      "पोषक तत्व ग्रहण के लिए आदर्श मिट्टी की स्थिति बनाता है, लाभकारी सूक्ष्मजीव गतिविधि को बढ़ाता है, पोषक तत्व लॉक-अप को कम करता है, और समग्र उर्वरक दक्षता में सुधार करता है।",

    // Common
    "common.loading": "लोड हो रहा है...",
    "common.error": "त्रुटि",
    "common.success": "सफलता",
    "common.save": "सहेजें",
    "common.cancel": "रद्द करें",
    "common.edit": "संपादित करें",
    "common.delete": "हटाएं",
    "common.yes": "हाँ",
    "common.no": "नहीं",
    "common.back": "वापस",

    // Language switcher
    "language.english": "English",
    "language.hindi": "हिंदी",
    "language.punjabi": "ਪੰਜਾਬੀ",
    "language.select": "भाषा चुनें",

    // Auth pages
    "auth.welcomeBack": "वापसी पर स्वागत है",
    "auth.signInAccount": "अपने AgriCure खाते में साइन इन करें",
    "auth.email": "ईमेल",
    "auth.password": "पासवर्ड",
    "auth.login": "लॉगिन",
    "auth.backToHome": "होम पर वापस जाएं",
    "auth.loginSuccess": "लॉगिन सफल",
    "auth.loginFailed": "लॉगिन विफल",
    "auth.invalidCredentials": "अमान्य ईमेल या पासवर्ड",
    "auth.signup": "साइन अप",
    "auth.createAccount": "खाता बनाएं",
    "auth.signupAccount": "अपना AgriCure खाता बनाएं",
    "auth.fullName": "पूरा नाम",
    "auth.confirmPassword": "पासवर्ड की पुष्टि करें",
    "auth.farmLocation": "खेत का स्थान",
    "auth.accountCreated": "खाता सफलतापूर्वक बनाया गया",
    "auth.welcomeToAgriCure":
      "AgriCure में आपका स्वागत है! अब आप अपने खाते में साइन इन कर सकते हैं।",
    "auth.signupFailed": "साइन अप विफल",
    "auth.failedToCreateAccount": "खाता बनाने में विफल",
    "auth.passwordsDoNotMatch": "पासवर्ड मेल नहीं खाते",
    "auth.haveAccount": "खाता नहीं है?",
    "auth.signupHere": "यहां साइन अप करें",
    "auth.alreadyHaveAccount": "पहले से ही खाता है?",
    "auth.signInHere": "यहां साइन इन करें",

    // Hero Section
    "hero.title": "बेहतर उपज के लिए",
    "hero.titleHighlight": "स्मार्ट खेती",
    "hero.subtitle":
      "अपने मिट्टी विश्लेषण के आधार पर व्यक्तिगत उर्वरक सिफारिशें प्राप्त करें। डेटा-संचालित खेती निर्णयों के साथ अपनी फसल की पैदावार को अधिकतम करें।",
    "hero.startTrial": "परीक्षण शुरू करें",
    "hero.viewDemo": "डेमो देखें",
    "hero.sensorDriven": "सेंसर-आधारित विश्लेषण",
    "hero.yieldIncrease": "उपज में वृद्धि",
    "hero.cropTypesSupported": "फसल प्रकार समर्थित",

    // Features Section
    "features.title": "स्मार्ट खेती के लिए आपको जो कुछ चाहिए",
    "features.subtitle":
      "हमारा व्यापक प्लेटफॉर्म आपको अपने खेती संचालन को अनुकूलित करने के लिए आवश्यक सभी उपकरण और अंतर्दृष्टि प्रदान करता है।",
    "features.sensorDriven.title": "सेंसर-आधारित मिट्टी परीक्षण",
    "features.sensorDriven.description":
      "AgriCure रीयल-टाइम मिट्टी स्वास्थ्य डेटा के लिए लैब रिपोर्ट के बजाय ऑन-फील्ड स्मार्ट सेंसर (NPK, pH, नमी, तापमान) का उपयोग करता है।",
    "features.aiFertilizer.title": "AI उर्वरक और पोषक तत्व योजना",
    "features.aiFertilizer.description":
      "लाइव मिट्टी रीडिंग और फसल की जरूरतों के आधार पर सटीक उर्वरक खुराक, प्रकार और समय (रासायनिक + जैविक) प्राप्त करें।",
    "features.reduceInputCost.title": "इनपुट लागत कम करें, उपज नहीं",
    "features.reduceInputCost.description":
      "केवल वही लगाकर यूरिया और डीएपी के अत्यधिक उपयोग से बचें जो फसल को वास्तव में चाहिए।",
    "features.cropSpecific.title": "फसल-विशिष्ट बुद्धिमत्ता",
    "features.cropSpecific.description":
      "सिफारिशें फसल के प्रकार, मिट्टी की स्थिति और विकास चरण के अनुसार स्वचालित रूप से अनुकूलित होती हैं।",
    "features.waterSoilHealth.title": "जल और मिट्टी स्वास्थ्य संरक्षण",
    "features.waterSoilHealth.description":
      "संतुलित पोषक तत्व अनुप्रयोग मिट्टी के क्षरण और भूजल प्रदूषण को रोकता है।",
    "features.farmerFirst.title": "किसान-प्रथम मोबाइल अनुभव",
    "features.farmerFirst.description":
      "आसान अंतर्दृष्टि के साथ सरल, मोबाइल-फ्रेंडली ऐप, किसानों के लिए बनाया गया—जटिल डैशबोर्ड नहीं।",
    "features.smallFarmers.title": "छोटे किसानों के लिए भी काम करता है",
    "features.smallFarmers.description":
      "किफायती, व्यावहारिक समाधानों के साथ छोटे और सीमांत किसानों का समर्थन करने के लिए डिज़ाइन किया गया।",
    "features.dataOwnership.title": "डेटा जो आपका है, हमेशा",
    "features.dataOwnership.description":
      "किसान का डेटा निजी, सुरक्षित रहता है और कभी बेचा नहीं जाता।",

    // CTA Section
    "cta.title": "अपनी खेती को बदलने के लिए तैयार हैं?",
    "cta.subtitle":
      "हजारों किसानों में शामिल हों जो पहले से ही अपनी उपज बढ़ाने और लागत कम करने के लिए स्मार्ट तकनीक का उपयोग कर रहे हैं।",
    "cta.getStarted": "मुफ्त में शुरू करें",
    "cta.alreadyMember": "पहले से ही सदस्य हैं?",

    // How It Works Section
    "howItWorks.title": "AgriCure कैसे काम करता है",
    "howItWorks.subtitle":
      "सेंसर तैनाती से लेकर कार्रवाई योग्य सिफारिशों तक चार सरल चरणों में",
    "howItWorks.step": "चरण",
    "howItWorks.collectSamples.title": "मिट्टी के नमूने एकत्र करें",
    "howItWorks.collectSamples.description":
      "समग्र मिट्टी की स्थिति का सटीक प्रतिनिधित्व करने के लिए खेत में कई स्थानों से लगभग 1 किलो मिट्टी एकत्र करें।",
    "howItWorks.sensorAnalysis.title": "सेंसर-आधारित मिट्टी विश्लेषण",
    "howItWorks.sensorAnalysis.description":
      "एकत्रित मिट्टी का विश्लेषण AgriCure के स्मार्ट सेंसर का उपयोग करके NPK, pH, नमी, तापमान और EC को मापने के लिए किया जाता है।",
    "howItWorks.aiProcessing.title": "AI और ML डेटा प्रोसेसिंग",
    "howItWorks.aiProcessing.description":
      "AgriCure के AI मॉडल इष्टतम पोषक तत्व आवश्यकताओं की गणना के लिए फसल के प्रकार, मिट्टी की स्थिति और विकास चरण के साथ मिट्टी के डेटा का विश्लेषण करते हैं।",
    "howItWorks.fertilizerPlan.title":
      "कार्रवाई योग्य उर्वरक योजना प्राप्त करें",
    "howItWorks.fertilizerPlan.description":
      "किसानों को अनुशंसित उर्वरक प्रकार, सटीक खुराक और अनुप्रयोग समय के साथ एक स्पष्ट उर्वरक योजना प्राप्त होती है।",

    // Footer
    "footer.tagline":
      "टिकाऊ और लाभदायक कृषि के लिए स्मार्ट तकनीक के साथ किसानों को सशक्त बनाना।",
    "footer.product": "उत्पाद",
    "footer.features": "विशेषताएं",
    "footer.pricing": "मूल्य निर्धारण",
    "footer.api": "API",
    "footer.support": "समर्थन",
    "footer.helpCenter": "सहायता केंद्र",
    "footer.contactUs": "संपर्क करें",
    "footer.community": "समुदाय",
    "footer.company": "कंपनी",
    "footer.about": "हमारे बारे में",
    "footer.blog": "ब्लॉग",
    "footer.careers": "करियर",
    "footer.copyright": "© 2025 AgriCure. सर्वाधिकार सुरक्षित।",

    // 404 Page
    "notFound.title": "पृष्ठ नहीं मिला",
    "notFound.description":
      "उफ्फ! जिस पृष्ठ को आप खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।",
    "notFound.goBack": "वापस जाएं",
    "notFound.returnHome": "होम पर वापस जाएं",

    // ML Model Status
    "mlModel.title": "एमएल मॉडल स्थिति",
    "mlModel.description": "मशीन लर्निंग भविष्यवाणी मॉडल की रीयल-टाइम स्थिति",
    "mlModel.connected": "जुड़ा हुआ",
    "mlModel.disconnected": "डिस्कनेक्ट",
    "mlModel.refresh": "रिफ्रेश करें",
    "mlModel.supportedCropTypes": "समर्थित फसल प्रकार",
    "mlModel.types": "प्रकार",
    "mlModel.modelType": "मॉडल प्रकार",
    "mlModel.totalFeatures": "कुल फीचर्स",
    "mlModel.targets": "लक्ष्य",
    "mlModel.labelEncoders": "लेबल एनकोडर",
    "mlModel.unknown": "अज्ञात",
    "mlModel.usingFallback": "फॉलबैक भविष्यवाणियों का उपयोग",
    "mlModel.fallbackDescription":
      "एमएल मॉडल उपलब्ध नहीं है। भविष्यवाणियां कम सटीकता के साथ नियम-आधारित एल्गोरिदम का उपयोग कर रही हैं।",
    "mlModel.lastChecked": "अंतिम जांच",
    "mlModel.fertilizerRecommendationModel": "उर्वरक सिफारिश मॉडल",
    "mlModel.fertilizerRecommendationDesc":
      "पोषक तत्व-आधारित उर्वरक सिफारिशें प्रदान करता है",
    "form.farmName": "खेत का नाम",

    // Crop Types
    "crops.tea": "चाय",
    "crops.cotton": "कपास",
    "crops.maize": "मक्का",
    "crops.groundnut": "मूंगफली",
    "crops.pulses": "दालें",
    "crops.millets": "बाजरा",
    "crops.rice": "चावल",
    "crops.soybean": "सोयाबीन",
    "crops.sugarcane": "गन्ना",
    "crops.wheat": "गेहूं",
    "crops.coffee": "कॉफी",

    // Soil Analysis Status
    "soilStatus.acidic": "अम्लीय",
    "soilStatus.alkaline": "क्षारीय",
    "soilStatus.optimal": "इष्टतम",
    "soilStatus.low": "कम",
    "soilStatus.high": "उच्च",

    // Nutrients
    "nutrients.nitrogen": "नाइट्रोजन",
    "nutrients.phosphorus": "फास्फोरस",
    "nutrients.potassium": "पोटैशियम",

    // Fertilizer Application
    "fertilizer.standardApplication": "मानक कृषि प्रथाओं के अनुसार लागू करें",
    "fertilizer.phosphorusDeficiency":
      "मिट्टी विश्लेषण में पहचानी गई फास्फोरस की कमी को दूर करता है",
    "fertilizer.basalDose":
      "मिट्टी तैयारी के दौरान बेसल खुराक के रूप में लागू करें",
    "fertilizer.potassiumDeficiency":
      "बेहतर फल गुणवत्ता के लिए पोटैशियम की कमी को दूर करता है",
    "fertilizer.fruitDevelopment": "फल विकास चरण के दौरान लागू करें",
    "fertilizer.organicCompost": "जैविक खाद",
    "fertilizer.improvesStructure":
      "मिट्टी की संरचना में सुधार करता है और धीमी गति से निकलने वाले पोषक तत्व प्रदान करता है",
    "fertilizer.incorporateSoil":
      "रोपण से 2-3 सप्ताह पहले लागू करें और मिट्टी में मिलाएं",
    "fertilizer.potassiumSulfate": "पोटैशियम सल्फेट",
    "fertilizer.dap": "डीएपी",

    // Farm
    "farm.unknownFarm": "अज्ञात खेत",

    // Integration Tests
    "integration.backendHealth": "बैकएंड स्वास्थ्य जांच",
    "integration.mlModelStatus": "एमएल मॉडल स्थिति",
    "integration.basicPrediction": "बुनियादी भविष्यवाणी परीक्षण",
    "integration.enhancedPrediction": "उन्नत भविष्यवाणी परीक्षण",
    "integration.llmEnhanced": "एलएलएम उन्नत परीक्षण",
    "integration.locationServices": "स्थान सेवा परीक्षण",
    "integration.soilData": "मिट्टी डेटा एकीकरण",
    "integration.checkingBackend": "जांच रहे हैं कि बैकएंड सुलभ है...",
    "integration.verifyingML": "एमएल मॉडल उपलब्धता सत्यापित कर रहे हैं...",
    "integration.testingBasic": "बुनियादी उर्वरक भविष्यवाणी का परीक्षण...",
    "integration.testingEnhanced":
      "सभी आउटपुट के साथ उन्नत भविष्यवाणी का परीक्षण...",
    "integration.testingLLM": "एलएलएम-उन्नत सिफारिशों का परीक्षण...",
    "integration.testingLocation": "स्थान-आधारित सुविधाओं का परीक्षण...",
    "integration.testingSoilData": "मिट्टी डेटा एकीकरण का परीक्षण...",

    // Signup Form
    "signup.productId": "उत्पाद आईडी",
    "signup.enterProductId": "अपना उत्पाद आईडी दर्ज करें",
    "signup.enterFullName": "अपना पूरा नाम दर्ज करें",
    "signup.enterEmail": "farmer@example.com",
    "signup.createPassword": "पासवर्ड बनाएं",
    "signup.confirmPassword": "अपना पासवर्ड पुष्टि करें",

    // Footer
    "footer.backendStatus": "बैकएंड एकीकरण स्थिति",
  },
  pa: {
    // Navigation
    "nav.home": "ਹੋਮ",
    "nav.features": "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    "nav.howItWorks": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    "nav.login": "ਲੌਗਿਨ",
    "nav.signup": "ਸਾਈਨ ਅੱਪ",
    "nav.start": "ਸ਼ੁਰੂ",

    // Dashboard
    "dashboard.title": "ਡੈਸ਼ਬੋਰਡ",
    "dashboard.subtitle":
      "ਰੀਅਲ-ਟਾਈਮ ਡੇਟਾ ਅਤੇ ML ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਵਿਆਪਕ ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਖਾਦ ਸਿਫਾਰਸ਼ਾਂ",
    "dashboard.overview": "ਖੇਤ ਦਾ ਜਾਇਜ਼ਾ",
    "dashboard.soilAnalysis": "ਰੀਅਲ-ਟਾਈਮ ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    "dashboard.realTimeSensorData": "ਰੀਅਲ ਟਾਈਮ ਸੈਂਸਰ ਡੇਟਾ",
    "dashboard.sensorData": "ਸੈਂਸਰ ਡੇਟਾ",
    "dashboard.fertilizerForm": "ਖਾਦ ਸਿਫਾਰਸ਼",
    "dashboard.recommendations": "ਸਿਫਾਰਸ਼ਾਂ",
    "dashboard.profile": "ਪ੍ਰੋਫਾਈਲ",
    "dashboard.overallSoilHealth": "ਸਮੁੱਚੀ ਮਿੱਟੀ ਸਿਹਤ",
    "dashboard.soilMoisture": "ਮਿੱਟੀ ਦੀ ਨਮੀ",
    "dashboard.temperature": "ਤਾਪਮਾਨ",
    "dashboard.temp": "ਤਾਪਮਾਨ",
    "dashboard.humidity": "ਨਮੀ",
    "dashboard.npkLevels": "ਐਨਪੀਕੇ ਪੱਧਰ (ਰੀਅਲ-ਟਾਈਮ)",
    "dashboard.npkDescription": "ਸੈਂਸਰ ਤੋਂ ਮੌਜੂਦਾ ਪੋਸ਼ਕ ਤੱਤ ਪੱਧਰ",
    "dashboard.nitrogen": "ਨਾਈਟ੍ਰੋਜਨ (N)",
    "dashboard.phosphorus": "ਫਾਸਫੋਰਸ (P)",
    "dashboard.potassium": "ਪੋਟਾਸ਼ੀਅਮ (K)",
    "dashboard.lastUpdated": "ਆਖਰੀ ਅਪਡੇਟ",
    "dashboard.registeredFarms": "ਰਜਿਸਟਰਡ ਖੇਤ",
    "dashboard.farmsDescription": "ਤੁਹਾਡੇ ਸਾਰੇ ਖੇਤ ਜਾਇਦਾਦਾਂ ਦਾ ਜਾਇਜ਼ਾ",
    "dashboard.addFarm": "ਖੇਤ ਜੋੜੋ",
    "dashboard.noFarmsYet": "ਹਾਲੇ ਤੱਕ ਕੋਈ ਖੇਤ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ।",
    "dashboard.editFarm": "ਖੇਤ ਸੰਪਾਦਿਤ ਕਰੋ",
    "dashboard.saveFarm": "ਖੇਤ ਸੇਵ ਕਰੋ",
    "dashboard.updateFarm": "ਖੇਤ ਅੱਪਡੇਟ ਕਰੋ",
    "dashboard.northField": "ਉੱਤਰ ਖੇਤ",
    "dashboard.southField": "ਦੱਖਣ ਖੇਤ",
    "dashboard.eastField": "ਪੂਰਬ ਖੇਤ",
    "dashboard.hectares": "ਹੈਕਟੇਅਰ",
    "dashboard.twoHoursAgo": "2 ਘੰਟੇ ਪਹਿਲਾਂ",
    "dashboard.fourHoursAgo": "4 ਘੰਟੇ ਪਹਿਲਾਂ",
    "dashboard.oneHourAgo": "1 ਘੰਟਾ ਪਹਿਲਾਂ",
    "dashboard.health": "ਸਿਹਤ",
    "dashboard.size": "ਆਕਾਰ",
    "dashboard.sown": "ਬੀਜੀ",
    "dashboard.added": "ਸ਼ਾਮਲ ਕੀਤਾ",
    "dashboard.crop": "ਫਸਲ",
    "dashboard.recommendationHistory": "ਖਾਦ ਸਿਫਾਰਸ਼ ਇਤਿਹਾਸ",
    "dashboard.recommendationHistoryDescription":
      "ਪਿਛਲੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਅਤੇ ਉਹਨਾਂ ਦੀ ਐਪਲੀਕੇਸ਼ਨ ਸਥਿਤੀ",
    "dashboard.recommendationDetails": "ਸਿਫਾਰਸ਼ ਵੇਰਵੇ",
    "dashboard.appliedQuestion": "ਕੀ ਤੁਸੀਂ ਖਾਦ ਲਗਾਈ ਹੈ?",
    "dashboard.viewFullReport": "ਪੂਰੀ ਰਿਪੋਰਟ ਵੇਖੋ",
    "dashboard.loadingRecommendations": "ਸਿਫਾਰਸ਼ਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
    "dashboard.primary": "ਪ੍ਰਾਇਮਰੀ",
    "dashboard.secondary": "ਸੈਕੰਡਰੀ",
    "dashboard.noRecommendationsYet": "ਅਜੇ ਤੱਕ ਕੋਈ ਸਿਫਾਰਸ਼ ਨਹੀਂ",
    "dashboard.startCreatingRecommendations":
      "ਐਮਐਲ ਸਿਫਾਰਸ਼ ਟੈਬ ਵਿੱਚ ਆਪਣੀ ਪਹਿਲੀ ਖਾਦ ਸਿਫਾਰਸ਼ ਬਣਾਉਣ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ।",
    "dashboard.connectedToThingSpeak": "ThingSpeak ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ",
    "dashboard.usingDemoData": "ਡੈਮੋ ਡੇਟਾ ਵਰਤ ਰਿਹਾ ਹੈ",
    "dashboard.refreshData": "ਡੇਟਾ ਰਿਫਰੈਸ਼ ਕਰੋ",
    "dashboard.soilPH": "ਮਿੱਟੀ ਦਾ pH",
    "dashboard.npkLevelsTrend": "ਐਨਪੀਕੇ ਪੱਧਰ ਰੁਝਾਨ (24 ਘੰਟੇ)",
    "dashboard.historicalNutrientLevels": "ਇਤਿਹਾਸਕ ਪੋਸ਼ਕ ਤੱਤ ਪੱਧਰ",
    "dashboard.environmentalConditions": "ਪਰਿਆਵਰਣੀ ਸਥਿਤੀਆਂ",
    "dashboard.temperatureHumidityMoisture": "ਤਾਪਮਾਨ, ਨਮੀ ਅਤੇ ਨਮੀ ਪੱਧਰ",
    "dashboard.completeFormForRecommendations":
      "ਵਿਸਤ੍ਰਿਤ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਉੱਨਤ ਖਾਦ ਫਾਰਮ ਪੂਰਾ ਕਰੋ।",
    "dashboard.mlModelPrediction": "ਐਮਐਲ ਮਾਡਲ ਭਵਿੱਖਬਾਣੀ",
    "dashboard.aiPoweredRecommendation":
      "ਤੁਹਾਡੇ ਮਿੱਟੀ ਅਤੇ ਫਸਲ ਡੇਟਾ ਦੇ ਆਧਾਰ ਤੇ ਏਆਈ-ਸੰਚਾਲਿਤ ਖਾਦ ਸਿਫਾਰਸ਼",
    "dashboard.fieldAnalysisSummary": "ਖੇਤ ਵਿਸ਼ਲੇਸ਼ਣ ਸਾਰਾਂਸ਼",
    "dashboard.recommendationsFor": "ਲਈ ਸਿਫਾਰਸ਼ਾਂ",
    "dashboard.cropType": "ਫਸਲ ਦਾ ਕਿਸਮ",
    "dashboard.soil": "ਮਿੱਟੀ",
    "dashboard.soilConditionAnalysis": "ਮਿੱਟੀ ਦੀ ਸਥਿਤੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    "dashboard.detailedSoilAnalysis":
      "ਤੁਹਾਡੀਆਂ ਮਿੱਟੀ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦਾ ਵਿਸਤ੍ਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ",
    "dashboard.currentStatus": "ਮੌਜੂਦਾ ਸਥਿਤੀ",
    "dashboard.phStatus": "pH ਸਥਿਤੀ",
    "dashboard.moistureStatus": "ਨਮੀ ਸਥਿਤੀ",
    "dashboard.nutrientDeficiencies": "ਪੋਸ਼ਕ ਤੱਤਾਂ ਦੀ ਕਮੀ",
    "dashboard.noneDetected": "ਕੋਈ ਨਹੀਂ ਮਿਲਿਆ",
    "dashboard.currentSoilReport": "ਮੌਜੂਦਾ ਮਿੱਟੀ ਰਿਪੋਰਟ",
    "dashboard.soilData": "ਮਿੱਟੀ ਡੇਟਾ",
    "dashboard.phLevel": "pH ਸਤਰ",
    "dashboard.electricalConductivity": "ਬਿਜਲੀ ਚਾਲਕਤਾ",
    "dashboard.soilTemperature": "ਮਿੱਟੀ ਦਾ ਤਾਪਮਾਨ",
    "dashboard.environmentReadings": "ਪਰਿਆਵਰਣ ਰੀਡਿੰਗ",
    "dashboard.sunlight": "ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ",
    "dashboard.sunlightIntensity": "ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ ਤੀਬਰਤਾ",
    "dashboard.connectedToDevice":
      "ਡਿਵਾਈਸ ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ (ਉਤਪਾਦ ਆਈਡੀ: {productId})",
    "dashboard.soilReadings": "ਮਿੱਟੀ ਰੀਡਿੰਗ",
    "dashboard.historicalNutrientLevels24h":
      "ਇਤਿਹਾਸਕ ਪੋਸ਼ਕ ਤੱਤ ਪੱਧਰ (ਪਿਛਲੇ 24 ਘੰਟੇ)",
    "dashboard.currentTemperatureHumiditySunlight":
      "ਮੌਜੂਦਾ ਤਾਪਮਾਨ, ਨਮੀ ਅਤੇ ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ ਪੱਧਰ",
    "dashboard.soilNPKLevelsTrend": "ਮਿੱਟੀ ਐਨਪੀਕੇ ਪੱਧਰ ਰੁਝਾਨ",
    "dashboard.primaryFertilizer": "ਪ੍ਰਾਇਮਰੀ ਖਾਦ",
    "dashboard.secondaryFertilizer": "ਸੈਕੰਡਰੀ ਖਾਦ",
    "dashboard.reason": "ਕਾਰਨ",
    "dashboard.applicationMethod": "ਐਪਲੀਕੇਸ਼ਨ ਵਿਧੀ",
    "dashboard.organicAlternatives": "ਜੈਵਿਕ ਵਿਕਲਪ",
    "dashboard.sustainableOptions":
      "ਲੰਬੇ ਸਮੇਂ ਦੇ ਮਿੱਟੀ ਸਿਹਤ ਸੁਧਾਰ ਲਈ ਟਿਕਾਊ ਵਿਕਲਪ",
    "dashboard.timing": "ਸਮਾਂ",
    "dashboard.applicationTiming": "ਐਪਲੀਕੇਸ਼ਨ ਸਮਾਂ",
    "dashboard.organicOptions": "ਜੈਵਿਕ ਵਿਕਲਪ",
    "dashboard.costEstimate": "ਲਾਗਤ ਅਨੁਮਾਨ",
    "dashboard.totalEstimate": "ਕੁੱਲ ਅਨੁਮਾਨ",
    "dashboard.for": "ਲਈ",
    "dashboard.farmerDashboard": "ਕਿਸਾਨ ਡੈਸ਼ਬੋਰਡ",

    // Dashboard Tools Section
    "dashboard.exploreTools": "ਸਮਾਰਟ ਖੇਤੀ ਸਾਧਨਾਂ ਦੀ ਖੋਜ ਕਰੋ",
    "dashboard.exploreToolsSubtitle":
      "ਏਆਈ-ਸੰਚਾਲਿਤ ਖੇਤੀ ਹੱਲਾਂ ਨਾਲ ਜਾਰੀ ਰੱਖਣ ਲਈ ਇੱਕ ਵਿਸ਼ੇਸ਼ਤਾ ਚੁਣੋ",
    "dashboard.fertilizerRecommendation": "ਖਾਦ ਸਿਫਾਰਸ਼",
    "dashboard.fertilizerRecommendationDesc":
      "ਅਨੁਕੂਲ ਫਸਲ ਵਿਕਾਸ ਲਈ ਐਮਐਲ-ਸੰਚਾਲਿਤ ਖਾਦ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    "dashboard.irrigationPrediction": "ਸਿੰਚਾਈ ਪੂਰਵ-ਅਨੁਮਾਨ",
    "dashboard.irrigationPredictionDesc":
      "ਏਆਈ-ਆਧਾਰਿਤ ਸਿੰਚਾਈ ਪੂਰਵ-ਅਨੁਮਾਨਾਂ ਨਾਲ ਸਮਾਰਟ ਪਾਣੀ ਪ੍ਰਬੰਧਨ",
    "dashboard.cropPrediction": "ਫਸਲ ਪੂਰਵ-ਅਨੁਮਾਨ",
    "dashboard.cropPredictionDesc":
      "ਮਿੱਟੀ ਅਤੇ ਮੌਸਮ ਦੇ ਆਧਾਰ 'ਤੇ ਉਗਾਉਣ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਫਸਲਾਂ ਦੀ ਖੋਜ ਕਰੋ",
    "dashboard.pesticideGuide": "ਕੀਟਨਾਸ਼ਕ ਅਤੇ ਕੀਟਨਾਸ਼ਕ",
    "dashboard.pesticideGuideDesc":
      "ਕੀੜੇ ਅਤੇ ਬਿਮਾਰੀ ਨਿਯੰਤਰਣ ਲਈ ਵਿਆਪਕ ਸੁਰੱਖਿਆ ਗਾਈਡ",
    "dashboard.cropPricePrediction": "ਫਸਲ ਕੀਮਤ ਪੂਰਵ-ਅਨੁਮਾਨ",
    "dashboard.cropPricePredictionDesc":
      "ਰੀਅਲ-ਟਾਈਮ ਬਾਜ਼ਾਰ ਜਾਣਕਾਰੀ ਅਤੇ ਕੀਮਤ ਪੂਰਵ-ਅਨੁਮਾਨ",
    "dashboard.seedVarietyRecommendation": "ਬੀਜ ਕਿਸਮ ਸਿਫਾਰਸ਼",
    "dashboard.seedVarietyRecommendationDesc":
      "ਵੱਧ ਤੋਂ ਵੱਧ ਪੈਦਾਵਾਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਬੀਜ ਕਿਸਮਾਂ ਚੁਣੋ",
    "dashboard.govtSchemes": "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
    "dashboard.govtSchemesDesc": "ਕਿਸਾਨਾਂ ਲਈ ਨਵੀਨਤਮ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਅਤੇ ਸਬਸਿਡੀ",
    "dashboard.illegalFertilizersCheck": "ਗੈਰ-ਕਾਨੂੰਨੀ ਖਾਦ ਜਾਂਚ",
    "dashboard.illegalFertilizersCheckDesc":
      "ਨਕਲੀ ਖਾਦ ਉਤਪਾਦਾਂ ਨੂੰ ਤਸਦੀਕ ਅਤੇ ਜਾਂਚੋ",
    "dashboard.badgeMLBased": "ਐਮਐਲ-ਆਧਾਰਿਤ",
    "dashboard.badgeGuide": "ਗਾਈਡ",
    "dashboard.badgeInfo": "ਜਾਣਕਾਰੀ",
    "dashboard.badgeVerify": "ਤਸਦੀਕ ਕਰੋ",
    "dashboard.badgeLive": "ਲਾਈਵ",

    // Soil Health Status
    "soilHealth.excellent": "ਸ਼ਾਨਦਾਰ",
    "soilHealth.good": "ਚੰਗਾ",
    "soilHealth.poor": "ਖਰਾਬ",
    "soilHealth.veryPoor": "ਬਹੁਤ ਖਰਾਬ",
    "soilHealth.moderate": "ਮੱਧਮ",
    "soilHealth.maintainPractices":
      "ਮੌਜੂਦਾ ਮਿੱਟੀ ਪ੍ਰਬੰਧਨ ਪ੍ਰਥਾਵਾਂ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖੋ",
    "soilHealth.applyBalancedFertilizer":
      "ਪੋਸ਼ਕ ਤੱਤ ਪੱਧਰਾਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਲਈ ਸੰਤੁਲਿਤ ਖਾਦ ਲਗਾਓ",
    "soilHealth.addOrganicMatter":
      "ਤੁਰੰਤ ਜੈਵਿਕ ਪਦਾਰਥ ਜੋੜੋ ਅਤੇ ਪੋਸ਼ਕ ਤੱਤ ਪੱਧਰਾਂ ਨੂੰ ਵਿਵਸਥਿਤ ਕਰੋ",
    "soilHealth.rebuildSoilHealth":
      "ਤੁਰੰਤ ਮਿੱਟੀ ਸਿਹਤ ਦਾ ਪੁਨਰ ਨਿਰਮਾਣ ਕਰੋ - ਖੇਤੀ ਵਿਸ਼ੇਸ਼ਗ੍ਯ ਨਾਲ ਸਲਾਹ ਕਰੋ",

    // Sensor Status
    "sensorStatus.optimal": "ਵਧੀਆ",
    "sensorStatus.warning": "ਚੇਤਾਵਨੀ",
    "sensorStatus.critical": "ਗੰਭੀਰ",
    "sensorStatus.low": "ਘੱਟ",
    "sensorStatus.high": "ਵੱਧ",
    "sensorStatus.needsAttention": "ਧਿਆਨ ਦੀ ਲੋੜ ਹੈ",

    // Units
    "units.mgkg": "mg/kg",
    "units.lux": "lux",
    "units.celsius": "°C",
    "units.percent": "%",
    "units.uscm": "μS/cm",
    "units.acres": "ਏਕੜ",
    "units.hectares": "ਹੈਕਟੇਅਰ",

    // Profile
    "profile.failedToLoad": "ਪ੍ਰੋਫਾਈਲ ਡੇਟਾ ਲੋਡ ਕਰਨ ਵਿੱਚ ਅਸਫਲ",
    "profile.profileUpdated": "ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ",
    "profile.profileUpdateSuccess":
      "ਤੁਹਾਡਾ ਪ੍ਰੋਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ ਹੈ।",
    "profile.failedToUpdate": "ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕਰਨ ਵਿੱਚ ਅਸਫਲ",
    "profile.loadingProfile": "ਪ੍ਰੋਫਾਈਲ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    "profile.editProfile": "ਪ੍ਰੋਫਾਈਲ ਸੰਪਾਦਿਤ ਕਰੋ",
    "profile.updatePersonalInfo":
      "ਆਪਣੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਅਤੇ ਖੇਤ ਦੇ ਵੇਰਵੇ ਅਪਡੇਟ ਕਰੋ",
    "profile.fullName": "ਪੂਰਾ ਨਾਮ",
    "profile.enterFullName": "ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    "profile.email": "ਈਮੇਲ",
    "profile.enterEmail": "ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    "profile.farmLocation": "ਖੇਤ ਦਾ ਸਥਾਨ",
    "profile.cityStateCountry": "ਸ਼ਹਿਰ, ਰਾਜ, ਦੇਸ਼",
    "profile.phoneNumber": "ਫੋਨ ਨੰਬਰ",
    "profile.farmSize": "ਖੇਤ ਦਾ ਆਕਾਰ",
    "profile.unit": "ਯੂਨਿਟ",
    "profile.hectares": "ਹੈਕਟੇਅਰ",
    "profile.acres": "ਏਕੜ",
    "profile.bigha": "ਬੀਘਾ",
    "profile.saving": "ਸੇਵ ਕਰ ਰਿਹਾ ਹੈ...",
    "profile.saveChanges": "ਬਦਲਾਅ ਸੇਵ ਕਰੋ",

    // Forms
    "form.fieldName": "ਖੇਤ ਦਾ ਨਾਮ",
    "form.fieldSize": "ਖੇਤ ਦਾ ਆਕਾਰ",
    "form.cropType": "ਫਸਲ ਦਾ ਕਿਸਮ",
    "form.soilPH": "ਮਿੱਟੀ ਦਾ pH",
    "form.nitrogen": "ਨਾਈਟ੍ਰੋਜਨ (N)",
    "form.phosphorus": "ਫਾਸਫੋਰਸ (P)",
    "form.potassium": "ਪੋਟਾਸ਼ੀਅਮ (K)",
    "form.temperature": "ਤਾਪਮਾਨ",
    "form.humidity": "ਨਮੀ",
    "form.soilMoisture": "ਮਿੱਟੀ ਦੀ ਨਮੀ",
    "form.submit": "ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    "form.generating": "ਸਿਫਾਰਸ਼ਾਂ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾ ਰਹੀਆਂ ਹਨ...",
    "form.reset": "ਫਾਰਮ ਰੀਸੈਟ ਕਰੋ",
    "form.fieldInfo": "ਖੇਤ ਦੀ ਜਾਣਕਾਰੀ",
    "form.cropSoilInfo": "ਫਸਲ ਅਤੇ ਮਿੱਟੀ ਦੀ ਜਾਣਕਾਰੀ",
    "form.environmentalConditions": "ਪਰਿਆਵਰਣੀ ਸਥਿਤੀਆਂ",
    "form.autoFillWithSensorData": "ਸੈਂਸਰ ਡੇਟਾ ਨਾਲ ਆਟੋ-ਭਰੋ",
    "form.sensorDataUnavailable": "ਸੈਂਸਰ ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
    "form.autoFilled": "ਆਟੋ-ਭਰਿਆ ਗਿਆ",
    "form.formFilledWithSensorData":
      "ਫਾਰਮ ਨੂੰ ਰੀਅਲ-ਟਾਈਮ ਸੈਂਸਰ ਡੇਟਾ ਨਾਲ ਭਰ ਦਿੱਤਾ ਗਿਆ ਹੈ",
    "form.noDataAvailable": "ਕੋਈ ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
    "form.realTimeSensorDataNotAvailable": "ਰੀਅਲ-ਟਾਈਮ ਸੈਂਸਰ ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
    "form.sowingDate": "ਬੀਜਣ ਦੀ ਮਿਤੀ",
    "form.selectSowingDate": "ਉਹ ਮਿਤੀ ਚੁਣੋ ਜਦੋਂ ਤੁਸੀਂ ਫਸਲ ਬੀਜੀ/ਲਗਾਈ ਸੀ",
    "form.selectFarmSubtitle":
      "ਆਪਣਾ ਖੇਤ ਚੁਣੋ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਡੇਟਾ ਦੇ ਆਧਾਰ 'ਤੇ ਐਮਐਲ-ਸੰਚਾਲਿਤ ਖਾਦ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    "form.farmSelection": "ਖੇਤ ਚੋਣ",
    "form.selectFarm": "ਖੇਤ ਚੁਣੋ *",
    "form.loadingFarms": "ਖੇਤ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
    "form.chooseFarm": "ਇੱਕ ਖੇਤ ਚੁਣੋ",
    "form.addFarm": "ਖੇਤ ਸ਼ਾਮਲ ਕਰੋ",
    "form.selectedFarmDetails": "ਚੁਣਿਆ ਗਿਆ ਖੇਤ ਵੇਰਵਾ",
    "form.size": "ਆਕਾਰ:",
    "form.crop": "ਫਸਲ:",
    "form.soilChemistry": "ਮਿੱਟੀ ਰਸਾਇਣ ਵਿਗਿਆਨ",
    "form.nitrogenMgKg": "ਨਾਈਟ੍ਰੋਜਨ (mg/kg) *",
    "form.phosphorusMgKg": "ਫਾਸਫੋਰਸ (mg/kg) *",
    "form.potassiumMgKg": "ਪੋਟਾਸ਼ੀਅਮ (mg/kg) *",
    "form.soilPHStar": "ਮਿੱਟੀ pH *",
    "form.soilMoisturePct": "ਮਿੱਟੀ ਦੀ ਨਮੀ (%) *",
    "form.soilTemperatureCelsius": "ਮਿੱਟੀ ਦਾ ਤਾਪਮਾਨ (°C) *",
    "form.electricalConductivity": "ਬਿਜਲੀ ਚਾਲਕਤਾ (μS/cm) *",
    "form.gettingAIRecommendations": "ਏਆਈ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਹੋ ਰਹੀਆਂ ਹਨ...",
    "form.getMLRecommendations": "ਐਮਐਲ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    "form.selectFarmFirst":
      "ਐਮਐਲ-ਸੰਚਾਲਿਤ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਇੱਕ ਖੇਤ ਚੁਣੋ",
    "form.addNewFarm": "ਨਵਾਂ ਖੇਤ ਸ਼ਾਮਲ ਕਰੋ",
    "form.addNewFarmDesc": "ਇੱਕ ਨਵਾਂ ਖੇਤ ਸ਼ਾਮਲ ਕਰੋ - ਸਾਰੇ ਖੇਤਰ ਲੋੜੀਂਦੇ ਹਨ",
    "form.sowingDateStar": "ਬੀਜਣ ਦੀ ਮਿਤੀ *",
    "form.fillAllRequiredFields":
      "⚠️ ਸੇਵ ਕਰਨ ਨੂੰ ਸਮਰੱਥ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਲੋੜੀਂਦੇ ਖੇਤਰ ਭਰੋ",

    // Recommendations Page
    "recommendations.aiPoweredAnalysis": "ਏਆਈ-ਸੰਚਾਲਿਤ ਵਿਸ਼ਲੇਸ਼ਣ",
    "recommendations.enhancedMLLLM": "ਵਧੀਆ ਐਮਐਲ + ਐਲਐਲਐਮ",
    "recommendations.advancedMLDescription":
      "ਲਈ ਵੱਡੇ ਭਾਸ਼ਾ ਮਾਡਲ ਵਾਧੇ ਨਾਲ ਉੱਨਤ ਮਸ਼ੀਨ ਲਰਨਿੰਗ",
    "recommendations.fieldSize": "ਖੇਤ ਦਾ ਆਕਾਰ",
    "recommendations.cropType": "ਫਸਲ ਦਾ ਕਿਸਮ",
    "recommendations.soilAnalysis": "ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    "recommendations.ph": "pH",
    "recommendations.nitrogen": "ਨਾਈਟ੍ਰੋਜਨ",
    "recommendations.phosphorus": "ਫਾਸਫੋਰਸ",
    "recommendations.potassium": "ਪੋਟਾਸ਼ੀਅਮ",
    "recommendations.nutrientDeficienciesDetected":
      "ਪੋਸ਼ਕ ਤੱਤਾਂ ਦੀ ਕਮੀ ਦਾ ਪਤਾ ਲੱਗਾ",
    "recommendations.deficient": "ਕਮੀ",
    "recommendations.nitrogenDefDesc":
      "ਪੌਦਿਆਂ ਦੀ ਵਾਧਾ ਅਤੇ ਕਲੋਰੋਫਿਲ ਉਤਪਾਦਨ ਲਈ ਮਹੱਤਵਪੂਰਨ",
    "recommendations.nitrogenDefImpact":
      "ਰੁਕੀ ਹੋਈ ਵਾਧਾ, ਪੱਤਿਆਂ ਦਾ ਪੀਲਾ ਹੋਣਾ, ਘੱਟ ਪੈਦਾਵਾਰ",
    "recommendations.phosphorusDefDesc":
      "ਜੜ੍ਹਾਂ ਦੇ ਵਿਕਾਸ ਅਤੇ ਊਰਜਾ ਤਬਾਦਲੇ ਲਈ ਜ਼ਰੂਰੀ",
    "recommendations.phosphorusDefImpact":
      "ਮਾੜੀ ਜੜ੍ਹ ਵਾਧਾ, ਦੇਰੀ ਨਾਲ ਪੱਕਣਾ, ਜਾਮਨੀ ਰੰਗ ਦਾ ਰੰਗ",
    "recommendations.potassiumDefDesc":
      "ਪਾਣੀ ਨਿਯਮਨ ਅਤੇ ਬਿਮਾਰੀ ਪ੍ਰਤੀਰੋਧ ਲਈ ਮਹੱਤਵਪੂਰਨ",
    "recommendations.potassiumDefImpact":
      "ਕਮਜ਼ੋਰ ਤਣੇ, ਪੱਤੀ ਸੜਨ, ਘੱਟ ਬਿਮਾਰੀ ਪ੍ਰਤੀਰੋਧ",
    "recommendations.nutrientDefDesc": "ਪੋਸ਼ਕ ਤੱਤ ਦੀ ਕਮੀ ਦਾ ਪਤਾ ਲੱਗਾ",
    "recommendations.nutrientDefImpact": "ਫਸਲ ਸਿਹਤ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਸਕਦਾ ਹੈ",
    "recommendations.impact": "ਪ੍ਰਭਾਵ:",
    "recommendations.soilTestResults": "ਮਿੱਟੀ ਟੈਸਟ ਨਤੀਜੇ",
    "recommendations.soilMoisture": "ਮਿੱਟੀ ਦੀ ਨਮੀ",
    "recommendations.soilTemperature": "ਮਿੱਟੀ ਦਾ ਤਾਪਮਾਨ",
    "recommendations.electricalConductivity": "ਬਿਜਲੀ ਚਾਲਕਤਾ",
    "recommendations.overallSoilHealth": "ਕੁੱਲ ਮਿੱਟੀ ਸਿਹਤ",
    "recommendations.healthScore": "ਸਿਹਤ ਸਕੋਰ",
    "recommendations.recommendations": "ਸਿਫਾਰਸ਼ਾਂ",
    "recommendations.primaryFertilizer": "ਪ੍ਰਾਇਮਰੀ ਖਾਦ",
    "recommendations.secondaryFertilizer": "ਸੈਕੰਡਰੀ ਖਾਦ",
    "recommendations.npkRatio": "ਐਨਪੀਕੇ ਅਨੁਪਾਤ:",
    "recommendations.cost": "ਲਾਗਤ:",
    "recommendations.applicationNotes": "ਐਪਲੀਕੇਸ਼ਨ ਨੋਟਸ:",
    "recommendations.whyThisFertilizer": "ਇਹ ਖਾਦ ਕਿਉਂ:",
    "recommendations.nutrientsProvided": "ਪ੍ਰਦਾਨ ਕੀਤੇ ਗਏ ਪੋਸ਼ਕ ਤੱਤ:",
    "recommendations.howItHelps": "ਇਹ ਕਿਵੇਂ ਮਦਦ ਕਰਦਾ ਹੈ:",
    "recommendations.phAmendment": "pH ਸੋਧ",
    "recommendations.whyThisAmendment": "ਇਹ ਸੋਧ ਕਿਉਂ:",
    "recommendations.nutrientsEnhanced": "ਪੋਸ਼ਕ ਤੱਤ ਵਧਾਏ:",
    "recommendations.organicAlternatives": "ਜੈਵਿਕ ਵਿਕਲਪ",
    "recommendations.sustainableOptionDesc":
      "ਟਿਕਾਊ ਅਤੇ ਵਾਤਾਵਰਣ ਅਨੁਕੂਲ ਖਾਦ ਵਿਕਲਪ",
    "recommendations.provides": "ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:",
    "recommendations.whyUseThis": "ਇਹ ਕਿਉਂ ਵਰਤੋ:",
    "recommendations.noOrganicAlternatives":
      "ਮਾਡਲ ਦੁਆਰਾ ਕੋਈ ਖਾਸ ਜੈਵਿਕ ਵਿਕਲਪ ਸਿਫਾਰਸ਼ ਨਹੀਂ ਕੀਤੇ ਗਏ। ਖਾਦ ਜਾਂ ਵਰਮੀਕੰਪੋਸਟ ਵਰਗੇ ਆਮ ਜੈਵਿਕ ਵਿਕਲਪਾਂ 'ਤੇ ਵਿਚਾਰ ਕਰੋ।",
    "recommendations.applicationTiming": "ਐਪਲੀਕੇਸ਼ਨ ਸਮਾਂ",
    "recommendations.primaryFertilizerApplication": "ਪ੍ਰਾਇਮਰੀ ਖਾਦ ਐਪਲੀਕੇਸ਼ਨ",
    "recommendations.secondaryFertilizerApplication": "ਸੈਕੰਡਰੀ ਖਾਦ ਐਪਲੀਕੇਸ਼ਨ",
    "recommendations.organicOptionsApplication": "ਜੈਵਿਕ ਵਿਕਲਪ ਐਪਲੀਕੇਸ਼ਨ",
    "recommendations.bestPractices": "ਸਭ ਤੋਂ ਵਧੀਆ ਅਭਿਆਸ:",
    "recommendations.importantNotes": "ਮਹੱਤਵਪੂਰਨ ਨੋਟਸ:",
    "recommendations.whyApplyBeforeSowing": "ਬੀਜਣ ਤੋਂ ਪਹਿਲਾਂ ਕਿਉਂ ਲਾਗੂ ਕਰੋ:",
    "recommendations.applyEarlyOrLate":
      "ਸਵੇਰੇ ਜਲਦੀ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਦੇਰ ਨਾਲ ਲਗਾਓ ਜਦੋਂ ਤਾਪਮਾਨ ਠੰਡਾ ਹੋਵੇ",
    "recommendations.ensureMoisture":
      "ਐਪਲੀਕੇਸ਼ਨ ਤੋਂ ਪਹਿਲਾਂ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਮਿੱਟੀ ਵਿੱਚ ਕਾਫ਼ੀ ਨਮੀ ਹੈ",
    "recommendations.mixWithSoil": "ਖਾਦ ਨੂੰ ਮਿੱਟੀ ਨਾਲ ਮਿਲਾਓ; ਸਤਹ 'ਤੇ ਨਾ ਛੱਡੋ",
    "recommendations.splitDoses":
      "ਬਿਹਤਰ ਸਮਾਈ ਲਈ ਐਪਲੀਕੇਸ਼ਨ ਨੂੰ ਕਈ ਛੋਟੀਆਂ ਖੁਰਾਕਾਂ ਵਿੱਚ ਵੰਡੋ",
    "recommendations.avoidOverwatering":
      "ਐਪਲੀਕੇਸ਼ਨ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਜ਼ਿਆਦਾ ਪਾਣੀ ਦੇਣ ਤੋਂ ਬਚੋ",
    "recommendations.applyAsPerLabel":
      "ਲੇਬਲ ਦੇ ਅਨੁਸਾਰ ਪੱਤੇ ਦੇ ਸਪਰੇਅ ਜਾਂ ਮਿੱਟੀ ਵਿੱਚ ਲਗਾਓ",
    "recommendations.dontMixChemicals":
      "ਮਾਹਰ ਸਲਾਹ ਤੋਂ ਬਿਨਾਂ ਹੋਰ ਰਸਾਇਣਾਂ ਨਾਲ ਨਾ ਮਿਲਾਓ",
    "recommendations.waterAfterApplication":
      "ਬਿਹਤਰ ਸਮਾਈ ਲਈ ਲਗਾਉਣ ਤੋਂ ਬਾਅਦ ਫਸਲ ਨੂੰ ਪਾਣੀ ਦਿਓ",
    "recommendations.organicMatterDecompose":
      "ਜੈਵਿਕ ਪਦਾਰਥ ਨੂੰ ਸੜਨ ਅਤੇ ਪੋਸ਼ਕ ਤੱਤ ਛੱਡਣ ਲਈ ਸਮਾਂ ਚਾਹੀਦਾ ਹੈ",
    "recommendations.improveSoilStructure":
      "ਮਿੱਟੀ ਦੀ ਸੰਰਚਨਾ ਅਤੇ ਪਾਣੀ ਧਾਰਨ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਵਿੱਚ ਸੁਧਾਰ ਕਰਦਾ ਹੈ",
    "recommendations.foliarSpray":
      "ਤੇਜ਼ ਨਤੀਜਿਆਂ ਲਈ ਪੱਤੇ ਦੇ ਸਪਰੇਅ ਵਜੋਂ ਲਗਾਇਆ ਜਾ ਸਕਦਾ ਹੈ",
    "recommendations.incorporateWell":
      "ਨਿਰੰਤਰ ਪੋਸ਼ਕ ਤੱਤ ਰਿਲੀਜ਼ ਲਈ ਮਿੱਟੀ ਨਾਲ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਾਓ",
    "recommendations.beneficialMicrobes":
      "ਲਾਭਦਾਇਕ ਮਿੱਟੀ ਸੂਖਮ ਜੀਵ ਗਤੀਵਿਧੀ ਵਧਾਉਂਦਾ ਹੈ",
    "recommendations.idealConditions":
      "ਬੀਜ ਅੰਕੁਰਣ ਅਤੇ ਜੜ੍ਹ ਵਾਧੇ ਲਈ ਆਦਰਸ਼ ਸਥਿਤੀਆਂ ਬਣਾਉਂਦਾ ਹੈ",
    "recommendations.noTimingInfo": "ਕੋਈ ਖਾਸ ਸਮਾਂ ਜਾਣਕਾਰੀ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
    "recommendations.costAnalysis": "ਲਾਗਤ ਵਿਸ਼ਲੇਸ਼ਣ",
    "recommendations.chemicalFertilizers": "ਰਸਾਇਣਕ ਖਾਦਾਂ:",
    "recommendations.primaryFertilizerBracket": "ਪ੍ਰਾਇਮਰੀ ਖਾਦ",
    "recommendations.secondaryFertilizerBracket": "ਸੈਕੰਡਰੀ ਖਾਦ",
    "recommendations.phAmendmentBracket": "pH ਸੋਧ",
    "recommendations.organicAlternativesCost": "ਜੈਵਿਕ ਵਿਕਲਪ:",
    "recommendations.costNotAvailable":
      "ਲਾਗਤ ਅਨੁਮਾਨ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਮੁੱਲ ਨਿਰਧਾਰਨ ਡੇਟਾ ਸਰੋਤ ਜਾਂਚੋ।",
    "recommendations.analysisDetails": "ਵਿਸ਼ਲੇਸ਼ਣ ਵੇਰਵੇ",
    "recommendations.generated": "ਤਿਆਰ ਕੀਤਾ:",
    "recommendations.region": "ਖੇਤਰ:",
    "recommendations.currency": "ਮੁਦਰਾ:",
    "recommendations.priceSource": "ਮੁੱਲ ਸਰੋਤ:",
    "recommendations.default": "ਡਿਫਾਲਟ",
    "recommendations.localRates": "ਸਥਾਨਕ ਦਰਾਂ",
    "recommendations.notSpecified": "ਨਿਰਧਾਰਿਤ ਨਹੀਂ",
    "recommendations.notNeeded": "ਲੋੜੀਂਦਾ ਨਹੀਂ",
    "recommendations.adjustsSoilPH":
      "ਵੱਧ ਤੋਂ ਵੱਧ ਪੋਸ਼ਕ ਤੱਤ ਉਪਲਬਧਤਾ ਅਤੇ ਸਮਾਈ ਲਈ ਮਿੱਟੀ pH ਨੂੰ ਆਦਰਸ਼ ਸੀਮਾ ਵਿੱਚ ਐਡਜਸਟ ਕਰਦਾ ਹੈ",
    "recommendations.soilPHOptimal":
      "ਮਿੱਟੀ pH ਬਹੁਤੇ ਪੋਸ਼ਕ ਤੱਤਾਂ ਲਈ ਆਦਰਸ਼ ਸੀਮਾ (6.0-7.5) ਵਿੱਚ ਹੈ",
    "recommendations.improvesNutrientAvailability":
      "ਮਿੱਟੀ pH ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰਕੇ ਨਾਈਟ੍ਰੋਜਨ, ਫਾਸਫੋਰਸ, ਪੋਟਾਸ਼ੀਅਮ ਅਤੇ ਜ਼ਰੂਰੀ ਸੂਖਮ ਪੋਸ਼ਕ ਤੱਤਾਂ ਦੀ ਉਪਲਬਧਤਾ ਵਿੱਚ ਸੁਧਾਰ ਕਰਦਾ ਹੈ।",
    "recommendations.createsIdealSoilConditions":
      "ਪੋਸ਼ਕ ਤੱਤ ਸਮਾਈ ਲਈ ਆਦਰਸ਼ ਮਿੱਟੀ ਸਥਿਤੀਆਂ ਬਣਾਉਂਦਾ ਹੈ, ਲਾਭਦਾਇਕ ਸੂਖਮ ਜੀਵ ਗਤੀਵਿਧੀ ਵਧਾਉਂਦਾ ਹੈ, ਪੋਸ਼ਕ ਤੱਤ ਲਾਕ-ਅਪ ਘਟਾਉਂਦਾ ਹੈ, ਅਤੇ ਸਮੁੱਚੀ ਖਾਦ ਦਕਸ਼ਤਾ ਵਿੱਚ ਸੁਧਾਰ ਕਰਦਾ ਹੈ।",

    // Common
    "common.loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    "common.error": "ਗਲਤੀ",
    "common.success": "ਸਫਲਤਾ",
    "common.save": "ਸੇਵ ਕਰੋ",
    "common.cancel": "ਰੱਦ ਕਰੋ",
    "common.edit": "ਸੰਪਾਦਿਤ ਕਰੋ",
    "common.delete": "ਹਟਾਓ",
    "common.yes": "ਹਾਂ",
    "common.no": "ਨਹੀਂ",
    "common.back": "ਵਾਪਸ",

    // Language switcher
    "language.english": "English",
    "language.hindi": "हिंदी",
    "language.punjabi": "ਪੰਜਾਬੀ",
    "language.select": "ਭਾਸ਼ਾ ਚੁਣੋ",

    // Auth pages
    "auth.welcomeBack": "ਵਾਪਸੀ ਤੇ ਸਵਾਗਤ ਹੈ",
    "auth.signInAccount": "ਆਪਣੇ AgriCure ਖਾਤੇ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ",
    "auth.email": "ਈਮੇਲ",
    "auth.password": "ਪਾਸਵਰਡ",
    "auth.login": "ਲੌਗਿਨ",
    "auth.backToHome": "ਹੋਮ ਤੇ ਵਾਪਸ ਜਾਓ",
    "auth.loginSuccess": "ਲੌਗਿਨ ਸਫਲ",
    "auth.loginFailed": "ਲੌਗਿਨ ਅਸਫਲ",
    "auth.invalidCredentials": "ਅਵੈਧ ਈਮੇਲ ਜਾਂ ਪਾਸਵਰਡ",
    "auth.signup": "ਸਾਈਨ ਅਪ",
    "auth.createAccount": "ਖਾਤਾ ਬਣਾਓ",
    "auth.signupAccount": "ਆਪਣਾ AgriCure ਖਾਤਾ ਬਣਾਓ",
    "auth.fullName": "ਪੂਰਾ ਨਾਮ",
    "auth.confirmPassword": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    "auth.farmLocation": "ਖੇਤ ਦਾ ਸਥਾਨ",
    "auth.accountCreated": "ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ",
    "auth.welcomeToAgriCure":
      "AgriCure ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ! ਹੁਣ ਤੁਸੀਂ ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰ ਸਕਦੇ ਹੋ।",
    "auth.signupFailed": "ਸਾਈਨ ਅਪ ਅਸਫਲ",
    "auth.failedToCreateAccount": "ਖਾਤਾ ਬਣਾਉਣ ਵਿੱਚ ਅਸਫਲ",
    "auth.passwordsDoNotMatch": "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
    "auth.haveAccount": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    "auth.signupHere": "ਇੱਥੇ ਸਾਈਨ ਅਪ ਕਰੋ",
    "auth.alreadyHaveAccount": "ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਖਾਤਾ ਹੈ?",
    "auth.signInHere": "ਇੱਥੇ ਸਾਈਨ ਇਨ ਕਰੋ",

    // Hero Section
    "hero.title": "ਬਿਹਤਰ ਫਸਲਾਂ ਲਈ",
    "hero.titleHighlight": "ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ",
    "hero.subtitle":
      "ਆਪਣੇ ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ ਦੇ ਆਧਾਰ ਤੇ ਨਿੱਜੀ ਖਾਦ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ। ਡੇਟਾ-ਆਧਾਰਿਤ ਖੇਤੀਬਾੜੀ ਫੈਸਲਿਆਂ ਨਾਲ ਆਪਣੀ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰੋ।",
    "hero.startTrial": "ਟਰਾਇਲ ਸ਼ੁਰੂ ਕਰੋ",
    "hero.viewDemo": "ਡੇਮੋ ਦੇਖੋ",
    "hero.sensorDriven": "ਸੈਂਸਰ-ਆਧਾਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ",
    "hero.yieldIncrease": "ਫਸਲ ਵਾਧਾ",
    "hero.cropTypesSupported": "ਫਸਲ ਦੀਆਂ ਕਿਸਮਾਂ ਸਮਰਥਿਤ",

    // Features Section
    "features.title": "ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਲਈ ਤੁਹਾਨੂੰ ਜੋ ਕੁਝ ਚਾਹੀਦਾ ਹੈ",
    "features.subtitle":
      "ਸਾਡਾ ਵਿਆਪਕ ਪਲੇਟਫਾਰਮ ਤੁਹਾਨੂੰ ਆਪਣੇ ਖੇਤੀਬਾੜੀ ਕਾਰਜਾਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਲਈ ਲੋੜੀਂਦੇ ਸਾਰੇ ਟੂਲ ਅਤੇ ਸੂਝ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
    "features.sensorDriven.title": "ਸੈਂਸਰ-ਆਧਾਰਿਤ ਮਿੱਟੀ ਟੈਸਟਿੰਗ",
    "features.sensorDriven.description":
      "AgriCure ਰੀਅਲ-ਟਾਈਮ ਮਿੱਟੀ ਸਿਹਤ ਡੇਟਾ ਲਈ ਲੈਬ ਰਿਪੋਰਟਾਂ ਦੀ ਬਜਾਏ ਆਨ-ਫੀਲਡ ਸਮਾਰਟ ਸੈਂਸਰ (NPK, pH, ਨਮੀ, ਤਾਪਮਾਨ) ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।",
    "features.aiFertilizer.title": "AI ਖਾਦ ਅਤੇ ਪੋਸ਼ਕ ਤੱਤ ਯੋਜਨਾ",
    "features.aiFertilizer.description":
      "ਲਾਈਵ ਮਿੱਟੀ ਰੀਡਿੰਗ ਅਤੇ ਫਸਲ ਦੀਆਂ ਲੋੜਾਂ ਦੇ ਆਧਾਰ ਤੇ ਸਹੀ ਖਾਦ ਖੁਰਾਕ, ਕਿਸਮ ਅਤੇ ਸਮਾਂ (ਰਸਾਇਣਕ + ਜੈਵਿਕ) ਪ੍ਰਾਪਤ ਕਰੋ।",
    "features.reduceInputCost.title": "ਇਨਪੁੱਟ ਲਾਗਤ ਘਟਾਓ, ਫਸਲ ਨਹੀਂ",
    "features.reduceInputCost.description":
      "ਸਿਰਫ਼ ਉਹੀ ਲਾਗੂ ਕਰਕੇ ਯੂਰੀਆ ਅਤੇ ਡੀਏਪੀ ਦੀ ਜ਼ਿਆਦਾ ਵਰਤੋਂ ਤੋਂ ਬਚੋ ਜੋ ਫਸਲ ਨੂੰ ਅਸਲ ਵਿੱਚ ਲੋੜੀਂਦਾ ਹੈ।",
    "features.cropSpecific.title": "ਫਸਲ-ਵਿਸ਼ੇਸ਼ ਬੁੱਧੀ",
    "features.cropSpecific.description":
      "ਸਿਫਾਰਸ਼ਾਂ ਆਪਣੇ ਆਪ ਫਸਲ ਦੀ ਕਿਸਮ, ਮਿੱਟੀ ਦੀ ਸਥਿਤੀ ਅਤੇ ਵਿਕਾਸ ਪੜਾਅ ਦੇ ਅਨੁਸਾਰ ਅਨੁਕੂਲ ਹੁੰਦੀਆਂ ਹਨ।",
    "features.waterSoilHealth.title": "ਪਾਣੀ ਅਤੇ ਮਿੱਟੀ ਸਿਹਤ ਸੁਰੱਖਿਆ",
    "features.waterSoilHealth.description":
      "ਸੰਤੁਲਿਤ ਪੋਸ਼ਕ ਤੱਤ ਅਨੁਪ੍ਰਯੋਗ ਮਿੱਟੀ ਦੇ ਵਿਗਾੜ ਅਤੇ ਭੂਮੀਗਤ ਪਾਣੀ ਪ੍ਰਦੂਸ਼ਣ ਨੂੰ ਰੋਕਦਾ ਹੈ।",
    "features.farmerFirst.title": "ਕਿਸਾਨ-ਪਹਿਲਾਂ ਮੋਬਾਇਲ ਤਜਰਬਾ",
    "features.farmerFirst.description":
      "ਆਸਾਨ ਸੂਝਾਂ ਦੇ ਨਾਲ ਸਰਲ, ਮੋਬਾਇਲ-ਫ੍ਰੈਂਡਲੀ ਐਪ, ਕਿਸਾਨਾਂ ਲਈ ਬਣਾਇਆ ਗਿਆ—ਗੁੰਝਲਦਾਰ ਡੈਸ਼ਬੋਰਡ ਨਹੀਂ।",
    "features.smallFarmers.title": "ਛੋਟੇ ਕਿਸਾਨਾਂ ਲਈ ਵੀ ਕੰਮ ਕਰਦਾ ਹੈ",
    "features.smallFarmers.description":
      "ਕਿਫਾਇਤੀ, ਵਿਹਾਰਕ ਹੱਲਾਂ ਨਾਲ ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ।",
    "features.dataOwnership.title": "ਡੇਟਾ ਜੋ ਤੁਹਾਡਾ ਹੈ, ਹਮੇਸ਼ਾਂ",
    "features.dataOwnership.description":
      "ਕਿਸਾਨ ਦਾ ਡੇਟਾ ਨਿੱਜੀ, ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਕਦੇ ਵੇਚਿਆ ਨਹੀਂ ਜਾਂਦਾ।",

    // CTA Section
    "cta.title": "ਆਪਣੀ ਖੇਤੀਬਾੜੀ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹੋ?",
    "cta.subtitle":
      "ਹਜ਼ਾਰਾਂ ਕਿਸਾਨਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਜੋ ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਆਪਣੀ ਫਸਲ ਵਧਾਉਣ ਅਤੇ ਲਾਗਤ ਘਟਾਉਣ ਲਈ ਸਮਾਰਟ ਤਕਨਾਲੋਜੀ ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹਨ।",
    "cta.getStarted": "ਮੁਫਤ ਵਿੱਚ ਸ਼ੁਰੂ ਕਰੋ",
    "cta.alreadyMember": "ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਮੈਂਬਰ ਹੋ?",

    // How It Works Section
    "howItWorks.title": "AgriCure ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    "howItWorks.subtitle":
      "ਸੈਂਸਰ ਤੈਨਾਤੀ ਤੋਂ ਕਾਰਵਾਈ ਯੋਗ ਸਿਫਾਰਸ਼ਾਂ ਤੱਕ ਚਾਰ ਸਧਾਰਨ ਕਦਮਾਂ ਵਿੱਚ",
    "howItWorks.step": "ਕਦਮ",
    "howItWorks.collectSamples.title": "ਮਿੱਟੀ ਦੇ ਨਮੂਨੇ ਇਕੱਠੇ ਕਰੋ",
    "howItWorks.collectSamples.description":
      "ਸਮੁੱਚੀ ਮਿੱਟੀ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦਾ ਸਹੀ ਪ੍ਰਤੀਨਿਧਤਾ ਕਰਨ ਲਈ ਖੇਤ ਵਿੱਚ ਕਈ ਸਥਾਨਾਂ ਤੋਂ ਲਗਭਗ 1 ਕਿਲੋ ਮਿੱਟੀ ਇਕੱਠੀ ਕਰੋ।",
    "howItWorks.sensorAnalysis.title": "ਸੈਂਸਰ-ਆਧਾਰਿਤ ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    "howItWorks.sensorAnalysis.description":
      "ਇਕੱਠੀ ਕੀਤੀ ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ AgriCure ਦੇ ਸਮਾਰਟ ਸੈਂਸਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ NPK, pH, ਨਮੀ, ਤਾਪਮਾਨ ਅਤੇ EC ਨੂੰ ਮਾਪਣ ਲਈ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
    "howItWorks.aiProcessing.title": "AI ਅਤੇ ML ਡੇਟਾ ਪ੍ਰੋਸੈਸਿੰਗ",
    "howItWorks.aiProcessing.description":
      "AgriCure ਦੇ AI ਮਾਡਲ ਸਰਵੋਤਮ ਪੋਸ਼ਕ ਤੱਤ ਲੋੜਾਂ ਦੀ ਗਣਨਾ ਕਰਨ ਲਈ ਫਸਲ ਦੀ ਕਿਸਮ, ਮਿੱਟੀ ਦੀ ਸਥਿਤੀ ਅਤੇ ਵਿਕਾਸ ਪੜਾਅ ਦੇ ਨਾਲ ਮਿੱਟੀ ਦੇ ਡੇਟਾ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦੇ ਹਨ।",
    "howItWorks.fertilizerPlan.title": "ਕਾਰਵਾਈ ਯੋਗ ਖਾਦ ਯੋਜਨਾ ਪ੍ਰਾਪਤ ਕਰੋ",
    "howItWorks.fertilizerPlan.description":
      "ਕਿਸਾਨਾਂ ਨੂੰ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਖਾਦ ਕਿਸਮ, ਸਹੀ ਖੁਰਾਕ ਅਤੇ ਅਨੁਪ੍ਰਯੋਗ ਸਮੇਂ ਦੇ ਨਾਲ ਇੱਕ ਸਪਸ਼ਟ ਖਾਦ ਯੋਜਨਾ ਪ੍ਰਾਪਤ ਹੁੰਦੀ ਹੈ।",

    // Footer
    "footer.tagline":
      "ਟਿਕਾਊ ਅਤੇ ਲਾਭਦਾਇਕ ਖੇਤੀਬਾੜੀ ਲਈ ਸਮਾਰਟ ਤਕਨਾਲੋਜੀ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ।",
    "footer.product": "ਉਤਪਾਦ",
    "footer.features": "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    "footer.pricing": "ਕੀਮਤ",
    "footer.api": "API",
    "footer.support": "ਸਹਾਇਤਾ",
    "footer.helpCenter": "ਸਹਾਇਤਾ ਕੇਂਦਰ",
    "footer.contactUs": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    "footer.community": "ਭਾਈਚਾਰਾ",
    "footer.company": "ਕੰਪਨੀ",
    "footer.about": "ਸਾਡੇ ਬਾਰੇ",
    "footer.blog": "ਬਲੌਗ",
    "footer.careers": "ਕਰੀਅਰ",
    "footer.copyright": "© 2025 AgriCure. ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ।",

    // 404 Page
    "notFound.title": "ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ",
    "notFound.description":
      "ਉਫ਼! ਜਿਸ ਪੰਨੇ ਨੂੰ ਤੁਸੀਂ ਖੋਜ ਰਹੇ ਹੋ ਉਹ ਮੌਜੂਦ ਨਹੀਂ ਹੈ ਜਾਂ ਸਥਾਨਾਂਤਰਿਤ ਕਰ ਦਿੱਤਾ ਗਿਆ ਹੈ।",
    "notFound.goBack": "ਵਾਪਸ ਜਾਓ",
    "notFound.returnHome": "ਹੋਮ ਤੇ ਵਾਪਸ ਜਾਓ",

    // ML Model Status
    "mlModel.title": "ਐਮਐਲ ਮਾਡਲ ਸਥਿਤੀ",
    "mlModel.description": "ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਭਵਿੱਖਬਾਣੀ ਮਾਡਲ ਦੀ ਰੀਅਲ-ਟਾਈਮ ਸਥਿਤੀ",
    "mlModel.connected": "ਜੁੜਿਆ ਹੋਇਆ",
    "mlModel.disconnected": "ਡਿਸਕਨੈਕਟ",
    "mlModel.refresh": "ਰਿਫਰੈਸ਼ ਕਰੋ",
    "mlModel.supportedCropTypes": "ਸਮਰਥਿਤ ਫਸਲ ਕਿਸਮਾਂ",
    "mlModel.types": "ਕਿਸਮਾਂ",
    "mlModel.modelType": "ਮਾਡਲ ਕਿਸਮ",
    "mlModel.totalFeatures": "ਕੁੱਲ ਫੀਚਰ",
    "mlModel.targets": "ਲਕਸ਼",
    "mlModel.labelEncoders": "ਲੇਬਲ ਐਨਕੋਡਰ",
    "mlModel.unknown": "ਅਣਜਾਣ",
    "mlModel.usingFallback": "ਫਾਲਬੈਕ ਭਵਿੱਖਬਾਣੀਆਂ ਦੀ ਵਰਤੋਂ",
    "mlModel.fallbackDescription":
      "ਐਮਐਲ ਮਾਡਲ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਭਵਿੱਖਬਾਣੀਆਂ ਘੱਟ ਸ਼ੁੱਧਤਾ ਦੇ ਨਾਲ ਨਿਯਮ-ਆਧਾਰਿਤ ਐਲਗੋਰਿਦਮ ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੀਆਂ ਹਨ।",
    "mlModel.lastChecked": "ਆਖਰੀ ਜਾਂਚ",
    "mlModel.fertilizerRecommendationModel": "ਖਾਦ ਸਿਫਾਰਸ਼ ਮਾਡਲ",
    "mlModel.fertilizerRecommendationDesc":
      "ਪੋਸ਼ਕ ਤੱਤ-ਆਧਾਰਿਤ ਖਾਦ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ",
    "form.farmName": "ਖੇਤ ਦਾ ਨਾਮ",

    // Crop Types
    "crops.tea": "ਚਾਹ",
    "crops.cotton": "ਕਪਾਹ",
    "crops.maize": "ਮੱਕੀ",
    "crops.groundnut": "ਮੂੰਗਫਲੀ",
    "crops.pulses": "ਦਾਲਾਂ",
    "crops.millets": "ਬਾਜਰਾ",
    "crops.rice": "ਚੌਲ",
    "crops.soybean": "ਸੋਇਆਬੀਨ",
    "crops.sugarcane": "ਗੰਨਾ",
    "crops.wheat": "ਕਣਕ",
    "crops.coffee": "ਕੌਫੀ",

    // Soil Analysis Status
    "soilStatus.acidic": "ਐਸਿਡਿਕ",
    "soilStatus.alkaline": "ਖਾਰੀ",
    "soilStatus.optimal": "ਵਧੀਆ",
    "soilStatus.low": "ਘੱਟ",
    "soilStatus.high": "ਵੱਧ",

    // Nutrients
    "nutrients.nitrogen": "ਨਾਈਟ੍ਰੋਜਨ",
    "nutrients.phosphorus": "ਫਾਸਫੋਰਸ",
    "nutrients.potassium": "ਪੋਟਾਸ਼ੀਅਮ",

    // Fertilizer Application
    "fertilizer.standardApplication":
      "ਮਿਆਰੀ ਖੇਤੀਬਾੜੀ ਪ੍ਰਥਾਵਾਂ ਦੇ ਅਨੁਸਾਰ ਲਾਗੂ ਕਰੋ",
    "fertilizer.phosphorusDeficiency":
      "ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ ਵਿੱਚ ਪਛਾਣੀ ਗਈ ਫਾਸਫੋਰਸ ਦੀ ਕਮੀ ਨੂੰ ਦੂਰ ਕਰਦਾ ਹੈ",
    "fertilizer.basalDose": "ਮਿੱਟੀ ਤਿਆਰੀ ਦੌਰਾਨ ਬੇਸਲ ਖੁਰਾਕ ਦੇ ਰੂਪ ਵਿੱਚ ਲਾਗੂ ਕਰੋ",
    "fertilizer.potassiumDeficiency":
      "ਬਿਹਤਰ ਫਲ ਗੁਣਵੱਤਾ ਲਈ ਪੋਟਾਸ਼ੀਅਮ ਦੀ ਕਮੀ ਨੂੰ ਦੂਰ ਕਰਦਾ ਹੈ",
    "fertilizer.fruitDevelopment": "ਫਲ ਵਿਕਾਸ ਪੜਾਅ ਦੌਰਾਨ ਲਾਗੂ ਕਰੋ",
    "fertilizer.organicCompost": "ਜੈਵਿਕ ਖਾਦ",
    "fertilizer.improvesStructure":
      "ਮਿੱਟੀ ਦੀ ਬਣਤਰ ਵਿੱਚ ਸੁਧਾਰ ਕਰਦਾ ਹੈ ਅਤੇ ਹੌਲੀ ਰਿਲੀਜ਼ ਪੋਸ਼ਕ ਤੱਤ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ",
    "fertilizer.incorporateSoil":
      "ਰੋਪਣ ਤੋਂ 2-3 ਹਫਤੇ ਪਹਿਲਾਂ ਲਾਗੂ ਕਰੋ ਅਤੇ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲਾਓ",
    "fertilizer.potassiumSulfate": "ਪੋਟਾਸ਼ੀਅਮ ਸਲਫੇਟ",
    "fertilizer.dap": "ਡੀਏਪੀ",

    // Farm
    "farm.unknownFarm": "ਅਣਜਾਣ ਖੇਤ",

    // Integration Tests
    "integration.backendHealth": "ਬੈਕਐਂਡ ਸਿਹਤ ਜਾਂਚ",
    "integration.mlModelStatus": "ਐਮਐਲ ਮਾਡਲ ਸਥਿਤੀ",
    "integration.basicPrediction": "ਬੁਨਿਆਦੀ ਭਵਿੱਖਬਾਣੀ ਟੈਸਟ",
    "integration.enhancedPrediction": "ਵਿਕਸਿਤ ਭਵਿੱਖਬਾਣੀ ਟੈਸਟ",
    "integration.llmEnhanced": "ਐਲਐਲਐਮ ਵਿਕਸਿਤ ਟੈਸਟ",
    "integration.locationServices": "ਸਥਾਨ ਸੇਵਾ ਟੈਸਟ",
    "integration.soilData": "ਮਿੱਟੀ ਡੇਟਾ ਇੰਟੀਗ੍ਰੇਸ਼ਨ",
    "integration.checkingBackend": "ਜਾਂਚ ਕਰ ਰਹੇ ਹਨ ਕਿ ਬੈਕਐਂਡ ਪਹੁੰਚਯੋਗ ਹੈ...",
    "integration.verifyingML": "ਐਮਐਲ ਮਾਡਲ ਉਪਲਬਧਤਾ ਤਸਦੀਕ ਕਰ ਰਹੇ ਹਨ...",
    "integration.testingBasic": "ਬੁਨਿਆਦੀ ਖਾਦ ਭਵਿੱਖਬਾਣੀ ਦਾ ਟੈਸਟ...",
    "integration.testingEnhanced":
      "ਸਾਰੇ ਆਉਟਪੁੱਟਾਂ ਦੇ ਨਾਲ ਵਿਕਸਿਤ ਭਵਿੱਖਬਾਣੀ ਦਾ ਟੈਸਟ...",
    "integration.testingLLM": "ਐਲਐਲਐਮ-ਵਿਕਸਿਤ ਸਿਫਾਰਸ਼ਾਂ ਦਾ ਟੈਸਟ...",
    "integration.testingLocation": "ਸਥਾਨ-ਆਧਾਰਿਤ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦਾ ਟੈਸਟ...",
    "integration.testingSoilData": "ਮਿੱਟੀ ਡੇਟਾ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦਾ ਟੈਸਟ...",

    // Signup Form
    "signup.productId": "ਉਤਪਾਦ ਆਈਡੀ",
    "signup.enterProductId": "ਆਪਣਾ ਉਤਪਾਦ ਆਈਡੀ ਦਰਜ ਕਰੋ",
    "signup.enterFullName": "ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    "signup.enterEmail": "farmer@example.com",
    "signup.createPassword": "ਪਾਸਵਰਡ ਬਣਾਓ",
    "signup.confirmPassword": "ਆਪਣਾ ਪਾਸਵਰਡ ਪੁਸ਼ਟੀ ਕਰੋ",

    // Footer
    "footer.backendStatus": "ਬੈਕਐਂਡ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਥਿਤੀ",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
