import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImg from '@/assets/hero-bg.jpg';

const testimonials = [
  { name: 'Adaeze O.', role: 'Business Owner', text: 'TechNova set up my entire office with laptops and software. Fast, reliable, and very professional!', rating: 5 },
  { name: 'Chidi M.', role: 'Gamer', text: 'Got my gaming rig from here plus all my favourite titles installed. The service is unmatched!', rating: 5 },
  { name: 'Fatima K.', role: 'Student', text: 'Affordable, quality devices and their tech support team is always ready to help. Highly recommend!', rating: 4 },
];

export default function Index() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tech devices" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-2xl animate-hero">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Premium Tech,<br />
              <span className="hero-gradient-text">Delivered Right.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Your one-stop shop for the latest devices, expert setup, game downloads, and all-round tech support — right here in Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium btn-glow transition-opacity hover:opacity-90">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors duration-200">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 section-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-3">Featured Products</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Handpicked devices that combine performance, style, and value.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 section-alt-bg section-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-3">Product Gallery</h2>
            <p className="text-muted-foreground">A closer look at our collection.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.id} className="group aspect-square rounded-xl overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real feedback from real people.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
