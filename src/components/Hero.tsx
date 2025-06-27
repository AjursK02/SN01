
// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';


// const Hero = () => {
  
//   const featuredBanners = [
//     {
//       id: 1,
//       title: "Celebrity Summer Collections",
//       description: "Discover the hottest summer looks from your favorite celebrities",
//       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
//       link: "/outfit/summer-collection"
//     },
//     {
//       id: 2,
//       title: "Red Carpet Inspirations",
//       description: "Get inspired by the most elegant red carpet outfits",
//       image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
//       link: "/outfit/red-carpet"
//     },
//     {
//       id: 3,
//       title: "Street Style Favorites",
//       description: "Casual and trendy street style looks for everyday fashion",
//       image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
//       link: "/outfit/street-style"
//     }
//   ];

//   const [selectedGender, setSelectedGender] = useState("men")

//   return (
//     <div className="relative overflow-hidden">
//       {/* Background with animated gradient */}
//       <div 
//         className="absolute inset-0 bg-gradient-to-br from-sanav/10 via-background to-background animate-gradient-slow" 
//         aria-hidden="true"
//       />
      
//       <div className="container mx-auto px-4 sm:px-6 py-10 relative z-10">
//         <div className="text-center max-w-4xl mx-auto">
//           {/* Gender selection buttons moved to the top */}
//           <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 animate-fade-in">
//             <Button size="xl" variant={selectedGender === "men" ? "glow" : "outline3D"} className="w-full group"
//             onClick={()=>setSelectedGender("men")}>
//               <span>MEN</span>
//             </Button>
//             <Button size="xl" variant={selectedGender === "women" ? "glow" : "outline3D"}  className="w-full"
//             onClick={()=>setSelectedGender("women")}>
//               <span>WOMEN</span>
//             </Button>
//           </div>
          
//           {/* Netflix-style scrolling banner */}
//           <div className="mb-12 animate-fade-in animation-delay-200">
//             <Carousel className="relative w-full"
//             plugins={[Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]}>
//               <CarouselContent>
//                 {featuredBanners.map((banner) => (
//                   <CarouselItem key={banner.id}>
//                     <Link to={banner.link} className="block">
//                       <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
//                         <img 
//                           src={banner.image} 
//                           alt={banner.title}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-left">
//                           <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{banner.title}</h2>
//                           <p className="text-sm md:text-base text-white/90 mb-4">{banner.description}</p>
//                           <Button variant="glow" size="sm" className="w-fit">Explore Collection</Button>
//                         </div>
//                       </div>
//                     </Link>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <CarouselPrevious className="absolute left-4 top-1/2" />
//               <CarouselNext className="absolute right-4 top-1/2" />
//             </Carousel>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
//             <Button asChild size="lg" variant="gradient" className="shadow-xl shadow-sanav/20">
//               <Link to="/celebrities">
//                 Browse Celebrities
//               </Link>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="group">
//               <Link to="/latest" className="flex items-center">
//                 Latest Outfits
//                 <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </Button>
//           </div>
          
//           {/* Stats with animations */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
//             {[
//               { value: "1000+", label: "Outfits", delay: "400" },
//               { value: "500+", label: "Celebrities", delay: "500" },
//               { value: "300+", label: "Movies & Shows", delay: "600" },
//               { value: "50+", label: "Brands", delay: "700" }
//             ].map((stat, index) => (
//               <div key={index} className={`p-5 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-fade-in animation-delay-${stat.delay}`}>
//                 <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
//                 <p className="text-sm text-muted-foreground">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

  
  
// };

// export default Hero;




// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// interface SlideData {
//   id: number;
//   image: string;
//   title: string;
//   subtitle: string;
//   cta: string;
//   alt: string;
// }

// const slides: SlideData[] = [
//   {
//     id: 1,
//     image: "https://images.pexels.com/photos/7871153/pexels-photo-7871153.jpeg",
//     title: "Trending Summer Look",
//     subtitle: "Discover the latest styles curated by top influencers",
//     cta: "Explore the Look",
//     alt: "Group of Asian women in black outfits posing in a modern studio.",
//   },
//   {
//     id: 2,
//     image: "https://images.pexels.com/photos/6494104/pexels-photo-6494104.jpeg",
//     title: "Red Carpet Glam",
//     subtitle: "Elevate your style with our exclusive collection",
//     cta: "Shop the Style",
//     alt: "A stylish individual posing elegantly in a vibrant red gown indoors.",
//   },
//   {
//     id: 3,
//     image: "https://images.pexels.com/photos/32558178/pexels-photo-32558178.jpeg",
//     title: "Influencer Edit",
//     subtitle: "Fashion-forward pieces for the modern trendsetter",
//     cta: "Shop Now",
//     alt: "Fashionable woman in sunglasses leans against a tree outdoors, exuding confidence and style.",
//   },
// ];

// const Hero=()=> {
//   const [api, setApi] = useState<CarouselApi>();
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (!api) return;

//     setCurrent(api.selectedScrollSnap());

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <Carousel
//         setApi={setApi}
//         className="w-full h-screen"
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         plugins={[
//           Autoplay({
//             delay: 5000,
//             stopOnInteraction: false,
//             stopOnMouseEnter: false,
//           }),
//         ]}
//       >
//         <CarouselContent className="h-screen -ml-0">
//           {slides.map((slide) => (
//             <CarouselItem
//               key={slide.id}
//               className="h-screen relative pl-0 basis-full"
//             >
//               <div className="relative w-full h-screen">
//                 {/* Background Image */}
//                 <img
//                   src={slide.image}
//                   alt={slide.alt}
//                   className="absolute inset-0 w-full h-screen object-cover object-center"
//                   loading="eager"
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-hero-gradient" />

//                 {/* Content */}
//                 <div className="relative z-10 h-screen flex items-center justify-center">
//                   <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//                     <div className="animate-slide-fade">
//                       <h1 className="font-editorial font-bold text-hero-mobile sm:text-hero mb-6 leading-tight">
//                         {slide.title}
//                       </h1>
//                       <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
//                         {slide.subtitle}
//                       </p>
//                       <Button
//                         size="lg"
//                         className="bg-sanav hover:bg-sanav-600 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-sanav-500/25"
//                       >
//                         {slide.cta}
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === current
//                   ? "bg-sanav-500 scale-125"
//                   : "bg-white/50 hover:bg-white/75"
//               }`}
//               onClick={() => api?.scrollTo(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
//         <div className="flex flex-col items-center text-white/80">
//           <span className="text-sm font-light mb-2 tracking-wider uppercase">
//             Scroll to explore
//           </span>
//           <div className="w-px h-8 bg-white/40 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Trending Summer Look",
      description:
        "Discover the hottest summer trends inspired by your favorite influencers and celebrities.",
      image:
        "https://images.pexels.com/photos/8945235/pexels-photo-8945235.jpeg?_gl=1*27xeer*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NTA0MDYwMTUkbzEkZzEkdDE3NTA0MDY2NzckajU5JGwwJGgw",
    },
    {
      id: 2,
      title: "Red Carpet Ready",
      description:
        "Get inspired by award show glamour and recreate iconic red carpet moments.",
      image:
        "https://images.pexels.com/photos/6494104/pexels-photo-6494104.jpeg",
    },
    {
      id: 3,
      title: "Street Style Chic",
      description:
        "Embrace effortless street style inspired by fashion influencers around the world.",
      image:
        "https://images.pexels.com/photos/7871153/pexels-photo-7871153.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl mb-8 leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-sanav hover:bg-sanav-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Explore Collection
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-sanav"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
