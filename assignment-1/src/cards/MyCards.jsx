import React from 'react'
import {Container,Card, Button} from 'react-bootstrap'



const MyCards = ({dataa}) => {
    
  return (
    <Container className='d-flex justify-content-between'>
      {dataa.map((eleman) =>{
      return(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={eleman.img} />
          <Card.Body>
            <Card.Title>{eleman.name}</Card.Title>
            <Card.Text>
              {eleman.text}
            </Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      )
      }
      
      )}
    </Container>
  );
}

export default MyCards