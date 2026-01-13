import { motion } from "framer-motion";
import { Search, Ship, FileCheck, FileText, User, ShoppingCart, ArrowRight, Package, Calendar, Lightbulb } from "lucide-react";
import airFreightImage from "@/assets/air-freight.jpg";
import customsImage from "@/assets/customs-documents.jpg";
import warehouseImage from "@/assets/warehouse.jpg";

const services = [
  {
    icon: Search,
    title: "Sourcing & Procurement",
    subtitle: "Source-to-Settle",
    tagline: "Buy right — with cost, quality, and compliance aligned from the start.",
    items: [
      "Supplier discovery & global shortlisting",
      "RFQ / RFP management & bid evaluation",
      "Price, Incoterms & terms negotiation",
      "Purchase order drafting & expediting",
      "Sample & quality inspection",
      "Landed cost & TCO comparison",
    ],
    bestFor: "New suppliers • Cost optimisation • Scaling imports",
    gradient: "from-primary via-navy-light to-ocean",
    image: warehouseImage,
  },
  {
    icon: Ship,
    title: "Freight & Logistics",
    subtitle: "Air & Sea",
    tagline: "Neutral logistics planning without selling freight space.",
    items: [
      "Air & sea freight coordination (LCL / FCL)",
      "Buyer's consolidation planning",
      "Routing & transit-time optimisation",
      "Freight quote comparison",
      "Cargo insurance support",
      "Shipment tracking & exception handling",
    ],
    bestFor: "SMEs needing transparency & control",
    gradient: "from-ocean via-primary to-navy",
    image: airFreightImage,
  },
  {
    icon: FileCheck,
    title: "Customs & Compliance",
    subtitle: "",
    tagline: "Compliance addressed before cargo moves — not at the port.",
    items: [
      "HS classification with rationale",
      "Permit & restricted-goods mapping",
      "Valuation & origin guidance",
      "Document compliance review",
      "Duty & tax estimation",
      "Post-entry query support",
    ],
    bestFor: "We support your clearing agent — we don't replace them",
    gradient: "from-navy via-primary to-ocean",
    image: customsImage,
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: "Trade Documentation",
    tagline: "Clean documents mean faster clearance",
    items: ["CI & Packing List templates", "COO & legalization", "LC / TT bank packs", "Digital archiving"],
    gradient: "from-secondary to-gold-light",
  },
  {
    icon: User,
    title: "IOR Advisory",
    tagline: "Importer of Record decisions made early",
    items: ["Client as IOR", "Third-party IOR", "LCL as IOR (contract-only)"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Support",
    tagline: "Scale cross-border selling",
    items: ["Seller setup guidance", "Product listing support", "Returns & claims workflow"],
    gradient: "from-ocean to-secondary",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Structured Trade Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular, compliance-first trade services designed to reduce risk and simplify international trade.
          </p>
        </motion.div>

        {/* Main services with images */}
        <div className="space-y-12 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40`} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white">{service.title}</h3>
                      {service.subtitle && <span className="text-white/80 text-sm">{service.subtitle}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-primary font-semibold mb-4">{service.tagline}</p>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-secondary">Best for:</span>
                  <span className="text-sm text-muted-foreground">{service.bestFor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {additionalServices.map((service, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-5`}>
                <div className="flex items-center gap-3">
                  <service.icon className="w-6 h-6 text-white" />
                  <h4 className="font-serif font-bold text-white">{service.title}</h4>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-primary font-medium mb-3">{service.tagline}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement models */}
        <motion.div 
          {...fadeInUp}
          className="bg-gradient-to-r from-card via-card to-card rounded-3xl p-8 md:p-10 border border-border max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-ocean" />
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground text-center mb-8">Flexible Engagement Models</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Per shipment", icon: Package, desc: "Single trade support" },
              { label: "Per project", icon: FileText, desc: "End-to-end coordination" },
              { label: "Monthly retainer", icon: Calendar, desc: "Ongoing partnership" },
              { label: "Advisory-only", icon: Lightbulb, desc: "Expert guidance" },
            ].map((model, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-5 rounded-xl bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <model.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-1">{model.label}</p>
                <p className="text-xs text-muted-foreground">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
