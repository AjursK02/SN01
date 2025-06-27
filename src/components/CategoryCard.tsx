
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  path: string;
  // bgClass?: string
}

const CategoryCard = ({ title, icon, description, path}: CategoryCardProps) => {
  return (
    <Link to={path} className="block hover-scale">
      <div className= "rounded-lg  shadow-sm hover:shadow-md border border-border p-6 h-full bg-gradient-to-br from-sanav-400 via-sanav-gradient1 to-sanav-gradient2" >
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white/30 dark:bg-sanav/20 p-3 rounded-full">
            {icon}
          </div>
          <ChevronRight size={16} className="text-gray-800" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-muted-foreground text-gray-800">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
