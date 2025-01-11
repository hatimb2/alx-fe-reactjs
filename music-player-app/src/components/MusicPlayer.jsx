import React from 'react';
import { useState,useEffect,useRef} from 'react';
import usePlayer from '../hooks/usePlayer';
const MusicPlayer = ({ track }) => {
  return (
    <div className="music-player p-4 border rounded-lg bg-white">
      <h3 className="text-xl font-semibold mb-4">Now Playing</h3>
      <div className="flex items-center">
        <img src={track.album.images[0].url} alt={track.name} className="w-24 h-24 object-cover rounded-md mr-4" />
        <div>
          <h4 className="text-lg font-semibold">{track.name}</h4>
          <p className="text-sm text-gray-500">{track.artists.map(artist => artist.name).join(', ')}</p>
          <p className="text-sm text-gray-500">{track.album.name}</p>
          <audio controls>
            <source src={track.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
