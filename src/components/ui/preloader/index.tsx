import React from 'react';
import './Preloader.less';

export const Preloader: React.FC = () => {
  return (
    <div className='loader'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  );
}

