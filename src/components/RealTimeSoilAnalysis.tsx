import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RefreshCw, Wifi, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";
import {
  fetchSoilHistoricalData,
  fetchEnvironmentHistoricalData,
  SoilReadingData,
  EnvironmentReadingData,
} from "@/services/thingSpeakService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRealTimeData } from "@/contexts/RealTimeDataContext";
import { authService } from "@/services/authService";
import {
  getNutrientStatus,
  getPhStatus,
  getSoilMoistureStatus,
  getElectricalConductivityStatus,
  getSoilTemperatureStatus,
  getAmbientTemperatureStatus,
  getHumidityStatus,
  getSunlightIntensityStatus,
} from "@/utils/sensorThresholds";
import {
  calculateNitrogenProgress,
  calculatePhosphorusProgress,
  calculatePotassiumProgress,
  calculatePhProgress,
  calculateSoilMoistureProgress,
  calculateElectricalConductivityProgress,
  calculateSoilTemperatureProgress,
  calculateAmbientTemperatureProgress,
  calculateHumidityProgress,
  calculateSunlightIntensityProgress,
} from "@/utils/sensorProgressCalculator";

const RealTimeSoilAnalysis = () => {
  const { t } = useLanguage();
  const {
    soilData,
    environmentData,
    isLoading: loading,
    isConnected,
    refreshData,
  } = useRealTimeData();

  const [soilHistoricalData, setSoilHistoricalData] = useState<any[]>([]);
  const [environmentHistoricalData, setEnvironmentHistoricalData] = useState<
    any[]
  >([]);
  const [productId, setProductId] = useState<string>("N/A");

  useEffect(() => {
    const { user } = authService.getCurrentUser();
    if (user?.productId) {
      setProductId(user.productId);
    }
  }, []);

  // Helper function to translate sensor status
  const translateStatus = (status: string): string => {
    const statusMap: { [key: string]: string } = {
      OPTIMAL: t("sensorStatus.optimal"),
      WARNING: t("sensorStatus.warning"),
      CRITICAL: t("sensorStatus.critical"),
      LOW: t("sensorStatus.low"),
      HIGH: t("sensorStatus.high"),
    };
    return statusMap[status] || status;
  };

  const loadHistoricalData = async () => {
    try {
      const [soilHistory, envHistory] = await Promise.all([
        fetchSoilHistoricalData(24),
        fetchEnvironmentHistoricalData(24),
      ]);

      if (soilHistory && soilHistory.length > 0) {
        const chartData = soilHistory
          .map((item) => {
            const timestamp = new Date(item.timestamp);
            const now = new Date();
            const hoursAgo = Math.floor(
              (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60),
            );

            return {
              time: hoursAgo <= 0 ? "Now" : `${hoursAgo}h ago`,
              nitrogen: item.nitrogen,
              phosphorus: item.phosphorus,
              potassium: item.potassium,
              pH: item.pH,
              electricalConductivity: item.electricalConductivity,
              soilMoisture: item.soilMoisture,
              soilTemperature: item.soilTemperature,
            };
          })
          .reverse();
        setSoilHistoricalData(chartData);
      }

      if (envHistory && envHistory.length > 0) {
        const chartData = envHistory
          .map((item) => {
            const timestamp = new Date(item.timestamp);
            const now = new Date();
            const hoursAgo = Math.floor(
              (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60),
            );

            return {
              time: hoursAgo <= 0 ? "Now" : `${hoursAgo}h ago`,
              sunlightIntensity: item.sunlightIntensity,
              temperature: item.temperature,
              humidity: item.humidity,
            };
          })
          .reverse();
        setEnvironmentHistoricalData(chartData);
      }
    } catch (error) {
      console.error("Error loading historical data:", error);
    }
  };

  useEffect(() => {
    loadHistoricalData();

    const interval = setInterval(
      () => {
        loadHistoricalData();
      },
      2 * 60 * 1000,
    );
    return () => clearInterval(interval);
  }, []);

  const clampPercent = (percent: number) => Math.max(0, Math.min(100, percent));

  if (loading) {
    return (
      <div className="space-y-3 sm:space-y-4 md:space-y-6 p-2 sm:p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-3 sm:p-6">
                <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 sm:h-8 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 p-2 sm:p-4 md:p-6">
      {/* Connection Status and Refresh */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-gray-50 to-gray-100 p-3 sm:p-4 md:p-5 rounded-lg border shadow-sm">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {isConnected ? (
            <>
              <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-medium text-green-600 break-all">
                {t("dashboard.connectedToDevice").replace(
                  "{productId}",
                  productId,
                )}
              </span>
            </>
          ) : (
            <>
              <WifiOff className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-medium text-red-600">
                {t("dashboard.usingDemoData")}
              </span>
            </>
          )}
        </div>
        <Button
          onClick={() => {
            refreshData();
            loadHistoricalData();
          }}
          variant="outline"
          size="sm"
          disabled={loading}
          className="text-xs sm:text-sm w-full sm:w-auto flex-shrink-0"
        >
          <RefreshCw
            className={`h-3 w-3 xs:h-4 xs:w-4 mr-2 ${
              loading ? "animate-spin" : ""
            }`}
          />
          {t("dashboard.refreshData")}
        </Button>
      </div>

      {/* Soil Readings Section */}
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 px-1">
          {t("dashboard.soilReadings")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {/* Nitrogen */}
          <Card className="hover:shadow-lg transition-all duration-200 bg-white">
            <CardHeader className="pb-2 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
              <CardTitle className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                {t("dashboard.nitrogen")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.nitrogen ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  mg/kg
                </span>
              </div>
              <Progress
                value={calculateNitrogenProgress(soilData?.nitrogen ?? 0)}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getNutrientStatus(
                  "nitrogen",
                  soilData?.nitrogen ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Phosphorus */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.phosphorus")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.phosphorus ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  mg/kg
                </span>
              </div>
              <Progress
                value={calculatePhosphorusProgress(soilData?.phosphorus ?? 0)}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getNutrientStatus(
                  "phosphorus",
                  soilData?.phosphorus ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Potassium */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.potassium")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.potassium ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  mg/kg
                </span>
              </div>
              <Progress
                value={calculatePotassiumProgress(soilData?.potassium ?? 0)}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getNutrientStatus(
                  "potassium",
                  soilData?.potassium ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* pH */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                pH
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.pH ?? 0).toFixed(1)}
              </div>
              <Progress
                value={calculatePhProgress(soilData?.pH ?? 0)}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getPhStatus(soilData?.pH ?? 0);
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Soil Moisture */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.soilMoisture")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.soilMoisture ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  %
                </span>
              </div>
              <Progress
                value={calculateSoilMoistureProgress(
                  soilData?.soilMoisture ?? 0,
                )}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getSoilMoistureStatus(soilData?.soilMoisture ?? 0);
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Electrical Conductivity */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.electricalConductivity")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.electricalConductivity ?? 0).toFixed(2)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  μS/cm
                </span>
              </div>
              <Progress
                value={calculateElectricalConductivityProgress(
                  soilData?.electricalConductivity ?? 0,
                )}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getElectricalConductivityStatus(
                  soilData?.electricalConductivity ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Soil Temperature */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.soilTemperature")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(soilData?.soilTemperature ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  °C
                </span>
              </div>
              <Progress
                value={calculateSoilTemperatureProgress(
                  soilData?.soilTemperature ?? 0,
                )}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getSoilTemperatureStatus(
                  soilData?.soilTemperature ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Last Updated - Soil */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.lastUpdated")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-sm font-medium text-gray-900">
                {soilData
                  ? new Date(soilData.timestamp).toLocaleTimeString()
                  : "N/A"}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {soilData
                  ? new Date(soilData.timestamp).toLocaleDateString()
                  : "N/A"}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Environment Readings Section */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {t("dashboard.environmentReadings")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {/* Sunlight Intensity */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.sunlightIntensity")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(environmentData?.sunlightIntensity ?? 0).toFixed(0)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  lux
                </span>
              </div>
              <Progress
                value={calculateSunlightIntensityProgress(
                  environmentData?.sunlightIntensity ?? 0,
                )}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getSunlightIntensityStatus(
                  environmentData?.sunlightIntensity ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Temperature */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.temperature")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(environmentData?.temperature ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  °C
                </span>
              </div>
              <Progress
                value={calculateAmbientTemperatureProgress(
                  environmentData?.temperature ?? 0,
                )}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getAmbientTemperatureStatus(
                  environmentData?.temperature ?? 0,
                );
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Humidity */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.humidity")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-base xs:text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                {(environmentData?.humidity ?? 0).toFixed(1)}
                <span className="text-xs xs:text-sm font-normal text-gray-500 ml-1">
                  %
                </span>
              </div>
              <Progress
                value={calculateHumidityProgress(
                  environmentData?.humidity ?? 0,
                )}
                className="h-1.5 xs:h-2 mb-2"
              />
              {(() => {
                const s = getHumidityStatus(environmentData?.humidity ?? 0);
                return (
                  <div className={`text-xs font-medium ${s.color}`}>
                    {translateStatus(s.status)}
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Last Updated - Environment */}
          <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
            <CardHeader className="pb-2 px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 sm:pt-6">
              <CardTitle className="text-xs xs:text-sm font-medium text-gray-700">
                {t("dashboard.lastUpdated")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6">
              <div className="text-sm font-medium text-gray-900">
                {environmentData
                  ? new Date(environmentData.timestamp).toLocaleTimeString()
                  : "N/A"}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {environmentData
                  ? new Date(environmentData.timestamp).toLocaleDateString()
                  : "N/A"}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {/* Soil NPK Levels Chart */}
        <Card className="overflow-hidden">
          <CardHeader className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            <CardTitle className="text-base sm:text-lg md:text-xl">
              {t("dashboard.soilNPKLevelsTrend")}
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm md:text-base">
              {t("dashboard.historicalNutrientLevels24h")}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={soilHistoricalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="nitrogen"
                  stroke="#22c55e"
                  strokeWidth={2}
                  name={t("dashboard.nitrogen")}
                />
                <Line
                  type="monotone"
                  dataKey="phosphorus"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name={t("dashboard.phosphorus")}
                />
                <Line
                  type="monotone"
                  dataKey="potassium"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name={t("dashboard.potassium")}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Environment Pie Chart */}
        <Card>
          <CardHeader className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            <CardTitle className="text-base sm:text-lg md:text-xl">
              {t("dashboard.environmentalConditions")}
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm md:text-base">
              {t("dashboard.currentTemperatureHumiditySunlight")}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2 sm:px-4 md:px-6">
            {(() => {
              // Prepare pie chart data with translations
              const pieChartData = [
                {
                  name: t("dashboard.temperature"),
                  value: environmentData?.temperature ?? 0,
                  fill: "#ef4444",
                  unit: "°C",
                },
                {
                  name: t("dashboard.humidity"),
                  value: environmentData?.humidity ?? 0,
                  fill: "#06b6d4",
                  unit: "%",
                },
                {
                  name: t("dashboard.sunlight"),
                  value: Math.round(
                    (environmentData?.sunlightIntensity ?? 0) / 100,
                  ),
                  fill: "#fbbf24",
                  unit: "×100 lux",
                },
              ];

              return (
                <>
                  {/* Mobile View - Stacked Layout */}
                  <div className="block md:hidden">
                    <div className="space-y-4">
                      {/* Mini Pie Chart for Mobile */}
                      <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={false}
                            outerRadius={60}
                            dataKey="value"
                          >
                            <Cell fill="#ef4444" />
                            <Cell fill="#06b6d4" />
                            <Cell fill="#fbbf24" />
                          </Pie>
                          <Tooltip
                            formatter={(
                              value: number,
                              name: string,
                              props: any,
                            ) => [
                              `${value.toFixed(1)}${props.payload.unit}`,
                              name,
                            ]}
                          />
                          <Legend
                            wrapperStyle={{ fontSize: "12px" }}
                            iconSize={10}
                          />
                        </PieChart>
                      </ResponsiveContainer>

                      {/* Value Cards for Mobile */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                          <div className="text-xs text-red-600 font-medium">
                            {t("dashboard.temp")}
                          </div>
                          <div className="text-sm font-bold text-red-700">
                            {(environmentData?.temperature ?? 0).toFixed(1)}°C
                          </div>
                        </div>
                        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-2 text-center">
                          <div className="text-xs text-cyan-600 font-medium">
                            {t("dashboard.humidity")}
                          </div>
                          <div className="text-sm font-bold text-cyan-700">
                            {(environmentData?.humidity ?? 0).toFixed(1)}%
                          </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center">
                          <div className="text-xs text-yellow-600 font-medium">
                            {t("dashboard.sunlight")}
                          </div>
                          <div className="text-sm font-bold text-yellow-700">
                            {Math.round(
                              (environmentData?.sunlightIntensity ?? 0) / 100,
                            )}
                            <span className="text-xs">×100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tablet View */}
                  <div className="hidden md:block lg:hidden">
                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, value, unit }) =>
                            `${name}: ${value.toFixed(1)}${unit}`
                          }
                          outerRadius={70}
                          dataKey="value"
                        >
                          <Cell fill="#ef4444" />
                          <Cell fill="#06b6d4" />
                          <Cell fill="#fbbf24" />
                        </Pie>
                        <Tooltip
                          formatter={(
                            value: number,
                            name: string,
                            props: any,
                          ) => [
                            `${value.toFixed(1)}${props.payload.unit}`,
                            name,
                          ]}
                        />
                        <Legend wrapperStyle={{ fontSize: "13px" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Desktop/PC View */}
                  <div className="hidden lg:block">
                    <ResponsiveContainer width="100%" height={320}>
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, value, unit }) =>
                            `${name}: ${value.toFixed(1)}${unit}`
                          }
                          outerRadius={90}
                          dataKey="value"
                        >
                          <Cell fill="#ef4444" />
                          <Cell fill="#06b6d4" />
                          <Cell fill="#fbbf24" />
                        </Pie>
                        <Tooltip
                          formatter={(
                            value: number,
                            name: string,
                            props: any,
                          ) => [
                            `${value.toFixed(1)}${props.payload.unit}`,
                            name,
                          ]}
                        />
                        <Legend wrapperStyle={{ fontSize: "14px" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </>
              );
            })()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RealTimeSoilAnalysis;
