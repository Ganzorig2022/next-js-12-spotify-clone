import React, { useEffect, useState } from 'react';
import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import useSpotify from '../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom';

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  // console.log(session);
  //{accessToken:"token..." expires:"2022-12-26T05:05:57.203Z" refreshToken:'token...'}
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  // console.log(playlistId);

  useEffect(() => {
    // console.log(spotifyApi.getAccessToken()); //token irne.
    if (spotifyApi.getAccessToken()) {
      // spotifyApi.getMe().then((user) => {
      //   // console.log(user);
      // });
      spotifyApi
        .getUserPlaylists()
        .then((data) => {
          setPlaylists(data.body.items); //playlist irne.
        })
        .catch((error) => console.log(error));
    }
  }, [session, spotifyApi]);

  return (
    <div className='text-gray-500 p-5 text-xs lg:text:sm border-gray-900 border-r overflow-y-scroll h-screen scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex'>
      <div className='space-y-4 '>
        <button
          className='flex items-center space-x-2 hover:text-white'
          onClick={() => signOut()}
        >
          <p>Log out</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <MagnifyingGlassCircleIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <BuildingLibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-900' />
        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Like songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Your episodes</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
        {/* PLAYLIST */}
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className='cursor-pointer hover:text-white'
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

//h-5 ==> height: 1.25rem; /* 20px */
//scrollbar-hide ==> npm install tailwind-scrollbar-hide suulgasan.
