import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold relative">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="left"
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="right"
          />
        </div>

        {!isMobile && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            >
              {t('navbar.login')}
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
            >
              {t('navbar.signup')}
            </button>
          </div>
        )}

        {isMobile && (
          <button onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>

      {!isMobile && (
        <div className="flex items-center gap-2 mt-4">
          <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
            {t('navbar.filter.all')}
          </p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
            {t('navbar.filter.music')}
          </p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
            {t('navbar.filter.podcasts')}
          </p>
        </div>
      )}

      {isMobile && (
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-[#1e1e22] text-white z-50 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col px-6 gap-4">
            <button onClick={() => navigate('/login')} className="text-white text-left">
              {t('navbar.login')}
            </button>
            <button onClick={() => navigate('/signup')} className="text-white text-left">
              {t('navbar.signup')}
            </button>

            <hr className="my-4 border-gray-600" />

            <button
              className="text-xs text-gray-400 hover:text-white border border-gray-500 px-2 py-1 rounded"
              onClick={toggleLanguage}
            >
              {i18n.language === 'en' ? 'RU' : 'EN'}
            </button>

            <button className="text-left">{t('navbar.filter.all')}</button>
            <button className="text-left">{t('navbar.filter.music')}</button>
            <button className="text-left">{t('navbar.filter.podcasts')}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;