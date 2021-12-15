import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import { useHistory } from 'react-router';

export const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState(false);
  let history = useHistory();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setState(!state);
    }

    setValidated(true);
  };

  return (
    <div className="loginForm">
      <Form
        className="loginForm"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h3>Login Form</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Username"
            onChange={(e) => setUser(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          onClick={() => {
            if (user === "springuser@gmail.com" && password === "4798") {
              history.push({ pathname: "/Home" });
              console.log("condition");
            }
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
