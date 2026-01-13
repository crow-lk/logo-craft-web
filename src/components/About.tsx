import { CheckCircle, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            About Linkcore Lanka
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Linkcore Lanka (LCL) is a Sri Lanka–based trade services and coordination firm built to help SMEs import, export, and source internationally with confidence. We operate as a neutral, compliance-first trade control layer, supporting clients from RFQ and purchase order stage through shipment execution and audit-ready closure.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the most trusted trade enablement partner for Sri Lankan Businesses, known for disciplined processes, regulatory clarity, and predictable trade outcomes.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To simplify and de-risk international trade for Sri Lankan SMEs by:
            </p>
            <ul className="space-y-2">
              {[
                "Designing compliance-first trade structures",
                "Providing independent, unbiased trade advice",
                "Bringing enterprise-grade discipline to SMEs",
                "Coordinating all trade partners seamlessly",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What we stand for */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-12">What We Stand For</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Compliance Before Cargo",
                desc: "We address HS classification, permits, valuation, and documentation before goods move.",
                color: "bg-primary",
              },
              {
                title: "Neutral & Independent",
                desc: "We don't sell freight space or earn hidden commissions. Our advice is unbiased.",
                color: "bg-navy",
              },
              {
                title: "Built for Sri Lankan SMEs",
                desc: "Enterprise-level trade discipline in a practical, scalable, cost-effective model.",
                color: "bg-ocean",
              },
              {
                title: "Process-Driven Execution",
                desc: "Every shipment follows a structured workflow with clear roles and accountability.",
                color: "bg-secondary",
              },
            ].map((item, i) => (
              <div key={i} className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`absolute top-0 left-0 right-0 h-1 ${item.color} rounded-t-xl`} />
                <h4 className="font-semibold text-foreground mb-3 mt-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
