import React ,{useState,useEffect}from 'react'
import {Row,Col,Button,Form,InputGroup} from "react-bootstrap";



export const Room = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };



    const [room, setRoom] = useState(0);
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [roomcount, setRoomcount] = useState(0);
  
    function roomIncrement() {
      setRoom(room + 1);
    }
    function roomDecrement() {
      setRoom(room - 1);
    }
    function adultdIncrement() {
      setAdult(adult + 1);
    }
    function adultDecrement() {
      setAdult(adult - 1);
    }
    function childIncrement() {
      setChild(child + 1);
    }
    function childDecrement() {
      setChild(child - 1);
    }
  
    useEffect(() => {
      const mult = (adult + child) % 4 == 0 && Math.floor((adult + child) / 4);
      (adult + child) % 4 == 0 && setRoom(mult);
    }, [adult, child]);

    return (
        <div>
             <h1>ROOM BOOKING:</h1>
      <br />
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
     




      <br />
      <Row>
        <Col md={4}>ROOM</Col>

        <Col md={1}>
          <Button disabled={room == 0} onClick={roomDecrement}>
            -
          </Button>
        </Col>
        <Col md={1}>
          <span>{room}</span>
        </Col>
        <Col md={1}>
          <Button variant="danger" disabled={room == 5} onClick={roomIncrement}>
            +
          </Button>
        </Col>
      </Row>

      <br />
      <Row>
        <Col md={4}>ADULT</Col>
        <Col md={1}>
          <Button disabled={adult == 0} onClick={adultDecrement}>
            -
          </Button>
        </Col>
        <Col md={1}>
          <span>{adult}</span>
        </Col>
        <Col md={1}>
          <Button
            variant="danger"
            onClick={adultdIncrement}
            disabled={adult + child == 20}
          >
            +
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={4}>CHILDERN</Col>
        <Col md={1}>
          <Button disabled={child == 0} onClick={childDecrement}>
            -
          </Button>
        </Col>
        <Col md={1}>
          <span>{child}</span>
        </Col>
        <Col md={1}>
          <Button
            variant="danger"
            onClick={childIncrement}
            disabled={
              adult == 0 ||
              adult + child == 20 ||
              (room == 5 && child == 15) ||
              (room == 4 && child == 12) ||
              (room == 3 && child == 9) ||
              (room == 2 && child == 6) ||
              (room == 1 && child == 3)
            }
          >
            +
          </Button>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
            
        </div>
    )
}
