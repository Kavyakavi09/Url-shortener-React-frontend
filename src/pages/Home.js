import React from 'react';
import ShowCase from '../components/ShowCase';
import Advanced from '../components/Advanced';
import Boost from '../components/Boost';
import Footer from '../components/Footer';
import Shortener from '../pages/Shortener';

function Home() {
  return (
    <div>
      <ShowCase />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default Home;
