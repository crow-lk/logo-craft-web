import { Globe } from "lucide-react";

const regions = [
  { name: "Asia", flag: "🌏" },
  { name: "Europe", flag: "🌍" },
  { name: "North America", flag: "🌎" },
  { name: "Middle East", flag: "🌍" },
];

const GlobalReach = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-ocean mb-8">
            <Globe className="w-10 h-10 text-primary-foreground animate-float" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Global Reach
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We work with partners across Asia, Europe, North America, and the Middle East, connecting Sri Lankan businesses to global supply chains and distribution networks.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{region.flag}</span>
                <span className="font-medium text-foreground">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
