import writingHandIcon from "../../assets/icons/270d.svg";
import multipleUsersIcon from "../../assets/icons/1f465.svg";
import magnifyingGlassIcon from "../../assets/icons/1f50d.svg";
import scalesIcon from "../../assets/icons/2696.svg";

export default function TextStatement() {
  const features = [
    {
      title: "Sign Documents",
      description: "Upload and sign PDFs with multiple signature types - draw, type, or upload your signature",
      iconSrc: writingHandIcon,
      iconAlt: "Writing hand icon"
    },
    {
      title: "Multiple Signers", 
      description: "Send documents to multiple parties with sequential signing and automatic reminders",
      iconSrc: multipleUsersIcon,
      iconAlt: "Multiple users icon"
    },
    {
      title: "Audit Trails",
      description: "Complete signing history with timestamps, IP addresses, and completion certificates",
      iconSrc: magnifyingGlassIcon,
      iconAlt: "Magnifying glass icon"
    },
    {
      title: "Legal Compliance",
      description: "E-SIGN Act, UETA, and eIDAS compliant signatures accepted worldwide",
      iconSrc: scalesIcon,
      iconAlt: "Scales of justice icon"
    }
  ];

  return (
    <div className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Powerful Features for{" "}
          <span className="text-brand-blue">
            Document Signing
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to sign, send, and manage documents securely
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="mb-4">
                <img src={feature.iconSrc} alt={feature.iconAlt} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
