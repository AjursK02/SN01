
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ThumbsUp, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const TopChoices = () => {
  const communityChoices = [
    {
      id: '1',
      title: 'Summer Evening Glam',
      description: 'Elegant silk dress paired with strappy sandals',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      votes: 1242,
      items: 7
    },
    {
      id: '2',
      title: 'Urban Explorer',
      description: 'Practical and trendy outfit for city adventures',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      votes: 876,
      items: 12
    },
    {
      id: '3',
      title: 'Red Carpet Ready',
      description: 'A stunning gown inspired by celebrity red carpet moments',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      votes: 753,
      items: 5
    },
    {
      id: '4',
      title: 'Boho Festival Vibes',
      description: 'Flowy dress and ankle boots for a chic festival look',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      votes: 631,
      items: 9
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-sanav/10 to-sanav/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-sanav/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">
              TOP CHOICES BY <span className="text-primary">SANAV COMMUNITY</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityChoices.map((choice, index) => (
              <Link
                to={`/view-outfit/${choice.id}`}
                key={choice.id}
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="hover-scale overflow-hidden h-full shadow-lg hover:shadow-xl border border-white/10 backdrop-blur-sm">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={choice.image}
                      alt={choice.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="pt-4 pb-3">
                    <h3 className="font-bold text-base mb-1 group-hover:text-sanav transition-colors">{choice.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{choice.description}</p>
                    <div className="flex items-center justify-between">
                      <Button asChild variant="glow" className="h-auto p-2 text-sm text-black  border flex items-center gap-1">
                        <Link to={`/view-outfit/${choice.id}`} className="flex items-center gap-1">
                          View Outfit
                          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline3D" className="group">
              <Link to="/community" className="flex items-center gap-2 font-semibold">
                View All Top Choices by Sanav Community
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopChoices;
