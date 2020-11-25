import Form from '../../components/login/formLogin';
import Brand from '../../components/login/brandLogin';
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
