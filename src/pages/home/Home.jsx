import Sidebar from '../../components/home/sidebar/sidebar';
import Content from '../../components/home/content/content';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function Home() {
  return (
    <Container fluid='md'>
      <Row>
        <Col className='sidebar'>
          <Sidebar />
        </Col>
        <Col className='content' md='auto'>
          <Content />
        </Col>
      </Row>
    </Container>
  );
}
