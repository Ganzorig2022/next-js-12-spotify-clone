import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';

//imported from Center.js
const Songs = () => {
  const playlist = useRecoilValue(playlistState); //center.js dotor anh set-lesen
  return (
    <div className='px-8 text-white'>
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
