
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} className="mt-4">
              <h1>UĞUR KAYKAF</h1>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}