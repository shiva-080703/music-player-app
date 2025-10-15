import React, { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const audioRef = useRef();

  const playlist = [
    {
      title: 'Chill Ambient Music',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    },
    {
      title: 'Upbeat Electronic',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop'
    },
    {
      title: 'Melodic Journey',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
      title: 'Energetic Beat',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop'
    },
    {
      title: 'Smooth Vibes',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop'
    },
    {
      title: 'Dreamy Soundscape',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
    },
    {
      title: 'Dynamic Rhythm',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      cover: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop'
    },
    {
      title: 'Peaceful Melody',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      cover: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop'
    },
    {
      title: 'Night Drive',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
      title: 'Sunrise Melody',
      artist: 'Free Audio Library',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      cover: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=300&h=300&fit=crop'
    },
    {
      title: 'Ocean Waves',
      artist: 'Nature Sounds',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      cover: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=300&fit=crop'
    },
    {
      title: 'Mountain Echo',
      artist: 'Ambient Collective',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
    },
    {
      title: 'City Lights',
      artist: 'Urban Beats',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
      cover: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300&h=300&fit=crop'
    },
    {
      title: 'Forest Rain',
      artist: 'Nature Sounds',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
      cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop'
    },
    {
      title: 'Desert Wind',
      artist: 'World Music',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
      cover: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300&h=300&fit=crop'
    },
    {
      title: 'Midnight Jazz',
      artist: 'Jazz Ensemble',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
      cover: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop'
    },
    {
      title: 'Electronic Dreams',
      artist: 'Synth Wave',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop'
    },
    {
      title: 'Acoustic Sunset',
      artist: 'Folk Artists',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      cover: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=300&h=300&fit=crop'
    },
    {
      title: 'Techno Pulse',
      artist: 'DJ Collective',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      cover: 'https://images.unsplash.com/photo-1571173069043-3e661019c376?w=300&h=300&fit=crop'
    },
    {
      title: 'Classical Morning',
      artist: 'Orchestra Symphony',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      cover: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop'
    }
  ];

  // Filter playlist based on search
  const filteredPlaylist = playlist.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClickPrevious = () => {
    setCurrentTrack((prevTrack) => 
      prevTrack === 0 ? playlist.length - 1 : prevTrack - 1
    );
  };

  const handleClickNext = () => {
    setCurrentTrack((prevTrack) => 
      (prevTrack + 1) % playlist.length
    );
  };

  const handleEnd = () => {
    handleClickNext();
  };

  const handlePlaylistClick = (index) => {
    setCurrentTrack(index);
    audioRef.current.audio.current.play();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="music-player-container">
      <div className="player-wrapper">
        <div className="player-header">
          <h1 className="animated-title">🎵 My Music Player</h1>
          <p className="subtitle">Enjoy 20 amazing tracks</p>
        </div>

        <div className="now-playing">
          <div className="album-art-wrapper">
            <img 
              src={playlist[currentTrack].cover} 
              alt={playlist[currentTrack].title}
              className="album-art rotating"
            />
          </div>
          <div className="song-info">
            <h2 className="song-title-animate">{playlist[currentTrack].title}</h2>
            <p className="artist-animate">{playlist[currentTrack].artist}</p>
          </div>
        </div>

        <div className="audio-player-wrapper">
          <AudioPlayer
            ref={audioRef}
            src={playlist[currentTrack].url}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleEnd}
            autoPlayAfterSrcChange={false}
            customAdditionalControls={[]}
          />
        </div>

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Search songs or artists..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="clear-btn">✕</button>
            )}
          </div>
          {searchQuery && (
            <p className="search-results">Found {filteredPlaylist.length} song(s)</p>
          )}
        </div>

        <div className="playlist-section">
          <h3>Playlist ({filteredPlaylist.length} songs)</h3>
          <div className="playlist">
            {filteredPlaylist.length > 0 ? (
              filteredPlaylist.map((song, index) => {
                const actualIndex = playlist.indexOf(song);
                return (
                  <div
                    key={actualIndex}
                    className={`playlist-item ${actualIndex === currentTrack ? 'active' : ''} fade-in`}
                    onClick={() => handlePlaylistClick(actualIndex)}
                  >
                    <div className="playlist-item-number">{actualIndex + 1}</div>
                    <img src={song.cover} alt={song.title} className="playlist-thumbnail" />
                    <div className="playlist-song-info">
                      <h4>{song.title}</h4>
                      <p>{song.artist}</p>
                    </div>
                    {actualIndex === currentTrack && (
                      <div className="now-playing-indicator">
                        <span className="playing-icon">▶</span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="no-results">
                <p>😔 No songs found</p>
                <button onClick={clearSearch} className="clear-search-btn">Clear Search</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
