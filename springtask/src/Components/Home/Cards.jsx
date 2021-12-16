import React,{useState} from "react";
import { Card, Row, Col } from "react-bootstrap";
import {useSelector} from "react-redux";
import {getAllData} from "../State/Selector";

export const Cards = () => {
  const selector = useSelector(getAllData);
  const [cardDetails,setCardDetails] = useState(selector);
  console.log(cardDetails);
  return (
    <div>
      <Row>
        {cardDetails.map((item)=>
        (
        <Col>
          <Card style={{width:"20rem"}}>
            <Card.Body>
              <h3>hellloee,msbf,gsmb</h3>
              <Card.Text>ID:{item.id}</Card.Text>
              <Card.Title>Name:{item.name}</Card.Title>
              <Card.Title>Role:{item.role}</Card.Title>
            </Card.Body>
          </Card>

        </Col>
        ))}
      </Row>
    </div>
  );
};
