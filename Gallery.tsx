import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'Camper1',
      image: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/503447185_1178862987587739_4923055991422143803_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Heom2UToJEEQ7kNvwHLkewc&_nc_oc=AdnaSZ-GNSyDlWuosUqM2ezY61WZuwXSAkOE21mPq9v9MQYLTDqruprtZKfJgY-fvhoDpERuwknknrYIxrNtQjyo&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=TVIKjmFs-YMV4JS5B77ChA&oh=00_AfP4WdP90yV_-OrO7Qx5Ws_TdAyAN4o7luJnPe-fysoi_w&oe=684B3F19',
    },
    {
      title: 'Camper2',
      image: 'https://scontent.fias1-2.fna.fbcdn.net/v/t39.30808-6/503831414_1178863257587712_800637105190652478_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=41KchBJZKLwQ7kNvwGbkR6z&_nc_oc=AdnFj4eQqlOigJAggUGrKemoDcw85B1OaP_1EbcUe_PuBj4hl_2DpkkYLTlEPQa7M3dPjuAXj4JVV0oW7uiMxe3b&_nc_zt=23&_nc_ht=scontent.fias1-2.fna&_nc_gid=54GR_R8MWycbY5a8W7w3Bw&oh=00_AfOBCsO4K5eME5x4LmzzFDJTmkmBW-Pd5Kc5REbY98XxqQ&oe=684B1B1F',
    },
    {
      title: 'Camper3',
      image: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/503121918_1178863080921063_3505677613333345943_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Fu3GJAckuIQ7kNvwGFgPTT&_nc_oc=AdmeE2ep7huQPbdGdCaPEmVI8JbwxpPpHb7oS3I47vyEZnhEBQdRAfszpYn7-A0FjSJPnY1W1CcH--o1gKVxtpvD&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=yoxYSVKFk-h7EkhskXs_Yg&oh=00_AfNTGN3_mMFbuA2aMhuCtGETP0bjdCThv7my4obE7OtIUg&oe=684B11A7',
    },
    {
      title: 'Camper4',
      image: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/502580681_1178863274254377_5908309961214349719_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ElIn31i73m4Q7kNvwEgop3y&_nc_oc=Adm6qNmLV7vSQXUJHMjBNSeilNul8m2svJoZ9mlp5XVuZwiJdYuzjrLw6coR7w-G-uI_Jr30EPbmY_p_fz5yn-5a&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=ZfkHgFQRx8ecRcQ9WPrhlA&oh=00_AfOJumju-a_ouBiPO8QxwlnXtc0X3eQCy8DBkmHK-Ghjug&oe=684B3D7D',
    },
    {
      title: 'Camper5',
      image: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/503392357_1178863374254367_7856316880918582443_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_LqyF28Js_sQ7kNvwHCOi9J&_nc_oc=AdlULEYcD2hI-NuJXaMjzVJOrCV2mEmyaer2nZP3j6KVkoRS-Vz1iLzxXr6TFVdaEd7xC9l_xaFFuIz91ukm-HaH&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=IffidTY-W2tOoGCos1VYGA&oh=00_AfPbWqqtQC1yVsDRiItctiouovyWCXgqswVgLU9N4bqZbw&oe=684B2C46',
    },
    {
      title: 'Camper5',
      image: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/503560810_1178863187587719_6262645614889262912_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tQV6ZdZ0YDIQ7kNvwFtbiHE&_nc_oc=Admbr5rEbcR0Lb8JAZFxIm7F1MKm49eXgLlVW2FJ3XJ7rDmxVOMm-HzDE-IiTIqYCNVuj2ltTFoW4b2dYwPf93hr&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=2Z0ImdV-7NFOy9A9HIrhhA&oh=00_AfMh9v-mv8lBEqDZesaWjyBzTGBkrxtIOx6tVI86zYeoWg&oe=684B2CAA',
    },
    {
      title: 'Camper6',
      image: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/503524860_1178863487587689_8688326200193142674_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ARev2fy5mecQ7kNvwHRaYpD&_nc_oc=AdkhyuS-ZS6BmH0VTvKW1KqHwYaSsQ4D1CssUXm4g9iiuwIRDu0iFIoMGVXG7qYawYs8NjlPPLgKu79NgCCUZy9G&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=fYA87g9KapOeOh6KmcI1yQ&oh=00_AfNn9TI1isKNZZftwKTVm-nhE6RwqjXPTZBZ2w03pZqf9Q&oe=684B317B',
    },
    {
      title: 'Camper7',
      image: 'https://scontent.fias1-2.fna.fbcdn.net/v/t39.30808-6/503381460_1178867904253914_5485864573164284107_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=2DSGp7MR1nAQ7kNvwEFBuE6&_nc_oc=Adm5Zxsmv0KYv6PwNugsPCiF57l3Tl0BNLNM4qBueExIRdFQZjJG5CgCQ1mg5n1PlF9hC_68C60hzm09B7WIv8Fu&_nc_zt=23&_nc_ht=scontent.fias1-2.fna&_nc_gid=9k_kG6LjV0eZiNHsh6c9gQ&oh=00_AfPHAew2IzOd-vp8uuWu-HP4PN1Sc3s9XvS6gcFw8yVzWg&oe=684B4203',
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Discover our Vow to Wow van
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            At Vintage VW Wedding Hire, we do more than provide stylish wedding transport – we create unforgettable moments. With over 15 years of hands-on experience restoring classic Volkswagens, our love for these iconic vehicles runs deep. Every curve, color, and chrome detail of our vintage camper van reflects our dedication to craftsmanship, nostalgia, and timeless beauty.

            What began as a personal passion project has evolved into a heartfelt business – one that blends our expertise in restoration with our love for celebrations full of joy and meaning. We’ve poured our knowledge, care, and creativity into every inch of our special van, transforming it into more than just transport – it’s a centerpiece for your big day.

            Lovingly decorated and thoughtfully designed, our retro VW camper brings a unique touch to weddings and special events. Whether it’s the perfect entrance, a cozy photo booth on wheels, or a romantic escape just for two, this van is built for "wow" moments.

            Let us bring vintage soul and standout style to your celebration – because you deserve more than just a ride. You deserve a memory that lasts forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-64 object-cover shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(project.image)}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
