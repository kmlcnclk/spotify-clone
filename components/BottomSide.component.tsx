import React, { useState } from 'react';
import NextImage from 'next/image';
import Icon from '@/src/Icon';
import { Slider } from 'antd';

function BottomSideComponent() {
  const [heartState, setHeartState] = useState(false);
  const [pictureInPictureState, setPictureInPictureState] = useState(false);
  const [shuffleState, setShuffleState] = useState(false);
  const [playingState, setPlayingState] = useState(false);
  const [repeatValue, setRepeatValue] = useState('no-repeat');
  const [lyricsState, setLyricsState] = useState(false);
  const [queueState, setQueueState] = useState(false);
  const [soundSlideValue, setSoundSlideValue] = useState(30);
  const [soundValue, setSoundValue] = useState('one');

  const changingSlideValueFunction = async (value: number) => {
    if (value === 0) {
      await setSoundValue('mute');
    } else if (value < 30) {
      await setSoundValue('one');
    } else if (value < 60) {
      await setSoundValue('two');
    } else if (value <= 100) {
      await setSoundValue('three');
    }
    await setSoundSlideValue(value);
  };

  return (
    <div className="sticky bottom-0 left-0 right-0" id="bottomSide">
      <div className="w-ful h-[90px] bg-[#181818] border-t border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <NextImage
            src="/the_business.jpg"
            className="cursor-pointer"
            alt="The Business"
            width="56"
            height="56"
          />
          <div>
            <h5 className="text-white font-semibold text-sm cursor-pointer hover:underline">
              The Business
            </h5>
            <p className="text-[#b3b3b3] hover:underline hover:text-white cursor-pointer text-xs">
              Tiesto
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            {heartState ? (
              <div onClick={() => setHeartState(false)}>
                <Icon
                  name="heart"
                  width="16"
                  height="16"
                  color="#1FDF64"
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <div onClick={() => setHeartState(true)}>
                <Icon
                  name="heartUnFill"
                  width="16"
                  height="16"
                  color="#b3b3b3"
                  className="hover:fill-white cursor-pointer"
                />
              </div>
            )}

            <div onClick={() => setPictureInPictureState((prev) => !prev)}>
              <Icon
                name="pictureInPicture"
                width="16"
                height="16"
                color={pictureInPictureState ? '#1FDF64' : '#b3b3b3'}
                className="hover:fill-white cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <div className="flex items-center space-x-5">
              {shuffleState ? (
                <div
                  onClick={() => setShuffleState(false)}
                  className="flex flex-col justify-center items-center space-y-1"
                >
                  <Icon
                    name="shuffle"
                    width="16"
                    height="16"
                    color="#1FDF64"
                    className="cursor-pointer"
                  />
                  <div className="w-1 h-1 bg-[#1FDF64] rounded-full"></div>
                </div>
              ) : (
                <div onClick={() => setShuffleState(true)} className="mb-2">
                  <Icon
                    name="shuffle"
                    width="16"
                    height="16"
                    color="#b3b3b3"
                    className="hover:fill-white cursor-pointer"
                  />
                </div>
              )}
              <Icon
                name="prev"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />

              {playingState ? (
                <div
                  className="bg-white hover:scale-105 duration-300 rounded-full p-2 flex items-center justify-center mb-2"
                  onClick={() => setPlayingState(false)}
                >
                  <Icon
                    name="stop"
                    width="16"
                    height="16"
                    color="#000"
                    className="cursor-pointer"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setPlayingState(true)}
                  className="bg-white hover:scale-105 duration-300 rounded-full p-2 flex items-center justify-center mb-2"
                >
                  <Icon
                    name="play"
                    width="16"
                    height="16"
                    color="#000"
                    className="cursor-pointer"
                  />
                </div>
              )}

              <Icon
                name="next"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />

              {repeatValue === 'no-repeat' && (
                <div
                  onClick={() => setRepeatValue('all-repeat')}
                  className="flex flex-col justify-center items-center space-y-1"
                >
                  <Icon
                    name="repeat"
                    width="16"
                    height="16"
                    color="#b3b3b3"
                    className="hover:fill-white cursor-pointer mb-2"
                  />
                </div>
              )}
              {repeatValue === 'all-repeat' && (
                <div
                  onClick={() => setRepeatValue('one-repeat')}
                  className="flex flex-col justify-center items-center space-y-1"
                >
                  <Icon
                    name="repeat"
                    width="16"
                    height="16"
                    color="#1FDF64"
                    className="cursor-pointer"
                  />
                  <div className="w-1 h-1 bg-[#1FDF64] rounded-full"></div>
                </div>
              )}
              {repeatValue === 'one-repeat' && (
                <div
                  onClick={() => setRepeatValue('no-repeat')}
                  className="flex flex-col justify-center items-center space-y-1"
                >
                  <Icon
                    name="repeatOne"
                    width="16"
                    height="16"
                    color="#1FDF64"
                    className="cursor-pointer"
                  />
                  <div className="w-1 h-1 bg-[#1FDF64] rounded-full"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          {lyricsState ? (
            <div
              onClick={() => setLyricsState(false)}
              className="flex flex-col justify-center items-center space-y-1"
            >
              <Icon
                name="lyrics"
                width="16"
                height="16"
                color="#1FDF64"
                className="cursor-pointer"
              />
              <div className="w-1 h-1 bg-[#1FDF64] rounded-full"></div>
            </div>
          ) : (
            <div
              onClick={() => setLyricsState(true)}
              className="flex flex-col justify-center items-center space-y-1"
            >
              <Icon
                name="lyrics"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />
            </div>
          )}
          {queueState ? (
            <div
              onClick={() => setQueueState(false)}
              className="flex flex-col justify-center items-center space-y-1"
            >
              <Icon
                name="queue"
                width="16"
                height="16"
                color="#1FDF64"
                className="cursor-pointer"
              />
              <div className="w-1 h-1 bg-[#1FDF64] rounded-full"></div>
            </div>
          ) : (
            <div
              onClick={() => setQueueState(true)}
              className="flex flex-col justify-center items-center space-y-1"
            >
              <Icon
                name="queue"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />
            </div>
          )}
          <Icon
            name="connectDevice"
            width="16"
            height="16"
            color="#b3b3b3"
            className="hover:fill-white cursor-pointer mb-2"
          />
          <div className="w-[125px] flex items-center" id="sound">
            {soundValue === 'mute' && (
              <Icon
                name="muteSpeaker"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />
            )}
            {soundValue === 'one' && (
              <Icon
                name="oneSpeaker"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />
            )}
            {soundValue === 'two' && (
              <Icon
                name="twoSpeaker"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />
            )}
            {soundValue === 'three' && (
              <Icon
                name="speaker"
                width="16"
                height="16"
                color="#b3b3b3"
                className="hover:fill-white cursor-pointer mb-2"
              />
            )}
            <Slider
              defaultValue={soundSlideValue}
              className="w-[93px] mb-[18px]"
              value={soundSlideValue}
              onChange={changingSlideValueFunction}
              tooltip={{ open: false }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSideComponent;
