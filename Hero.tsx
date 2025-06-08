import React from 'react';
import { ArrowDown, Facebook, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 text-center max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-amber-600 bg-clip-text text-transparent">
            Vows to Wows
          </h1>
       
          <p className="text-xl md:text-2xl text-slate-700 mb-8 font-light">
            This is where Vows to Wows rolls in
          </p>

          {/* Inserted image */}
          <div className="mb-6">
            <img 
              src="https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/503112124_1178865824254122_487467055020577871_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=auS-_bf5oPkQ7kNvwGH1fLX&_nc_oc=AdmWxBHoHgH_Nwg7vXFHovsfKSDbFMkrBcHp32m4e1WDjTJ8WzqPRgJBd8uOvCRmHu-Xp2KnGmn7oZSW3pbqCp6F&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=PkkhtNL6_VGrFMWnHsfzJg&oh=00_AfNie8UUwDgs6rT5KhICP-AW1SoEZ-tuPR2Poh3FL5OoQA&oe=684B294E" 
              alt="VW Campervan"
              className="mx-auto rounded-xl shadow-lg max-h-72 object-cover"
            />
          </div>
          
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We bring a restored classic campervan—fully insured, ready to roll, and dressed to impress. Whether it's parked for portraits, serving bubbly, or stunning your guests, our van turns your event into the unique, Pinterest-worthy day you've been dreaming of.

You show up. We bring the wow.
If you're feeling like every wedding setup looks the same, you're not alone. You want something special, something different—without going over the top or blowing the budget.

Maybe you're worrying about photo spots that feel forced. Or wondering how to create moments that actually feel magical, not just posed.

And let's be honest—most vintage decor feels either too cheesy or not "you" at all.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://www.facebook.com/profile.php?id=100063921465520" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-amber-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Facebook size={35} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-amber-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram size={35} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-slate-600 hover:text-amber-600 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;