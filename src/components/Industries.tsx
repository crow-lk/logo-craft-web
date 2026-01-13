import { motion } from "framer-motion";
import { Anchor, Building2, Zap, Car, Package, Shirt, BoxesIcon, FileText, AlertTriangle, Target } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const industries = [
  { icon: Anchor, name: "Marine & Industrial", color: "from-ocean to-primary" },
  { icon: Building2, name: "Construction", color: "from-primary to-navy-light" },
  { icon: Zap, name: "Electronics", color: "from-secondary to-gold-light" },
  { icon: Car, name: "Automotive", color: "from-navy to-ocean" },
  { icon: Package, name: "FMCG", color: "from-gold-light to-secondary" },
  { icon: Shirt, name: "Apparel", color: "from-primary to-secondary" },
  { icon: BoxesIcon, name: "General Trading", color: "from-ocean to-navy-light" },
];

const whyMatters = [
  { text: "Each industry has different HS & permit logic", icon: FileText },
  { text: "Document mistakes scale faster than shipment volume", icon: AlertTriangle },
  { text: "Early planning prevents port-level firefighting", icon: Target },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div 
            {...fadeInUp}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={warehouseImage} 
                alt="Warehouse operations" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent" />
            </div>
            {/* Stats overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
            >
              <p className="text-4xl font-serif font-bold text-primary mb-1">7+</p>
              <p className="text-sm text-muted-foreground">Industries Served</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Industries</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Trade Expertise, Tailored by Industry
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We work with Sri Lankan businesses across diverse industries, adapting HS logic, permit pathways, documentation, and workflows to each sector's unique requirements.
            </p>

            {/* Industry pills */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-2 bg-card px-4 py-3 rounded-full border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-default"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                    <industry.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why it matters */}
        <motion.div 
          {...fadeInUp}
          className="bg-gradient-to-r from-primary via-navy-light to-ocean rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-10">
              Why Industry-Specific Support Matters
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {whyMatters.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5"
                >
                  <item.icon className="w-7 h-7 text-secondary" />
                  <p className="text-white/90 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
