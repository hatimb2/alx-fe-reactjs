import React from "react";
import { useRef, useState, useEffect } from 'react'
import usePlayer from "../hooks/usePlayer";
const MusicPlayer = ({ track }) => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    skipForward,
    skipBackward,
    handleVolumeChange,
  } = usePlayer(track);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.preview;
      audioRef.current.load();
    }
  }, [track]);

  return track ? (
    <div className="p-4">
      <h2 className="text-xl font-semibold">{track.title}</h2>
      <p className="text-sm text-gray-600">{track.artist.name}</p>
      <img src={track.album.cover_medium} alt={track.title} className="w-48 h-48 object-cover mt-4" />

      <audio ref={audioRef} onEnded={togglePlayPause} />

      <div className="mt-4 flex justify-between">
        <button onClick={skipBackward} className="p-2 bg-gray-300 rounded">-10s</button>
        <button onClick={togglePlayPause} className="p-4 bg-blue-500 text-white rounded-full">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={skipForward} className="p-2 bg-gray-300 rounded">+10s</button>
      </div>

      <div className="mt-2 flex justify-between text-sm">
        <span>{Math.floor(currentTime)}s</span>
        <span>{Math.floor(duration)}s</span>
      </div>

      <div className="mt-4">
        <label htmlFor="volume" className="text-sm">Volume</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  ) : null;
};

export default MusicPlayer;
