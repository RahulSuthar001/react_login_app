import Button from 'react-bootstrap/Button';
import {Form }from 'react-bootstrap';
import {Container}from 'react-bootstrap';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyForm() {
    const [forminput,setForminput]= useState({
        name:'',
        email:'',
        number:'',
        password:''

    });
    const navigate =useNavigate();
    const handleInputChange=(e)=>{
        const { name, value } = e.target;
        setForminput({
          ...forminput,
          [name]: value
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/list', { state: forminput });
    }
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" value={forminput.name} onChange={handleInputChange} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Email"  name="email" value={forminput.email} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control type="number" placeholder="Number" name="number" value={forminput.number} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" value={forminput.password} onChange={handleInputChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Container>
  );
}

