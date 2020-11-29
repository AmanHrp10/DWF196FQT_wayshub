import './style.css';
// import SearchNav from '../searchNav/searchNav';
// import navbar from '../searchNav/navbar';
import Card from '../../Card/Card';
import Navbar from '../searchNav/navbar';

import HomeVideos from '../../../API/homeVideo';

export default function Content() {
  return (
    <div className='itemNav'>
      <Navbar customClassAddVideo='home-addVideo' />
      <div className='row' style={{ marginTop: '60px' }}>
        {HomeVideos.map((video) => (
          <div className='col-md-3'>
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
  );
}
