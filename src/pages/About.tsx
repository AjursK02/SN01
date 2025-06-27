
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Info, Users, Rocket, Trophy } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-background to-background dark:from-purple-900/20 dark:via-background dark:to-background py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent)]" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-sanav bg-clip-text text-transparent">
            About SANAV
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Redefining fashion discovery by connecting you with the styles of your favorite celebrities and influencers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="gradient">Our Mission</Button>
            <Button size="lg" variant="outline" className="border-purple-300 hover:border-purple-500">
              Join Our Team
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                SANAV began with a simple question: "Where can I find that outfit I saw on my favorite celebrity?" 
                What started as a personal quest quickly evolved into a mission to make celebrity and influencer 
                fashion accessible to everyone.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded in 2023 by a team of fashion enthusiasts and tech innovators, we've built a platform 
                that bridges the gap between inspiration and acquisition. Our AI-powered search technology 
                can identify outfits across movies, TV shows, and social media, connecting you directly with 
                identical or similar items you can purchase.
              </p>
              <p className="font-medium">
                From red carpet glamour to everyday street style, SANAV is your gateway to celebrity-inspired fashion.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-purple-200 dark:shadow-purple-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="SANAV Team" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sanav-gradient rounded-full opacity-60 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission to transform how people discover and shop for fashion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Info className="h-8 w-8 text-purple-500" />, 
                title: "Transparency", 
                description: "We believe in clear communication and honest product information" 
              },
              { 
                icon: <Users className="h-8 w-8 text-sanav" />, 
                title: "Inclusivity", 
                description: "Fashion is for everyone, regardless of size, budget, or background" 
              },
              { 
                icon: <Rocket className="h-8 w-8 text-purple-500" />, 
                title: "Innovation", 
                description: "Constantly pushing boundaries to improve fashion discovery" 
              },
              { 
                icon: <Trophy className="h-8 w-8 text-sanav" />, 
                title: "Quality", 
                description: "Curating the best fashion options without compromise" 
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100 dark:border-purple-900/30"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Style?</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Join the SANAV community today and transform the way you discover and shop celebrity fashion
          </p>
          <Button size="lg" variant="glow" className="bg-gradient-to-r from-sanav to-purple-500 border-0 hover:from-sanav-dark hover:to-purple-600">
            Get Started
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
