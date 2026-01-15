import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import lclLogo from "@/assets/lcl-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-card/98 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      {/* Top bar */}
      <motion.div 
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className={`bg-primary text-white py-2 px-4 hidden md:block transition-all duration-300 ${
          isScrolled ? "py-1.5" : "py-2"
        }`}
      >
        <div className="container mx-auto flex justify-end items-center gap-6 text-sm">
          <a href="tel:+94772275168" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="w-3 h-3" />
            +94 77 227 5168
          </a>
          <a href="mailto:info@linkcorelk.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="w-3 h-3" />
            info@linkcorelk.com
          </a>
        </div>
      </motion.div>

      {/* Main nav */}
      <div className={`container mx-auto px-4 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={lclLogo} 
              alt="LCL Trade Services" 
              className={`transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`} 
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`font-medium transition-colors relative group ${
                  isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button variant="gold" size="lg">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button variant="gold" className="w-full mt-2">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
