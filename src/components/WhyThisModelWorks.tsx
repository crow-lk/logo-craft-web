import { motion } from "framer-motion";
import { ShieldCheck, Users, Workflow, TrendingUp } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const points = [
  { icon: ShieldCheck, text: "Compliance before cargo" },
  { icon: Users, text: "Neutral, independent advice" },
  { icon: Workflow, text: "One structured process" },
  { icon: TrendingUp, text: "Scales with your business" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const WhyThisModelWorks = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div {...fadeInUp}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Why This Model Works
            </h2>
            
            <div className="space-y-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={warehouseImage} 
                alt="Trade coordination" 
                className="w-full h-[400px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisModelWorks;
