import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Star, BookMarked, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const LookTracker = () => {
  const trackedLooks = [
    {
      id: '1',
      title: 'Urban Explorer',
      description: 'Practical and trendy outfit for city adventures',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    },
    {
      id: '2',
      title: 'Blake Lively\'s Look',
      description: 'A stunning gown inspired by celebrity red carpet',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      id: '3',
      title: 'Aimee Song\'s Style',
      description: 'Flowy dress and ankle boots for a chic festival',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    },
    {
      id: '4',
      title: 'Power Suit Office Look',
      description: 'A sharp and modern power suit inspired by',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sanav/20 to-sanav/5 relative overflow-hidden">
      {/* Abstract shapes in the background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sanav/20 blur-3xl animate-float"></div>
        <div className="absolute top-32 -left-20 w-80 h-80 rounded-full bg-sanav/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 right-32 w-72 h-72 rounded-full bg-sanav/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-sanav/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">
              SANAV <span className="text-primary">LOOK TRACKER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackedLooks.map((look, index) => (
              <Link
                to={`/view-outfit/${look.id}`}
                key={look.id}
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="hover-scale overflow-hidden h-full shadow-lg hover:shadow-xl border border-white/10 backdrop-blur-sm">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-1 group-hover:text-sanav transition-colors">{look.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{look.description}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="glow" className="h-auto p-2 text-sm text-black hover:text-black flex items-center gap-1">
                        <Link to={`/view-outfit/${look.id}`} className="flex items-center gap-1">
                          View Outfit
                          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="glow" size="lg" className="group shadow-lg shadow-sanav/20">
              <Link to="/look-tracker" className="flex items-center gap-2">
                <span className='text-base font-semibold'>View All Sanav Look Tracker</span>
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 " />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookTracker;
