import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { usePlayer } from '../context/PlayerContext';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../hooks/useIsMobile';

type Params = {
  id: string;
};

const DisplayAlbum = () => {
  const { id } = useParams<Params>();
  const { t } = useTranslation();
  const { playWithId } = usePlayer();
  const isMobile = useIsMobile();

  if (!id) {
    return <div className="p-4">{t('album.not_found')}</div>;
  }

  const numericId = parseInt(id, 10);
  const albumData = albumsData[numericId];

  if (!albumData) {
    return <div className="p-4">{t('album.not_found')}</div>;
  }

  return (
    <div className="p-4 pb-40 sm:p-6 sm:pb-28">
      <Navbar />

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end">
        <img className="w-40 sm:w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-400">{t('album.playlist')}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{albumData.name}</h2>
          <h4 className="text-sm sm:text-base text-gray-300">{albumData.desc}</h4>
          <p className="mt-1 text-xs sm:text-sm text-gray-400 flex flex-wrap items-center gap-1">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
            <b className="text-white">Spotify</b> • 1,174,479 {t('album.likes')} •{" "}
            <b className="text-white">50 {t('album.songs')},</b> {t('album.duration')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 mt-8 mb-4 text-[#a7a7a7] text-sm px-2">
        <p className="flex items-center">
          <b className="mr-4">#</b>{t('album.title')}
        </p>
        <p>{t('album.album')}</p>
        <p className="hidden sm:block">{t('album.date_added')}</p>
        {!isMobile && (
          <div className="flex justify-center">
            <img className="w-4" src={assets.clock_icon} alt="duration" />
          </div>
        )}
      </div>

      <hr className="border-[#333]" />

      <div>
        {songsData.map((item, index) => (
          <div
            onClick={() => playWithId(item.id)}
            key={index}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-2 py-4 items-center text-[#a7a7a7] hover:bg-[#ffffff1a] cursor-pointer rounded transition-all"
          >
            <div className="flex items-center gap-3 text-white">
              <b className="text-[#a7a7a7] w-4 text-right">{index + 1}</b>
              <img className="w-10 rounded" src={item.image} alt={item.name} />
              <span className="text-sm sm:text-base">{item.name}</span>
            </div>

            <p className="text-xs sm:text-sm">{albumData.name}</p>
            <p className="hidden sm:block text-xs sm:text-sm">{t('album.added_relative')}</p>

            {!isMobile && (
              <p className="text-xs sm:text-sm text-center">{item.duration}</p>
            )}

            <div className="h-[1px] bg-[#333] col-span-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;