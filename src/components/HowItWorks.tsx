import { Hand, ScanLine, Brain, FileCheck, LucideIcon } from "lucide-react";
import React, { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  accent: string;
  iconBg: string;
}

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const steps: Step[] = [
    {
      icon: Hand,
      number: "01",
      title: t("howItWorks.collectSamples.title"),
      description: t("howItWorks.collectSamples.description"),
      accent: "from-emerald-500 to-green-600",
      iconBg: "from-emerald-500/10 to-green-500/10",
    },
    {
      icon: ScanLine,
      number: "02",
      title: t("howItWorks.sensorAnalysis.title"),
      description: t("howItWorks.sensorAnalysis.description"),
      accent: "from-teal-500 to-cyan-600",
      iconBg: "from-teal-500/10 to-cyan-500/10",
    },
    {
      icon: Brain,
      number: "03",
      title: t("howItWorks.aiProcessing.title"),
      description: t("howItWorks.aiProcessing.description"),
      accent: "from-grass-600 to-emerald-600",
      iconBg: "from-grass-500/10 to-emerald-500/10",
    },
    {
      icon: FileCheck,
      number: "04",
      title: t("howItWorks.fertilizerPlan.title"),
      description: t("howItWorks.fertilizerPlan.description"),
      accent: "from-violet-500 to-purple-600",
      iconBg: "from-violet-500/10 to-purple-500/10",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white" />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-gradient-to-br from-emerald-100/20 to-teal-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-green-100/20 to-emerald-50/10 rounded-full blur-3xl" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-600 mb-4">
              {t("howItWorks.step")} by {t("howItWorks.step")}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight tracking-tight"
          >
            {t("howItWorks.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed"
          >
            {t("howItWorks.subtitle")}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-40px)] z-0">
                  <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 relative">
                    {/* Arrow dot */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                </div>
              )}

              <div className="relative z-10 text-center px-2">
                {/* Step number badge */}
                <motion.div
                  className="inline-block mb-5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div
                    className={`relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.iconBg} transition-all duration-300 group-hover:shadow-lg`}
                  >
                    {/* Gradient ring */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    {React.createElement(step.icon, {
                      className:
                        "w-8 h-8 sm:w-10 sm:h-10 text-slate-700 relative z-10",
                      strokeWidth: 1.6,
                    })}
                    {/* Step number */}
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br ${step.accent} text-white text-xs font-bold flex items-center justify-center shadow-md`}
                    >
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="font-semibold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
