import React from 'react';
import { assets } from '../assets/assets';
import { usePlayer } from '../context/PlayerContext';
import useIsMobile from '../hooks/useIsMobile';

const Player = () => {
  const {
    seekBg,
    seekBar,
    playStatus,
    track,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = usePlayer();

  const isMobile = useIsMobile();

  const formatTime = (minute: number, second: number) => {
    const paddedSecond = second < 10 ? `0${second}` : second;
    return `${minute}:${paddedSecond}`;
  };

  return (
    <div
      className={`
        bg-black text-white px-4 
        flex flex-col ${isMobile ? 'gap-2 py-3 px-3' : 'flex-row justify-between items-center'}
        h-[10%] min-h-[70px]
        fixed ${isMobile ? 'bottom-16' : 'bottom-0'} left-0 right-0 
        z-40 border-t border-neutral-800
      `}
    >

      {!isMobile && (
        <div className="flex items-center gap-4 w-1/3">
          <img className="w-12" src={track.image} alt="" />
          <div>
            <p>{track.name}</p>
            <p className="text-sm text-gray-400">{track.desc}</p>
          </div>
        </div>
      )}

      <div className={`flex flex-col items-center justify-center gap-2 ${isMobile ? 'w-full' : 'w-1/3'}`}>
        <div className="flex gap-4 items-center">
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="prev"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-6 cursor-pointer"
              src={assets.pause_icon}
              alt="pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-6 cursor-pointer"
              src={assets.play_icon}
              alt="play"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="next"
          />
        </div>

        <div className="flex items-center gap-2 w-full mt-2 px-2 lg:px-0">
          <p className="text-xs whitespace-nowrap">
            {formatTime(time.currentTime.minute, time.currentTime.second)}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-1 bg-gray-300 rounded-full cursor-pointer h-1"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p className="text-xs whitespace-nowrap">
            {formatTime(time.totalTime.minute, time.totalTime.second)}
          </p>
        </div>
      </div>

      {!isMobile && (
        <div className="flex items-center gap-2 opacity-75 w-1/3 justify-end">
          <img className="w-4" src={assets.plays_icon} alt="" />
          <img className="w-4" src={assets.mic_icon} alt="" />
          <img className="w-4" src={assets.queue_icon} alt="" />
          <img className="w-4" src={assets.speaker_icon} alt="" />
          <img className="w-4" src={assets.volume_icon} alt="" />
          <div className="w-20 bg-slate-50 h-1 rounded" />
          <img className="w-4" src={assets.mini_player_icon} alt="" />
          <img className="w-4" src={assets.zoom_icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Player;