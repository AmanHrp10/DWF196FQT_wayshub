import { Fragment } from 'react';
import MainMenu from '../../components/molecules/mainMenu';
import Content from '../../components/molecules/myChannel';

export default function Channel() {
  return (
    // <Container>
    //   <Row>
    //     <Col>
    //       <Sidebar />
    //     </Col>
    //     <Col>
    //       <MyChannel />
    //     </Col>
    //   </Row>
    // </Container>
    <Fragment>
      <MainMenu />
      <Content />
    </Fragment>
  );
}
