import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
// import styles from "./card.scss";
type  itemType={
  id:number;
  title: string;
  description: string;
  img:any;
  price:number
}
interface itemProps {
  item: itemType,
}
const CardItem: React.FC<itemProps> = ({ item }): JSX.Element => {
  return (
    <Link to="">
      <Card >
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <div className="row">
            <span>{item.price}</span>
            <Button size="sm" variant="primary">
              add to bucket
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardItem;
