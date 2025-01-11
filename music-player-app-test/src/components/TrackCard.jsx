import React from "react";
const TrackCard = ({ track, onClick }) => {
    return (
      <div
        className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl"
        onClick={onClick}
      >
        <img
          src={track.album.cover_medium}
          alt={track.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-2">{track.title}</h3>
        <p className="text-sm text-gray-600">{track.artist.name}</p>
      </div>
    );
  };
  
  export default TrackCard;
  