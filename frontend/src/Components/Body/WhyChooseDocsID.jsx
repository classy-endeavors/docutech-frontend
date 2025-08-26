export default function WhyChooseDocsID() {
  const benefits = [
    {
      icon: "🚀",
      title: "Professional Solution",
      description: "Reliable electronic signature capabilities for businesses of all sizes. Streamline your workflow with our secure platform."
    },
    {
      icon: "🔒", 
      title: "SOC-2 Certified",
      description: "DocsID meets SOC-2 standards, ensuring the highest level of security for your documents. Your data remains protected."
    },
    {
      icon: "🌍",
      title: "GDPR & HIPAA Compliant", 
      description: "We adhere to GDPR & HIPAA regulations, keeping sensitive information safe and compliant with global standards."
    },
    {
      icon: "🔐",
      title: "End-to-End Encryption",
      description: "All documents are encrypted with AES-256 encryption, ensuring secure transmission and storage. Your privacy is our priority."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Why Choose DocsID
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Trusted by businesses worldwide for secure, compliant, and professional document signing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
