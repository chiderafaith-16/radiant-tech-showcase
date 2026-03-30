import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Tech<span className="hero-gradient-text">Nova</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted tech partner for premium devices, software, and expert support.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['/', '/products', '/services', '/about', '/contact'].map((path) => (
                <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 text-foreground">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Game Downloads</span>
              <span>Software Installation</span>
              <span>Device Swapping</span>
              <span>Tech Support</span>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>hello@technova.ng</span>
              <span>+234 801 234 5678</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
