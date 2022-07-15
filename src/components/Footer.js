import React from 'react';

function Footer() {
  return (
    <footer className='py-5 bg-dark sticky-bottom'>
      <div className='container-fluid py-5'>
        <h2 className='fw-bold text-left text-white ms-5'>Shortly</h2>
        <p className='m-0 text-center text-white'>
          Copyright &copy; Shortly {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
