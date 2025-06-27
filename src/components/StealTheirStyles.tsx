
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';

const StealTheirStyles = () => {
  const celebrities = [
    {
      id: '1',
      name: 'Casual Chic Weekend',
      description: 'A comfortable yet stylish look perfect for a weekend outing',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    },
    {
      id: '2',
      name: 'Summer Evening Glam',
      description: 'Elegant silk dress paired with strappy sandals',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      id: '3',
      name: 'Urban Explorer',
      description: 'Practical and trendy outfit for city adventures',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    },
    {
      id: '4',
      name: 'Red Carpet Ready',
      description: 'A stunning gown inspired by celebrity red carpet moments',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-sanav/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">
              STEAL THEIR <span className="text-primary">STYLE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrities.map((celeb, index) => (
              <Link
                to={`/view-outfit/${celeb.id}`}
                key={celeb.id}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full flex flex-col hover-scale overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={celeb.image}
                      alt={`${celeb.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-grow pt-4 pb-3">
                    <h3 className="font-bold text-base mb-1 group-hover:text-sanav transition-colors">{celeb.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{celeb.description}</p>
                    <div className="flex items-center justify-between">
                      <Button asChild variant="glow" className="h-auto p-2 text-sm text-black hover:text- flex items-center gap-1">
                        <Link to={`/view-outfit/${celeb.id}`} className="flex items-center gap-1">
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
              <Link to="/styles" className="flex items-center gap-2 font-semibold ">
                View All Styles
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StealTheirStyles;
