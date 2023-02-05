import React, { FunctionComponent } from 'react';
import {
  SpotifyIcon,
  HomeFillIcon,
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  SearchFillIcon,
  LibraryFillIcon,
  PlusIcon,
  HeartIcon,
  SpeakerIcon,
  StopIcon,
  DownloadIcon,
  LeftArrowIcon,
  RightArrowIcon,
  BottomIcon,
  ExternalLinkIcon,
  PlayIcon,
} from './Icons';

type IconTypes = {
  name: string;
  size?: number | string;
  height?: number | string;
  width?: number | string;
  onClickFunc?: Function;
  color?: string;
  className?: string;
};

const Icon: any = ({
  name,
  size,
  height,
  width,
  onClickFunc,
  color,
  className,
}: IconTypes) => {
  const icons: any = {
    spotify: SpotifyIcon,
    home: HomeIcon,
    homeFill: HomeFillIcon,
    search: SearchIcon,
    library: LibraryIcon,
    searchFill: SearchFillIcon,
    libraryFill: LibraryFillIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    speaker: SpeakerIcon,
    stop: StopIcon,
    download: DownloadIcon,
    leftArrow: LeftArrowIcon,
    rightArrow: RightArrowIcon,
    bottom: BottomIcon,
    externalLink: ExternalLinkIcon,
    play: PlayIcon,
  };

  const Component = icons[name];

  if (size) {
    return (
      <Component
        {...{
          size,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  } else if (height && width) {
    return (
      <Component
        {...{
          width,
          height,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  }
};

export default Icon;
