// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { Textarea } from '@/components/ui/textarea';
// import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import { User, Save, Palette, ShoppingBag, Heart, ChevronDown, Sparkles } from 'lucide-react';
// import Layout from '@/components/Layout';
// import GradientText from './GradientText'


// interface ProfileFormData {
//   gender: string;
//   sizes: string[];
//   favoriteInfluencers: string[];
//   favoriteCelebrities: string[];
//   favoriteShows: string[];
//   favoriteDesigners: string[];
//   fashionPersonality: string;
//   budget: string;
//   styleKeywords: string[];
//   fashionGoals: string;
//   colorPreferences: string[];
//   preferredBrands: string[];
//   occasions: string[];
//   shoppingPreferences: string[];
// }

// const Profile = () => {
//   const { register, handleSubmit, setValue, watch } = useForm<ProfileFormData>({
//     defaultValues: {
//       gender: 'female',
//       sizes: [],
//       favoriteInfluencers: [],
//       favoriteCelebrities: [],
//       favoriteShows: [],
//       favoriteDesigners: [],
//       fashionPersonality: '',
//       budget: '',
//       styleKeywords: [],
//       fashionGoals: '',
//       colorPreferences: [],
//       preferredBrands: [],
//       occasions: [],
//       shoppingPreferences: []
//     }
//   });

//   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
//   const [selectedStyleKeywords, setSelectedStyleKeywords] = useState<string[]>([]);
//   const [selectedColorPreferences, setSelectedColorPreferences] = useState<string[]>([]);
//   const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
//   const [selectedCelebrities, setSelectedCelebrities] = useState<string[]>([]);
//   const [selectedShows, setSelectedShows] = useState<string[]>([]);
//   const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
//   const [selectedShoppingPreferences, setSelectedShoppingPreferences] = useState<string[]>([]);

//   const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

//   const influencers = [
//     'Nupur Singh',
//     'Komal Pandey',
//     'Gurleen Gambhir',
//     'Vrindasurii',
//     'Jainee Gandhi',
//     'Prerna Chabra',
//     'Simren Sanghvi',
//     'Viriti Malhotra',
//     'Alex costa',
//     'Vaibhav Keshwani',
//     'Ankit Chopra',
//     'San Kalra'
//   ];

//   const celebrities = [
//     'Ranbir Kapoor',
//     'Ranveer Singh',
//     'Ram Charan',
//     'Allu Arjun',
//     'Kartik Aryan',
//     'Virat kohli',
//     'Dulqer Salman',
//     'Vijay Devarakonda',
//     'Vicky Khaushal',
//     'Shahrukh Khan',
//     'Alia Bhat',
//     'Deepika Padukone',
//     'Annanya Pandey',
//     'Shradha Kapoor',
//     'Jhanvi Kapoor',
//     'Samantha',
//     'Sai Pallavi',
//     'Rashmika',
//     'Pooja Hegde',
//     'Sri leela'
//   ];

//   const shows = [
//     'Gossip Girl',
//     'Friends',
//     'Emily in Paris',
//     'The Devil Wears Prada',
//     'Crazy Rich Asians',
//     'Made for Each Other',
//     'Fashion Police'
//   ];

//   const designers = [
//     'Sabyasachi Mukherjee',
//     'Manish Malhotra',
//     'Ritu Kumar',
//     'Tarun Tahiliani',
//     'Rohit Bal',
//     'Anita Dongre',
//     'Masaba Gupta',
//     'Vikram Phadnis',
//     'Giorgio Armani',
//     'Chanel',
//     'Versace',
//     'Tom Ford',
//     'Stella McCartney',
//     'Alexander McQueen',
//     'Valentino',
//     'Marc Jacobs'
//   ];

//   const fashionPersonalities = [
//     'Classic & Timeless',
//     'Trendy & Fashion-Forward',
//     'Boho & Free-Spirited',
//     'Minimalist & Clean',
//     'Edgy & Bold',
//     'Romantic & Feminine',
//     'Sporty & Casual',
//     'Glamorous & Luxe'
//   ];

//   const budgetRanges = [
//     'Under ₹2,000',
//     '₹2,000 - ₹5,000',
//     '₹5,000 - ₹10,000',
//     '₹10,000 - ₹25,000',
//     '₹25,000 - ₹50,000',
//     'Above ₹50,000'
//   ];

