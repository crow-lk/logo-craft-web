import { motion } from "framer-motion";
import { HelpCircle, Calendar, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const ServicesCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tell us about your shipment or sourcing requirement — we'll design the right trade support model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gold" size="xl" className="group" asChild>
              <a href="#contact">
                <Calendar className="mr-2 w-5 h-5" />
                Book a Free Trade Health Check
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/5" asChild>
              <a href="https://wa.me/94772251443" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp an Expert
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:info@linkcorelk.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-secondary" />
              <span>info@linkcorelk.com</span>
            </a>
            <a 
              href="https://wa.me/94772251443" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <span>+94 77 225 1443</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
