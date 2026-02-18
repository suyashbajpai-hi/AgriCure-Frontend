import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Leaf,
  Droplets,
  Thermometer,
  Activity,
  ArrowRight,
} from "lucide-react";

/* ─── Floating Insight Card ─────────────────────────────────── */
interface InsightCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
  delay: number;
  className?: string;
}

const InsightCard = ({
  icon,
  label,
  value,
  accent,
  delay,
  className = "",
}: InsightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`glass-card rounded-2xl p-4 sm:p-5 min-w-[140px] sm:min-w-[160px] ${className}`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${accent}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide uppercase">
          {label}
        </p>
        <p className="text-base sm:text-lg font-bold text-slate-800 leading-tight mt-0.5">
          {value}
        </p>
      </div>
    </div>
  </motion.div>
);

/* ─── Hero Section ──────────────────────────────────────────── */
const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // Video parallax — moves slower than content for depth
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  // Reduced parallax for mobile
  const videoYMobile = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const videoScaleMobile = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Attempt autoplay on mount (handles restricted autoplay gracefully)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — video stays as poster/first-frame fallback
      });
    }
  }, []);

  const fadeUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden -mt-[84px] sm:-mt-[100px] pt-[100px] sm:pt-[124px]"
    >
      {/* ── Background Video Layer ────────────────────── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{
            y: isMobile ? videoYMobile : videoY,
            scale: isMobile ? videoScaleMobile : videoScale,
          }}
          className="absolute inset-0 will-change-transform"
        >
          {/* Expand video beyond bounds to prevent edge gaps during parallax */}
          <div className="absolute -inset-[10%]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/cropvid.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Gradient overlays — balanced for contrast + video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-white/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-transparent to-white/35 pointer-events-none" />
        {/* Brand tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-transparent to-teal-50/15 pointer-events-none" />
        {/* Radial vignette — softer centre, intact edges */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 25%, rgba(255,255,255,0.5) 65%, rgba(255,255,255,0.75) 100%)' }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Fallback gradient visible while video loads */}
      {!videoLoaded && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5faf6] via-[#edf5ee] to-[#f0f7f1]" />
      )}

      {/* Subtle background orbs (sit above video overlay for extra depth) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/20 to-emerald-50/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-teal-50/20 to-green-100/15 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-4 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* ── Left: Content ──────────────────────────── */}
          <div className="max-w-xl lg:max-w-none">
            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl xs:text-5xl sm:text-[3.5rem] lg:text-6xl xl:text-7xl font-extrabold text-slate-950 leading-[1.08] tracking-tight mb-5 sm:mb-6"
            >
              {t("hero.title")}
              <span className="block text-emerald-600 mt-1">
                {" "}
                {t("hero.titleHighlight")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg sm:text-xl lg:text-[1.35rem] text-slate-900 font-medium leading-[1.75] mb-8 sm:mb-10 max-w-lg"
              style={{ textShadow: '0 1px 8px rgba(255,255,255,0.6)' }}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-grass-700 to-emerald-600 hover:from-grass-800 hover:to-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold group"
              >
                <Link to="/signup" className="inline-flex items-center gap-2">
                  {t("hero.startTrial")}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold"
              >
                <Link to="/video">{t("hero.viewDemo")}</Link>
              </Button>
            </motion.div>


          </div>

          {/* ── Right: Visual / Insight Cards ─────────── */}
          <motion.div
            style={{ scale: visualScale }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Central visual element — Device Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-xl lg:max-w-2xl"
            >
              {/* Image anchor container — cards positioned relative to device silhouette */}
              <div className="relative" style={{ aspectRatio: '4/5' }}>
                {/* Device image — no background frame, floats directly over hero */}
                <div className="absolute inset-0 flex items-center justify-center group">
                  {/* Soft ambient glow behind transparent device */}
                  <div className="absolute inset-[8%] bg-gradient-to-b from-emerald-300/25 via-green-200/20 to-teal-300/15 rounded-full blur-[60px]" />

                  {/* Device image — transparent PNG, floating animation + hover zoom */}
                  <motion.img
                    src="/image.png"
                    alt="AgriCure Device"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-[95%] sm:w-[98%] max-h-[92%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.18)] select-none transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    draggable={false}
                  />
                </div>

                {/* Floating insight cards — anchored to device silhouette */}
                {/* pH — above device top */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 animate-float z-20">
                  <InsightCard
                    icon={<Droplets className="w-[18px] h-[18px] text-emerald-600" />}
                    label="Soil pH"
                    value="7.2"
                    accent="bg-emerald-50"
                    delay={0.5}
                  />
                </div>

                {/* Moisture — right side near sensor area */}
                <div className="absolute top-[32%] -right-2 sm:-right-4 -translate-y-1/2 animate-float z-20">
                  <InsightCard
                    icon={
                      <Droplets className="w-[18px] h-[18px] text-blue-600" />
                    }
                    label="Moisture"
                    value="68%"
                    accent="bg-blue-50"
                    delay={0.9}
                  />
                </div>

                {/* N Levels — lower-right near probe region */}
                <div className="absolute bottom-[8%] sm:bottom-[6%] -right-1 sm:right-[2%] animate-float-delayed z-20">
                  <InsightCard
                    icon={
                      <Activity className="w-[18px] h-[18px] text-teal-600" />
                    }
                    label="N Levels"
                    value="47 mg/kg"
                    accent="bg-teal-50"
                    delay={0.7}
                  />
                </div>

                {/* Temp — lower-left near device base */}
                <div className="absolute bottom-[8%] sm:bottom-[6%] -left-1 sm:left-[2%] animate-float-delayed z-20">
                  <InsightCard
                    icon={
                      <Thermometer className="w-[18px] h-[18px] text-amber-600" />
                    }
                    label="Temp"
                    value="24°C"
                    accent="bg-amber-50"
                    delay={1.1}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Bar ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 lg:mt-8 relative z-20"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-lg shadow-slate-900/5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { value: "100%", label: t("hero.sensorDriven") },
                { value: "25%", label: t("hero.yieldIncrease") },
                { value: "15+", label: t("hero.cropTypesSupported") },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.12 }}
                  className="group"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-600 mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
