import  Layout  from "@/components/Layout"
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductList from "../components/ProductList"

const Designers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      // Search is already applied through the filteredOutfits
    };

    const filters = ['All', 'Casual', 'Formal', 'Business'];
    const [activeFilter, setActiveFilter] = useState('All');
    
  return (
    <Layout>
      <div className="bg-sanav/5 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-4">Designer’s Collection</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover and shop exclusive outfits crafted by top designers— Featuring signature styles, looks for special moments and everyday wear.
          </p>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search by celebrity or outfit..."
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
      <ProductList/>
    </Layout>

    
  )
}

export default Designers