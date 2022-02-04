import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Card,Form,Button} from "react-bootstrap";

const FilterBox = (props: {onSubmit:(arg:any)=>void }): JSX.Element => {
  const {onSubmit} = props;
  const { register, handleSubmit} = useForm();
  return (
    <Card>
      <Card.Body>
        <Card.Title>Filter</Card.Title>
        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control   {...register("title")} type="text" placeholder="Enter restores name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control  {...register("price")} type="number" placeholder="Enter price" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Filter
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterBox;
