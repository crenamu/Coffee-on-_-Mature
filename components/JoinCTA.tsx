import React from 'react';
import { Mail } from 'lucide-react';

const JoinCTA: React.FC = () => {
  return (
    <section id="join" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Mail className="w-8 h-8 mx-auto mb-6 text-stone-400" />
        
        <h2 className="font-serif text-3xl md:text-5xl mb-6 font-light break-keep">
          우리 동네 커뮤니티와 함께하세요
        </h2>
        
        <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed break-keep">
          커뮤니티 모임, 테이스팅 워크숍, 계절의 이야기들을 가장 먼저 받아보세요. 의미 있는 소식만 전해드립니다.
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="px-6 py-4 bg-transparent border border-stone-700 focus:border-stone-400 focus:outline-none text-stone-100 placeholder-stone-600 w-full"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors font-medium tracking-wide uppercase text-sm whitespace-nowrap"
          >
            구독하기
          </button>
        </form>
        
        <p className="mt-8 text-stone-600 text-sm">
          Coffee On 가족이 되어주세요.
        </p>
      </div>
    </section>
  );
};

export default JoinCTA;