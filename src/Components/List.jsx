import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

export default function MyList(){
  
  const location = useLocation();


  const { state } = location;
  const { name, email, number, password } = state || {};

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
       
      <Card style={{ width: '300px' }}>
        <Card.Body>
          <Card.Title>Form Submission Details</Card.Title>
          <Card.Text>
            <strong>Name:</strong> {name}
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> {email}
          </Card.Text>
          <Card.Text>
            <strong>Number:</strong> {number}
          </Card.Text>
          <Card.Text>
            <strong>Password:</strong> {password}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
