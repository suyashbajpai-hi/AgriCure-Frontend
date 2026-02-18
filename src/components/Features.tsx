import {
  Radio,
  Brain,
  PiggyBank,
  Sprout,
  Smartphone,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const features = [
    {
      icon: Radio,
      title: t("features.sensorDriven.title"),
      description: t("features.sensorDriven.description"),
      accent: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
      border: "hover:border-emerald-200/80",
    },
    {
      icon: Brain,
      title: t("features.aiFertilizer.title"),
      description: t("features.aiFertilizer.description"),
      accent: "from-teal-500/10 to-cyan-500/10",
      iconColor: "text-teal-600",
      border: "hover:border-teal-200/80",
    },
    {
      icon: PiggyBank,
      title: t("features.reduceInputCost.title"),
      description: t("features.reduceInputCost.description"),
      accent: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
      border: "hover:border-green-200/80",
    },
    {
      icon: Sprout,
      title: t("features.cropSpecific.title"),
      description: t("features.cropSpecific.description"),
      accent: "from-grass-500/10 to-green-500/10",
      iconColor: "text-grass-600",
      border: "hover:border-grass-200/80",
    },
    {
      icon: Smartphone,
      title: t("features.farmerFirst.title"),
      description: t("features.farmerFirst.description"),
      accent: "from-slate-400/10 to-slate-500/10",
      iconColor: "text-slate-600",
      border: "hover:border-slate-200/80",
    },
    {
      icon: Heart,
      title: t("features.smallFarmers.title"),
      description: t("features.smallFarmers.description"),
      accent: "from-rose-400/10 to-pink-400/10",
      iconColor: "text-rose-500",
      border: "hover:border-rose-200/80",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">
              Why AgriCure
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight tracking-tight"
          >
            {t("features.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            {t("features.subtitle")}
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`group relative h-full rounded-2xl border border-slate-100/80 bg-white/70 backdrop-blur-sm p-6 sm:p-8 transition-all duration-400 hover:shadow-premium-lg hover:-translate-y-1 ${feature.border}`}
                >
                  {/* Subtle gradient bg on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.accent} mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2.5 leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
