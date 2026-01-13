import { Search, Ship, FileCheck, FileText, User, ShoppingCart } from "lucide-react";

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
    color: "from-primary to-navy-light",
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
    color: "from-ocean to-primary",
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
    color: "from-navy to-ocean",
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
    color: "from-secondary to-gold-light",
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
    color: "from-primary to-secondary",
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
    color: "from-ocean to-secondary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Structured Trade Support for Sri Lankan SMEs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular, compliance-first trade services designed to reduce risk, improve cost visibility, and simplify international trade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <span className="text-sm text-white/80">{service.subtitle}</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-4">{service.tagline}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.bestFor && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-medium text-secondary">
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
            </div>
          ))}
        </div>

        {/* Engagement models */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
          <h3 className="text-xl font-serif font-bold text-foreground text-center mb-6">How Clients Engage Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Per shipment",
              "Per project",
              "Monthly retainer",
              "Advisory-only",
            ].map((model, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <p className="font-medium text-foreground">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
