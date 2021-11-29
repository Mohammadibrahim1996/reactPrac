import React,{useState} from 'react';
import {Modal, Form, Row,Col,Button, InputGroup} from 'react-bootstrap'
// import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export const RegistartionForm=()=> {
    const [user,setUser]= useState({firstName:"",lastName:"",email:"",password:"",address:"",state:"",city:"",zip:""}
    )
    let name, value;
    const onInputChange=(e)=>{
        name= e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <div>

<Modal.Dialog >
    <Modal.Header>
        <Modal.Title>
            Client Details
        </Modal.Title>
    </Modal.Header>

<Modal.Body>

<Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control required type="Text" value={user.firstName} name="firstName" placeholder="Enter First Name" onChange={onInputChange}/>
      <Form.Control.Feedback type="invalid">  first name Error</Form.Control.Feedback>

    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control required type="Text" value={user.lastName} name="lastName"  onChange={onInputChange} placeholder="Enter LAst Name" />
      <Form.Control.Feedback type="invalid"> last Name Error</Form.Control.Feedback>
    </Form.Group>
  </Row>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
      <Form.Control required  value={user.email} onChange={onInputChange} name="email" type="email" placeholder="Enter email"                aria-describedby="inputGroupPrepend"
     />
      <Form.Control.Feedback type="invalid"> please choose a user name Error</Form.Control.Feedback>
        </InputGroup>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control required value={user.password} name="password" onChange={onInputChange} type="password" placeholder="Password" />
      <Form.Control.Feedback type="invalid"> Please Provide Password</Form.Control.Feedback>

    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control  required value={user.address} name="address" onChange={onInputChange} placeholder="1234 Main St" />
    <Form.Control.Feedback type="invalid"> Error</Form.Control.Feedback>

  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control required value={user.city} onChange={onInputChange} name="city" type="text" placeholder="City Name" />
      <Form.Control.Feedback type="invalid"> Please Provide City Name</Form.Control.Feedback>

    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control required value={user.state} onChange={onInputChange}  name="state" type ="text" placeholder="State"/>
      <Form.Control.Feedback type="invalid"> Please provide State</Form.Control.Feedback>
    </Form.Group>

      

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control required value={user.zip} onChange={onInputChange} name="zip" />
      <Form.Control.Feedback type="invalid"> please Provide Zip</Form.Control.Feedback>

    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Modal.Body>
</Modal.Dialog>
        </div>
    )
}
