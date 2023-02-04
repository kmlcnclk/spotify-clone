import Icon from '@/src/Icon';
import React from 'react';

function CardComponent() {
  return (
    <div className="w-[201px] h-[291.38px] bg-[#181818] hover:bg-[#282828] transition-all duration-500 cursor-pointer rounded-md p-4">
      <div className="rounded-md w-[169px] h-[169px] flex items-center justify-center bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
        <Icon name="heart" width="50" height="50" color="#fff" />
      </div>
      <h5 className="text-white font-bold mt-4">Liked Songs</h5>
      <p className="text-[#acacac] text-sm mt-3">65 songs</p>
    </div>
  );
}

export default CardComponent;
