import React from "react";
import { Button, Form, Grid, Segment, Image } from "semantic-ui-react";
import FYB_finals5 from "../images/FYB_finals5.png";

//LOGIN PAGE
const LoginForm = (props) => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large" action="/api/login" method="post">
        <Segment stacked>
          <Image
            src={FYB_finals5}
            className="fyblue"
            alt="logo"
            style={{
              height: "auto",
              width: "100%",
              marginBottom: 20,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Form.Input
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
          />
          <Button type="submit" onClick={props.handleSubmit}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
