
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Summer 2025 Celebrity Fashion Trends to Watch",
      excerpt: "Discover the hottest trends celebrities will be wearing this summer season and how to incorporate them into your wardrobe.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      category: "Trends",
      date: "May 15, 2025",
      readTime: "5 min read",
      author: {
        name: "Elena Rodriguez",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      }
    },
    {
      id: 2,
      title: "The Sustainable Fashion Revolution in Hollywood",
      excerpt: "How A-list celebrities are leading the charge for sustainable and ethical fashion choices on and off the red carpet.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      category: "Sustainability",
      date: "May 10, 2025",
      readTime: "7 min read",
      author: {
        name: "Marcus Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      }
    },
    {
      id: 3,
      title: "Iconic TV Show Outfits That Influenced a Generation",
      excerpt: "From 'Friends' to 'Euphoria', we explore how television fashion has shaped real-world style trends over the decades.",
      image: "https://images.unsplash.com/photo-1618022257935-7dfeac77774e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      category: "TV Fashion",
      date: "May 5, 2025",
      readTime: "8 min read",
      author: {
        name: "Sophia Turner",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      }
    },
    {
      id: 4,
      title: "Budget-Friendly Alternatives to Celebrity Red Carpet Looks",
      excerpt: "How to achieve stunning red carpet inspired outfits without breaking the bank - our stylists share their secrets.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      category: "Style Guide",
      date: "April 28, 2025",
      readTime: "6 min read",
      author: {
        name: "Jordan Taylor",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      }
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-background to-background dark:from-purple-900/20 dark:via-background dark:to-background py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">SANAV Blog</h1>
            <p className="text-lg text-muted-foreground">
              Discover the latest in celebrity fashion, style insights, and trend forecasts
            </p>
          </motion.div>
          
          {/* Search */}
          <div className="relative mb-12 max-w-md">
            <Input
              placeholder="Search articles..."
              className="pr-10 border-purple-300 focus:border-purple-500"
            />
            <BookOpen className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["All Posts", "Trends", "TV Fashion", "Movies", "Influencers", "Style Guide", "Sustainability"].map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "gradient" : "outline"}
                size="sm"
                className={index === 0 ? "" : "border-purple-300 hover:border-purple-500"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-8 items-center"
          >
            <div className="md:col-span-3 order-2 md:order-1">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 rounded-full">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar>
                  <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                  <AvatarFallback>{featuredPost.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{featuredPost.author.name}</p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{featuredPost.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <Button variant="gradient" className="px-6">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Regular Posts */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/80 dark:bg-black/60 text-purple-800 dark:text-purple-300 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{post.author.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {post.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-purple-300 hover:border-purple-500">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Style Update</h2>
            <p className="text-purple-100 mb-8">
              Subscribe to our newsletter for the latest celebrity fashion insights and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="glow" className="bg-white text-purple-900 hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
