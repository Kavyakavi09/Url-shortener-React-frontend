import React from 'react';
import bgMobile from '../images/bg-boost-mobile.svg';
import bgDesktop from '../images/bg-boost-desktop.svg';

function Boost() {
  return (
    <div>
      <section className='boost position-relative'>
        <picture>
          <source media='(min-width: 768px)' srcSet={bgDesktop} />
          <img src={bgMobile} alt='background' />
        </picture>

        <div className='d-flex align-items-center justify-content-center flex-column boost-inner'>
          <h2 className='mb-5 text-white font-bold text-center'>
            Boost your links today
          </h2>
          <button className='btn btn-info rounded-pill text-white'>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Boost;
