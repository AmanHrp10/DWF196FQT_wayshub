import MainMenu from '../../components/molecules/mainMenu';
import Content from '../../components/molecules/formEditChannel';
import { Fragment } from 'react';
import './editChannel.css';

export default function EditChannel() {
  return (
    // <Container fluid='md'>
    //   <Row className=''>
    //     <Col>
    //       <Sidebar />
    //     </Col>
    //     <Col>
    //       <ContentEdit />
    //     </Col>
    //   </Row>
    // </Container>
    <Fragment>
      <MainMenu />
      <div className='content'>
        <Content />
      </div>
    </Fragment>
  );
}
