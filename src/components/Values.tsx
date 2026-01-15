import { motion } from "framer-motion";
import { Heart, Award, Shield, Handshake, Zap } from "lucide-react";
import integrityImage from "@/assets/integrity-handshake.jpg";
import excellenceImage from "@/assets/excellence-award.jpg";
import complianceImage from "@/assets/compliance-legal.jpg";
import trustImage from "@/assets/trust-partnership.jpg";
import responsivenessImage from "@/assets/responsiveness-speed.jpg";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "We do the right thing, every time, with honesty and transparency.",
    color: "from-rose-500 to-pink-600",
    image: integrityImage,
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We deliver high standards in every service we offer.",
    color: "from-secondary to-gold-light",
    image: excellenceImage,
  },
  {
    icon: Shield,
    title: "Compliance",
    desc: "We operate within local and international legal frameworks.",
    color: "from-primary to-navy-light",
    image: complianceImage,
  },
  {
    icon: Handshake,
    title: "Trust",
    desc: "We build long-term relationships with clients and suppliers.",
    color: "from-ocean to-primary",
    image: trustImage,
  },
  {
    icon: Zap,
    title: "Responsiveness",
    desc: "We adapt quickly to client needs and market conditions.",
    color: "from-amber-500 to-orange-500",
    image: responsivenessImage,
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
    <section id="values" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What We Stand For
          </h2>
        </motion.div>

        {/* Horizontal scrollable on mobile, grid on desktop */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-w-[220px]"
            >
              {/* Card with image background */}
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`} />
                
                {/* Icon at top */}
                <div className="absolute top-4 right-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                
                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-xl text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;