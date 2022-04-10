import "./App.css";
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleFromSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
    })
  };

  return (
    <div>
      {/* <form onSubmit={ handleFromSubmit}>
        <input onBlur={handleEmailInput} type="text" name="" id="" />
        <br />
        <input onBlur={handlePasswordInput} type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form> */}

      <Form onSubmit={handleFromSubmit} className="w-50 mx-auto">
        <h2 className="text-primary my-3">Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailInput}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordInput}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
