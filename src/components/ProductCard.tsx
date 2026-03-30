import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  type: string;
  specs: { ram?: string; storage?: string; deviceType: string };
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden card-hover border border-border">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
            {product.category}
          </span>
          <span className="text-xs text-muted-foreground">{product.specs.deviceType}</span>
        </div>
        <h3 className="font-heading font-semibold text-card-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-3 text-xs text-muted-foreground">
          {product.specs.ram && <span className="px-2 py-0.5 rounded bg-secondary">{product.specs.ram} RAM</span>}
          {product.specs.storage && <span className="px-2 py-0.5 rounded bg-secondary">{product.specs.storage}</span>}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">₦{product.price.toLocaleString()}</span>
          <Link
            to={`/products#${product.id}`}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200 btn-glow"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
