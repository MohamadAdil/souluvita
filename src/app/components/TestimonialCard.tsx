import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  date: string;
}

export function TestimonialCard({ name, rating, review, date }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            fill={index < rating ? '#D4AF37' : 'none'}
            style={{ color: index < rating ? '#D4AF37' : '#E5E5E5' }}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="font-['Inter'] mb-6" style={{ fontSize: '15px', color: '#3E2723', lineHeight: '1.7' }}>
        "{review}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(62, 39, 35, 0.1)' }}>
        <div>
          <p className="font-['Playfair_Display']" style={{ fontSize: '16px', fontWeight: 600, color: '#3E2723' }}>
            {name}
          </p>
          <p className="font-['Inter']" style={{ fontSize: '13px', color: '#6D4C41' }}>
            Verified Customer
          </p>
        </div>
        <p className="font-['Inter']" style={{ fontSize: '13px', color: '#999' }}>
          {date}
        </p>
      </div>
    </div>
  );
}
