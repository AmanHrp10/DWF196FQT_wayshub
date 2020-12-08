import Card from '../../Card/Card';
import MyVideos from '../../../API/myVideos';

export default function myVideos() {
  return (
    <div className='row'>
      {MyVideos.map((video) => (
        <div className='col-md-3'>
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
  );
}
