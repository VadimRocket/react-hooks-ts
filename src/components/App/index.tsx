import React from 'react';
import { hot } from 'react-hot-loader';
import logo from '@assets/images/logo.png';
import Home from '@src/screens/Home';

import './App.less';

type ApplicationProps = {
  title: string;
};

const Application: React.FC<ApplicationProps> = ({ title }) => {
  return (
    <React.Fragment>
      <main>
        <div className='main-heading'>
          <img src={logo} width='32' title='logo' />
          <h1>{title}</h1>
        </div>
        <Home />
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
