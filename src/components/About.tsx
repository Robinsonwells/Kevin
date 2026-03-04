import { Award, TrendingUp, Users, Heart } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Real estate agent"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-5xl font-light mb-6">Your Trusted Real Estate Partner</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in luxury real estate, I've helped hundreds of clients find
              their perfect homes. My commitment is to provide personalized service, deep market knowledge,
              and unwavering dedication to your real estate goals.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Top Producer</h3>
                  <p className="text-gray-600 text-sm">Award-winning agent since 2018</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">$500M+ Sales</h3>
                  <p className="text-gray-600 text-sm">In luxury property transactions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">500+ Clients</h3>
                  <p className="text-gray-600 text-sm">Successfully served families</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Client First</h3>
                  <p className="text-gray-600 text-sm">Your satisfaction is my priority</p>
                </div>
              </div>
            </div>

            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
