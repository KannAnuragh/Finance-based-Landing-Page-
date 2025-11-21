import { Mail, Instagram } from 'lucide-react';

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Features', href: '#features' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Blog', href: '#blog' },
    { title: 'Contact', href: '#contact' },
  ];

  const resources = [
    { title: 'Help Center', href: '#help' },
    { title: 'Tutorials', href: '#tutorials' },
    { title: 'API Docs', href: '#api' },
    { title: 'Community', href: '#community' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-100 dark:text-white">RandomLoGo</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              We make live streaming simple, engaging, and growth-focused for creators everywhere.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="mailto:support@RandomLogo.co" 
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-200 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>support@RandomLogo.co</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-700 hover:border-gray-200 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 md:col-start-9">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-3">
              {resources.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 md:col-start-11">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:support@randomLogo.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                support@RandomLogo.com
              </a>
              <a
                href="tel:+12345678890"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©{year}, ItsMine. All Rights reversed to me.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a href="#support" className="text-gray-400 hover:text-white transition-colors">
                Help & Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
