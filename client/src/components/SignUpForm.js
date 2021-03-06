import React from "react";
import { Button, Checkbox, Form, Grid, Segment } from "semantic-ui-react";

const SignUpForm = (props) => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large" onSubmit={props.handleSubmit}>
        <Segment stacked>
          <Form.Input
            label="First Name"
            name="firstName"
            value={props.formObject.firstName}
            type=""
            onChange={props.handleInputChange}
            placeholder="First Name"
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            type=""
            value={props.formObject.lastName}
            onChange={props.handleInputChange}
            placeholder="Last Name"
          />
          <Form.Input
            label="Email"
            name="email"
            value={props.formObject.email}
            type="email"
            onChange={props.handleInputChange}
            placeholder="Email"
          />
          <Form.Input
            label="Password"
            name="password"
            value={props.formObject.password}
            type="password"
            onChange={props.handleInputChange}
            placeholder="Password"
          />
          <Grid.Row>
            <Grid.Column>
              <Checkbox
                style={{ margin: "2vw" }}
                toggle
                label="JS"
                name="videos"
                value="JS"
                onChange={() => {
                  props.handleToggle("JS", !props.formObject.JS);
                }}
              />
              <Checkbox
                toggle
                label="React"
                name="videos"
                value="React"
                onChange={() => {
                  props.handleToggle("React", !props.formObject.React);
                }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Checkbox
                style={{ margin: "2vw" }}
                toggle
                label="HTML"
                name="videos"
                value="HTML"
                onChange={() => {
                  props.handleToggle("HTML", !props.formObject.HTML);
                }}
              />
              <Checkbox
                toggle
                label="CSS"
                name="videos"
                value="CSS"
                onChange={() => {
                  props.handleToggle("CSS", !props.formObject.CSS);
                }}
              />
              <br></br>
            </Grid.Column>
          </Grid.Row>
          <br></br>
          <Button type="submit" onClick={props.handleSubmit}>
            Submit
          </Button>
          <p>
            Or log in <a href="/login">here</a>
          </p>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignUpForm;
