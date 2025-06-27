
import React from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';

interface OutfitCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  person: string;
  price: string;
  productLink: string
}

const OutfitCard = ({ id, image, title, category, person, price, productLink }: OutfitCardProps) => {
  return (
    // <Link to={`/outfit/${id}`} className="group hover-scale">
      <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 w-full">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-sanav text-white rounded mb-2">
                {category}
              </span>
              <h3 className="text-white font-medium line-clamp-2">{title}</h3>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{person}</p>
          <h3 className="font-medium text-sm line-clamp-1">Price: ₹{price}</h3>
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            // onClick={(e) => e.stopPropagation()}
            className="block text-center w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-sanav rounded hover:bg-opacity-90 transition"
          >
            View Product
          </a>

        </div>
      </div>
    
  );
};

export default OutfitCard;
