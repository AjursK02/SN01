
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Celebrities from "./pages/Celebrities";
import Movies from "./pages/Movies";
import Influencers from "./pages/Influencers";
import TvShows from "./pages/TvShows";
import OutfitDetail from "./pages/OutfitDetail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Designers from "./pages/Designers";
import ViewOutfit from "./pages/ViewOutfit";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/designers" element={<Designers/>}/>
          <Route path="/outfit/:id" element={<OutfitDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view-outfit/:id" element={<ViewOutfit />} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
