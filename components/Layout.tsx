import Head from 'next/head';
import React from 'react';

function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <title>Spotify - Web Player</title>
        <meta name="description" content="Spotify Clone" />
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* <meta property="og:url" content="https://cancelik.vercel.app" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spotify Clone" />
        <meta property="og:description" content="Spotify Clone" />
        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:url" content="https://cancelik.vercel.app" /> */}
        <meta name="twitter:title" content="Spotify Clone" />
        <meta name="twitter:description" content="Spotify Clone" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-head-count" content="3" />
        <link rel="icon" href="/spotify-logo.png" />
      </Head>
      <>{children}</>
    </div>
  );
}

export default Layout;
