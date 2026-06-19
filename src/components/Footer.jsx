import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "হোম", href: "/" },
    { label: "পরিচিতি", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <footer className="border-t-4 border-brand-primary bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex rounded-3xl bg-white px-4 py-3 shadow-lg">
                <Logo size="sm" />
              </div>
            </div>
            <p className="mt-4 text-sm text-brand-secondary/80 max-w-xs mx-auto md:mx-0">
              Bangladesh Islami Chhatrashibir
              <br />
              Chattogram City North
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-bold uppercase text-brand-secondary">
              লিঙ্ক
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-bold uppercase text-brand-secondary">
              যোগাযোগ করুন
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-secondary">📞</span>
                  <div>
                    <a
                      href="tel:0123456789"
                      className="mt-1 block transition-colors hover:text-white"
                    >
                      01882137803
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-8">
          {/* Bottom Copyright */}
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-gray-400">
              Copyright © {currentYear} Shibir, Chattogram City North. সকল
              অধিকার সংরক্ষিত
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <a
                href="#"
                className="transition-colors hover:text-brand-secondary"
              >
                গোপনীয়তা নীতি
              </a>
              <a
                href="#"
                className="transition-colors hover:text-brand-secondary"
              >
                শর্তাবলী
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
