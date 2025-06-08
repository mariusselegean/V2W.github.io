import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mutugeta@yahoo.com',
      href: 'mailto:mutugeta@yahoo.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 7834 466935',
      href: 'tel:+447834466935',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '14 Ducie Street GL1 4PD Gloucester, United Kingdom',
      href: 'https://www.google.com/maps/place/14+Ducie+St,+Gloucester+GL1+4PD,+UK',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100063921465520', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Whether you're ready to book our vintage VW camper van for your special day or just have a few questions, we’re here to help. Every celebration is unique, and we’re excited to learn more about yours.

            Reach out to us anytime — let’s chat about how we can bring charm, style, and unforgettable memories to your wedding or event.

            Let’s make your day one to remember. 💛
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Let's Connect</h3>
            <p className="text-slate-600 text-lg leading-relaxed text-center mb-8">
              I’m always happy to connect — whether you're planning a wedding, organizing a special event, or just exploring ideas for something truly memorable. Let’s chat about how we can make your day unforgettable.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a 
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-slate-600 hover:text-amber-600 transition-colors duration-300 group"
                  >
                    <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{info.label}</p>
                      <p className="text-lg font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-8 text-center">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-100 p-3 rounded-lg text-slate-600 hover:bg-amber-600 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
