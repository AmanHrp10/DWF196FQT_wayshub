import { Fragment } from 'react';
import MainMenu from '../../components/molecules/mainMenu';
import Videos from '../../API/subscribed';
import Card from '../../components/Card/Card';

export default function Subcription() {
  return (
    <Fragment>
      <MainMenu isSubscribed />
      <div
        className='container'
        style={{ marginLeft: '265px', paddingTop: '110px', width: '1063px' }}
      >
        <div className='row'>
          {Videos.map((video) => {
            return (
              <div className='col-md-3' key={video.id}>
                <Card
                  id={video.id}
                  title={video.title}
                  image={video.image}
                  channel={video.channel}
                  views={video.views}
                  date={video.date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