//   const styleKeywords = [
//     'Vintage', 'Modern', 'Elegant', 'Casual', 'Formal', 'Streetwear',
//     'Sustainable', 'Luxury', 'Affordable', 'Quirky', 'Sophisticated', 'Playful'
//   ];

//   const colorOptions = [
//     'Black', 'White', 'Navy', 'Beige', 'Pink', 'Red',
//     'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Brown'
//   ];

//   const brandOptions = [
//     'Zara', 'H&M', 'Forever 21', 'Nike', 'Adidas', 'Puma',
//     'Levi\'s', 'Calvin Klein', 'Tommy Hilfiger', 'Ralph Lauren',
//     'Gucci', 'Prada', 'Louis Vuitton', 'Chanel', 'Versace',
//     'Sabyasachi', 'Manish Malhotra', 'Ritu Kumar', 'FabIndia'
//   ];

//   const occasionOptions = [
//     'Casual Daily Wear', 'Office/Work', 'Party/Evening', 'Wedding/Festive',
//     'Date Night', 'Travel', 'Sports/Gym', 'Beach/Vacation',
//     'Formal Events', 'Brunch/Lunch', 'Shopping', 'College/University'
//   ];

//   const shoppingPreferenceOptions = [
//     'Online Shopping', 'In-Store Shopping', 'Thrift/Second-hand',
//     'Designer Boutiques', 'Mall Shopping', 'Local Markets',
//     'Flash Sales', 'Pre-order/New Arrivals', 'Sustainable Brands',
//     'International Brands', 'Local/Indian Brands', 'Outlet Stores'
//   ];

//   const handleSizeChange = (size: string, checked: boolean) => {
//     setSelectedSizes(prev => {
//       const newSizes = checked
//         ? [...prev, size]
//         : prev.filter(s => s !== size);
//       setValue('sizes', newSizes);
//       return newSizes;
//     });
//   };

//   const handleStyleKeywordChange = (keyword: string, checked: boolean) => {
//     setSelectedStyleKeywords(prev => {
//       const newKeywords = checked
//         ? [...prev, keyword]
//         : prev.filter(k => k !== keyword);
//       setValue('styleKeywords', newKeywords);
//       return newKeywords;
//     });
//   };

//   const handleColorPreferenceChange = (color: string, checked: boolean) => {
//     setSelectedColorPreferences(prev => {
//       const newColors = checked
//         ? [...prev, color]
//         : prev.filter(c => c !== color);
//       setValue('colorPreferences', newColors);
//       return newColors;
//     });
//   };

//   const handleInfluencerChange = (influencer: string, checked: boolean) => {
//     setSelectedInfluencers(prev => {
//       const newInfluencers = checked
//         ? [...prev, influencer]
//         : prev.filter(i => i !== influencer);
//       setValue('favoriteInfluencers', newInfluencers);
//       return newInfluencers;
//     });
//   };

//   const handleCelebrityChange = (celebrity: string, checked: boolean) => {
//     setSelectedCelebrities(prev => {
//       const newCelebrities = checked
//         ? [...prev, celebrity]
//         : prev.filter(c => c !== celebrity);
//       setValue('favoriteCelebrities', newCelebrities);
//       return newCelebrities;
//     });
//   };

//   const handleShowChange = (show: string, checked: boolean) => {
//     setSelectedShows(prev => {
//       const newShows = checked
//         ? [...prev, show]
//         : prev.filter(s => s !== show);
//       setValue('favoriteShows', newShows);
//       return newShows;
//     });
//   };

//   const handleDesignerChange = (designer: string, checked: boolean) => {
//     setSelectedDesigners(prev => {
//       const newDesigners = checked
//         ? [...prev, designer]
//         : prev.filter(d => d !== designer);
//       setValue('favoriteDesigners', newDesigners);
//       return newDesigners;
//     });
//   };

//   const handleBrandChange = (brand: string, checked: boolean) => {
//     setSelectedBrands(prev => {
//       const newBrands = checked
//         ? [...prev, brand]
//         : prev.filter(b => b !== brand);
//       setValue('preferredBrands', newBrands);
//       return newBrands;
//     });
//   };

