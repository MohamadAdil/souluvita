import { ArrowRight, Heart, Award, Leaf, Gift, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { TestimonialCard } from '../components/TestimonialCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const bestSellersRef = useRef(null);
  const whyUsRef = useRef(null);
  const reviewsRef = useRef(null);
  const faqRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const bestSellersInView = useInView(bestSellersRef, { once: true, amount: 0.2 });
  const whyUsInView = useInView(whyUsRef, { once: true, amount: 0.2 });
  const reviewsInView = useInView(reviewsRef, { once: true, amount: 0.2 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });

  const categories = [
    {
      title: 'Dark Chocolates',
      itemCount: 12,
      image: 'https://images.unsplash.com/photo-1732304718527-4af155ca1948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGFyayUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjYxNDUwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Milk Chocolates',
      itemCount: 15,
      image: 'https://images.unsplash.com/photo-1591754550580-890a9016b687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwY2hvY29sYXRlJTIwcGllY2VzfGVufDF8fHx8MTc2NjE0NTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Assorted Boxes',
      itemCount: 8,
      image: 'https://images.unsplash.com/photo-1635843945732-08f2cc685f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NvcnRlZCUyMGNob2NvbGF0ZSUyMGJveHxlbnwxfHx8fDE3NjYxNDUwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Gift Hampers',
      itemCount: 10,
      image: 'https://images.unsplash.com/photo-1629610306962-a8aa73153d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const bestSellers = [
    {
      image: 'https://images.unsplash.com/photo-1700353763351-cb61036f3232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNob2NvbGF0ZSUyMHRydWZmbGVzfGVufDF8fHx8MTc2NjE0NTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Dark Chocolate',
      name: 'Artisan Truffle Collection',
      price: 899,
      salePrice: 749,
      description: 'Handcrafted dark chocolate truffles with premium cocoa',
    },
    {
      image: 'https://images.unsplash.com/photo-1569622701449-32fe4e90e492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hvY29sYXRlJTIwYmFyfGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Milk Chocolate',
      name: 'Classic Milk Bar',
      price: 399,
      description: 'Smooth and creamy milk chocolate with a rich taste',
    },
    {
      image: 'https://images.unsplash.com/photo-1592290321458-49b80f943a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGZyZWUlMjBjaG9jb2xhdGV8ZW58MXx8fHwxNzY2MTQ1MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sugar-Free',
      name: 'Guilt-Free Delight',
      price: 499,
      description: 'Sugar-free dark chocolate for health-conscious lovers',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      review: 'The best handmade chocolates I\'ve ever tasted! The quality is exceptional and you can really taste the premium ingredients. Perfect for gifting!',
      date: 'Dec 2024',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      review: 'Ordered the assorted box for Diwali. Everyone loved it! The presentation was beautiful and the chocolates were fresh and delicious.',
      date: 'Nov 2024',
    },
    {
      name: 'Anita Desai',
      rating: 5,
      review: 'As someone who loves dark chocolate, the Artisan Truffle Collection is now my absolute favorite. Will definitely order again!',
      date: 'Dec 2024',
    },
  ];

  const faqs = [
    {
      question: 'What is the shelf life of your chocolates?',
      answer: 'Our handmade chocolates have a shelf life of 2-3 weeks when stored in a cool, dry place. We recommend refrigeration during summer months to maintain freshness.',
    },
    {
      question: 'Do you use any preservatives?',
      answer: 'No, we take pride in making all our chocolates without any artificial preservatives, colors, or flavors. We use only premium, natural ingredients.',
    },
    {
      question: 'Can I customize chocolates for gifting?',
      answer: 'Absolutely! We offer custom gift boxes and hampers. You can choose your favorite varieties and we\'ll create a beautiful presentation perfect for any occasion.',
    },
    {
      question: 'Which areas do you deliver to?',
      answer: 'We currently deliver across Mumbai and surrounding areas. For orders outside Mumbai, please contact us for special arrangements.',
    },
    {
      question: 'Are your chocolates suitable for vegetarians?',
      answer: 'Yes, all our chocolates are 100% vegetarian. We also offer vegan options in select varieties.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <img
            src="https://images.unsplash.com/photo-1579523609100-5b868b803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtYWtpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium Chocolates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="inline-block mb-6 px-6 py-2 rounded-full" 
            style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-['Inter']" style={{ fontSize: '14px', fontWeight: 500, color: '#D4AF37', letterSpacing: '2px' }}>
              HANDCRAFTED IN MUMBAI
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-['Playfair_Display'] mb-6" 
            style={{ fontSize: 'clamp(42px, 7vw, 72px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.2', letterSpacing: '-1px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Handcrafted Premium<br />Chocolates Made with Love
          </motion.h1>
          
          <motion.p 
            className="font-['Inter'] max-w-2xl mx-auto mb-10" 
            style={{ fontSize: '18px', color: '#F5F5DC', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the finest artisanal chocolates, handmade in small batches with premium ingredients and no preservatives. Perfect for gifting or indulging yourself.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              onClick={() => onNavigate('shop')}
              className="group px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2"
              style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.5px' }}>Explore Chocolates</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button 
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2"
              style={{ backgroundColor: 'rgba(255, 248, 225, 0.1)', border: '2px solid #FFF8E1', color: '#FFF8E1', backdropFilter: 'blur(10px)' }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 248, 225, 0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.5px' }}>Our Story</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} style={{ color: '#D4AF37' }} />
        </motion.div>
      </motion.section>

      {/* Shop by Category Section */}
      <section ref={categoriesRef} className="py-20" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Browse Collection
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.2' }}>
              Shop by Category
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <CategoryCard
                  title={category.title}
                  itemCount={category.itemCount}
                  image={category.image}
                  onNavigate={() => onNavigate('shop')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section ref={bestSellersRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={bestSellersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Customer Favorites
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.2' }}>
              Best Sellers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={bestSellersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={bestSellersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 rounded-full transition-all duration-300"
              style={{ backgroundColor: '#3E2723', color: '#FFF8E1' }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(62, 39, 35, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.5px' }}>View All Products</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Souluvita Section */}
      <section ref={whyUsRef} className="py-20" style={{ backgroundColor: '#EFEBE9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              What Makes Us Special
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.2' }}>
              Why Choose Souluvita
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={40} style={{ color: '#D4AF37' }} />,
                title: 'Handmade with Love',
                description: 'Every piece crafted by hand in small batches for exceptional quality',
              },
              {
                icon: <Award size={40} style={{ color: '#D4AF37' }} />,
                title: 'Premium Ingredients',
                description: 'Only the finest cocoa and natural ingredients go into our chocolates',
              },
              {
                icon: <Leaf size={40} style={{ color: '#D4AF37' }} />,
                title: 'No Preservatives',
                description: '100% natural with no artificial colors, flavors, or preservatives',
              },
              {
                icon: <Gift size={40} style={{ color: '#D4AF37' }} />,
                title: 'Perfect for Gifting',
                description: 'Beautiful packaging and custom options for every occasion',
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                  whileHover={{ scale: 1.15, rotate: 360, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-['Playfair_Display'] mb-3" style={{ fontSize: '22px', fontWeight: 600, color: '#3E2723' }}>
                  {feature.title}
                </h3>
                <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.7' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section ref={reviewsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Testimonials
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.2' }}>
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={reviewsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Got Questions?
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.2' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="font-['Playfair_Display'] py-5 hover:no-underline" style={{ fontSize: '18px', fontWeight: 600, color: '#3E2723' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-['Inter'] pb-5" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.7' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615289442666-fed9cec7169a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMGJlYW5zJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2NjEzOTI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cacao"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(62, 39, 35, 0.85)' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.2' }}>
            Ready to Experience Premium Chocolates?
          </h2>
          <p className="font-['Inter'] mb-10" style={{ fontSize: '18px', color: '#F5F5DC', lineHeight: '1.7' }}>
            Start your journey with Souluvita today and discover the art of handcrafted chocolate perfection.
          </p>
          <button 
            onClick={() => onNavigate('shop')}
            className="px-10 py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}
          >
            <span className="font-['Inter']" style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.5px' }}>Shop Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}