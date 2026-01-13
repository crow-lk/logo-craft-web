import { Anchor, Building2, Zap, Car, Package, Shirt, BoxesIcon } from "lucide-react";

const industries = [
  { icon: Anchor, name: "Marine & Industrial Projects" },
  { icon: Building2, name: "Construction & Building Materials" },
  { icon: Zap, name: "Electrical & Electronics" },
  { icon: Car, name: "Automotive & Spare Parts" },
  { icon: Package, name: "FMCG / Food-grade Packaging" },
  { icon: Shirt, name: "Apparel & Textiles" },
  { icon: BoxesIcon, name: "SME General Trading" },
];

const whyMatters = [
  "Each industry has different HS & permit logic",
  "Document mistakes scale faster than shipment volume",
  "Early planning prevents port-level firefighting",
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Industries</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Trade Expertise, Tailored by Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with Sri Lankan businesses across diverse industries, adapting HS logic, permit pathways, documentation, and workflows to each sector's realities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground text-center">{industry.name}</p>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="bg-gradient-to-r from-primary to-navy-light rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-primary-foreground text-center mb-8">
            Why Industry-Specific Support Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whyMatters.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-secondary-foreground font-bold text-sm">
                  ✓
                </span>
                <p className="text-primary-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
