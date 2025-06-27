
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { featuredCollections } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Heart, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OutfitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [outfit, setOutfit] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [similar, setSimilar] = useState<any[]>([]);

  useEffect(() => {
    // Find the outfit with the matching id
    const foundOutfit = featuredCollections.flatMap(collection => collection.outfits)
      .find(outfit => outfit.id === id);
    
    if (foundOutfit) {
      setOutfit(foundOutfit);
      
      // Get similar outfits (same category or person)
      const similarOutfits = featuredCollections.flatMap(collection => collection.outfits)
        .filter(item => 
          item.id !== id && 
          (item.category === foundOutfit.category || item.person === foundOutfit.person)
        )
        .slice(0, 3);
      
      setSimilar(similarOutfits);
    }
    
    setLoading(false);
  }, [id]);

  const handleFavorite = () => {
    toast({
      title: "Added to favorites",
      description: "This outfit has been saved to your favorites.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied!",
      description: "Outfit link has been copied to your clipboard.",
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded aspect-[3/4]"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!outfit) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Outfit Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The outfit you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb navigation */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Link to="/" className="text-sm text-muted-foreground hover:text-sanav flex items-center">
          <ArrowLeft size={16} className="mr-1" /> Back to Browse
        </Link>
      </div>

      {/* Outfit Detail */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src={outfit.image} 
              alt={outfit.title} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-sanav/10 text-sanav rounded-full">
                  {outfit.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  ID: {outfit.id}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{outfit.title}</h1>
              <p className="text-lg text-muted-foreground">{outfit.person}</p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">Description</h2>
              <p className="text-muted-foreground">
                This {outfit.title.toLowerCase()} was worn by {outfit.person} and features a stylish design 
                perfect for {outfit.category.toLowerCase()} occasions. The outfit includes high-quality materials
                and excellent craftsmanship, making it both comfortable and fashionable.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-sanav-gradient hover:opacity-90 flex-grow">
                Shop This Look <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleFavorite}>
                <Heart size={18} />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 size={18} />
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-6">
              <h2 className="text-lg font-medium mb-4">Product Details</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Brand</span>
                  <span className="font-medium">Luxury Brand</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span className="font-medium">Premium Cotton</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Style</span>
                  <span className="font-medium">{outfit.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Worn By</span>
                  <span className="font-medium">{outfit.person}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Outfits */}
      {similar.length > 0 && (
        <div className="bg-secondary/50 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6">Similar Outfits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similar.map((item) => (
                <Link
                  key={item.id}
                  to={`/outfit/${item.id}`}
                  className="block group hover-scale"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.person}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OutfitDetail;
