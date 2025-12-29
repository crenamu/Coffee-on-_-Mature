import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Part 1: Slow Life */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/seed/coffee_book/800/1000" 
                alt="Slow living with coffee" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-8 leading-tight">
              잠시 멈춤. <br/>
              <span className="italic text-stone-500">순간을 음미하다.</span>
            </h2>
            <div className="w-12 h-0.5 bg-stone-300 mb-8"></div>
            <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg break-keep">
              바쁘게 돌아가는 세상 속에서 우리는 멈춤을 선택합니다. Coffee On은 단순한 카페인이 아닌, 준비의 의식과 마시는 순간의 평화를 지향합니다. 진정한 가치는 서두를 수 없다고 믿기 때문입니다.
            </p>
            <p className="text-stone-600 leading-relaxed font-light text-lg break-keep">
              이곳은 시간이 조금 더 느리게 흐르는 안식처로 설계되었습니다. 온전히 자신에게 집중하거나 주변 사람들과 다시 연결될 수 있는 공간입니다.
            </p>
          </div>
        </div>

        {/* Part 2: Community Connection */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
               <img 
                src="https://picsum.photos/seed/coffee_talk/1000/800" 
                alt="Community conversation" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pr-12">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-8 leading-tight">
              연결을 위한 <br/>
              <span className="italic text-stone-500">캔버스.</span>
            </h2>
            <div className="w-12 h-0.5 bg-stone-300 mb-8"></div>
            <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg break-keep">
              우리는 동네의 거실입니다. 낯선 이가 이웃이 되고, 이웃이 친구가 되는 곳입니다. 
            </p>
            <p className="text-stone-600 leading-relaxed font-light text-lg break-keep">
              아침 독서 모임부터 저녁의 담소까지, Coffee On은 지역 사회의 일상에 스며들어 있습니다. 우리가 건네는 한 잔의 커피는 당신을 환영하는 초대장입니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;