import Sidebar from '../home/sidebar/sidebar';
import Navbar from '../home/searchNav/navbar';
import HomeVideos from '../../API/homeVideo';
import Comments from '../../API/comment';
import IconView from '../../images/view1.png';
import IconDate from '../../images/refresh1.png';
import User from '../../images/channel/channel2.png';
import TextArea from '../textArea/textArea';
import Comment from '../comment/comment';
import Card from '../Card/Card';

// library
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';

export default function DetailVideo() {
  const [video, setVideo] = useState('');
  let { id } = useParams();
  console.log(video);
  useEffect(() => {
    const videoById = HomeVideos.find((video) => video.id == id);
    console.log(videoById);
    setVideo(videoById);
  }, []);

  return (
    <div>
      <div className='sideDetail'>
        <Sidebar />
      </div>
      <div className='navDetail'>
        <Navbar customClassAddVideo='navbarDetail' />
      </div>
      <div className='d-flex'>
        <div className='contentDetail'>
          <div className='videoDetail'>
            <ReactPlayer width='100%' controls url={video.URL} />
            <h5 style={{ color: '#fff', fontWeight: '500', marginTop: '20px' }}>
              {video.title}
            </h5>
            <div className='views'>
              <span style={{ marginRight: '30px' }}>
                <img src={IconView} alt='' className='mr-2 ml-2' />
                {video.views}
              </span>
              <img src={IconDate} alt='' className='mr-2' />
              <span>{video.date}</span>
            </div>
            <hr color='white' style={{ border: '2px solid' }} />
          </div>
          <div className='areaComment'>
            <div className='comment d-flex'>
              <img src={User} alt='' width='45px' height='60px' />
              <div className='textarea'>
                <TextArea placeholder='Comment...' className='ml-4' />
              </div>
            </div>
            <div className='buttonComment'>
              <button className='btn btnComment'>Post</button>
            </div>
            {Comments.map((item) => (
              <Comment key='item' img={item.image} text={item.text} />
            ))}
          </div>
        </div>
        <div className='recomendation'>
          {HomeVideos.map((video) => (
            <Card
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
              views={video.views}
              date={video.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
