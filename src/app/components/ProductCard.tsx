import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
}

export function ProductCard({ image, category, name, price, salePrice, description }: ProductCardProps) {
  const hasDiscount = salePrice && salePrice < price;

  return (
    <motion.div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {hasDiscount && (
          <motion.div 
            className="absolute top-4 right-4 px-3 py-1 rounded-full" 
            style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="font-['Inter']" style={{ fontSize: '12px', fontWeight: 600 }}>SALE</span>
          </motion.div>
        )}
        
        {/* Quick View Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(62, 39, 35, 0.9)' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button 
            className="px-6 py-3 rounded-full"
            style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ scale: 1.05, y: 0, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-['Inter']" style={{ fontSize: '14px', fontWeight: 600 }}>Quick View</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <motion.p 
          className="font-['Inter'] mb-2" 
          style={{ fontSize: '12px', fontWeight: 500, color: '#6D4C41', letterSpacing: '1px', textTransform: 'uppercase' }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {category}
        </motion.p>

        {/* Product Name */}
        <h3 className="font-['Playfair_Display'] mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#3E2723', lineHeight: '1.3' }}>
          {name}
        </h3>

        {/* Description */}
        <p className="font-['Inter'] mb-4" style={{ fontSize: '14px', color: '#6D4C41', lineHeight: '1.6' }}>
          {description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <motion.span 
              className="font-['Playfair_Display']" 
              style={{ fontSize: '24px', fontWeight: 600, color: '#3E2723' }}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ₹{salePrice || price}
            </motion.span>
            {hasDiscount && (
              <span className="font-['Inter'] line-through" style={{ fontSize: '16px', color: '#999' }}>
                ₹{price}
              </span>
            )}
          </div>

          <motion.button 
            className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300" 
            style={{ backgroundColor: '#3E2723' }}
            whileHover={{ scale: 1.15, rotate: 360, backgroundColor: '#D4AF37' }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ color: '#3E2723' }}
              transition={{ duration: 0.2 }}
            >
              <ShoppingCart size={18} style={{ color: '#D4AF37' }} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}