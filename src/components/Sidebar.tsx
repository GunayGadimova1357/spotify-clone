import React, { useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../hooks/useIsMobile';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isOpen, onClose]);

  return (
    <div
      ref={ref}
      className={`
        h-full z-50 bg-black p-2 text-white flex-col gap-2 transition-transform duration-300
        ${isMobile ? 'fixed top-0 left-0 w-[70%] sm:w-[50%] md:w-[40%]' : 'relative w-[25%] flex'}
        ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
      `}
    >
      {!isMobile && (
        <div className="flex justify-end pr-4 mb-2">
          <button
            onClick={toggleLanguage}
            className="text-xs text-gray-400 hover:text-white border border-gray-500 px-2 py-1 rounded"
          >
            {i18n.language === 'en' ? 'RU' : 'EN'}
          </button>
        </div>
      )}

      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="font-bold">{t('sidebar.home')}</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p className="font-bold">{t('sidebar.search')}</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack" />
            <p className="font-semibold">{t('sidebar.library')}</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow" />
            <img className="w-5" src={assets.plus_icon} alt="plus" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
          <h1>{t('sidebar.create_title')}</h1>
          <p className="font-light">{t('sidebar.create_subtitle')}</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            {t('sidebar.create_button')}
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
          <h1>{t('sidebar.podcast_title')}</h1>
          <p className="font-light">{t('sidebar.podcast_subtitle')}</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            {t('sidebar.podcast_button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;