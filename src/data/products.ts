import laptopImg1 from '@/assets/product-laptop-1.jpg';
import laptopImg2 from '@/assets/product-laptop-2.jpg';
import phoneImg1 from '@/assets/product-phone-1.jpg';
import phoneImg2 from '@/assets/product-phone-2.jpg';
import earbudsImg from '@/assets/product-earbuds.jpg';
import watchImg from '@/assets/product-watch.jpg';
import tabletImg from '@/assets/product-tablet.jpg';
import speakerImg from '@/assets/product-speaker.jpg';
import keyboardImg from '@/assets/product-keyboard.jpg';
import powerbankImg from '@/assets/product-powerbank.jpg';
import mouseImg from '@/assets/product-mouse.jpg';
import headphonesImg from '@/assets/product-headphones.jpg';
import webcamImg from '@/assets/product-webcam.jpg';
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
  {
    id: 'bt-speaker',
    name: 'SoundPulse 360',
    price: 65000,
    image: speakerImg,
    category: 'Accessories',
    type: 'audio',
    specs: { deviceType: 'Bluetooth Speaker' },
    description: 'Portable Bluetooth speaker with 360° surround sound and 12-hour battery life.',
  },
  {
    id: 'rgb-keyboard',
    name: 'MechStrike RGB',
    price: 45000,
    image: keyboardImg,
    category: 'Gaming',
    type: 'gaming',
    specs: { deviceType: 'Mechanical Keyboard' },
    description: 'Full RGB mechanical gaming keyboard with hot-swappable switches and macro keys.',
  },
  {
    id: 'power-bank',
    name: 'ChargePro 20K',
    price: 28000,
    image: powerbankImg,
    category: 'Accessories',
    type: 'charger',
    specs: { deviceType: 'Power Bank' },
    description: '20,000mAh fast-charging power bank with USB-C and dual output ports.',
  },
  {
    id: 'gaming-mouse',
    name: 'SwiftClick Pro',
    price: 35000,
    image: mouseImg,
    category: 'Gaming',
    type: 'gaming',
    specs: { deviceType: 'Gaming Mouse' },
    description: 'Ergonomic wireless gaming mouse with 16K DPI sensor and customizable RGB.',
  },
  {
    id: 'headphones-pro',
    name: 'StudioMax ANC',
    price: 150000,
    image: headphonesImg,
    category: 'Accessories',
    type: 'audio',
    specs: { deviceType: 'Over-Ear Headphones' },
    description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery.',
  },
  {
    id: 'hd-webcam',
    name: 'ClearView 4K',
    price: 55000,
    image: webcamImg,
    category: 'Accessories',
    type: 'streaming',
    specs: { deviceType: 'Webcam' },
    description: '4K webcam with auto-focus, built-in mic, and low-light correction for streaming.',
  },
];
