import './style.css';
import Form from '../../components/login/Form';
import Brand from '../../components/login/Brand';
import { Container, Row, Col } from 'react-bootstrap';

export default function Login() {
  return (
    // Login Page
    <Container>
      <Row>
        <Col>
          <Brand />
        </Col>
        <Col>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}
