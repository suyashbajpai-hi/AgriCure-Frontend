import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { label: t("nav.home"), id: "home" },
    { label: t("nav.features"), id: "features" },
    { label: t("nav.howItWorks"), id: "how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.04)] border-b border-slate-100/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center h-[84px] sm:h-[100px] relative">
          {/* Logo — left zone */}
          <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <img
              src="/logo.png"
              alt="AgriCure Logo"
              className="h-12 sm:h-14 w-12 sm:w-14 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-[28px] sm:text-[32px] font-extrabold tracking-tight text-emerald-700 leading-tight">
                AgriCure
              </span>
              <span className="text-[12.5px] sm:text-[14.5px] font-semibold text-slate-600 tracking-[0.03em] leading-tight mt-0.5">
                understand soil… grow better
              </span>
            </div>
          </Link>
          </div>

          {/* Desktop nav links — absolute center */}
          <div className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-7 py-3 text-lg font-semibold text-slate-700 hover:text-emerald-700 transition-colors duration-200 rounded-xl hover:bg-emerald-50/60"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop right side — pushed to right */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <LanguageSwitcher />
            <Button
              asChild
              variant="ghost"
              size="default"
              className="text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 text-[17px] font-semibold px-6 py-2.5 border border-slate-200 rounded-xl h-auto"
            >
              <Link to="/login">{t("nav.login")}</Link>
            </Button>
            <Button
              asChild
              size="default"
              className="bg-gradient-to-r from-grass-700 to-emerald-600 hover:from-grass-800 hover:to-emerald-700 text-white shadow-sm hover:shadow-md transition-all duration-200 text-[17px] font-semibold px-7 py-2.5 rounded-xl h-auto"
            >
              <Link to="/signup">{t("nav.signup")}</Link>
            </Button>
          </div>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-5 py-5 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="flex-1 text-base font-semibold border-slate-200 rounded-xl h-auto py-2.5"
                >
                  <Link to="/login">{t("nav.login")}</Link>
                </Button>
                <Button
                  asChild
                  size="default"
                  className="flex-1 bg-gradient-to-r from-grass-700 to-emerald-600 text-white text-base font-semibold rounded-xl h-auto py-2.5"
                >
                  <Link to="/signup">{t("nav.signup")}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
