import React from 'react';
import CardComponent from './Card.component';

type SubData = {
  img: string;
  name: string;
  numberOfSongOrNameOfArtists: string;
};

interface CardListComponentProps {
  title: string;
  subData: SubData[];
}

const CardListComponent: React.FC<CardListComponentProps> = ({
  title,
  subData,
}: CardListComponentProps) => {
  return (
    <div className="mt-9" >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-[#b3b3b3] text-sm font-semibold hover:underline cursor-pointer">
          SHOW ALL
        </p>
      </div>
      <div className="grid grid-cols-5 mt-7 gap-5">
        {subData.map((d, i) => (
          <CardComponent {...d} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardListComponent;
