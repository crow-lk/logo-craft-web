import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Thank you — your request is received. We will respond within 1 business day.",
    });
    setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    { icon: MessageCircle, label: "WhatsApp / WeChat", value: "+94 77 225 1443", href: "https://wa.me/94772251443" },
    { icon: Phone, label: "Call Us", value: "+94 77 227 5168", href: "tel:+94772275168" },
    { icon: Mail, label: "Email", value: "info@linkcorelanka.com", href: "mailto:info@linkcorelanka.com" },
    { icon: MapPin, label: "Address", value: "121/7 F, Ragama Road, Kadawatha, Sri Lanka 11850", href: "#" },
  ];

  const services = [
    "Sourcing & Procurement",
    "Freight & Logistics Coordination",
    "Customs & Trade Compliance",
    "Documentation / Bank Pack",
    "Importer of Record Advisory",
    "E-commerce / Digital Trade",
    "Not sure (Help me choose)",
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-ocean" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Request Trade Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share a few details so we can guide you faster (HS/permits/routing).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            {...fadeInUp}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mobile / WhatsApp *</label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 XXX XXXX"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Needed *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message / Questions</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your shipment or sourcing requirement..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full group">
                Submit Request
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-primary via-navy-light to-ocean rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 hover:opacity-80 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 border border-border text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-gold-light" />
              <Clock className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h4 className="font-serif font-bold text-xl text-foreground mb-3">Need Urgent Help?</h4>
              <p className="text-muted-foreground mb-6">
                If urgent, please WhatsApp us directly for faster response.
              </p>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="https://wa.me/94772251443" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp an Expert
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
