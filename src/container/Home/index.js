import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";

function Home() {
  return (
    <>
      <Layout>
        <Container
          style={{
            marginTop: "10px",
            padding: "50px 30px",
            backgroundColor: "#efefef",
            textAlign: "center"
          }}
        >
          <h2>Welcome to Admin Dashboard</h2>
          <p>
            When you need tighter control, or want to customize how the
            FormCheck component renders, it may better to use it's constituent
            parts directly. By provided children to the FormCheck you can forgo
            the default rendering and handle it yourself. (You can still provide
            an id to the FormCheck or FormGroup and have it propagate to the
            label and input).
          </p>
        </Container>
      </Layout>
    </>
  );
}

export default Home;
