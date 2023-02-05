import Icon from '@/src/Icon';
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import NextImage from 'next/image';
import CardComponent from './Card.component';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Account</p>
        <Icon name="externalLink" width="16" height="16" color="#fff" />
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div>
        <p className="text-sm font-semibold">Profile</p>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Upgrade to Premium</p>
        <Icon name="externalLink" width="16" height="16" color="#fff" />
      </div>
    ),
  },
  {
    key: '4',
    label: (
      <div>
        <p className="text-sm font-semibold">Settings</p>
      </div>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '5',
    label: (
      <div>
        <p className="text-sm font-semibold">Logout</p>
      </div>
    ),
  },
];

function MainComponent() {
  const data = [
    {
      img: '/liked_songs.png',
      name: 'Liked Songs',
      numberOfSongOrNameOfArtists: '65 songs',
    },
    {
      img: '/card_1.jpg',
      name: 'Daily Mix 3',
      numberOfSongOrNameOfArtists:
        'Black Eyed Peas, David Guetta, Lil Nas X and more',
    },
    {
      img: '/card_2.jpg',
      name: 'Coding and Gaming with Jazz',
      numberOfSongOrNameOfArtists: 'Programming and Coding Jazz',
    },
    {
      img: '/card_3.jpg',
      name: 'Happy Mix',
      numberOfSongOrNameOfArtists: 'Foster The People and more',
    },
    {
      img: '/card_4.jpg',
      name: 'Daily Mix 1',
      numberOfSongOrNameOfArtists: 'Reynmen, Tefo, Ece Ronay and more',
    },
  ];

  return (
    <div className="bg-[#121212] w-full">
      <div className="flex justify-between items-center mx-6 my-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-[#0a0a0a] p-2 rounded-full cursor-pointer">
            <Icon name="leftArrow" width="17" height="17" color="#fff" />
          </div>
          <div className="bg-[#131313] p-2 rounded-full cursor-pointer">
            <Icon name="rightArrow" width="17" height="17" color="#9d9d9d" />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <button className="bg-transparent border border-[#878787] text-white text-sm font-semibold px-3 py-1 rounded-full hover:scale-105 transition-all hover:border-white">
            Upgrade
          </button>
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            // @ts-ignore
            getPopupContainer={() => document.getElementById('menu-dropdown')}
          >
            <div className="flex items-center space-x-2 justify-center bg-black rounded-full p-1 pr-2 hover:bg-[#282828] transition-all cursor-pointer">
              <NextImage
                src="/kmlcnclk.png"
                alt="kmlcnclk"
                width="28"
                height="28"
                className="rounded-full"
              />
              <p className="text-white text-sm font-semibold">kmlcnclk</p>
              <Icon name="bottom" width="17" height="17" color="#fff" />
            </div>
          </Dropdown>
          <div className="relative" id="menu-dropdown"></div>
        </div>
      </div>
      <div className="mx-6 my-8">
        <h3 className="text-2xl font-bold text-white">Recently played</h3>
        <div className="grid grid-cols-5 mt-7">
          {data.map((d, i) => (
            <CardComponent {...d} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
