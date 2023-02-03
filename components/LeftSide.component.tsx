import Icon from '@/src/Icon';
import React, { useState } from 'react';

function LeftSideComponent() {
  const [menu, setMenu] = useState<string>('home');
  const [stopHoverState, setStopHoverState] = useState<boolean>(false);

  return (
    <div className="w-auto px-2 bg-black h-screen">
      <div className="py-6 pl-4 pr-7">
        <Icon name="spotify" width="131" height="40" color="#fff" />
      </div>
      <div>
        <div
          className="flex items-center pl-4 pr-7 py-2 space-x-4 cursor-pointer"
          onClick={() => setMenu('home')}
        >
          {menu === 'home' ? (
            <Icon name="homeFill" width="24" height="24" color="#fff" />
          ) : (
            <Icon name="home" width="24" height="24" color="#b3b3b3" />
          )}
          <p
            className={`${
              menu === 'home' ? 'text-white' : 'text-[#b3b3b3]'
            } text-sm font-semibold hover:text-white transition-all`}
          >
            Home
          </p>
        </div>
        <div
          className="flex items-center pl-4 pr-7 py-2 space-x-4 cursor-pointer"
          onClick={() => setMenu('search')}
        >
          {menu === 'search' ? (
            <Icon name="searchFill" width="24" height="24" color="#fff" />
          ) : (
            <Icon name="search" width="24" height="24" color="#b3b3b3" />
          )}
          <p
            className={`${
              menu === 'search' ? 'text-white' : 'text-[#b3b3b3]'
            } text-sm font-semibold hover:text-white transition-all`}
          >
            Search
          </p>
        </div>
        <div
          className="flex items-center pl-4 pr-7 py-2 space-x-4 cursor-pointer"
          onClick={() => setMenu('library')}
        >
          {menu === 'library' ? (
            <Icon name="libraryFill" width="24" height="24" color="#fff" />
          ) : (
            <Icon name="library" width="24" height="24" color="#b3b3b3" />
          )}
          <p
            className={`${
              menu === 'library' ? 'text-white' : 'text-[#b3b3b3]'
            } text-sm font-semibold hover:text-white transition-all`}
          >
            Your Library
          </p>
        </div>
      </div>
      <div className="mt-7 pl-4 py-2 space-y-4">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setMenu('create-playlist')}
        >
          <div className="bg-white rounded-sm w-6 h-6 p-[5px] text-center">
            <Icon name="plus" width="14" height="14" color="#000" />
          </div>
          <p
            className={`${
              menu === 'create-playlist' ? 'text-white' : 'text-[#b3b3b3]'
            } text-sm font-semibold hover:text-white transition-all`}
          >
            Create Playlist
          </p>
        </div>
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setMenu('liked-songs')}
        >
          <div className=" rounded-sm w-6 h-6 p-[6.4px] text-center bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
            <Icon name="heart" width="12" height="12" color="#fff" />
          </div>
          <p
            className={`${
              menu === 'liked-songs' ? 'text-white' : 'text-[#b3b3b3]'
            } text-sm font-semibold hover:text-white transition-all `}
          >
            Liked Songs
          </p>
          <div
            onMouseEnter={() => setStopHoverState(true)}
            onMouseLeave={() => setStopHoverState(false)}
          >
            {stopHoverState ? (
              <Icon name="stop" width="16" height="16" color="#fff" />
            ) : (
              <Icon name="speaker" width="16" height="16" color="#1ed760" />
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[#282828] mr-3"></div>
        <div className="space-y-3">
          <p className="text-[#b3b3b3] text-sm font-semibold cursor-pointer hover:text-white transition-all">
            My Playlist #3
          </p>
          <p className="text-[#b3b3b3] text-sm font-semibold cursor-pointer hover:text-white transition-all">
            My Shazam Tracks
          </p>
          <p className="text-[#b3b3b3] text-sm font-semibold cursor-pointer hover:text-white transition-all">
            My Shazam Songs
          </p>
          <p className="text-[#b3b3b3] text-sm font-semibold cursor-pointer hover:text-white transition-all">
            ay yolu bilmiyor
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="pl-4 flex space-x-4 absolute -bottom-24 justify-center items-center cursor-pointer">
          <Icon name="download" width="24" height="24" color="#b3b3b3" />
          <p className="text-[#b3b3b3] text-sm font-semibold hover:text-white transition-all">
            Install App
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSideComponent;
