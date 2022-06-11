import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateUser = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
