import React from 'react';
import { hot } from 'react-hot-loader';
import logo from '@assets/images/logo.png';
import './Application.less';
import Cookies from './Cookies';


type Props = {
  title: string;
};

const Application: React.FC<Props> = (props) => {


  return (
    <React.Fragment>
      <main>
        <div className='main-heading'>
          <img src={logo} width='32' title='logo' />
          <h1>{props.title}</h1>
        </div>
        <div className="container">
            <Cookies />
        </div>
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
