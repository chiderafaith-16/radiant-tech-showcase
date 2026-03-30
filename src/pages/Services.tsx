import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import serviceGaming from '@/assets/service-gaming.jpg';
import serviceSoftware from '@/assets/service-software.jpg';
import serviceSwap from '@/assets/service-swap.jpg';
import serviceSetup from '@/assets/service-setup.jpg';
import serviceSupport from '@/assets/service-support.jpg';

const services = [
  {
    title: 'Game Downloads & Installation',
    description: 'Get the latest PC and console games downloaded and installed fast. We handle updates, patches, and account setup too.',
    image: serviceGaming,
  },
  {
    title: 'Software Installation',
    description: 'From productivity apps to creative tools and full OS installations — we get your devices ready for work and play.',
    image: serviceSoftware,
  },
  {
    title: 'Device Swapping & Upgrades',
    description: 'Trade in your old device for a newer model. We handle data transfer, setup, and make the switch seamless.',
    image: serviceSwap,
  },
  {
    title: 'Laptop & Device Setup',
    description: 'Unboxing to fully configured — we set up your new laptop with all the apps, accounts, and settings you need.',
    image: serviceSetup,
  },
  {
    title: 'General Tech Support',
    description: 'Troubleshooting, repairs, network setup, and more. Our team is ready to solve any tech problem you throw at us.',
    image: serviceSupport,
  },
];

export default function Services() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-3">Our Services</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Expert tech services to keep your devices running perfectly.</p>
        </div>

        <div className="space-y-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`section-fade-in flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-card border border-border rounded-2xl overflow-hidden card-hover`}
            >
              <div className="md:w-1/2 aspect-video overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
