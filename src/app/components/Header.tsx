import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Shop', path: 'shop' },
    { name: 'About', path: 'about' },
    { name: 'Blog', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Redesigned Logo Icon with SVG */}
            <div className="relative w-14 h-14">
              {/* Outer gold ring */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B2 50%, #D4AF37 100%)',
                  padding: '2px'
                }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #3E2723 100%)' }}>
                  {/* Chocolate piece icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                      fill="#D4AF37"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.path
                      d="M12 2V12M12 12L2 7M12 12L22 7M12 12V22M12 22L2 17M12 22L22 17"
                      stroke="#3E2723"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className="font-['Playfair_Display'] tracking-wide" 
                style={{ 
                  fontSize: '26px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3E2723 0%, #5D4037 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Souluvita
              </motion.span>
              <span className="font-['Inter'] tracking-wider" style={{
                fontSize: '8.5px',
                fontWeight: 500,
                color: '#8D6E63',
                letterSpacing: '2.5px',
                lineHeight: '1'
              }}>
                ARTISAN CHOCOLATES
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className="relative font-['Inter'] transition-colors duration-300"
                style={{
                  fontSize: '15px',
                  fontWeight: currentPage === item.path ? 600 : 400,
                  color: currentPage === item.path ? '#3E2723' : '#6D4C41',
                  letterSpacing: '0.5px'
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {currentPage === item.path && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5" 
                    style={{ backgroundColor: '#D4AF37' }}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Cart Icon (Desktop) */}
          <motion.button 
            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 relative group" 
            style={{ backgroundColor: '#FFF8E1' }}
            whileHover={{ scale: 1.1, backgroundColor: '#D4AF37' }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag size={20} style={{ color: '#3E2723' }} />
            <motion.span 
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: '#3E2723', color: '#D4AF37' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              0
            </motion.span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            style={{ color: '#3E2723' }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t overflow-hidden" 
              style={{ borderColor: 'rgba(62, 39, 35, 0.15)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    onClick={() => {
                      onNavigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left font-['Inter'] px-4 py-3 rounded transition-colors"
                    style={{
                      fontSize: '15px',
                      fontWeight: currentPage === item.path ? 600 : 400,
                      color: currentPage === item.path ? '#3E2723' : '#6D4C41',
                      backgroundColor: currentPage === item.path ? '#FFF8E1' : 'transparent'
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}