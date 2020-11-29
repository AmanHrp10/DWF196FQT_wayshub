import Background from '../../images/img-bg.png';
import Navbar from '../home/searchNav/navbar';
import Profile from '../../images/channel/channel1.png';
import Videos from '../../API/myVideos';
import Card from '../Card/Card';
import './contentCreator.css';

export default function ContentCreator() {
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
            <h6 className='text-white'>Egi Jos</h6>
            <p>15k Subscriber</p>
          </div>
          <div className='buttonEdit'>
            <button className='btn btn-secondary'>Unsubscribe</button>
          </div>
        </div>
        <hr color='#fff' style={{ border: '2px solid', width: '100%' }} />
        <div className='row'>
          {Videos.map((video) => (
            <div className='col-md-3' key={video.id}>
              <Card
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
                views={video.views}
                date={video.date}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
