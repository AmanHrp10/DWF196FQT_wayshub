import { Container, Row, Col } from 'react-bootstrap';
import ContentEdit from '../../components/editChannel/editChannel';
import Sidebar from '../../components/home/sidebar/sidebar';

export default function EditChannel() {
  return (
    <Container fluid='md'>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <ContentEdit />
        </Col>
      </Row>
    </Container>
  );
}