//   const handleOccasionChange = (occasion: string, checked: boolean) => {
//     setSelectedOccasions(prev => {
//       const newOccasions = checked
//         ? [...prev, occasion]
//         : prev.filter(o => o !== occasion);
//       setValue('occasions', newOccasions);
//       return newOccasions;
//     });
//   };

//   const handleShoppingPreferenceChange = (preference: string, checked: boolean) => {
//     setSelectedShoppingPreferences(prev => {
//       const newPreferences = checked
//         ? [...prev, preference]
//         : prev.filter(p => p !== preference);
//       setValue('shoppingPreferences', newPreferences);
//       return newPreferences;
//     });
//   };

//   const onSubmit = (data: ProfileFormData) => {
//     console.log('Profile data:', {
//       ...data,
//       sizes: selectedSizes,
//       styleKeywords: selectedStyleKeywords,
//       colorPreferences: selectedColorPreferences,
//       favoriteInfluencers: selectedInfluencers,
//       favoriteCelebrities: selectedCelebrities,
//       favoriteShows: selectedShows,
//       favoriteDesigners: selectedDesigners,
//       preferredBrands: selectedBrands,
//       occasions: selectedOccasions,
//       shoppingPreferences: selectedShoppingPreferences
//     });
//     alert('Profile saved successfully!');
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col min-h-screen bg-sanav/10 mt-20">

//         <main className="flex-grow container mx-auto px-4 py-8">
//           <div className="max-w-5xl mx-auto">
//             {/* Hero Header */}
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center gap-3 mb-6 p-4 bg-white rounded-xl shadow-lg border border-sanav-300">
//                 <div className="p-3 bg-gradient-to-r from-sanav/50 to-sanav rounded-full">
//                   <User className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-left">
//                   <GradientText
//                     colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//                     animationSpeed={8}
//                     showBorder={false}
//                     className="text-3xl font-extrabold"
//                   >
//                     Style Profile
//                   </GradientText>

//                   <p className="text-sanav  font-inter">Discover your unique fashion identity</p>
//                 </div>
//               </div>
//             </div>


//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//               {/* Basic Preferences */}
//               <Card className='border border-sanav-300'>
//                 <CardHeader>
//                   <CardTitle className="text-xl text-sanav-600 flex items-center gap-2">
//                     <div className="p-2 bg-gradient-to-r from-sanav/50 to-sanav rounded-full">
//                       <Palette className="h-5 w-5 text-white" />
//                     </div>

//                     Style Personality
//                   </CardTitle>
//                   <CardDescription className='text-sanav-600 font-medium font-inter'>Define your unique fashion identity</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   {/* Gender Selection */}
//                   <div className="space-y-4">
//                     <Label className="text-base font-semibold">Gender</Label>
//                     <RadioGroup
//                       defaultValue="female"
//                       onValueChange={(value) => setValue('gender', value)}
//                       className="flex flex-wrap gap-6"
//                     >
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="male" id="male" />
//                         <Label htmlFor="male" className="cursor-pointer">Male</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="female" id="female" />
//                         <Label htmlFor="female" className="cursor-pointer">Female</Label>
//                       </div>

//                     </RadioGroup>
//                   </div>

//                   <Separator />
//                 </CardContent>
//               </Card>

//               {/* Size Preferences */}
//               <Card className='border border-sanav-300'>
//                 <CardHeader>


//                   <CardTitle className="text-xl text-sanav-600 flex items-center gap-2">
//                     <div className="p-2 bg-gradient-to-r from-sanav/50 to-sanav rounded-full">
//                       <User className="h-5 w-5 text-white" />
//                     </div>

//                     Size Preferences
//                   </CardTitle>
//                   <CardDescription className='text-sanav-600 font-medium'>Select your preferred clothing sizes</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-3 md:grid-cols-6 gap-4 ">
//                     {sizes.map((size) => (
//                       <div key={size} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-sanav-300">
//                         <Checkbox
//                           id={size}
//                           checked={selectedSizes.includes(size)}
//                           onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
//                           className=" border-sanav-300"
//                         />
//                         <Label htmlFor={size} className="cursor-pointer font-medium">{size}</Label>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Style Inspirations - Clean Layout */}
//               <Card className='border border-sanav-300'>
//                 <CardHeader>
//                   <CardTitle className="text-xl text-sanav-600 flex items-center gap-2">
//                     <div className="p-2 bg-gradient-to-r from-sanav/50 to-sanav rounded-full">
//                       <Sparkles className="h-5 w-5 text-white" />
//                     </div>

