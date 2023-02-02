import Layout from '@/components/Layout';
import React from 'react';
import LeftSideComponent from '@/components/LeftSide.component';
import MainComponent from '@/components/Main.component';
import BottomSideComponent from '@/components/BottomSide.component';

function Home() {
  return (
    <Layout>
      <div className="flex ">
        <LeftSideComponent />
        <MainComponent />
      </div>
      <BottomSideComponent />
    </Layout>
  );
}

export default Home;
