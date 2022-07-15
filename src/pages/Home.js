import React from 'react';
import ShowCase from '../components/ShowCase';
import Advanced from '../components/Advanced';
import Boost from '../components/Boost';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <ShowCase />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default Home;
