import Link from "next/link";
import Image from "next/image";

function LocationCard({ location }: { location: any }) {
  const imageSrc = location.image || '/og-default.png';
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={location.name}
          fill
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = '/og-default.png';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
        <p className="text-gray-600 mb-4">{location.address}</p>
        <div className="space-y-2 mb-4">
          {location.features?.map((feature: string, index: number) => (
            <div className="flex items-center text-sm text-gray-600" key={index}>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {location.city}, {location.state}
          </span>
          <Link
            href={`/contact?location=${encodeURIComponent(location.name)}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Book Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LocationsPage() {
  // This will be replaced with actual data from src/data/locations.json
  const locations = [
    {
      id: "ganapathy",
      name: "Ganapathy Branch",
      address: "123 Ganapathy Road",
      city: "Coimbatore",
      state: "Tamil Nadu",
      image: "/images/locations/ganapathy.jpg",
      features: ["50+ Workstations", "Meeting Rooms", "High-Speed WiFi", "Parking Available"]
    },
    {
      id: "saravanampatty",
      name: "Saravanampatty Branch",
      address: "456 Saravanampatty Main Road",
      city: "Coimbatore",
      state: "Tamil Nadu",
      image: "/images/locations/saravanampatty.jpg",
      features: ["Private Offices", "Conference Halls", "24/7 Access", "Cafeteria"]
    },
    {
      id: "rs-puram",
      name: "RS Puram Branch",
      address: "789 RS Puram Cross Cut Road",
      city: "Coimbatore",
      state: "Tamil Nadu",
      image: "/images/locations/rs-puram.jpg",
      features: ["Executive Suites", "Premium Amenities", "Business Lounge", "Valet Parking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-14 pb-20 mx-auto max-w-7xl sm:pt-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Locations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically located across Coimbatore to serve you better. Each location is designed to provide the perfect work environment for professionals and teams.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find a Location Near You?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're expanding! Contact us to learn about upcoming locations or to discuss a custom workspace solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
