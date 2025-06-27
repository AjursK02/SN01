
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import OutfitCard from '@/components/OutfitCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { featuredCollections } from '@/data/mockData';

// Get outfits from the TV Series collection
const tvShowOutfits = featuredCollections
  .find(collection => collection.id === 'tv-series')?.outfits || [];

const TvShows = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Casual', 'Formal', 'Business'];

  const filteredOutfits = tvShowOutfits.filter(outfit => {
    // Search filter
    const matchesSearch = !searchQuery || 
      outfit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outfit.person.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = activeFilter === 'All' || outfit.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied through the filteredOutfits
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-sanav/5 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-4">TV Show Outfits</h1>
          <p className="text-muted-foreground max-w-2xl">
            Find and shop outfits worn by characters in your favorite TV series and shows.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search by show or outfit..."
                className="pl-10 pr-4 py-2 rounded-full text-sm border border-border w-full focus:outline-none focus:ring-2 focus:ring-sanav focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              />
            </form>

            {/* Category filters */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "bg-sanav hover:bg-sanav/90" : ""}
                  size="sm"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outfits Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {filteredOutfits.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredOutfits.map((outfit) => (
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No outfits found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TvShows;
