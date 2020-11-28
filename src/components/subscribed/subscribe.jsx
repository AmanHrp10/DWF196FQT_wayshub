import Sidebar from '../home/sidebar/sidebar';
import Navbar from '../home/searchNav/navbar';
import Card from '../Card/Card';
import Subscribeds from '../../API/subscribed';
import './subscribe.css';

export default function Subscribed() {
  return (
    <div>
      <div className='sideSub'>
        <Sidebar />
      </div>
      <div className='navSub'>
        <Navbar customClassAddVideo='navSubs' />
      </div>
      <div className='cardVideo'>
        <div className='row'>
          {Subscribeds.map((video) => (
            <div className='col-md-3' key={video.id}>
              <Card
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
    </div>
  );
}
