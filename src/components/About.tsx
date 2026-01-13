import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Linkcore Lanka (LCL) is a Sri Lanka–based trade services and coordination firm built to help SMEs import, export, and source internationally with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We operate as a neutral, compliance-first trade control layer, supporting clients from RFQ and purchase order stage through shipment execution and audit-ready closure. Our role is to design, structure, and coordinate international trade—so shipments move with clarity, predictability, and control.
            </p>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border-l-4 border-secondary">
              <p className="text-sm text-muted-foreground italic">
                "We work alongside licensed clearing agents, freight forwarders, banks, and regulators—ensuring that decisions are made early and risks are managed before cargo reaches the port."
              </p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamImage} 
                alt="LCL Trade Services Team" 
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
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
            className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
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

        {/* What we stand for */}
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            {...fadeInUp}
            className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-12"
          >
            What We Stand For
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Compliance Before Cargo",
                desc: "We address HS classification, permits, valuation, and documentation before goods move.",
                gradient: "from-primary to-navy-light",
              },
              {
                title: "Neutral & Independent",
                desc: "We don't sell freight space or earn hidden commissions. Our advice is unbiased.",
                gradient: "from-navy-light to-ocean",
              },
              {
                title: "Built for Sri Lankan SMEs",
                desc: "Enterprise-level trade discipline in a practical, scalable, cost-effective model.",
                gradient: "from-ocean to-primary",
              },
              {
                title: "Process-Driven Execution",
                desc: "Every shipment follows a structured workflow with clear roles and accountability.",
                gradient: "from-secondary to-gold-light",
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                <h4 className="font-semibold text-foreground mb-3 mt-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
