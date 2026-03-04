import { Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homebuyer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Kevin made our home buying experience seamless and stress-free. His attention to detail and market knowledge helped us find the perfect property at the right price.',
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with Kevin was exceptional. He understood our investment goals and delivered properties that exceeded our ROI expectations. Highly professional and results-driven.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Home Seller',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Kevin sold our home in record time for above asking price. His marketing strategy and negotiation skills are top-notch. We couldn\'t have asked for a better agent.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from clients who trusted Kevin Moore with their real estate journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-12 h-12 text-gray-300 mb-6" />
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
