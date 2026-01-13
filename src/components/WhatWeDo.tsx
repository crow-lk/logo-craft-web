import { motion } from "framer-motion";
import { Package, Truck, FileCheck, FileText, Globe, CheckCircle } from "lucide-react";

const services = [
  { icon: Package, title: "Sourcing & Procurement (Source-to-Settle)" },
  { icon: Truck, title: "Freight & Logistics Coordination" },
  { icon: FileCheck, title: "Customs & Trade Compliance Support" },
  { icon: FileText, title: "Trade Documentation & Bank Pack Support" },
  { icon: Globe, title: "Digital & E-commerce Trade Enablement (selective)" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Overview</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Linkcore Lanka supports clients across:
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-ocean flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-foreground">{service.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-ocean/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our services are modular—you can engage us per shipment, per project, or as your extended trade back-office.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
