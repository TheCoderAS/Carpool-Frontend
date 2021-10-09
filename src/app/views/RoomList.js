import moment from "moment";
import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { ArrowLeft, ArrowRight, ArrowRightCircle, PlusCircle, Smile } from "react-feather";

export default function RoomList(){
  const rooms =[
    {
      "id": 1,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    },
    {
      "id": 2,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    },
    {
      "id": 3,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    },
    {
      "id": 4,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    },
    {
      "id": 5,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    },
    {
      "id": 6,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    },
    {
      "id": 7,
      "destination": "Dharamshala",
      "departure_time": "2021-10-09T19:08:48.057Z",
      "admin": "Prakhar Pratyush",
      "members": [
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":2,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        },
        {
          "id":1,
          "name":"Aalok Kumar",
          "email":"aaloksah766626@gmail.com",
          "phone":"9504496801"
        }
      ]
    }
  ]
  const [itemPerPage,setItemPerPage]=useState(2)
  const [currentPage,setCurrentPage]=useState(1)

  const changePage=(type)=>{
    if(type==="prev"){
      if(currentPage>1) setCurrentPage(currentPage-1)
    }
    else if(type==="next"){
      if(currentPage<rooms.length/itemPerPage) setCurrentPage(currentPage+1)
    }
  }
  return(
    <Container style={{maxHeight:'87vh',overflow:'scroll'}}>
      <Row>
        {rooms.slice((currentPage-1)*itemPerPage,currentPage*itemPerPage).map(room=>{
          return (
            <Col key={room.id} sm="6" md="4" lg="3" className="p-1 card-group">
              <Card>
                <Card.Header className="bg-dark text-light">
                  <Row>
                    <Col>
                      <Card.Title as="h6">{room.destination}</Card.Title>
                    </Col>
                    <Col xs="2" className="text-center">
                      <PlusCircle/>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body className="bg-alice">
                  <Row>
                    <Col as="small" className="text-end">
                      Departure: {moment(room.departure_time).format('lll')}
                    </Col>
                  </Row>
                  <Row>
                    <Col as="strong">
                      Admin: {room.admin}
                    </Col>
                  </Row>
                  <Row>
                    {room.members.map(member=>{
                      return(
                        <Col xs="6" key={member.id}>
                          <p><Smile/>&nbsp;{member.name}</p>
                        </Col>
                      )
                    })}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      <Button className="btn-prev px-3" size="sm" variant="primary" onClick={()=>changePage('prev')}><ArrowLeft size={17}/></Button>
      <Button className="btn-next px-3" size="sm" variant="primary" onClick={()=>changePage('next')}><ArrowRight size={17}/></Button>
      <div className="text-center">
        <ButtonGroup>
          <Button className="text-dark" size="sm" variant="outline-dark" disabled>Page {currentPage} of {Math.ceil(rooms.length/itemPerPage)}</Button>
          {/* <Button size="sm" disabled variant="outline-primary">per page</Button> */}
          <Button className="text-light" size="sm" variant="success">Item(s) per page
            <select style={{border:'none',backgroundColor:'transparent',color:'#fff'}} value={itemPerPage} onChange={(e)=>{setItemPerPage(e.target.value);setCurrentPage(1)}}>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  )
}