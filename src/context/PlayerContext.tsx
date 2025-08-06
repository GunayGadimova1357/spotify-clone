import React, {
  createContext,
  useRef,
  ReactNode,
  RefObject,
  useContext,
  useState,
  useEffect,
} from "react";
import { songsData } from "../assets/assets";

interface TimeType {
  currentTime: {
    second: number;
    minute: number;
  };
  totalTime: {
    second: number;
    minute: number;
  };
}

interface PlayerContextType {
  audioRef: RefObject<HTMLAudioElement | null>;
  seekBg: RefObject<HTMLDivElement | null>;
  seekBar: RefObject<HTMLHRElement | null>;

  track: typeof songsData[number];
  setTrack: React.Dispatch<React.SetStateAction<typeof songsData[number]>>;

  playStatus: boolean;
  setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;

  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;

  play: () => void;
  pause: () => void;
  playWithId: (id: number) => Promise<void>;
  previous: () => Promise<void>;
  next: () => Promise<void>;
  seekSong: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

interface PlayerProviderProps {
  children: ReactNode;
}

const PlayerContextProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBg = useRef<HTMLDivElement>(null);
  const seekBar = useRef<HTMLHRElement>(null);

  const [track, setTrack] = useState<typeof songsData[number]>(songsData[0]);
  const [playStatus, setPlayStatus] = useState<boolean>(false);

  const [time, setTime] = useState<TimeType>({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    audioRef.current?.play();
    setPlayStatus(true)
  }

    const pause = () => {
    audioRef.current?.pause();
    setPlayStatus(false)
  }

  const playWithId = async (id: number) => {
    await setTrack(songsData[id]);
    await audioRef.current?.play();
    setPlayStatus(true);
  }

  const previous = async () => {
    if(track.id>0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current?.play();
        setPlayStatus(true);
    }
  }


  const next = async () => {
    if(track.id<songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await audioRef.current?.play();
        setPlayStatus(true);
    }
  }

const seekSong = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const audio = audioRef.current;
  const seekBgEl = seekBg.current;

  if (!audio || !seekBgEl) return;

  const clickX = e.nativeEvent.offsetX;
  const width = seekBgEl.offsetWidth;

  const newTime = (clickX / width) * audio.duration;
  audio.currentTime = newTime;
};

useEffect(() => {
  const audio = audioRef.current;
  const bar = seekBar.current;

  const handleTimeUpdate = () => {
    if (!audio || !bar || isNaN(audio.duration)) return;

    const progress = (audio.currentTime / audio.duration) * 100;
    bar.style.width = `${progress}%`;

    setTime({
      currentTime: {
        second: Math.floor(audio.currentTime % 60),
        minute: Math.floor(audio.currentTime / 60),
      },
      totalTime: {
        second: Math.floor(audio.duration % 60),
        minute: Math.floor(audio.duration / 60),
      },
    });
  };

  if (audio) {
    audio.ontimeupdate = handleTimeUpdate;
  }

  return () => {
    if (audio) {
      audio.ontimeupdate = null;
    }
  };
}, [track]);



  const contextValue: PlayerContextType = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within PlayerContextProvider");
  }
  return context;
};