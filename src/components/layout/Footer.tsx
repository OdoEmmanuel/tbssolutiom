import { motion } from "framer-motion";
import { Globe, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import Logo from "../icons/Logo";

const solutions = [
  "Custom Software Development",
  "Digital Platforms & Portals",
  "Learning & Training Solutions",
  "Data Analytics & BI",
  "IT Consulting",
  "Managed Services",
];

const company = ["About Us", "Our Team", "Careers", "Blog", "Privacy Policy"];

const industries = [
  "SMEs",
  "Training Providers",
  "Corporate Organizations",
  "NGOs",
  "Professional Bodies",
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            <motion.div
              className="sm:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
                <span className="text-lg sm:text-xl font-bold">
                  TBS Solutions
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
                TBS Solutions is a technology solutions company that helps
                businesses and institutions design, build, and manage digital
                platforms for sustainable growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@tbssolutions.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@tbssolutions.com
                </a>
                <a
                  href="tel:+234XXXXXXXX"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +234 XXX XXX XXXX
                </a>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Globe className="w-4 h-4" />
                  Lagos, Nigeria
                </div>
              </div>
            </motion.div>

            {/* Solutions Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                Solutions
              </h6>
              <ul className="space-y-2 sm:space-y-3 text-primary-foreground/70 text-xs sm:text-sm">
                {solutions.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                Company
              </h6>
              <ul className="space-y-2 sm:space-y-3 text-primary-foreground/70 text-xs sm:text-sm">
                {company.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                Industries
              </h6>
              <ul className="space-y-2 sm:space-y-3 text-primary-foreground/70 text-xs sm:text-sm">
                {industries.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
                  Connect
                </h6>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="size-9 sm:size-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center hover:bg-primary-foreground/10 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="border-t border-primary-foreground/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="section-container py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-primary-foreground/50 text-xs sm:text-sm">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} TBS Solutions Ltd. All rights
              reserved.
            </p>
            <p className="text-center sm:text-right">
              Innovative IT Solutions for Businesses and Institutions
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
