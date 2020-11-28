import MyChannel from '../../components/myChannel/myChannelContent';
import { Container, Col, Row } from 'react-bootstrap';
import Sidebar from '../../components/home/sidebar/sidebar';

export default function Channel() {
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <MyChannel />
        </Col>
      </Row>
    </Container>
  );
}
