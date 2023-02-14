import {useState, useEffect} from 'react';
import Player from './Player'




function App() {
  const [songs] = useState([
   
    {
      title: "Dheere Dheere",
      artist: "Yo Yo Honey Singh",
      img_src: "/images/dheere.jpg",
      src: "/Music/Dheere Dheere (Yo Yo Honey Singh) -190Kbps.mp3"
    },
    {
      title: "Gazab ka Hai Din",
      artist: "Justin Bieber",
      img_src:"/images/gazab.jpg",
      src: "/Music/Gazab Ka Hai Yeh Din - Sanam Re (Arijit Singh) 320Kbps.mp3"
    },
    {
      title: "Naach Meri Rani",
      artist: "Guru Randhawa",
      img_src: "/images/naach meri.jpg",
      src: "/Music/Naach Meri Rani - Guru Randhawa.mp3"
    },
    {
      title: "Chaand Baaliyan",
      artist: "Aditya A",
      img_src: "/images/chand baliya.jpg",
      src: "/Music/Chaand Baaliyan - Aditya A.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length- 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;