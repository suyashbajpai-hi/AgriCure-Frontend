import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const linkColumns = [
    {
      title: t("footer.product"),
      links: [
        { label: t("footer.features"), href: "#features" },
        { label: t("footer.pricing"), href: "#" },
        { label: t("footer.api"), href: "#" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { label: t("footer.helpCenter"), href: "#" },
        { label: t("footer.contactUs"), href: "#" },
        { label: t("footer.community"), href: "#" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), href: "#" },
        { label: t("footer.blog"), href: "#" },
        { label: t("footer.careers"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Subtle decorative orb */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 mb-4 lg:mb-0">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-grass-600 rounded-xl shadow-emerald-glow transition-shadow duration-300 group-hover:shadow-lg">
                <img
                  src="/logo.png"
                  alt="AgriCure Logo"
                  className="h-7 sm:h-8 w-7 sm:w-8"
                />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-emerald-400">
                AgriCure
              </span>
            </Link>
            <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm pr-4">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Link columns */}
          {linkColumns.map((col, i) => (
            <div key={i} className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-slate-200 tracking-wide uppercase mb-4 sm:mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 mt-12 sm:mt-14 pt-7 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            {t("footer.copyright")}
          </p>
          <Link
            to="/integration-test"
            className="text-xs sm:text-sm text-slate-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {t("footer.backendStatus")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
