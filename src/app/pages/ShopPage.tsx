import { useState } from 'react';
import { ListFilter } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Dark Chocolate', 'Milk Chocolate', 'Assorted Boxes', 'Gift Hampers', 'Sugar-Free'];

  const products = [
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
      description: 'Smooth and creamy milk chocolate with rich taste',
    },
    {
      image: 'https://images.unsplash.com/photo-1592290321458-49b80f943a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGZyZWUlMjBjaG9jb2xhdGV8ZW58MXx8fHwxNzY2MTQ1MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sugar-Free',
      name: 'Guilt-Free Delight',
      price: 499,
      description: 'Sugar-free dark chocolate for health-conscious lovers',
    },
    {
      image: 'https://images.unsplash.com/photo-1635843945732-08f2cc685f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NvcnRlZCUyMGNob2NvbGF0ZSUyMGJveHxlbnwxfHx8fDE3NjYxNDUwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Assorted Boxes',
      name: 'Premium Assortment',
      price: 1299,
      salePrice: 1099,
      description: 'Carefully curated mix of our finest chocolates',
    },
    {
      image: 'https://images.unsplash.com/photo-1629610306962-a8aa73153d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Gift Hampers',
      name: 'Luxury Gift Hamper',
      price: 1999,
      description: 'Perfect gift with our bestsellers in elegant packaging',
    },
    {
      image: 'https://images.unsplash.com/photo-1732304718527-4af155ca1948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGFyayUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjYxNDUwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Dark Chocolate',
      name: 'Dark Cocoa Intense',
      price: 549,
      description: '85% dark chocolate for true cocoa enthusiasts',
    },
    {
      image: 'https://images.unsplash.com/photo-1591754550580-890a9016b687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwY2hvY29sYXRlJTIwcGllY2VzfGVufDF8fHx8MTc2NjE0NTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Milk Chocolate',
      name: 'Silky Milk Deluxe',
      price: 449,
      description: 'Premium Belgian-style milk chocolate',
    },
    {
      image: 'https://images.unsplash.com/photo-1664849079284-a1e098364d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBoYW1wZXIlMjBnaWZ0fGVufDF8fHx8MTc2NjE0NTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Gift Hampers',
      name: 'Festival Special Hamper',
      price: 2499,
      salePrice: 2199,
      description: 'Celebrate with our exclusive festival collection',
    },
    {
      image: 'https://images.unsplash.com/photo-1635843945732-08f2cc685f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NvcnRlZCUyMGNob2NvbGF0ZSUyMGJveHxlbnwxfHx8fDE3NjYxNDUwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Assorted Boxes',
      name: 'Signature Collection',
      price: 899,
      description: 'Best of Souluvita in one beautiful box',
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20" style={{ backgroundColor: '#3E2723' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] mb-4" style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.2' }}>
            Our Chocolate Collection
          </h1>
          <p className="font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: '17px', color: '#F5F5DC', lineHeight: '1.7' }}>
            Explore our handcrafted premium chocolates, made with love and the finest ingredients
          </p>
        </div>
      </section>

      {/* Filter and Products Section */}
      <section className="py-16" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <ListFilter size={20} style={{ color: '#6D4C41' }} />
                <span className="font-['Inter']" style={{ fontSize: '15px', fontWeight: 500, color: '#6D4C41' }}>
                  Filter by Category
                </span>
              </div>
              <span className="font-['Inter']" style={{ fontSize: '14px', color: '#6D4C41' }}>
                {filteredProducts.length} Products
              </span>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category.toLowerCase();
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className="px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: isActive ? '#3E2723' : 'white',
                      color: isActive ? '#FFF8E1' : '#6D4C41',
                      border: isActive ? 'none' : '1px solid rgba(62, 39, 35, 0.2)',
                    }}
                  >
                    <span className="font-['Inter']" style={{ fontSize: '14px', fontWeight: isActive ? 500 : 400 }}>
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Inter']" style={{ fontSize: '16px', color: '#6D4C41' }}>
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.3' }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="font-['Inter'] mb-8" style={{ fontSize: '16px', color: '#6D4C41', lineHeight: '1.7' }}>
            We offer custom chocolate boxes and personalized hampers for every occasion
          </p>
          <button className="px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ backgroundColor: '#3E2723', color: '#FFF8E1' }}>
            <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600 }}>Contact Us for Custom Orders</span>
          </button>
        </div>
      </section>
    </div>
  );
}