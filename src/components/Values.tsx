import { Heart, Award, Shield, Handshake, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "We do the right thing, every time, with honesty and transparency.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We deliver high standards in every service we offer.",
  },
  {
    icon: Shield,
    title: "Compliance",
    desc: "We operate within local and international legal frameworks.",
  },
  {
    icon: Handshake,
    title: "Trust",
    desc: "We build long-term relationships with clients and suppliers.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    desc: "We adapt quickly to client needs and market conditions.",
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, i) => (
            <div
              key={i}
              className="group text-center p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
