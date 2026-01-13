import { motion } from "framer-motion";
import { Search, Ship, FileCheck, FileText, User, ShoppingCart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Sourcing & Procurement",
    subtitle: "Source-to-Settle",
    tagline: "Buy right — with cost, quality, and compliance aligned from the start.",
    items: [
      "Supplier discovery & global shortlisting",
      "RFQ / RFP management & bid evaluation",
      "Price, Incoterms & terms negotiation support",
      "Purchase order drafting & expediting",
      "Sample & quality inspection coordination",
      "Landed cost & TCO comparison",
    ],
    bestFor: "New suppliers • Cost optimisation • Scaling imports",
    gradient: "from-primary via-navy-light to-ocean",
  },
  {
    icon: Ship,
    title: "Freight & Logistics Coordination",
    subtitle: "",
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
  },
  {
    icon: FileCheck,
    title: "Customs & Trade Compliance",
    subtitle: "",
    tagline: "Compliance addressed before cargo moves — not at the port.",
    items: [
      "HS classification with rationale",
      "Permit & restricted-goods mapping",
      "Valuation & origin guidance",
      "Document compliance review (CI / PL / COO)",
      "Duty & tax estimation",
      "Post-entry query support",
    ],
    bestFor: "We support your clearing agent — we don't replace them",
    gradient: "from-navy via-primary to-ocean",
  },
  {
    icon: FileText,
    title: "Trade Documentation & Bank Support",
    subtitle: "",
    tagline: "Clean documents mean faster clearance and fewer bank queries.",
    items: [
      "CI & Packing List templates",
      "COO & legalization guidance",
      "BL / AWB & insurance checklist",
      "LC / TT bank document packs",
      "Pre-alert preparation (48–72 hrs)",
      "Digital archiving & version control",
    ],
    bestFor: "LC imports • Repeat shipments • Multi-supplier trades",
    gradient: "from-secondary via-gold-light to-secondary",
  },
  {
    icon: User,
    title: "Importer of Record (IOR) Advisory",
    subtitle: "",
    tagline: "Importer of Record decisions made early — never assumed.",
    items: [
      "Client as IOR (most common)",
      "Third-party IOR (project-based)",
      "LCL as IOR (limited, contract-only cases)",
    ],
    note: "IOR selection impacts permits, duties, banking, insurance & audit liability.",
    gradient: "from-primary via-secondary to-gold-light",
  },
  {
    icon: ShoppingCart,
    title: "Digital & E-commerce Trade Support",
    subtitle: "Selective",
    tagline: "Helping SMEs test and scale cross-border selling.",
    items: [
      "Cross-border seller setup guidance",
      "Basic product listing support",
      "Courier & shipping setup guidance",
      "Returns & claims workflow",
      "Simple trade dashboards (Zoho-based)",
    ],
    bestFor: "First-time exporters • Online sellers",
    gradient: "from-ocean via-secondary to-gold-light",
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
            Structured Trade Support for Sri Lankan SMEs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular, compliance-first trade services designed to reduce risk, improve cost visibility, and simplify international trade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <span className="text-sm text-white/80 font-medium">{service.subtitle}</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-4 leading-relaxed">{service.tagline}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.bestFor && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-secondary">
                      Best for: <span className="text-muted-foreground font-normal">{service.bestFor}</span>
                    </p>
                  </div>
                )}
                {service.note && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">{service.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement models */}
        <motion.div 
          {...fadeInUp}
          className="mt-16 bg-gradient-to-r from-card via-card to-card rounded-2xl p-8 md:p-10 border border-border max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-ocean" />
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground text-center mb-8">How Clients Engage Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Per shipment", icon: "📦" },
              { label: "Per project", icon: "📋" },
              { label: "Monthly retainer", icon: "📅" },
              { label: "Advisory-only", icon: "💡" },
            ].map((model, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="text-center p-5 rounded-xl bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all cursor-default"
              >
                <span className="text-2xl mb-2 block">{model.icon}</span>
                <p className="font-medium text-foreground">{model.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