//                     Style Inspirations
//                   </CardTitle>
//                   <CardDescription className='text-sanav-600 font-medium'>Tell us who inspires your style choices</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Favorite Influencers */}
//                     <div className="space-y-3">
//                       <Label className="text-base font-semibold">Who are your favorite influencers?</Label>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <div className="relative">
//                             <Input
//                               placeholder="Select your favorite influencers..."
//                               value={
//                                 selectedInfluencers.length === 0
//                                   ? ''
//                                   : selectedInfluencers.length <= 3
//                                     ? selectedInfluencers.join(', ')
//                                     : `${selectedInfluencers.slice(0, 2).join(', ')}, ...`
//                               }
//                               readOnly
//                               className="cursor-pointer pr-10 border-sanav-300 focus:border-primary-accent"
//                             />
//                             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//                           </div>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-full max-h-64 overflow-y-auto bg-white border border-gray-200 shadow-lg">
//                           {influencers.map((influencer) => (
//                             <DropdownMenuCheckboxItem
//                               key={influencer}
//                               checked={selectedInfluencers.includes(influencer)}
//                               onCheckedChange={(checked) => handleInfluencerChange(influencer, checked)}
//                               className="text-sm hover:bg-gray-50"
//                             >
//                               {influencer}
//                             </DropdownMenuCheckboxItem>
//                           ))}
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </div>


//                     {/* Favorite Celebrities */}
//                     <div className="space-y-3">
//                       <Label className="text-base font-semibold">Who are your favorite celebrities?</Label>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <div className="relative">
//                             <Input
//                               placeholder="Select your favorite celebrities..."
//                               value={
//                                 selectedCelebrities.length === 0
//                                   ? ''
//                                   : selectedCelebrities.length <= 3
//                                     ? selectedCelebrities.join(', ')
//                                     : `${selectedCelebrities.slice(0, 2).join(', ')}, ...`
//                               }
//                               readOnly
//                               className="cursor-pointer pr-10 border-sanav-300 focus:border-primary-accent"
//                             />
//                             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//                           </div>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-full max-h-64 overflow-y-auto bg-white border border-gray-200 shadow-lg">
//                           {celebrities.map((celebrity) => (
//                             <DropdownMenuCheckboxItem
//                               key={celebrity}
//                               checked={selectedCelebrities.includes(celebrity)}
//                               onCheckedChange={(checked) => handleCelebrityChange(celebrity, checked)}
//                               className="text-sm hover:bg-gray-50"
//                             >
//                               {celebrity}
//                             </DropdownMenuCheckboxItem>
//                           ))}
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </div>

//                     {/* Favorite Movies/TV Shows */}
//                     <div className="space-y-3">
//                       <Label className="text-base font-semibold">What are your favorite movies/TV shows?</Label>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <div className="relative">
//                             <Input
//                               placeholder="Select your favorite movies/TV shows..."
//                               value={
//                                 selectedShows.length === 0
//                                   ? ''
//                                   : selectedShows.length <= 3
//                                     ? selectedShows.join(', ')
//                                     : `${selectedShows.slice(0, 2).join(', ')}, ...`
//                               }
//                               readOnly
//                               className="cursor-pointer pr-10 border-sanav-300 focus:border-primary-accent"
//                             />
//                             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//                           </div>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-full max-h-64 overflow-y-auto bg-white border border-gray-200 shadow-lg">
//                           {shows.map((show) => (
//                             <DropdownMenuCheckboxItem
//                               key={show}
//                               checked={selectedShows.includes(show)}
//                               onCheckedChange={(checked) => handleShowChange(show, checked)}
//                               className="text-sm hover:bg-gray-50"
//                             >
//                               {show}
//                             </DropdownMenuCheckboxItem>
//                           ))}
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </div>

