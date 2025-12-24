import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#3E2723', color: '#FFF8E1' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div 
                className="w-10 h-10 rounded-full flex items-center justify-center" 
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C9A961 100%)' }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-['Playfair_Display']" style={{ fontSize: '20px', fontWeight: 600, color: '#3E2723' }}>S</span>
              </motion.div>
              <span className="font-['Playfair_Display']" style={{ fontSize: '20px', fontWeight: 600, color: '#FFF8E1' }}>Souluvita</span>
            </div>
            <p className="font-['Inter']" style={{ fontSize: '14px', lineHeight: '1.7', color: '#F5F5DC', marginBottom: '24px' }}>
              Handcrafted premium chocolates made with love in Mumbai. Experience the finest artisanal chocolates with no preservatives.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-full flex items-center justify-center" 
                  style={{ backgroundColor: 'rgba(255, 248, 225, 0.1)' }}
                  whileHover={{ scale: 1.2, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={18} style={{ color: '#D4AF37' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '18px', fontWeight: 600, color: '#D4AF37' }}>Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="font-['Inter']"
                    style={{ fontSize: '14px', color: '#F5F5DC' }}
                    whileHover={{ x: 5, color: '#D4AF37' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '18px', fontWeight: 600, color: '#D4AF37' }}>Our Products</h3>
            <ul className="space-y-3">
              {['Dark Chocolates', 'Milk Chocolates', 'Assorted Boxes', 'Gift Hampers', 'Sugar-Free'].map((product, index) => (
                <motion.li 
                  key={product}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => onNavigate('shop')}
                    className="font-['Inter']"
                    style={{ fontSize: '14px', color: '#F5F5DC' }}
                    whileHover={{ x: 5, color: '#D4AF37' }}
                    transition={{ duration: 0.2 }}
                  >
                    {product}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '18px', fontWeight: 600, color: '#D4AF37' }}>Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span className="font-['Inter']" style={{ fontSize: '14px', color: '#F5F5DC', lineHeight: '1.6' }}>
                  Chembur, Mumbai<br />Maharashtra, India
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} style={{ color: '#D4AF37' }} />
                <span className="font-['Inter']" style={{ fontSize: '14px', color: '#F5F5DC' }}>+91 98765 43210</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} style={{ color: '#D4AF37' }} />
                <span className="font-['Inter']" style={{ fontSize: '14px', color: '#F5F5DC' }}>hello@souluvita.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#2C1810', borderTop: '1px solid rgba(255, 248, 225, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-['Inter']" style={{ fontSize: '13px', color: '#F5F5DC' }}>
              © 2024 Souluvita. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="font-['Inter']" 
                style={{ fontSize: '13px', color: '#F5F5DC' }}
                whileHover={{ color: '#D4AF37' }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="font-['Inter']" 
                style={{ fontSize: '13px', color: '#F5F5DC' }}
                whileHover={{ color: '#D4AF37' }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}