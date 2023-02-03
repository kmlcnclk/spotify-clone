import Icon from '@/src/Icon';
import React, { useRef } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import NextImage from 'next/image';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <div>Account</div>,
  },
  {
    key: '2',
    label: <div>Profile</div>,
  },
  {
    key: '3',
    label: <div>Upgrade to Premium</div>,
  },
  {
    key: '4',
    label: <div>Settings</div>,
  },
  {
    type: 'divider',
  },
  {
    key: '5',
    label: <div>Logout</div>,
  },
];

function MainComponent() {
  return (
    <div className="bg-[#1E1E1E] w-full">
      <div className="flex justify-between items-center mx-5 my-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-[#0a0a0a] p-2 rounded-full">
            <Icon name="leftArrow" width="17" height="17" color="#fff" />
          </div>
          <div className="bg-[#131313] p-2 rounded-full">
            <Icon name="rightArrow" width="17" height="17" color="#9d9d9d" />
          </div>
        </div>
        <div
          className="flex items-center justify-center space-x-3 mr-40"
          id="menu-dropdown"
        >
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
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
