import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── Immersive Parallax Background ───────────────────────── */
const ImmersiveBackground = () => {
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base gradient — sits behind the Hero video */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbf8] via-[#f1f7f2] to-[#f5faf6]" />

        {/* Subtle textured overlay */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Atmospheric gradient orbs */}
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/20 to-teal-100/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-green-100/15 to-emerald-50/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[30%] w-[450px] h-[450px] bg-gradient-to-tl from-teal-50/15 to-green-100/8 rounded-full blur-[90px]" />
      </motion.div>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/60" />
    </div>
  );
};

/* ─── Premium CTA Section ─────────────────────────────────── */
const CTASection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-600/6 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white mb-5 sm:mb-6 leading-tight tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base px-8 py-6 rounded-xl font-semibold group"
            >
              <Link to="/signup" className="inline-flex items-center gap-2">
                {t("cta.getStarted")}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-emerald-400/60 bg-emerald-500/15 text-white hover:bg-emerald-400/25 hover:border-emerald-300/80 backdrop-blur-md transition-all duration-300 text-sm sm:text-base px-8 py-6 rounded-xl font-semibold shadow-[0_0_20px_rgba(16,185,129,0.12)]"
            >
              <Link to="/login">{t("cta.alreadyMember")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Index Page ──────────────────────────────────────────── */
const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ImmersiveBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
