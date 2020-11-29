import ContentCreator from '../../components/contentCreator/contentCreator';
import { Container, Col, Row } from 'react-bootstrap';
import Sidebar from '../../components/home/sidebar/sidebar';

export default function Content() {
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <ContentCreator />
        </Col>
      </Row>
    </Container>
  );
}
