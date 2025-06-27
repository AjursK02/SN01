
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import OutfitCard from './OutfitCard';

interface Collection {
  id: string;
  title: string;
  outfits: {
    id: string;
    image: string;
    title: string;
    category: string;
    person: string;
  }[];
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

const FeaturedCollections = ({ collections }: FeaturedCollectionsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {collections.map((collection) => (
            <div key={collection.id} className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{collection.title}</h2>
                <Link 
                  to={`/collection/${collection.id}`}
                  className="flex items-center text-sm font-medium text-sanav hover:underline"
                >
                  View All 
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                {collection.outfits.slice(0, 5).map((outfit) => (
                  <OutfitCard
                    key={outfit.id}
                    id={outfit.id}
                    image={outfit.image}
                    title={outfit.title}
                    category={outfit.category}
                    person={outfit.person}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
