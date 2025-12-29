import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-stone-900">Coffee On.</h3>
            <p className="text-stone-500 font-light max-w-xs break-keep">
              커피의 예술과 느린 삶을 통해 진정한 연결을 가꾸어 갑니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-stone-400 mb-6">오시는 길</h4>
              <ul className="space-y-4 text-stone-600 font-light">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-stone-400 mt-0.5 shrink-0" />
                  <span>서울시 강남구<br/>가로수길 123</span>
                </li>
                <li>월 - 일: 오전 8시 - 오후 8시</li>
              </ul>
            </div>
            
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-stone-400 mb-6">소통</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-stone-200 rounded-full hover:border-stone-900 hover:text-stone-900 text-stone-400 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-stone-200 rounded-full hover:border-stone-900 hover:text-stone-900 text-stone-400 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-stone-400 text-xs font-light">
          <p>&copy; 2024 Coffee On. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-600">개인정보처리방침</a>
            <a href="#" className="hover:text-stone-600">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;