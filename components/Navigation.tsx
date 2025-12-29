import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '브랜드 철학', href: '#philosophy' },
  { label: '커뮤니티', href: '#community' },
  { label: '이야기', href: '#journal' },
  { label: '함께하기', href: '#join' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'bg-stone-50/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl tracking-tighter font-light ${scrolled || isOpen ? 'text-stone-900' : 'text-stone-900 lg:text-white'}`}>
          Coffee On.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-stone-900" />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-stone-900' : 'text-stone-900'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 border-t border-stone-100 shadow-lg">
          <div className="flex flex-col py-8 px-6 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-800 text-lg font-serif font-light"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;