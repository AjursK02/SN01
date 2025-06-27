
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background element */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-sanav/5 to-transparent -z-10" 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with the Latest Styles
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and be the first to know when we add new outfits from your favorite celebrities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-sanav focus:border-transparent"
            />
            <Button 
              type="submit" 
              disabled={loading} 
              className="bg-sanav-gradient hover:opacity-90 font-semibold"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
