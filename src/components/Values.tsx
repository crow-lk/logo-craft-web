import { motion } from "framer-motion";
import { Heart, Award, Shield, Handshake, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "We do the right thing, every time, with honesty and transparency.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We deliver high standards in every service we offer.",
    color: "from-secondary to-gold-light",
  },
  {
    icon: Shield,
    title: "Compliance",
    desc: "We operate within local and international legal frameworks.",
    color: "from-primary to-navy-light",
  },
  {
    icon: Handshake,
    title: "Trust",
    desc: "We build long-term relationships with clients and suppliers.",
    color: "from-ocean to-primary",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    desc: "We adapt quickly to client needs and market conditions.",
    color: "from-amber-500 to-orange-500",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const Values = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Principles That Guide Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group text-center p-6 bg-card rounded-2xl border border-border hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
