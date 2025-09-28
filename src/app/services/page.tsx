import Link from "next/link";

function ServiceCard({ title, description, icon, href }: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <div className="text-center">
          <div className="text-6xl mb-6">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <div className="mt-6">
            <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: "Coworking Spaces",
      description: "Flexible shared workspaces designed for individuals and small teams. Enjoy a collaborative environment with hot desks, dedicated desks, and networking opportunities.",
      icon: "🤝",
      href: "/services/coworking"
    },
    {
      title: "Private Offices",
      description: "Fully private, secure office spaces for teams and businesses. Customizable layouts with premium amenities and dedicated support services.",
      icon: "🏢",
      href: "/services/private-offices"
    },
    {
      title: "Meeting Rooms",
      description: "Professional meeting and conference rooms equipped with latest technology. Perfect for presentations, client meetings, and team collaborations.",
      icon: "📊",
      href: "/services/meeting-rooms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-14 pb-20 mx-auto max-w-7xl sm:pt-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect workspace solution for your needs. From flexible coworking spaces to private offices and meeting rooms, we have everything to help your business thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a tour and find the perfect workspace solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
