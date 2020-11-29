import './style.css';
// import SearchNav from '../searchNav/searchNav';
// import navbar from '../searchNav/navbar';
import Card from './card/card';
import Navbar from '../searchNav/navbar';

import HomeVideos from '../../../API/homeVideo';

export default function Content() {
  return (
    <div className='itemNav'>
      <Navbar customClassAddVideo='home-addVideo' />
      <div className='row' style={{ marginTop: '60px' }}>
        {HomeVideos.map((video) => (
          <div className='col-md-3'>
            <Card product={video} key={video.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
