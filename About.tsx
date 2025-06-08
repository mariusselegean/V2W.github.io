import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', desc: 'React, TypeScript, Next.js' },
    { icon: Palette, name: 'UI/UX Design', desc: 'Figma, Adobe Creative Suite' },
    { icon: Zap, name: 'Performance', desc: 'Optimization & Best Practices' },
    { icon: Heart, name: 'User Experience', desc: 'Human-Centered Design' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            About us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Turning Vows into Wow Moments
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Vintage VW Wedding Hire, we believe your special day deserves a truly unforgettable entrance. Our beautifully restored retro Volkswagen camper van isn’t just a ride – it’s a timeless experience. Thoughtfully decorated to match your wedding theme, our van brings vintage charm, character, and joy to your celebration.

Our journey began with a love for classic VW campers and a passion for creating magical moments. What started as a personal restoration project quickly transformed into something more – a way to share the joy, nostalgia, and beauty of these iconic vehicles with couples on their most important day.

From rustic barn weddings to elegant garden receptions, our vintage camper is the perfect photo backdrop, transport option, and conversation piece. Whether you want to arrive in style, take romantic photos, or simply add a touch of retro flair to your event, we’re here to make it happen.

            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
Let us help turn your vows into wow moments – one unforgettable ride at a time.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Services offered - free or at extra cost:</h4>
              <div className="flex flex-wrap gap-3">
                {['The Vows to Wows van', 'Decoration', 'Van delivery near Gloucester', 'Full insurance', 'Driver on request', 'Minibar', 'Wedding cake'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-slate-200 text-amber-700 rounded-full text-sm font-medium hover:bg-slate-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;