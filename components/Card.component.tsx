import Icon from '@/src/Icon';
import React, { useState } from 'react';

interface CardComponentProps {
  img: string;
  name: string;
  numberOfSongOrNameOfArtists: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  img,
  name,
  numberOfSongOrNameOfArtists,
}: CardComponentProps) => {
  const [playIconState, setPlayIconState] = useState(false);
  const [stopIconState, setStopIconState] = useState(false);

  return (
    <div
      className="w-[201px] h-[291.38px] bg-[#181818] hover:bg-[#282828] transition-all duration-500 cursor-pointer rounded-md p-4"
      onMouseEnter={() => {
        if (!stopIconState) setPlayIconState(true);
      }}
      onMouseLeave={() => {
        if (!stopIconState) setPlayIconState(false);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          width: '169px',
          height: '169px',
        }}
        className="relative rounded-md"
      >
        {playIconState && (
          <div
            className="absolute bottom-2 !shadow-2xl right-2 bg-[#1FDF64] rounded-full p-3"
            onClick={() => {
              setStopIconState((prev) => !prev);
              setPlayIconState(true);
            }}
          >
            {stopIconState ? (
              <Icon name="stop" width="24" height="24" color="#000" />
            ) : (
              <Icon name="play" width="24" height="24" color="#000" />
            )}
          </div>
        )}
      </div>
      <h5 className="text-white font-bold mt-4 truncate">{name}</h5>
      <p className="text-[#acacac] text-sm mt-3 truncate">
        {numberOfSongOrNameOfArtists}
      </p>
    </div>
  );
};

export default CardComponent;
