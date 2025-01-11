import React from "react";

const TrackCard = ({ track, onClick }) => {
  return (
    <div className="track-card cursor-pointer p-4 border rounded-lg hover:bg-gray-200" onClick={onClick}>
      <img src={track.album.images[0].url} alt={track.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{track.name}</h3>
      <p className="text-sm text-gray-500">{track.artists.map(artist => artist.name).join(', ')}</p>
      <p className="text-sm text-gray-500">{track.album.name}</p>
    </div>
  );
};

export default TrackCard;
