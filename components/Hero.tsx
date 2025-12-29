import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop" 
          alt="Warm Coffee Shop Interior" 
          className="w-full h-full object-cover opacity-90 animate-kenburns"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <span className="text-stone-100 tracking-[0.3em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up">
          Est. 2024 • 우리 동네의 안식처
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-8 max-w-4xl animate-fade-in-up delay-100 drop-shadow-lg">
          커피로 잇는 <br />
          <span className="italic opacity-95">우리 동네 이야기</span>
        </h1>
        <p className="text-stone-100 text-lg md:text-xl font-light max-w-xl mb-12 animate-fade-in-up delay-200 drop-shadow-md">
          카페 그 이상의 공간. <br className="md:hidden"/>
          잠시 멈추어 사색하고, 이웃과 삶을 나누는 <br className="md:hidden"/>
          느리고 진정성 있는 공간입니다.
        </p>
        
        <a 
          href="#philosophy"
          className="group flex flex-col items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 animate-fade-in-up delay-300"
        >
          <span className="text-xs tracking-widest uppercase font-medium">브랜드 철학 보기</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;