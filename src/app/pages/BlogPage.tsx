import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1615289442666-fed9cec7169a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMGJlYW5zJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2NjEzOTI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Behind the Scenes',
      title: 'The Art of Chocolate Making: From Bean to Bar',
      excerpt: 'Discover the intricate process of transforming premium cocoa beans into luxurious handcrafted chocolates.',
      date: 'December 15, 2024',
      readTime: '5 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1629610306962-a8aa73153d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Gifting Guide',
      title: 'Perfect Chocolate Gifts for Every Occasion',
      excerpt: 'From birthdays to festivals, find the perfect chocolate gift that will make any celebration special.',
      date: 'December 10, 2024',
      readTime: '4 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1732304718527-4af155ca1948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGFyayUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjYxNDUwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health & Wellness',
      title: 'Dark Chocolate: The Surprising Health Benefits',
      excerpt: 'Learn about the amazing health benefits of premium dark chocolate and why it\'s good for you.',
      date: 'December 5, 2024',
      readTime: '6 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1664849079284-a1e098364d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBoYW1wZXIlMjBnaWZ0fGVufDF8fHx8MTc2NjE0NTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festivals',
      title: 'Celebrating Diwali with Premium Chocolate Hampers',
      excerpt: 'Make this Diwali extra special with our curated chocolate hampers that blend tradition with luxury.',
      date: 'November 28, 2024',
      readTime: '3 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1579523609100-5b868b803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtYWtpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Behind the Scenes',
      title: 'Meet Our Chocolatiers: The Masters Behind Souluvita',
      excerpt: 'Get to know the passionate artisans who pour their heart and soul into every chocolate we make.',
      date: 'November 20, 2024',
      readTime: '5 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1591754550580-890a9016b687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwY2hvY29sYXRlJTIwcGllY2VzfGVufDF8fHx8MTc2NjE0NTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Tips & Tricks',
      title: 'How to Store Your Handmade Chocolates',
      excerpt: 'Essential tips for preserving the freshness and flavor of your premium artisanal chocolates.',
      date: 'November 15, 2024',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#3E2723' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Playfair_Display'] mb-6" style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.2' }}>
              The Souluvita Journal
            </h1>
            <p className="font-['Inter']" style={{ fontSize: '18px', color: '#F5F5DC', lineHeight: '1.8' }}>
              Stories, insights, and inspiration from the world of artisanal chocolate
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="bg-white p-10 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 rounded-full mb-4 w-fit" style={{ backgroundColor: '#FFF8E1', color: '#6D4C41', fontSize: '13px', fontWeight: 500, letterSpacing: '1px' }}>
                  FEATURED
                </span>
                <p className="font-['Inter'] mb-3" style={{ fontSize: '13px', fontWeight: 500, color: '#D4AF37', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  {blogPosts[0].category}
                </p>
                <h2 className="font-['Playfair_Display'] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.3' }}>
                  {blogPosts[0].title}
                </h2>
                <p className="font-['Inter'] mb-6" style={{ fontSize: '16px', color: '#6D4C41', lineHeight: '1.7' }}>
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} style={{ color: '#999' }} />
                    <span className="font-['Inter']" style={{ fontSize: '14px', color: '#999' }}>
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} style={{ color: '#999' }} />
                    <span className="font-['Inter']" style={{ fontSize: '14px', color: '#999' }}>
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 group/btn w-fit">
                  <span className="font-['Inter']" style={{ fontSize: '15px', fontWeight: 600, color: '#3E2723', letterSpacing: '0.5px' }}>
                    Read Article
                  </span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" style={{ color: '#D4AF37' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#3E2723' }}>
              Recent Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-['Inter'] mb-3" style={{ fontSize: '12px', fontWeight: 500, color: '#D4AF37', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {post.category}
                  </p>
                  <h3 className="font-['Playfair_Display'] mb-3" style={{ fontSize: '22px', fontWeight: 600, color: '#3E2723', lineHeight: '1.3' }}>
                    {post.title}
                  </h3>
                  <p className="font-['Inter'] mb-4" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(62, 39, 35, 0.1)' }}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1.5">
                        <Calendar size={14} style={{ color: '#999' }} />
                        <span className="font-['Inter']" style={{ fontSize: '13px', color: '#999' }}>
                          {post.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock size={14} style={{ color: '#999' }} />
                        <span className="font-['Inter']" style={{ fontSize: '13px', color: '#999' }}>
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 mt-4 group/btn">
                    <span className="font-['Inter']" style={{ fontSize: '14px', fontWeight: 600, color: '#3E2723' }}>
                      Read More
                    </span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" style={{ color: '#D4AF37' }} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20" style={{ backgroundColor: '#3E2723' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] mb-4" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.3' }}>
            Stay Updated with Souluvita
          </h2>
          <p className="font-['Inter'] mb-10" style={{ fontSize: '17px', color: '#F5F5DC', lineHeight: '1.7' }}>
            Subscribe to our newsletter for exclusive recipes, chocolate tips, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full outline-none"
              style={{ backgroundColor: 'rgba(255, 248, 225, 0.1)', border: '1px solid rgba(255, 248, 225, 0.3)', color: '#FFF8E1' }}
            />
            <button className="px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap" style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}>
              <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600 }}>Subscribe</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
