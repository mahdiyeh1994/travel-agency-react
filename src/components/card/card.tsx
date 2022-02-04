import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row } from "react-bootstrap";
import { itemInterface } from "../../constants/interface";
import { subStrText } from "../../utilities/func";

const CardItem = (props: {
  item: itemInterface;
  fullDescription?: boolean;
  onClick: () => void;
}): JSX.Element => {
  const { item, fullDescription, onClick } = props;
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={item.img} className="max-width align-self-center" />
      <Card.Body className="cart-height">
        <Link to={`/resorts/${item.id}`}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {fullDescription
              ? item.description
              : subStrText(item.description, 40)}
          </Card.Text>
        </Link>
        <div className="row">
           <p> <span>price:</span><span>{item.price}$</span></p>
          <Button size="sm" variant="primary" onClick={onClick}>
            add to bucket
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
