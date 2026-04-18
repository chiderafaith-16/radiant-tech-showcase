import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

emailjs.init('DBau8VSdr-msQjM0m');

export default function Contact() {
  const scrollRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_g2qsgye',
      'template_go6mx8o',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'DBau8VSdr-msQjM0m'
    ).then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('EmailJS error:', error);
    });
  };

  return (
    <div ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-3">Get In Touch</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a question or need help? Drop us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="max-w-xl mx-auto section-fade-in">
          {submitted ? (
            <div className="text-center py-16 animate-hero">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-heading font-bold mb-2">Message Sent!</h2>
              <p className="text-muted-foreground">
                Thank you for reaching out. We'll respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help..."
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium btn-glow hover:opacity-90 transition-opacity duration-200"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}