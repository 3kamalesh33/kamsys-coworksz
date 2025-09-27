import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about KamSys CoWorksz - our mission, vision, and commitment to providing premium coworking spaces that foster productivity and collaboration.",
};

function StatsCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
}

function ValueCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, description }: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
        <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Members" },
    { number: "4", label: "Prime Locations" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Access & Support" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We foster creativity and innovation by providing spaces that inspire breakthrough ideas and collaborative thinking.",
      icon: "💡"
    },
    {
      title: "Community",
      description: "Building meaningful connections between entrepreneurs, freelancers, and growing teams to create lasting partnerships.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in facilities, services, and member experience to ensure your success.",
      icon: "⭐"
    },
    {
      title: "Flexibility",
      description: "Adaptable solutions that grow with your business, from hot desks to private offices and everything in between.",
      icon: "🔄"
    }
  ];

  const team = [
    {
      name: "Kamal Sharma",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in real estate and business development, passionate about creating spaces that empower entrepreneurs."
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      description: "Operations expert ensuring seamless member experiences across all locations with focus on efficiency and satisfaction."
    },
    {
      name: "Arjun Singh",
      role: "Community Manager",
      description: "Building vibrant communities and facilitating connections that turn coworking spaces into collaborative ecosystems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-14 pb-20 mx-auto max-w-7xl sm:pt-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">KamSys CoWorksz</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize how people work by creating inspiring, 
            collaborative spaces that foster innovation, productivity, and meaningful connections 
            between professionals across all industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-8 mb-6">
                Founded in 2020, KamSys CoWorksz emerged from a simple observation: 
                the traditional office model was no longer serving the needs of modern professionals. 
                Remote work was becoming mainstream, but people still craved connection, 
                collaboration, and professional environments.
              </p>
              <p className="text-lg leading-8 mb-6">
                Our founder, Kamal Sharma, recognized this gap after years of watching talented 
                professionals struggle with isolation while working from home or overpaying for 
                inflexible office leases. He envisioned spaces that would combine the best of 
                both worlds: the flexibility of remote work with the energy and resources of 
                a premium office environment.
              </p>
              <p className="text-lg leading-8">
                Today, we've grown to serve over 500 members across 4 strategically located 
                facilities, each designed to inspire productivity, foster collaboration, and 
                support the diverse needs of modern businesses. Our community includes 
                freelancers, startups, established companies, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Passionate professionals dedicated to creating exceptional coworking experiences
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h3>
              <p className="text-gray-600 leading-8">
                To empower professionals and businesses by providing world-class coworking 
                spaces that inspire productivity, foster innovation, and build meaningful 
                connections within a thriving community of like-minded individuals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vision</span>
              </h3>
              <p className="text-gray-600 leading-8">
                To be the leading coworking provider, creating a global network of 
                collaborative spaces where entrepreneurs, freelancers, and teams can 
                thrive, innovate, and build the future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-6 py-16 sm:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the KamSys CoWorksz difference. Schedule a tour today and 
                see how our spaces can transform your work experience.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:bg-gray-50 transition-colors"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="/locations"
                  className="text-white border border-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
