import { motion } from "framer-motion";
import { Globe, Building2, MapPin, Landmark } from "lucide-react";
import globalTradeImage from "@/assets/global-trade-network.webp";

const regions = [
  { name: "Asia", icon: Globe, countries: "China, India, Japan, Vietnam", color: "from-primary to-ocean" },
  { name: "Europe", icon: Building2, countries: "UK, Germany, Netherlands", color: "from-secondary to-gold-light" },
  { name: "North America", icon: MapPin, countries: "USA, Canada, Mexico", color: "from-ocean to-primary" },
  { name: "Middle East", icon: Landmark, countries: "UAE, Saudi Arabia, Qatar", color: "from-navy-light to-primary" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const GlobalReach = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            {...fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={globalTradeImage} 
                alt="Global trade network" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
            </div>
            {/* Decorative elements */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-28 h-28 bg-secondary/30 rounded-full blur-xl"
            />
            <motion.div 
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div {...fadeInUp} className="order-1 lg:order-2">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Global Network</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Global Reach, Local Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We work with partners across Asia, Europe, North America, and the Middle East, connecting Sri Lankan businesses to global supply chains and distribution networks.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-default"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${region.color} flex items-center justify-center`}>
                    <region.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{region.name}</p>
                    <p className="text-xs text-muted-foreground">{region.countries}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
