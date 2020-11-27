import Add from '../../components/addVideo/addVideo';
import Sidebar from '../../components/home/sidebar/sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import FormAdd from '../../components/addVideo/addVideo';
import './style.css';

export default function AddVideo() {
  return (
    <Container fluid='md'>
      <Row>
        <Col className='addSide'>
          <Sidebar />
        </Col>
        <Col className='addContent'>
          <Add />
        </Col>
      </Row>
    </Container>
  );
}
