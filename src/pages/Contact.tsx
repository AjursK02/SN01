
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about SANAV? We're here to help and eager to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: <Mail className="h-6 w-6" />, 
                title: "Email Us", 
                detail: "hello@sanav.com",
                description: "For general inquiries and support" 
              },
              { 
                icon: <Phone className="h-6 w-6" />, 
                title: "Call Us", 
                detail: "+1 (555) 123-4567",
                description: "Mon-Fri from 9am to 6pm EST" 
              },
              { 
                icon: <MapPin className="h-6 w-6" />, 
                title: "Visit Us", 
                detail: "San Francisco, CA",
                description: "123 Fashion Avenue, 10th Floor" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/30 text-center group hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-medium text-sanav mb-2">{item.detail}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100 dark:border-purple-900/30"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sanav/10 text-sanav mb-6">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you as soon as possible
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      required 
                      className="border-purple-200 dark:border-purple-900/50 focus:border-sanav"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required
                      className="border-purple-200 dark:border-purple-900/50 focus:border-sanav" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    required 
                    className="border-purple-200 dark:border-purple-900/50 focus:border-sanav"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    required
                    rows={6}
                    className="border-purple-200 dark:border-purple-900/50 focus:border-sanav" 
                  />
                </div>
                
                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Location</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our headquarters in the heart of San Francisco's fashion district
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl h-96 border border-purple-100 dark:border-purple-900/30"
            >
              <iframe 
                title="SANAV Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.15340190663!2d-122.43869505!3d37.7726398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858086a1d2d66b%3A0xd39e04e818bd176!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1683240536041!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about SANAV
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do I search for a specific outfit?",
                  answer: "You can search by celebrity name, movie/TV show title, or use our advanced search feature to filter by clothing type, brand, or occasion."
                },
                {
                  question: "Do you ship internationally?",
                  answer: "Yes! SANAV partners with retailers that offer worldwide shipping. Shipping costs and delivery times vary by location and retailer."
                },
                {
                  question: "How do I return a product?",
                  answer: "Returns are handled directly by our retail partners. Each product page includes specific return policy information for the linked retailer."
                },
                {
                  question: "Can I suggest a celebrity or outfit to add?",
                  answer: "Absolutely! We welcome suggestions from our community. Use the form on this page to send us your request."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/30"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
