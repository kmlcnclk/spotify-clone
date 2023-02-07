import { SVGProps } from 'react';

interface OnClickType {
  onClickFunc: Function;
}

type IconTypeWithOnClick = SVGProps<SVGSVGElement> & OnClickType;

export const SpotifyIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      viewBox="0 0 1134 340"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <title>Spotify</title>
      <path
        fill={color}
        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
      ></path>
    </svg>
  );
};

export const HomeFillIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
    </svg>
  );
};

export const HomeIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
    </svg>
  );
};

export const SearchIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
    </svg>
  );
};

export const SearchFillIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
      <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
    </svg>
  );
};

export const LibraryIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
    </svg>
  );
};

export const LibraryFillIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"></path>
    </svg>
  );
};

export const PlusIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
    </svg>
  );
};

export const HeartIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
    </svg>
  );
};

export const HeartUnFillIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
    </svg>
  );
};

export const SpeakerIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
      <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
    </svg>
  );
};

export const StopIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>
    </svg>
  );
};

export const DownloadIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
      <path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
    </svg>
  );
};

export const LeftArrowIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"></path>
    </svg>
  );
};

export const RightArrowIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"></path>
    </svg>
  );
};

export const BottomIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M14 6l-6 6-6-6h12z"></path>
    </svg>
  );
};

export const ExternalLinkIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      aria-label="External link"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
    </svg>
  );
};

export const PlayIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
    </svg>
  );
};

export const PictureInPictureIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <g fill={color} fillRule="evenodd">
        <path
          d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
          fillRule="nonzero"
        ></path>
        <path d="M10 8h4v3h-4z"></path>
      </g>
    </svg>
  );
};

export const ShuffleIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
      <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
    </svg>
  );
};

export const PrevIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
    </svg>
  );
};

export const NextIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
    </svg>
  );
};

export const RepeatIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
    </svg>
  );
};

export const RepeatOneIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M0 4.75A3.75 3.75 0 013.75 1h.75v1.5h-.75A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25z"></path>
      <path d="M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z"></path>
    </svg>
  );
};

export const LyricsIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
    </svg>
  );
};

export const QueueIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
    </svg>
  );
};

export const ConnectDeviceIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
      <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
    </svg>
  );
};

export const MuteSpeakerIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      aria-label="Volume off"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>
      <path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
    </svg>
  );
};

export const OneSpeakerIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      aria-label="Volume low"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
    </svg>
  );
};

export const TwoSpeakerIcon = ({
  width,
  height,
  color,
  className,
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      aria-label="Volume medium"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
      width={width}
      height={height}
      fill={color}
    >
      <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path>
    </svg>
  );
};
