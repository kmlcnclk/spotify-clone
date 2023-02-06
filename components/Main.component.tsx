import React from 'react';
import CardListComponent from './CardList.component';
import Header from './header';

function MainComponent() {
  const data = [
    {
      title: 'Recently played',
      subData: [
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
      ],
    },
    {
      title: 'Recently played',
      subData: [
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
      ],
    },
  ];

  return (
    <div className="bg-[#121212] w-full">
      <Header />
      <div className="mx-6 my-8">
        {data.map((d, i) => (
          <CardListComponent key={i} {...d} />
        ))}
      </div>
    </div>
  );
}

export default MainComponent;
