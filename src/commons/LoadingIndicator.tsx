import React from 'react';

function LoadingIndicator () {
  return (
    <div id='loader-wrapper'>
      <div id='loader'></div>
      <div className='loader-section section-left'></div>
      <div className='loader-section section-right'></div>
    </div>
  );
}

export default LoadingIndicator;
