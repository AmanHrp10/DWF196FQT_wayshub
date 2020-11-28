import { useState } from 'react';

import Navbar from '../home/searchNav/navbar';
import Background from '../../images/img-bg.png';
import Profile from '../../images/channel/channel2.png';
import { Link } from 'react-router-dom';
import Videos from './myVideos/myVideos';
import Desc from './descriptionChannel/description';
import './style.css';

export default function MyChannel() {
  let [isVideos, setIsVideos] = useState(false);
  const handleVideo = () => {
    setIsVideos((isVideos = !isVideos));
  };
  const handleDescription = () => {
    setIsVideos((isVideos = !isVideos));
  };
  return (
    <>
      <div className='profile'>
        <Navbar customClass='ok' customClassAddVideo='spanAddVideo' />
      </div>
      <div className='bg'>
        <img
          src={Background}
          alt=''
          style={{ marginLeft: '120px' }}
          width='100%'
          height='90%'
          className='imgnav'
        />
      </div>
      <div className='about'>
        <div className='profileDesc'>
          <div className='image'>
            <img src={Profile} alt='' width='90%' height='100%' />
          </div>
          <div className='channelDesc'>
            <h6 className='text-white'>BBQ Montain Boys</h6>
            <p>120k Subscriber</p>
          </div>
          <div className='buttonEdit'>
            <Link to='/channel/edit'>
              <button className='btn btnEditChannel'>Edit Channel</button>
            </Link>
          </div>
        </div>
        <div className='contentProfile'>
          <ul className='d-flex'>
            <Link onClick={handleVideo}>
              <li className='videoProfile'>
                <span className={isVideos ? 'active' : ''}>Video</span>
              </li>
            </Link>
            <Link onClick={handleDescription}>
              <li className='descProfile'>
                <span className={!isVideos ? 'active' : ''}>
                  Description Channel
                </span>
              </li>
            </Link>
          </ul>
          <div className='container'>
            <hr
              color='white'
              style={{ border: '2px solid', marginTop: '-20px' }}
            />
            {isVideos ? <Videos /> : <Desc />}
          </div>
        </div>
      </div>
    </>
  );
}
