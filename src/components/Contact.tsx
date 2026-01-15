import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import portImage from "@/assets/port-containers.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const Contact = () => {
  const contactInfo = [
    { icon: MessageCircle, label: "WhatsApp", value: "+94 77 225 1443", href: "https://wa.me/94772251443" },
    { icon: Phone, label: "Call Us", value: "+94 77 227 5168", href: "tel:+94772275168" },
    { icon: Mail, label: "Email", value: "info@linkcorelk.com", href: "mailto:info@linkcorelk.com" },
    { icon: MapPin, label: "Address", value: "32/1/1, Eldeniya Chuch Rd. Kadawata.", href: "#" },
  ];

  const benefits = [
    "Free initial consultation",
    "Response within 1 business day",
    "Expert trade guidance",
    "No hidden fees",
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Full-width image background */}
      <div className="absolute inset-0">
        <img 
          src={portImage} 
          alt="Container port" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/80" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <motion.div {...fadeInUp}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Simplify Your Trade?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Tell us about your shipment or sourcing requirement — we'll design the right trade support model for your business.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-white/90 text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" className="group" asChild>
                <a href="https://wa.me/94772251443" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:info@linkcorelk.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Contact cards */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-secondary/30 hover:bg-white/15 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/40 ml-auto group-hover:text-secondary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
