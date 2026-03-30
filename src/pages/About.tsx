import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutTeam from '@/assets/about-team.jpg';
import { Target, Eye } from 'lucide-react';

export default function About() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-3">About TechNova</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Bridging the gap between premium tech and everyday Nigerians.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 section-fade-in">
          <div className="rounded-2xl overflow-hidden">
            <img src={aboutTeam} alt="TechNova team" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TechNova was founded with a simple mission: make quality technology accessible and affordable across Nigeria. We noticed a gap — people wanted premium devices and expert tech services but couldn't find a trusted, all-in-one provider.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve hundreds of customers — from gamers and students to businesses and creatives — providing devices, software, game installations, device setup, and ongoing tech support. We're not just selling gadgets; we're building a tech-forward community.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 section-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower Nigerians with affordable, high-quality tech products and services — making technology simple, reliable, and within everyone's reach.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Nigeria's most trusted tech brand — known for exceptional products, world-class service, and a community that thrives on innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
