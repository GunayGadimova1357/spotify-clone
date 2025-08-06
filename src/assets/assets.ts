import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'

import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import song4 from  './song4.mp3'
import song5 from  './song5.mp3'
import song6 from  './song6.mp3'
import song7 from  './song7.mp3'
import song8 from  './song8.mp3'

export const assets: Record<string, string> = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}
export interface Album {
  id: number
  name: string
  image: string
  desc: string
  bgColor: string
}

export const albumsData: Album[] = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 Piano",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#477D66"
    },
    {   
        id:2,
        name: "Trending USA",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#AF2896"
    },
    {   
        id:4,
        name: "Study Playlist",
        image: img5,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#509BF5"
    },
    {   
        id:5,
        name: "Sleep Better",
        image: img6,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#1D3557"
    }
]

export const songsData = [
    {
        id:0,
        name: "Lights Out",
        image: img1,
        file:song1,
        desc:"Mindless Self Indulgence",
        duration:"2:37"
    },
    {
        id:1,
        name: "Out Of Control",
        image: img2,
        file:song2,
        desc:"She Wants Revenge",
        duration:"3:37"
    },
    {
        id:2,
        name: "Lullaby",
        image: img3,
        file:song3,
        desc:"The Cure",
        duration:"4:08"
    },
    {
        id:3,
        name: "Sacrifice",
        image: img4,
        file:song4,
        desc:"London After Midnight",
        duration:"7:35"
    },
    {
        id:4,
        name: "I'm a Reject",
        image: img11,
        file:song5,
        desc:"Lebanon Hanover",
        duration:"3:06"
    },
    {
        id:5,
        name: "Sonne",
        image: img15    ,
        file:song6,
        desc:"Rammstein",
        duration:"4:32"
    },
    {
        id:6,
        name: "Enjoy the Silence",
        image: img7,
        file:song7,
        desc:"Depeche Mode",
        duration:"4:17"
    },
    {
        id:7,
        name: "Love Crime",
        image: img12,
        file:song8,
        desc:"Siouxsie",
        duration:"4:59"
    }
]

export const songs= [song1, song2, song3, song4, song5, song6, song7, song8 ]