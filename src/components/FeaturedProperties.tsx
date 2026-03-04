import { MapPin, Bed, Bath, Maximize } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Waterfront Villa',
    location: 'Miami Beach, FL',
    price: '$4,850,000',
    beds: 5,
    baths: 6,
    sqft: '6,500',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Contemporary Hillside Estate',
    location: 'Los Angeles, CA',
    price: '$7,200,000',
    beds: 6,
    baths: 7,
    sqft: '8,900',
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'Luxury Penthouse Suite',
    location: 'New York, NY',
    price: '$12,500,000',
    beds: 4,
    baths: 5,
    sqft: '5,200',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

function FeaturedProperties() {
  return (
    <section id="properties" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">Featured Properties</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked selections from our exclusive portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-light mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-1 text-gray-700">
                    <Bed className="w-5 h-5" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-700">
                    <Bath className="w-5 h-5" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-700">
                    <Maximize className="w-5 h-5" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
