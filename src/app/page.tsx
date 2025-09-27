import Link from "next/link";

// Component definitions
function HeroSection() {
  return (
    <section className="relative px-6 pt-14 pb-20 mx-auto max-w-7xl sm:pt-20 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Premium <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Coworking Spaces</span>
          <br className="hidden sm:block" />
          for Modern Teams
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Experience productivity like never before. Join a community of innovators, entrepreneurs, 
          and professionals in beautifully designed spaces equipped with everything you need.
        </p>
        <div className="flex items-center justify-center gap-x-6 mt-10">
          <Link
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Book a Tour
          </Link>
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            View Pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocationCard({ title, address, image, features }: {
  title: string;
  address: string;
  image: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl font-bold">{image}</div>
          <div className="text-sm opacity-90 mt-2">360° Virtual Tour</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{address}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, price, features }: {
  title: string;
  description: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {price}
        </span>
        <span className="text-gray-500 text-sm">/month</span>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md text-center font-medium hover:shadow-lg transition-shadow"
      >
        Get Started
      </Link>
    </div>
  );
}

function TestimonialCard({ name, role, content, company }: {
  name: string;
  role: string;
  content: string;
  company: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">{name.charAt(0)}</span>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{content}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const locations = [
    {
      title: "Downtown Hub",
      address: "123 Business District, City Center",
      image: "🏢",
      features: ["50+ Private Offices", "High-speed Internet", "24/7 Access", "Parking Available"]
    },
    {
      title: "Tech Park Campus",
      address: "456 Innovation Ave, Tech Quarter",
      image: "🌟",
      features: ["Open Workspace", "Meeting Rooms", "Event Space", "Coffee Bar"]
    },
    {
      title: "Creative District",
      address: "789 Arts Blvd, Cultural Zone",
      image: "🎨",
      features: ["Designer Studios", "Gallery Space", "Workshop Areas", "Rooftop Terrace"]
    },
    {
      title: "Financial Quarter",
      address: "321 Wall Street, Financial District",
      image: "💼",
      features: ["Executive Suites", "Conference Facilities", "Concierge Service", "Premium Amenities"]
    }
  ];

  const services = [
    {
      title: "Hot Desk",
      description: "Flexible workspace in our open areas",
      price: "₹8,000",
      features: ["Access to common areas", "High-speed WiFi", "Printing facilities", "Coffee & tea"]
    },
    {
      title: "Dedicated Desk",
      description: "Your own desk in shared workspace",
      price: "₹15,000",
      features: ["Personal storage", "Monitor included", "Priority booking", "Mail handling"]
    },
    {
      title: "Private Office",
      description: "Fully private office space",
      price: "₹30,000",
      features: ["Complete privacy", "Customizable space", "Phone booth access", "Team collaboration"]
    },
    {
      title: "Team Suite",
      description: "Perfect for growing teams",
      price: "₹75,000",
      features: ["5-10 person capacity", "Meeting room access", "Dedicated reception", "Custom branding"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "TechStart",
      content: "KamSys CoWorksz transformed how we work. The space is inspiring and the community is incredible."
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      company: "Design Studio",
      content: "The creative environment here sparked so many new ideas. It's more than just a workspace."
    },
    {
      name: "Priya Sharma",
      role: "CEO",
      company: "GrowthLab",
      content: "Professional facilities, great networking opportunities, and excellent support staff. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Locations Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Strategically located across the city to serve you better
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Choose Your Perfect <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Workspace</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Flexible solutions for individuals, startups, and growing teams
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Members Say</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Join hundreds of satisfied professionals who call KamSys CoWorksz home
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-6 py-16 sm:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Ready to Transform Your Work Experience?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our community of innovators and take your business to the next level. 
                Book a tour today and see why professionals choose KamSys CoWorksz.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:bg-gray-50 transition-colors"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="tel:+919876543210"
                  className="text-white border border-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
