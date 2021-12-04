import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Cars } from "./CarsData";

export const Filter = () => {
  const [prod, setProd] = useState(Cars.data);
  const [text, setText] = useState("");
  const handleFilter=()=>{
  const filtProd = Cars.data.filter((elem)=>elem.name.toLowerCase().includes(text.trim()));
  text !== "" ? setProd(filtProd) : setProd(Cars.data);
  };
  return (
    <div>
      <div>
        <input onChange={(e)=>setText(e.target.value)} type="search" placeholder="search here.." />
        <button onClick={handleFilter}>Serach</button>
      </div>
      <div style={{display:"flex",flexWrap:"wrap", margin:"30px" }}>
        {prod.map((items) => {
          return (
            <div >
              <Card style={{ width: "18rem" , justifyContent:"center"}}>
                <Card.Img variant="top" src={items.url} />
                <Card.Body>
                  <Card.Title >{items.model}</Card.Title>
                  <Card.Title>{items.price} </Card.Title>
                  <Card.Text>
                      {items.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
