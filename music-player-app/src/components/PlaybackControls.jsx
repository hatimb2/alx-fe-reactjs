import { useState } from "react";
const PlaybackControls = ({
  isPlaying,
  onPlayPause,
  skipForward,
  skipBackward,
  currentTime,
  duration,
  volume,
  onVolumeChange,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <button onClick={skipBackward} className="bg-gray-300 p-2 rounded-md">-10s</button>
        <button onClick={onPlayPause} className="bg-blue-500 text-white p-4 rounded-full">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={skipForward} className="bg-gray-300 p-2 rounded-md">+10s</button>
      </div>
      
      <div className="flex justify-between text-sm mt-2">
        <span>{Math.floor(currentTime)}s</span>
        <span>{Math.floor(duration)}s</span>
      </div>
      
      {/* Volume control */}
      <div className="mt-2">
        <label htmlFor="volume" className="text-sm">Volume</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PlaybackControls;
