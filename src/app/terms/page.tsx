export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service</span>
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using KamSys CoWorksz services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Workspace Usage</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Maintain a professional and respectful environment</li>
              <li>Follow all safety and security protocols</li>
              <li>Use facilities and equipment responsibly</li>
              <li>Respect other members and their workspace</li>
              <li>Comply with operating hours and access guidelines</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              All fees are due in advance and non-refundable unless otherwise specified. We accept various 
              payment methods including credit cards, bank transfers, and digital payments.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
            <p className="text-gray-600 mb-4">
              Members may cancel their membership with 30 days written notice. Early termination fees may apply 
              based on the membership type and remaining contract period.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              KamSys CoWorksz shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use of our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@kamsys-coworksz.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91-98765-43210</p>
              <p className="text-gray-700"><strong>Address:</strong> Coimbatore, Tamil Nadu, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
