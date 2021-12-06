import React,{useState} from 'react';
import {Modal, Form, Row,Col,Button, InputGroup, Dropdown} from 'react-bootstrap'
// import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export const RegistartionForm=()=> {

let [user,setUser]= useState({firstName:"",email:"",password:"",profession:""})
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
      localStorage.setItem("name",JSON.stringify(user));
      
      
    };

    return (
        <div>

<Modal.Dialog >
    <Modal.Header>
        <Modal.Title>
            Sign Up
        </Modal.Title>
    </Modal.Header>

<Modal.Body>

<Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>Name</Form.Label>
      <Form.Control required type="Text" value={user.firstName} name="firstName" placeholder="Enter First Name" onChange={onInputChange}/>
      <Form.Control.Feedback type="invalid">  first name Error</Form.Control.Feedback>

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

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Profession
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Doctor</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Engineering</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Politician</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
</Modal.Body>
</Modal.Dialog>
        </div>
    )
}
