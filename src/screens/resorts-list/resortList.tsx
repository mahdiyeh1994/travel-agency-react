import React from "react";
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import img from "../../assets/images/browse-pic-1.jpg";
import data from "../../constants/data.json";
import { CardItem } from "../../components";

function ResortsList() {
  const dataArr = JSON.stringify(data);
  console.log(data[0].title);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Travel Agency</Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#deets">
                <i className="fas fa-shopping-basket"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <body>
        <Container>
          <Row className="justify-content-space-between">
           <div className="col-md-3">
           <h1>Live anywhere</h1>
            <p>Keep calm & travel on</p>
           </div>
            <div className="form-group col-md-3">
              <label htmlFor="category-select" className="form-label">
                sort
              </label>
              <select
                className="form-select"
                // data-testid="category-select"
                // {...setValue("category", details.category)}
                // {...register("category")}
              >
                <option value="mobile">title</option>
                <option value="book">price</option>
              </select>
            </div>
          </Row>
          <Row xs={1} md={3}>
            {data.map((item) => {
              return (
                <Col>
                  <CardItem item={item} key={item.id} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </body>
    </>
  );
}

export default ResortsList;
