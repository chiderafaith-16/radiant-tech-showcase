import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₦100k', min: 0, max: 100000 },
  { label: '₦100k – ₦500k', min: 100000, max: 500000 },
  { label: 'Above ₦500k', min: 500000, max: Infinity },
];

export default function Products() {
  const scrollRef = useScrollAnimation();
  const [category, setCategory] = useState('All');
  const [priceIdx, setPriceIdx] = useState(0);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = category === 'All' || p.category === category;
      const priceMatch = p.price >= priceRanges[priceIdx].min && p.price < priceRanges[priceIdx].max;
      return catMatch && priceMatch;
    });
  }, [category, priceIdx]);

  return (
    <div ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 section-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-3">Our Products</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Explore our curated selection of premium tech devices at competitive prices.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center section-fade-in">
          <div className="relative inline-flex items-center">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none pl-4 pr-9 py-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border text-sm transition-colors duration-200 focus:ring-2 focus:ring-ring outline-none cursor-pointer"
            >
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <svg className="pointer-events-none absolute right-3 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="relative inline-flex items-center">
            <select
              value={priceIdx}
              onChange={(e) => setPriceIdx(Number(e.target.value))}
              className="appearance-none pl-4 pr-9 py-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border text-sm transition-colors duration-200 focus:ring-2 focus:ring-ring outline-none cursor-pointer"
            >
              {priceRanges.map((r, i) => <option key={i} value={i}>{r.label}</option>)}
            </select>
            <svg className="pointer-events-none absolute right-3 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 section-fade-in">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No products match the selected filters.</p>
        )}

        {/* Comparison */}
        {filtered.length >= 2 && (
          <div className="mt-20 section-fade-in">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-heading font-semibold text-foreground">Product</th>
                    <th className="text-left p-4 font-heading font-semibold text-foreground">Price</th>
                    <th className="text-left p-4 font-heading font-semibold text-foreground">RAM</th>
                    <th className="text-left p-4 font-heading font-semibold text-foreground">Storage</th>
                    <th className="text-left p-4 font-heading font-semibold text-foreground">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.slice(0, 4).map((p) => (
                    <tr key={p.id} className="border-t border-border hover:bg-accent/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{p.name}</td>
                      <td className="p-4 text-foreground">₦{p.price.toLocaleString()}</td>
                      <td className="p-4 text-muted-foreground">{p.specs.ram || '—'}</td>
                      <td className="p-4 text-muted-foreground">{p.specs.storage || '—'}</td>
                      <td className="p-4 text-muted-foreground">{p.specs.deviceType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
