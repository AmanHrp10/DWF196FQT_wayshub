// import Sidebar from '../../components/home/sidebar/sidebar';
// import Content from '../../components/home/content/content';
// import { Container, Row, Col } from 'react-bootstrap';
import MainMenu from '../../components/molecules/mainMenu';
import Videos from '../../API/homeVideo';
import Card from '../../components/molecules/Card';
import { Fragment } from 'react';

export default function Home() {
  return (
    // <Container fluid='md'>
    //   <Row>
    //     <Col className='sidebar' isHome='isHome'>
    //       <Sidebar />
    //     </Col>
    //     <Col className='content' md='auto'>
    //       <Content />
    //     </Col>
    //   </Row>
    // </Container>

    <Fragment>
      <MainMenu isHome />
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
