import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function MyLogin() {
    const navigate =useNavigate();
    const [email,setEmail]= useState('');
  const [password,setPassword] = useState(''); 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home',{state:{email,password}})

    
  };
  
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form style={{ width: '300px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
          <Form.Text className="text-muted">
        
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
