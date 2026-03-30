import laptopImg1 from '@/assets/product-laptop-1.jpg';
import laptopImg2 from '@/assets/product-laptop-2.jpg';
import phoneImg1 from '@/assets/product-phone-1.jpg';
import phoneImg2 from '@/assets/product-phone-2.jpg';
import earbudsImg from '@/assets/product-earbuds.jpg';
import watchImg from '@/assets/product-watch.jpg';
import tabletImg from '@/assets/product-tablet.jpg';
import type { Product } from '@/components/ProductCard';

export const products: Product[] = [
  {
    id: 'pro-laptop-x1',
    name: 'ProBook X1 Ultra',
    price: 850000,
    image: laptopImg1,
    category: 'Laptops',
    type: 'premium',
    specs: { ram: '16GB', storage: '512GB SSD', deviceType: 'Laptop' },
    description: 'Ultra-thin professional laptop with stunning display and all-day battery life.',
  },
  {
    id: 'gaming-beast',
    name: 'Gaming Beast R7',
    price: 1200000,
    image: laptopImg2,
    category: 'Laptops',
    type: 'gaming',
    specs: { ram: '32GB', storage: '1TB SSD', deviceType: 'Gaming Laptop' },
    description: 'RGB-powered gaming machine with next-gen GPU and ultra-fast refresh rate.',
  },
  {
    id: 'nova-phone',
    name: 'Nova Phone 15',
    price: 480000,
    image: phoneImg1,
    category: 'Phones',
    type: 'premium',
    specs: { ram: '8GB', storage: '256GB', deviceType: 'Smartphone' },
    description: 'Flagship smartphone with pro-grade camera and vivid AMOLED display.',
  },
  {
    id: 'edge-phone',
    name: 'Edge Phone S',
    price: 320000,
    image: phoneImg2,
    category: 'Phones',
    type: 'mid-range',
    specs: { ram: '6GB', storage: '128GB', deviceType: 'Smartphone' },
    description: 'Sleek mid-range phone with impressive battery and smooth performance.',
  },
  {
    id: 'nova-buds',
    name: 'NovaBuds Pro',
    price: 85000,
    image: earbudsImg,
    category: 'Accessories',
    type: 'audio',
    specs: { deviceType: 'Wireless Earbuds' },
    description: 'Premium noise-cancelling earbuds with crystal-clear sound and long battery.',
  },
  {
    id: 'smart-watch',
    name: 'TechNova Watch 3',
    price: 120000,
    image: watchImg,
    category: 'Accessories',
    type: 'wearable',
    specs: { deviceType: 'Smartwatch' },
    description: 'Advanced health tracking smartwatch with AMOLED display and 5-day battery.',
  },
  {
    id: 'nova-tab',
    name: 'NovaPad Air',
    price: 350000,
    image: tabletImg,
    category: 'Tablets',
    type: 'premium',
    specs: { ram: '8GB', storage: '256GB', deviceType: 'Tablet' },
    description: 'Lightweight tablet perfect for creativity, productivity, and entertainment.',
  },
];