//                     {/* Favorite Designers */}
//                     <div className="space-y-3">
//                       <Label className="text-base font-semibold">Who are your favorite designers?</Label>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <div className="relative">
//                             <Input
//                               placeholder="Select your favorite designers..."
//                               value={
//                                 selectedDesigners.length === 0
//                                   ? ''
//                                   : selectedDesigners.length <= 3
//                                     ? selectedDesigners.join(', ')
//                                     : `${selectedDesigners.slice(0, 2).join(', ')}, ...`
//                               }
//                               readOnly
//                               className="cursor-pointer pr-10 border-sanav-300 focus:border-primary-accent"
//                             />
//                             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//                           </div>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-full max-h-64 overflow-y-auto bg-white border border-gray-200 shadow-lg">
//                           {designers.map((designer) => (
//                             <DropdownMenuCheckboxItem
//                               key={designer}
//                               checked={selectedDesigners.includes(designer)}
//                               onCheckedChange={(checked) => handleDesignerChange(designer, checked)}
//                               className="text-sm hover:bg-gray-50"
//                             >
//                               {designer}
//                             </DropdownMenuCheckboxItem>
//                           ))}
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Style Preferences - Mixed Selection Methods */}
//               <Card className='border border-sanav-300'>
//   <CardHeader>
//     <CardTitle className="text-xl text-sanav-600 flex items-center gap-2">
//       <div className="p-2 bg-gradient-to-r from-sanav/50 to-sanav rounded-full">
//         <ShoppingBag className="h-5 w-5 text-white" />
//       </div>
//       Style Preferences
//     </CardTitle>
//     <CardDescription className='text-sanav-600 font-medium'>
//       Choose your preferences using different selection methods
//     </CardDescription>
//   </CardHeader>

//   <CardContent className="space-y-6">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
//       {/* Preferred Brands - Dropdown Menu */}
//       <div className="space-y-4">
//         <Label className="text-base font-semibold">Preferred Brands</Label>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <div className="relative w-full">
//               <Input
//                 readOnly
//                 placeholder="Select brands"
//                 value={
//                   selectedBrands.length === 0
//                     ? ''
//                     : selectedBrands.length <= 3
//                     ? selectedBrands.join(', ')
//                     : `${selectedBrands.slice(0, 2).join(', ')}, ...`
//                 }
//                 className="cursor-pointer pr-10 border-sanav-300 focus:border-primary-accent"
//               />
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-56 max-h-64 overflow-y-auto bg-white border border-gray-200 shadow-lg">
//             {brandOptions.map((brand) => (
//               <DropdownMenuCheckboxItem
//                 key={brand}
//                 checked={selectedBrands.includes(brand)}
//                 onCheckedChange={(checked) => handleBrandChange(brand, checked)}
//                 className="text-sm hover:bg-gray-50"
//               >
//                 {brand}
//               </DropdownMenuCheckboxItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>

//     </div>
//   </CardContent>
// </Card>


//               {/* Save Button */}
//               <div className="flex justify-center pt-6">
//                 <Button
//                   type="submit"
//                   className="bg-sanav hover:bg-primary-accent/90 text-white px-8 py-3 text-lg font-semibold flex items-center gap-2 min-w-[200px]"
//                 >
//                   <Save className="h-5 w-5" />
//                   Save My Profile
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </main>
//       </div>
//     </Layout>
//   );
// };

// export default Profile;

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  X,
  Heart,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Stars,
  Camera,
  Users,
  Tv,
  Film,
  Crown,
  Wand2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

// Sample data for style inspiration
const sampleCelebrities = [
  "Zendaya",
  "Timothée Chalamet",
  "Harry Styles",
  "Rihanna",
  "Ryan Gosling",
  "Anya Taylor-Joy",
  "Michael B. Jordan",
  "Emma Stone",
  "Idris Elba",
  "Margot Robbie",
];

const sampleInfluencers = [
  "Chiara Ferragni",
  "James Charles",
  "Addison Rae",
  "David Dobrik",
  "Emma Chamberlain",
  "Jeffree Star",
  "Nikkie de Jager",
  "Bretman Rock",
  "Jackie Aina",
  "Patrick Starrr",
];

const sampleDesigners = [
  "Virgil Abloh",
  "Alessandro Michele",
  "Jacquemus",
  "Maria Grazia Chiuri",
  "Jonathan Anderson",
  "Demna Gvasalia",
  "Kim Jones",
  "Gabriela Hearst",
  "Christopher Bailey",
  "Stella McCartney",
];

