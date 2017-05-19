import React from 'react';

export default function Lyrics({ text, setArtist, artistQuery, setSong, songQuery, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={setArtist} value={artistQuery} name="artist" placeholder="Artist" type="text" />
        <input onChange={setSong} value={songQuery} name="song" placeholder="Song" type="text" />
        <input type="submit" />
      </form>
      <pre>{text || 'Search Above!'}</pre>
    </div>
  );
}
