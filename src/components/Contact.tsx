import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Request Trade Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share a few details so we can guide you faster (HS/permits/routing).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
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
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mobile / WhatsApp *</label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Needed *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full group">
                Submit Request
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <h4 className="font-serif font-bold text-foreground mb-3">Need Urgent Help?</h4>
              <p className="text-muted-foreground mb-6">
                If urgent, please WhatsApp us directly for faster response.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/94772251443" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
