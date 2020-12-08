import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoSidebar from '../../../images/logo/logoApp.png';
import Home from '../../../images/icon/home.png';
import HomeActive from '../../../images/icon/homeActive.png';
import Sub from '../../../images/icon/sub.png';
import SubActive from '../../../images/icon/subActive.png';
import Navbar from '../navbar';
import Channels from '../../../API/channel';

import './sidebar.css';

export default function Sidebar({ isHome, isSubscribed }) {
  return (
    <Fragment>
      <div className='sideNew'>
        <div className='logo-sidebar'>
          <Link to='/'>
            <img src={LogoSidebar} alt='' width='70%' height='60%' />
          </Link>
        </div>
        <div className='page-landing'>
          <ul>
            <Link to='/'>
              <li className={isHome ? 'active' : ''}>
                <img src={isHome ? HomeActive : Home} alt='' /> Home
              </li>
            </Link>
            <Link to='/subcription'>
              <li className={isSubscribed ? 'active' : ''}>
                <img src={!isSubscribed ? Sub : SubActive} alt='' />{' '}
                Subscription
              </li>
            </Link>
          </ul>
        </div>
        <div className='channel-list'>
          <h5 className='mt-4'>Channels</h5>
          <ul>
            {Channels.map((channel) => (
              <Link to='/content-creator'>
                <li
                  key={channel.id}
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: '100%',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {' '}
                  <img src={channel.image} alt='' />
                  {channel.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
