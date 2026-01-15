import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";
import heroShippingImage from "@/assets/hero-shipping.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* About intro with image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div {...fadeInUp}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              About Linkcore Lanka
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Linkcore Lanka (LCL) is a Sri Lanka–based trade services and coordination firm built to help SMEs import, export, and source internationally with confidence.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We operate as a neutral, compliance-first trade control layer, supporting clients from RFQ and purchase order stage through shipment execution and audit-ready closure. Our role is to design, structure, and coordinate international trade so shipments move with clarity, predictability, and control.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Linkcore Lanka is not a freight forwarder or a clearing agent. Instead, we work alongside licensed clearing agents, freight forwarders, banks, and regulators ensuring that decisions are made early, documents are aligned, and risks are managed before cargo reaches the port.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroShippingImage} 
                alt="LCL Trade Services" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl p-8 lg:p-10 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the most trusted trade enablement partner for Sri Lankan Businesses, known for disciplined processes, regulatory clarity, and predictable trade outcomes.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl p-8 lg:p-10 shadow-lg border border-border hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To simplify and de-risk international trade for Sri Lankan SMEs by:
            </p>
            <ul className="space-y-2">
              {[
                "Designing compliance-first trade structures",
                "Providing independent, unbiased trade advice",
                "Bringing enterprise-grade discipline to SMEs",
                "Coordinating all trade partners seamlessly",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;