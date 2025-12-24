import { Heart, Target, Eye, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#3E2723' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Playfair_Display'] mb-6" style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.2' }}>
              Our Story
            </h1>
            <p className="font-['Inter']" style={{ fontSize: '18px', color: '#F5F5DC', lineHeight: '1.8' }}>
              A passion for chocolate, a commitment to quality, and a love for creating moments of joy
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1579523609100-5b868b803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtYWtpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chocolate Making"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
                The Beginning
              </p>
              <h2 className="font-['Playfair_Display'] mb-6" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.3' }}>
                Crafted with Passion in Mumbai
              </h2>
              <div className="space-y-4 font-['Inter']" style={{ fontSize: '16px', color: '#6D4C41', lineHeight: '1.8' }}>
                <p>
                  Souluvita was born from a simple belief: chocolate should be an experience, not just a treat. Founded in the heart of Chembur, Mumbai, we set out to create handcrafted premium chocolates that tell a story with every bite.
                </p>
                <p>
                  What started as a small home kitchen experiment has grown into a brand that's redefining artisanal chocolates in India. We source the finest cocoa beans and natural ingredients, combining traditional techniques with modern innovation to create chocolates that are as beautiful as they are delicious.
                </p>
                <p>
                  Every piece is handmade in small batches, ensuring the highest quality and attention to detail. We believe in keeping things natural – no preservatives, no artificial colors, just pure chocolate perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Our Philosophy
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.3' }}>
              Handmade. Natural. Exceptional.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Small Batch Perfection',
                description: 'We craft our chocolates in small batches to ensure every piece meets our exacting standards. This allows us to control quality at every step and maintain the artisanal touch that makes our chocolates special.',
              },
              {
                title: 'Premium Ingredients',
                description: 'We source only the finest cocoa beans and natural ingredients from trusted suppliers. Every ingredient is carefully selected for its quality, flavor profile, and ethical sourcing practices.',
              },
              {
                title: 'No Compromises',
                description: 'We never use artificial preservatives, colors, or flavors. What you taste is pure chocolate crafted from natural ingredients, exactly as it should be – honest, authentic, and delicious.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-['Playfair_Display'] mb-4" style={{ fontSize: '22px', fontWeight: 600, color: '#3E2723' }}>
                  {item.title}
                </h3>
                <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="relative p-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#3E2723' }}>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <Eye size={32} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="font-['Playfair_Display'] mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFF8E1' }}>
                  Our Vision
                </h3>
                <p className="font-['Inter']" style={{ fontSize: '16px', color: '#F5F5DC', lineHeight: '1.8' }}>
                  To become India's most loved artisanal chocolate brand, known for uncompromising quality, innovation, and the joy we bring to every celebration. We envision a world where premium, handmade chocolates are accessible to all who appreciate the finer things in life.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative p-10 rounded-2xl" style={{ backgroundColor: '#EFEBE9' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                <Target size={32} style={{ color: '#D4AF37' }} />
              </div>
              <h3 className="font-['Playfair_Display'] mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#3E2723' }}>
                Our Mission
              </h3>
              <p className="font-['Inter']" style={{ fontSize: '16px', color: '#6D4C41', lineHeight: '1.8' }}>
                To craft exceptional handmade chocolates using only the finest natural ingredients, while maintaining sustainable practices and supporting local communities. We're committed to creating memorable experiences and making every occasion sweeter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              What We Stand For
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.3' }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={36} style={{ color: '#D4AF37' }} />,
                title: 'Passion',
                description: 'We pour our heart into every chocolate we make',
              },
              {
                icon: <Users size={36} style={{ color: '#D4AF37' }} />,
                title: 'Community',
                description: 'Supporting local suppliers and building relationships',
              },
              {
                icon: <Target size={36} style={{ color: '#D4AF37' }} />,
                title: 'Excellence',
                description: 'Never compromising on quality or authenticity',
              },
              {
                icon: <Eye size={36} style={{ color: '#D4AF37' }} />,
                title: 'Transparency',
                description: 'Honest about our ingredients and processes',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                  {value.icon}
                </div>
                <h3 className="font-['Playfair_Display'] mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#3E2723' }}>
                  {value.title}
                </h3>
                <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-['Inter'] mb-3" style={{ fontSize: '14px', fontWeight: 500, color: '#6D4C41', letterSpacing: '2px', textTransform: 'uppercase' }}>
              The Process
            </p>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 700, color: '#3E2723', lineHeight: '1.3' }}>
              How We Make Our Chocolates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sourcing',
                description: 'We carefully select premium cocoa beans and natural ingredients from ethical suppliers.',
                image: 'https://images.unsplash.com/photo-1615289442666-fed9cec7169a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMGJlYW5zJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2NjEzOTI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                step: '02',
                title: 'Crafting',
                description: 'Each batch is handmade with precision, care, and years of chocolate-making expertise.',
                image: 'https://images.unsplash.com/photo-1579523609100-5b868b803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtYWtpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                step: '03',
                title: 'Packaging',
                description: 'Beautifully packaged with care, ready to delight and create memorable moments.',
                image: 'https://images.unsplash.com/photo-1629610306962-a8aa73153d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2NjE0NTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
              },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-baseline space-x-4 mb-3">
                  <span className="font-['Playfair_Display']" style={{ fontSize: '48px', fontWeight: 700, color: '#D4AF37', lineHeight: '1' }}>
                    {item.step}
                  </span>
                  <h3 className="font-['Playfair_Display']" style={{ fontSize: '24px', fontWeight: 600, color: '#3E2723' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#3E2723' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] mb-6" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.3' }}>
            Experience the Souluvita Difference
          </h2>
          <p className="font-['Inter'] mb-10" style={{ fontSize: '17px', color: '#F5F5DC', lineHeight: '1.7' }}>
            Join us on our journey to create moments of joy, one handcrafted chocolate at a time
          </p>
          <button className="px-10 py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105" style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}>
            <span className="font-['Inter']" style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.5px' }}>Explore Our Collection</span>
          </button>
        </div>
      </section>
    </div>
  );
}
