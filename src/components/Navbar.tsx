
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, UserRound } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { toast } from '@/hooks/use-toast';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteInfluencers, setFavoriteInfluencers] = useState('');
  const [favoriteCelebrities, setFavoriteCelebrities] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');

  const categories = [
    { name: "Celebrities", path: "/celebrities" },
    { name: "Movies", path: "/movies" },
    { name: "Influencers", path: "/influencers" },
    { name: "TV Shows", path: "/tv-shows" },
    { name: "Designers", path: "/designers" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, we would redirect to search results page
  };

  const handleProfileSubmit = () => {
    // In a real app, we would save this information to a user profile
    console.log("Profile preferences:", { favoriteInfluencers, favoriteCelebrities, favoriteGenre });
    toast({
      title: "Preferences saved!",
      description: "Your style preferences have been updated."
    });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-border mb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center mx-4 h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">SANAV</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-8 w-3/6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-sm font-medium hover:text-sanav transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
          {/* <div className="hidden md:flex items-center justify-between space-x-10 w-3/6">
  <AnimatedTabs categories={categories} />
</div> */}

          {/* Desktop Search and Profile */}
          <div className="hidden md:flex justify-end items-center space-x-4 w-2/6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search outfits..."
                className="w-64 pl-3 pr-10 py-2 rounded-full text-sm border border-border focus:outline-none focus:ring-2 focus:ring-sanav focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sanav"
              >
                <Search size={18} />
              </button>
            </form>

            <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                 <Link to="/profile"><UserRound size={20} /></Link> 
            </Button>
            
            {/* Profile Dialog
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <UserRound size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Your Style Profile</DialogTitle>
                  <DialogDescription>
                    Tell us about your style preferences to get personalized recommendations.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="influencers">Who are your favorite influencers?</Label>
                    <input
                      id="influencers"
                      placeholder="e.g., Emma Chamberlain, Hailey Bieber"
                      className="w-full rounded-md border border-border p-2"
                      value={favoriteInfluencers}
                      onChange={(e) => setFavoriteInfluencers(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="celebrities">Who are your favorite celebrities?</Label>
                    <input
                      id="celebrities"
                      placeholder="e.g., Zendaya, Harry Styles"
                      className="w-full rounded-md border border-border p-2"
                      value={favoriteCelebrities}
                      onChange={(e) => setFavoriteCelebrities(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>What's your favorite movie/TV genre?</Label>
                    <RadioGroup 
                      value={favoriteGenre} 
                      onValueChange={setFavoriteGenre}
                      className="grid grid-cols-2 gap-2"
                    >
                      {["Drama", "Action", "Comedy", "Sci-Fi", "Fantasy", "Romance"].map((genre) => (
                        <div key={genre} className="flex items-center space-x-2">
                          <RadioGroupItem value={genre} id={`genre-${genre}`} />
                          <Label htmlFor={`genre-${genre}`}>{genre}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleProfileSubmit}>Save preferences</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-sanav hover:bg-secondary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search outfits..."
                className="w-full pl-3 pr-10 py-2 rounded-full text-sm border border-border focus:outline-none focus:ring-2 focus:ring-sanav focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sanav"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Mobile Navigation Links */}
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-sanav hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            
            {/* Mobile Profile Link */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full flex justify-start px-3 py-2 rounded-md text-base font-medium hover:text-sanav hover:bg-secondary"
                >
                  <UserRound size={18} className="mr-2" />
                  Your Style Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Your Style Profile</DialogTitle>
                  <DialogDescription>
                    Tell us about your style preferences to get personalized recommendations.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-influencers">Who are your favorite influencers?</Label>
                    <input
                      id="mobile-influencers"
                      placeholder="e.g., Emma Chamberlain, Hailey Bieber"
                      className="w-full rounded-md border border-border p-2"
                      value={favoriteInfluencers}
                      onChange={(e) => setFavoriteInfluencers(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-celebrities">Who are your favorite celebrities?</Label>
                    <input
                      id="mobile-celebrities"
                      placeholder="e.g., Zendaya, Harry Styles"
                      className="w-full rounded-md border border-border p-2"
                      value={favoriteCelebrities}
                      onChange={(e) => setFavoriteCelebrities(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>What's your favorite movie/TV genre?</Label>
                    <RadioGroup 
                      value={favoriteGenre} 
                      onValueChange={setFavoriteGenre}
                      className="grid grid-cols-2 gap-2"
                    >
                      {["Drama", "Action", "Comedy", "Sci-Fi", "Fantasy", "Romance"].map((genre) => (
                        <div key={genre} className="flex items-center space-x-2">
                          <RadioGroupItem value={genre} id={`mobile-genre-${genre}`} />
                          <Label htmlFor={`mobile-genre-${genre}`}>{genre}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleProfileSubmit} className="w-full">Save preferences</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
// import { Link } from 'react-router-dom';

// const Navbar=()=> {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = ["Celebrities", "Movies", "Influencers", "TV Shows", "Designers"];

//   return (
//     <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//             <h1 className="text-sanav font-editorial text-2xl lg:text-3xl font-bold tracking-tight">
//               SANAV
//             </h1>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-white hover:text-sanav px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:scale-110 transform origin-center"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Desktop Actions */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {/* Search Box */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search outfits..."
//                 className="w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 pl-10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-spring-500 focus:border-transparent transition-all duration-200"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:text-sanav hover:bg-white/10"
//             >
//               <Link to="/profile"><User size={20} /></Link>
//               <span className="sr-only">Account</span>
//             </Button>
//             {/* <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:text-spring-400 hover:bg-white/10 relative"
//             >
//               <ShoppingBag className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-spring-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
//                 0
//               </span>
//               <span className="sr-only">Shopping bag</span>
//             </Button> */}
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:text-spring-400 hover:bg-white/10"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//               <span className="sr-only">Open main menu</span>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-white hover:text-spring-400 block px-3 py-2 text-base font-medium transition-all duration-300 ease-out hover:scale-105 transform origin-left"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             {/* Mobile Search Box */}
//             <div className="px-3 py-2">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 pl-10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-spring-500 focus:border-transparent transition-all duration-200"
//                 />
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 px-3 py-2">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white hover:text-spring-400 hover:bg-white/10"
//               >
//                 <User className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white hover:text-spring-400 hover:bg-white/10 relative"
//               >
//                 <ShoppingBag className="h-5 w-5" />
//                 <span className="absolute -top-1 -right-1 bg-spring-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
//                   0
//                 </span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;