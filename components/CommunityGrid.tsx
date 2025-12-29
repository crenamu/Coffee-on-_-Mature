import React from 'react';

const moments = [
  { id: 1, title: '일요일 아침의 독서', img: 'https://picsum.photos/seed/reading/600/600' },
  { id: 2, title: '푸어오버의 미학', img: 'https://picsum.photos/seed/pour/600/600' },
  { id: 3, title: '지역 아티스트 쇼케이스', img: 'https://picsum.photos/seed/art/600/600' },
];

const CommunityGrid: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-stone-500 tracking-widest uppercase text-xs font-semibold">함께한 순간들</span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-4">Coffee On의 일상</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((moment) => (
            <div key={moment.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-square mb-4">
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 z-10"></div>
                <img 
                  src={moment.img} 
                  alt={moment.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800 group-hover:text-stone-600 transition-colors">
                {moment.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGrid;