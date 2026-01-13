import { motion } from "framer-motion";
import { Anchor, Building2, Zap, Car, Package, Shirt, BoxesIcon } from "lucide-react";

const industries = [
  { icon: Anchor, name: "Marine & Industrial Projects", color: "from-ocean to-primary" },
  { icon: Building2, name: "Construction & Building Materials", color: "from-primary to-navy-light" },
  { icon: Zap, name: "Electrical & Electronics", color: "from-secondary to-gold-light" },
  { icon: Car, name: "Automotive & Spare Parts", color: "from-navy to-ocean" },
  { icon: Package, name: "FMCG / Food-grade Packaging", color: "from-gold-light to-secondary" },
  { icon: Shirt, name: "Apparel & Textiles", color: "from-primary to-secondary" },
  { icon: BoxesIcon, name: "SME General Trading", color: "from-ocean to-navy-light" },
];

const whyMatters = [
  { text: "Each industry has different HS & permit logic", icon: "📋" },
  { text: "Document mistakes scale faster than shipment volume", icon: "⚠️" },
  { text: "Early planning prevents port-level firefighting", icon: "🎯" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Industries</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Trade Expertise, Tailored by Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with Sri Lankan businesses across diverse industries, adapting HS logic, permit pathways, documentation, and workflows to each sector's realities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <motion.div 
                whileHover={{ rotate: 5 }}
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}
              >
                <industry.icon className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-sm font-medium text-foreground text-center relative z-10">{industry.name}</p>
            </motion.div>
          ))}
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
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5"
                >
                  <span className="text-2xl">{item.icon}</span>
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
