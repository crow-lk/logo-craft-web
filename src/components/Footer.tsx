import { Phone, Mail, MapPin, Globe } from "lucide-react";
import lclLogo from "@/assets/lcl-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Sourcing & Procurement",
    "Freight & Logistics",
    "Customs Compliance",
    "Trade Documentation",
    "IOR Advisory",
    "E-commerce Support",
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={lclLogo} alt="LCL Trade Services" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Sri Lanka's trusted trade solutions partner. Making global trade simpler, faster, and more compliant for Sri Lankan businesses.
            </p>
            <a
              href="https://www.linkcorelanka.com"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              <Globe className="w-4 h-4" />
              www.linkcorelanka.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">+94 77 227 5168</p>
                  <p className="text-primary-foreground/70">+94 11 4223 123</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@linkcorelanka.com" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  info@linkcorelanka.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-foreground/70">
                  121/7 F, Ragama Road,<br />
                  Kadawatha, Sri Lanka 11850
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} Linkcore Lanka (Pvt) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
