import React from 'react';

function Banner () {
  return (
    <div className='kode-inner-banner'>
      <div className='kode-page-heading'>
        <h2>Toko Buku</h2>
        <ol className='breadcrumb'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#' className='active'>
              Buku
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Banner;
