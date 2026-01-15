import { motion } from "framer-motion";
import { ShieldCheck, Users, Workflow, TrendingUp } from "lucide-react";
import tradeCoordinationImage from "@/assets/trade-coordination.jpg";

const points = [
  { icon: ShieldCheck, text: "Compliance before cargo", desc: "We address risks before goods move" },
  { icon: Users, text: "Neutral, independent advice", desc: "Unbiased guidance you can trust" },
  { icon: Workflow, text: "One structured process", desc: "Clear workflow from start to finish" },
  { icon: TrendingUp, text: "Scales with your business", desc: "Grows as your trade grows" },
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
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Why This Model Works
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-card p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-1">{point.text}</h4>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={tradeCoordinationImage} 
                alt="Trade coordination center" 
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
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