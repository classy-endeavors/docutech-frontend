import icon from "/src/assets/dt_logo white.svg";
import data from "../data";

export default function Footer() {
  const SocialIcons = data.socialIcons;
  const Sections = data.sections;
  return (
    <>
      <div className="bg-brand-blue rounded-t-3xl py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-center md:text-left">
              <a className="mb-2 flex items-center justify-center md:justify-start" href="/">
                <img
                  className="mr-2 max-w-[34px] fill-white"
                  src={icon}
                  alt="DocuTech Logo"
                />
                <span className="text-xl md:text-2xl font-bold text-white">DocuTech</span>
              </a>
              <p className="text-sm text-white">Powered by Classy Endeavors</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white">
                {SocialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img
                      src={icon.icon}
                      alt={icon.name}
                      className="h-4 w-4"
                    />
                  </a>
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm text-white">
                {Sections.map((section, index) => (
                  <a
                    key={index}
                    href={section.link}
                    className="underline-effect hover:underline"
                  >
                    {section.name}
                  </a>
                ))}
                <a 
                  href="/terms-of-service.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline-effect hover:underline"
                >
                  Terms of Service
                </a>
                <a href="#" className="underline-effect hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
