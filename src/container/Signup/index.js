import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

function Signup() {
  return (
    <Layout>
      <Container>
        <Row
          style={{
            marginTop: "30px",
            background: "#f2f2f2",
            padding: "40px",
            borderRadius: "5px",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                controlId="nameInput"
                label="Name"
                type="text"
                placeholder="Enter Name"
                value=""
                errorMessage=""
                onChange={() => {}}
              />
              <Input
                controlId="emailInput"
                label="Email"
                type="email"
                placeholder="Enter Email"
                value=""
                errorMessage=""
                onChange={() => {}}
              />
              <Input
                controlId="passwordInput"
                label="Password"
                type="password"
                placeholder="XXXXXXX"
                value=""
                errorMessage=""
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
