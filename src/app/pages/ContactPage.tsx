import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#3E2723' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Playfair_Display'] mb-6" style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, color: '#FFF8E1', lineHeight: '1.2' }}>
              Get in Touch
            </h1>
            <p className="font-['Inter']" style={{ fontSize: '18px', color: '#F5F5DC', lineHeight: '1.8' }}>
              We'd love to hear from you. Whether you have a question, custom order, or just want to say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <h2 className="font-['Playfair_Display'] mb-2" style={{ fontSize: '32px', fontWeight: 700, color: '#3E2723' }}>
                Send Us a Message
              </h2>
              <p className="font-['Inter'] mb-8" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-['Inter'] mb-2" style={{ fontSize: '14px', fontWeight: 500, color: '#3E2723' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                    style={{ backgroundColor: '#F5F5F5', border: '1px solid rgba(62, 39, 35, 0.1)', color: '#3E2723' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-['Inter'] mb-2" style={{ fontSize: '14px', fontWeight: 500, color: '#3E2723' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                    style={{ backgroundColor: '#F5F5F5', border: '1px solid rgba(62, 39, 35, 0.1)', color: '#3E2723' }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-['Inter'] mb-2" style={{ fontSize: '14px', fontWeight: 500, color: '#3E2723' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                    style={{ backgroundColor: '#F5F5F5', border: '1px solid rgba(62, 39, 35, 0.1)', color: '#3E2723' }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-['Inter'] mb-2" style={{ fontSize: '14px', fontWeight: 500, color: '#3E2723' }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                    style={{ backgroundColor: '#F5F5F5', border: '1px solid rgba(62, 39, 35, 0.1)', color: '#3E2723' }}
                  >
                    <option>General Inquiry</option>
                    <option>Custom Order</option>
                    <option>Bulk Order</option>
                    <option>Corporate Gifting</option>
                    <option>Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-['Inter'] mb-2" style={{ fontSize: '14px', fontWeight: 500, color: '#3E2723' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2 resize-none"
                    style={{ backgroundColor: '#F5F5F5', border: '1px solid rgba(62, 39, 35, 0.1)', color: '#3E2723' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: '#3E2723', color: '#FFF8E1' }}
                >
                  <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.5px' }}>
                    Send Message
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '32px', fontWeight: 700, color: '#3E2723' }}>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                      <MapPin size={22} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h3 className="font-['Playfair_Display'] mb-1" style={{ fontSize: '18px', fontWeight: 600, color: '#3E2723' }}>
                        Location
                      </h3>
                      <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                        Chembur, Mumbai<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                      <Phone size={22} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h3 className="font-['Playfair_Display'] mb-1" style={{ fontSize: '18px', fontWeight: 600, color: '#3E2723' }}>
                        Phone
                      </h3>
                      <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                        +91 98765 43210<br />
                        +91 98765 43211
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                      <Mail size={22} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h3 className="font-['Playfair_Display'] mb-1" style={{ fontSize: '18px', fontWeight: 600, color: '#3E2723' }}>
                        Email
                      </h3>
                      <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                        hello@souluvita.com<br />
                        orders@souluvita.com
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                      <Clock size={22} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h3 className="font-['Playfair_Display'] mb-1" style={{ fontSize: '18px', fontWeight: 600, color: '#3E2723' }}>
                        Business Hours
                      </h3>
                      <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                        Monday - Saturday: 10:00 AM - 8:00 PM<br />
                        Sunday: 11:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="font-['Playfair_Display'] mb-4" style={{ fontSize: '24px', fontWeight: 600, color: '#3E2723' }}>
                  Follow Us
                </h3>
                <p className="font-['Inter'] mb-6" style={{ fontSize: '15px', color: '#6D4C41', lineHeight: '1.6' }}>
                  Stay connected for updates, new products, and behind-the-scenes content
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                    <Instagram size={20} style={{ color: '#D4AF37' }} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                    <Facebook size={20} style={{ color: '#D4AF37' }} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
                    <Twitter size={20} style={{ color: '#D4AF37' }} />
                  </a>
                </div>
              </div>

              {/* Custom Orders CTA */}
              <div className="relative rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundColor: '#3E2723' }} />
                <div className="relative z-10">
                  <h3 className="font-['Playfair_Display'] mb-3" style={{ fontSize: '24px', fontWeight: 600, color: '#FFF8E1' }}>
                    Need a Custom Order?
                  </h3>
                  <p className="font-['Inter'] mb-6" style={{ fontSize: '15px', color: '#F5F5DC', lineHeight: '1.6' }}>
                    We specialize in creating custom chocolate boxes and hampers for corporate events, weddings, and special occasions.
                  </p>
                  <button className="px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#D4AF37', color: '#3E2723' }}>
                    <span className="font-['Inter']" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Request Quote
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#3E2723' }}>
              Visit Our Store
            </h2>
            <p className="font-['Inter']" style={{ fontSize: '16px', color: '#6D4C41' }}>
              Come visit us in Chembur, Mumbai to experience our chocolates in person
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[21/9]" style={{ backgroundColor: '#EFEBE9' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} style={{ color: '#D4AF37', margin: '0 auto', marginBottom: '16px' }} />
                <p className="font-['Playfair_Display']" style={{ fontSize: '20px', fontWeight: 600, color: '#3E2723' }}>
                  Souluvita Chocolates
                </p>
                <p className="font-['Inter']" style={{ fontSize: '15px', color: '#6D4C41' }}>
                  Chembur, Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#3E2723' }}>
              Have Questions?
            </h2>
            <p className="font-['Inter'] mb-8" style={{ fontSize: '16px', color: '#6D4C41', lineHeight: '1.7' }}>
              Check out our FAQ section for quick answers to common questions
            </p>
            <button className="px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ backgroundColor: '#3E2723', color: '#FFF8E1' }}>
              <span className="font-['Inter']" style={{ fontSize: '16px', fontWeight: 600 }}>View FAQs</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
