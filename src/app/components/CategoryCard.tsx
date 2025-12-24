import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryCardProps {
  image: string;
  title: string;
  itemCount: number;
  onNavigate: () => void;
}

export function CategoryCard({ image, title, itemCount, onNavigate }: CategoryCardProps) {
  return (
    <motion.button
      onClick={onNavigate}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Image with Overlay */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          whileHover={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)' }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 border-2 rounded-xl"
          style={{ borderColor: '#D4AF37' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
        <motion.h3 
          className="font-['Playfair_Display'] mb-2" 
          style={{ fontSize: '24px', fontWeight: 600, color: '#FFF8E1', lineHeight: '1.3' }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="font-['Inter'] mb-4" 
          style={{ fontSize: '14px', color: '#F5F5DC' }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {itemCount} Products
        </motion.p>
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-['Inter']" style={{ fontSize: '14px', fontWeight: 500, color: '#D4AF37', letterSpacing: '1px' }}>
            EXPLORE
          </span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight size={16} style={{ color: '#D4AF37' }} />
          </motion.div>
        </motion.div>
      </div>
    </motion.button>
  );
}