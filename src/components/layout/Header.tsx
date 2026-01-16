import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../icons/Logo";
import { Button } from "../ui/button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#product", label: "Product" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <Logo />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-primary">
                TBS Solutions
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg cursor-pointer">
                  Get Started
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[320px] bg-card shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Logo className="w-7 h-7 text-primary" />
                    <span className="text-lg font-bold text-primary">TBS</span>
                  </div>
                  <button
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <a
                          href={link.href}
                          className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="p-4 border-t border-border space-y-3">
                  <Button
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold"
                    onClick={toggleMobileMenu}
                  >
                    Get Started
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    info@tbssolutions.com
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
