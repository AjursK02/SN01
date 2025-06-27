
import React from 'react';
import { Film, Star, Users, Tv, UsersRound } from 'lucide-react';
import CategoryCard from './CategoryCard';

const CategoryBrowser = () => {
  const categories = [
    {
      title: 'Celebrities',
      icon: <Star size={24} className="text-gray-800" />,
      description: 'Find outfits worn by your favorite celebrities on red carpets, events, and everyday life.',
      path: '/celebrities',
      // bgClass: "bg-gradient-to-br from-red-500 to-purple-300",
    },
    {
      title: 'Movies',
      icon: <Film size={24} className="text-gray-800" />,
      description: 'Discover iconic costumes and clothes from your favorite films and movie stars.',
      path: '/movies',
      // bgClass: "bg-gradient-to-br from-green-500 to-yellow-300"
    },
    {
      title: 'Influencers',
      icon: <Users size={24} className="text-gray-800" />,
      description: 'Shop the latest trends worn by top fashion influencers across social media.',
      path: '/influencers',
      // bgClass: "bg-gradient-to-br from-blue-800 to-blue-300"
    },
    {
      title: 'TV Shows',
      icon: <Tv size={24} className="text-gray-800" />,
      description: 'Get the looks of your favorite characters from popular television series.',
      path: '/tv-shows',
      // bgClass: "bg-gradient-to-br from-purple-800 to-pink-300"
    },
    {
      title: 'Designers',
      icon: <UsersRound size={24} className="text-gray-800" />,
      description: 'Get the best outfits from your favorite designers.',
      path: '/designers',
      // bgClass: "bg-gradient-to-br from-orange-600 to-yellow-300"
    },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-blu">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              description={category.description}
              path={category.path}
              // bgClass={category.bgClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBrowser;

// import { motion } from "framer-motion";
// import { Star, Film, Users, Tv, Palette } from "lucide-react";

// const BrowseByCategory = () => {
//   const categories = [
//     {
//       id: 1,
//       title: "Celebrities",
//       description: "Red carpet looks from A-list stars",
//       icon: Star,
//       bgImage:
//         "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Celebrity red carpet
//       celebrity: "Zendaya",
//     },
//     {
//       id: 2,
//       title: "Movies",
//       description: "Iconic film fashion moments",
//       icon: Film,
//       bgImage:
//         "https://images.pexels.com/photos/14756354/pexels-photo-14756354.jpeg?_gl=1*1ig824v*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NTA1MTkzNDMkbzIkZzEkdDE3NTA1MjA2NDgkajE0JGwwJGgw", // Movie fashion
//       celebrity: "Emma Stone",
//     },
//     {
//       id: 3,
//       title: "Influencers",
//       description: "Trending styles from social media stars",
//       icon: Users,
//       bgImage:
//         "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Influencer fashion
//       celebrity: "Emma Chamberlain",
//     },
//     {
//       id: 4,
//       title: "TV Shows",
//       description: "Character looks from popular series",
//       icon: Tv,
//       bgImage:
//         "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // TV fashion
//       celebrity: "Blake Lively",
//     },
//     {
//       id: 5,
//       title: "Designers",
//       description: "Haute couture from fashion weeks",
//       icon: Palette,
//       bgImage:
//         "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Designer fashion
//       celebrity: "Gigi Hadid",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from-sanav-100 to-emerald-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//             BROWSE BY <span className="text-primary">CATEGORY</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our curated collections organized by your favorite sources
//             of style inspiration
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-6 overflow-x-auto pb-4">
//           {categories.map((category, index) => {
//             const IconComponent = category.icon;
//             return (
//               <motion.div
//                 key={category.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 className="group cursor-pointer"
//               >
//                 <div className="w-60 h-60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:rotate-1 text-center relative overflow-hidden bg-gradient-to-br from-white to-sanav-50 border border-spring-green-100 flex-shrink-0">
//                   {/* Celebrity image background */}
//                   <div
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 group-hover:opacity-25 transition-opacity duration-500"
//                     style={{ backgroundImage: `url(${category.bgImage})` }}
//                   />

//                   {/* Spring green gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-sanav-400/10 to-emerald-400/20 group-hover:from-sanav-500/20 group-hover:to-emerald-500/30 transition-all duration-500"></div>

//                   {/* Floating elements */}
//                   <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
//                     <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-sanav-300/30 to-emerald-300/30 transform group-hover:scale-125 transition-transform duration-700"></div>
//                     <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-300/30 to-sanav-300/30 transform group-hover:scale-110 transition-transform duration-700 delay-100"></div>
//                   </div>

//                   <div className="relative z-10">
//                     <motion.div
//                       className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sanav-500 mb-4 shadow-lg"
//                       whileHover={{
//                         scale: 1.1,
//                         rotate: 5,
//                         boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 10,
//                       }}
//                     >
//                       <IconComponent className="h-8 w-8 text-white" />
//                     </motion.div>

//                     <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-sanav-700 transition-colors duration-300">
//                       {category.title}
//                     </h3>

//                     <p className="text-gray-800 text-sm leading-relaxed font-medium">
//                       {category.description}
//                     </p>
//                   </div>

//                   {/* Interactive border */}
//                   <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-sanav-300 transition-colors duration-500"></div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrowseByCategory;