const sampleMoviesTv = [
  "Euphoria",
  "The Devil Wears Prada",
  "Bridgerton",
  "Emily in Paris",
  "Sex and the City",
  "Gossip Girl",
  "The Great Gatsby",
  "Black Panther",
  "Crazy Rich Asians",
  "Ocean's 8",
];

const sampleBrands = [
  "Chanel",
  "Gucci",
  "Louis Vuitton",
  "Prada",
  "Dior",
  "Versace",
  "Saint Laurent",
  "Balenciaga",
  "Hermès",
  "Bottega Veneta",
  "Off-White",
  "Supreme",
  "Nike",
  "Adidas",
  "Zara",
  "H&M",
  "Uniqlo",
  "COS",
  "Acne Studios",
  "Ganni",
];

// Real celebrity, influencer, designer, and entertainment-inspired content
const moodBoardImages = [
  {
    id: 1,
    aesthetic: "Zendaya's Red Carpet Elegance",
    image: "https://images.pexels.com/photos/7608688/pexels-photo-7608688.jpeg",
    description:
      "Sophisticated red carpet glamour inspired by Zendaya's iconic looks",
    category: "Celebrity Fashion",
    celebrity: "Zendaya",
    liked: false,
  },
  {
    id: 2,
    aesthetic: "Harry Styles' Gender-Fluid Fashion",
    image:
      "https://images.pexels.com/photos/31003288/pexels-photo-31003288.jpeg",
    description:
      "Bold, boundary-breaking style inspired by Harry Styles' fashion evolution",
    category: "Celebrity Style",
    celebrity: "Harry Styles",
    liked: false,
  },
  {
    id: 3,
    aesthetic: "Chiara Ferragni's Influencer Chic",
    image: "https://images.pexels.com/photos/9154880/pexels-photo-9154880.jpeg",
    description:
      "Instagram-worthy power dressing inspired by top fashion influencers",
    category: "Influencer Style",
    celebrity: "Chiara Ferragni",
    liked: false,
  },
  {
    id: 4,
    aesthetic: "Euphoria's Bold Fashion",
    image:
      "https://images.pexels.com/photos/30362159/pexels-photo-30362159.jpeg",
    description:
      "Experimental, colorful looks inspired by Euphoria's groundbreaking wardrobe",
    category: "TV Show Fashion",
    celebrity: "Euphoria Cast",
    liked: false,
  },
  {
    id: 5,
    aesthetic: "Bridgerton's Period Drama Elegance",
    image:
      "https://images.pexels.com/photos/32626843/pexels-photo-32626843.jpeg",
    description: "Regency-inspired modern fashion from the hit Netflix series",
    category: "TV Show Fashion",
    celebrity: "Bridgerton Cast",
    liked: false,
  },
  {
    id: 6,
    aesthetic: "Runway Model Editorial",
    image: "https://images.pexels.com/photos/262039/pexels-photo-262039.jpeg",
    description:
      "High fashion runway looks from top designers and fashion weeks",
    category: "Designer Fashion",
    celebrity: "Fashion Week",
    liked: false,
  },
  {
    id: 7,
    aesthetic: "Luxury Magazine Editorial",
    image:
      "https://images.pexels.com/photos/13633367/pexels-photo-13633367.jpeg",
    description:
      "Sophisticated editorial styling inspired by luxury fashion magazines",
    category: "Editorial Fashion",
    celebrity: "Fashion Icons",
    liked: false,
  },
];

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    if (!selected.includes(option)) {
      onChange([...selected, option]);
    }
    setIsOpen(false);
  };

  const handleRemove = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selected.filter((item) => item !== option));
  };

  return (
    <div className="relative" ref={containerRef}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="min-h-[2.5rem] w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm ring-offset-background cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-2 flex-1">
          {selected.length === 0 ? (
            <span className="text-gray-500 font-inter">{placeholder}</span>
          ) : (
            selected.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Badge
                  className="bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 transition-all duration-300 cursor-pointer font-inter text-xs px-3 py-1 shadow-sm"
                  onClick={(e) => handleRemove(item, e)}
                >
                  {item}
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              </motion.div>
            ))
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 flex-shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-[9999] mt-2 max-h-60 w-full overflow-auto rounded-xl border-2 border-gray-200 bg-white/95 backdrop-blur-md text-gray-900 shadow-xl"
          >
            {options
              .filter((option) => !selected.includes(option))
              .map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.15 }}
                  className="relative flex w-full cursor-pointer select-none items-center rounded-lg py-3 px-4 text-sm outline-none hover:bg-primary/10 hover:text-primary transition-all duration-200 font-inter"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </motion.div>
              ))}
            {options.filter((option) => !selected.includes(option)).length ===
              0 && (
              <div className="py-3 px-4 text-sm text-gray-500 text-center font-inter">
                All options selected
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Profile = () => {
  const [gender, setGender] = useState<string>("");
  const [topSize, setTopSize] = useState<string>("");
  const [bottomSize, setBottomSize] = useState<string>("");
  const [fitPreference, setFitPreference] = useState<string>("");

  const [selectedCelebrities, setSelectedCelebrities] = useState<string[]>([]);
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);
  const [selectedMoviesTv, setSelectedMoviesTv] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [moodBoard, setMoodBoard] = useState(moodBoardImages);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);

  const toggleMoodLike = (id: number) => {
    setMoodBoard((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item,
      ),
    );
  };

  const nextMoodImage = () => {
    setCurrentMoodIndex((prev) => (prev + 1) % moodBoard.length);
  };

  const prevMoodImage = () => {
    setCurrentMoodIndex(
      (prev) => (prev - 1 + moodBoard.length) % moodBoard.length,
    );
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 overflow-x-hidden mt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-xl"
        />
      </div>

      <div className="relative container mx-auto px-4 py-12 max-w-6xl">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-primary bg-clip-text text-transparent">
              Style Profile
            </h1>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Stars className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto font-crimson italic leading-relaxed"
          >
            Create your fashion identity inspired by A-list celebrities, top
            influencers, and iconic entertainment moments. Discover looks that
            match your style DNA and express your inner star power.
          </motion.p>

          
        </motion.div>

        <div className="space-y-16">
          {/* Section 1: Gender Selection */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <motion.h2
              className="text-3xl font-playfair font-semibold text-gray-900 mb-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Gender Identity
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {["Male", "Female"].map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 border-2 rounded-2xl ${
                      gender === option
                        ? "ring-2 ring-primary border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg"
                        : "hover:border-primary/50 hover:shadow-lg border-gray-200 bg-white/80"
                    }`}
                    onClick={() => setGender(option)}
                  >
                    <CardContent className="p-8 text-center">
                      <span
                        className={`text-xl font-inter font-medium transition-colors ${
                          gender === option ? "text-primary" : "text-gray-700"
                        }`}
                      >
                        {option}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 2: Size Selection */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <motion.h2
              className="text-3xl font-playfair font-semibold text-gray-900 mb-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Size Preferences
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Top Size",
                  value: topSize,
                  setter: setTopSize,
                  options: ["XS", "S", "M", "L", "XL", "XXL"],
                },
                {
                  label: "Bottom Size",
                  value: bottomSize,
                  setter: setBottomSize,
                  options: [
                    "24",
                    "26",
                    "28",
                    "30",
                    "32",
                    "34",
                    "36",
                    "38",
                    "40",
                  ],
                },
                {
                  label: "Fit Preference",
                  value: fitPreference,
                  setter: setFitPreference,
                  options: ["Slim", "Regular", "Oversized"],
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="space-y-3"
                >
                  <label className="text-sm font-inter font-medium text-gray-700 block">
                    {item.label}
                  </label>
                  <Select value={item.value} onValueChange={item.setter}>
                    <SelectTrigger className="bg-white/80 border-2 border-gray-200 rounded-xl hover:border-primary/50 transition-all duration-300 font-inter">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md border-2 border-gray-200 rounded-xl">
                      {item.options.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="font-inter"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: Style Inspiration */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <motion.h2
              className="text-3xl font-playfair font-semibold text-gray-900 mb-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Style Inspiration
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Favorite Celebrities",
                  selected: selectedCelebrities,
                  setter: setSelectedCelebrities,
                  options: sampleCelebrities,
                  placeholder: "Search and select celebrities...",
                },
                {
                  label: "Favorite Influencers",
                  selected: selectedInfluencers,
                  setter: setSelectedInfluencers,
                  options: sampleInfluencers,
                  placeholder: "Search and select influencers...",
                },
                {
                  label: "Favorite Designers",
                  selected: selectedDesigners,
                  setter: setSelectedDesigners,
                  options: sampleDesigners,
                  placeholder: "Search and select designers...",
                },
                {
                  label: "Movies/TV Shows for Style Inspiration",
                  selected: selectedMoviesTv,
                  setter: setSelectedMoviesTv,
                  options: sampleMoviesTv,
                  placeholder: "Search and select shows/movies...",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="space-y-3"
                >
                  <label className="text-sm font-inter font-medium text-gray-700 block">
                    {item.label}
                  </label>
                  <MultiSelect
                    options={item.options}
                    selected={item.selected}
                    onChange={item.setter}
                    placeholder={item.placeholder}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: Preferred Brands */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <motion.h2
              className="text-3xl font-playfair font-semibold text-gray-900 mb-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Preferred Brands
            </motion.h2>
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-3"
              >
                <label className="text-sm font-inter font-medium text-gray-700 block">
                  Select your favorite fashion brands
                </label>
                <MultiSelect
                  options={sampleBrands}
                  selected={selectedBrands}
                  onChange={setSelectedBrands}
                  placeholder="Search and select your preferred brands..."
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Section 6: Style Inspiration Gallery */}
          {/* <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <motion.h2
              className="text-3xl font-playfair font-semibold text-gray-900 mb-4 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Style Inspiration Gallery
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8 text-center font-crimson italic text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Explore outfit ideas inspired by celebrities, influencers,
              designers, and iconic entertainment moments
            </motion.p>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl border-2 border-gray-200">
                <CardContent className="p-0">
                  <div className="relative h-80 md:h-96 flex items-center justify-center">
                    <motion.div
                      key={currentMoodIndex}
                      initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={moodBoard[currentMoodIndex].image}
                        alt={moodBoard[currentMoodIndex].aesthetic}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="flex gap-2 mb-3">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="inline-block bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-inter font-medium"
                          >
                            {moodBoard[currentMoodIndex].category}
                          </motion.div>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.4 }}
                            className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-inter font-medium text-gray-800"
                          >
                            {moodBoard[currentMoodIndex].celebrity}
                          </motion.div>
                        </div>
                        <motion.h3
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          className="text-3xl md:text-4xl font-playfair font-bold mb-2"
                        >
                          {moodBoard[currentMoodIndex].aesthetic}
                        </motion.h3>
                        <motion.p
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                          className="text-gray-200 text-lg font-inter"
                        >
                          {moodBoard[currentMoodIndex].description}
                        </motion.p>
                      </div> */}

                      {/* Like button */}
                      {/* <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-6 right-6"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/90 hover:bg-white backdrop-blur-sm border-2 border-white/50 rounded-full"
                          onClick={() =>
                            toggleMoodLike(moodBoard[currentMoodIndex].id)
                          }
                        >
                          <Heart
                            className={`h-5 w-5 transition-all duration-300 ${
                              moodBoard[currentMoodIndex].liked
                                ? "fill-red-500 text-red-500 scale-110"
                                : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation buttons */}
              {/* <motion.div
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg border-2 border-white/50 rounded-full h-12 w-12"
                  onClick={prevMoodImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </motion.div> */}

              {/* <motion.div
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg border-2 border-white/50 rounded-full h-12 w-12"
                  onClick={nextMoodImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </div> */}

            {/* Enhanced mood board indicators */}
            {/* <div className="flex justify-center mt-8 space-x-3">
              {moodBoard.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMoodIndex
                      ? "bg-primary shadow-lg scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentMoodIndex(index)}
                />
              ))}
            </div>
          </motion.section> */} 

          {/* Enhanced Save Profile Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-center pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="px-16 py-8 text-xl font-playfair font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-2xl border-2 border-primary/20"
              >
                Save My Style Profile
              </Button>
            </motion.div>
            <motion.p
              className="text-gray-500 mt-6 max-w-md mx-auto font-crimson italic text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Your style profile helps us curate personalized recommendations
              that speak to your unique fashion sensibility
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;

