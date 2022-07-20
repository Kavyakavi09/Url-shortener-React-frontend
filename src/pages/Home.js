import React from 'react';
import ShowCase from '../components/ShowCase';
import Advanced from '../components/Advanced';
import Boost from '../components/Boost';
import Shortener from '../pages/Shortener';

function Home() {
  return (
    <div>
      <ShowCase />
      <Shortener />
      <Advanced />
      <Boost />
    </div>
  );
}

export default Home;
