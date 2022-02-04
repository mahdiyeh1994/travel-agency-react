import React, { useEffect, useState } from "react";
import { Navbar, Container, Card, Col, Row } from "react-bootstrap";
import {data} from "../../constants/data";
import { CardItem, Header, FilterBox, PaginationBox } from "../../components";
import { itemInterface } from "../../constants/interface";
import { useLocalStorage } from "../../hooks/localStorage";
import { alphabeticalSort, numberSort } from "../../utilities/func";

var _ = require("lodash");

function ResortsList() {
  const [sort, setSort] = useState("1");
  const itemsType: any[] = [];
  const [items, setItems] = useState(itemsType);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 20;
  const [storeInBucket, setStoreInBucket] = useLocalStorage("bucket", "");
  //add to bucket
  const addToBucket = (item: itemInterface) => {
    setStoreInBucket([...storeInBucket, item]);
  };
  //filter
  const handleFilter = (item: any) => {
    if (item.title && item.price) {
      let filterData = data.filter(
        (obj) => obj.title === item.title && obj.price === parseInt(item.price)
      );
      setItems(filterData);
    } else {
      let filterData = data.filter(
        (obj) => obj.title === item.title || obj.price === parseInt(item.price)
      );
      setItems(filterData);
    }
    if (!item.title && !item.price) {
      setItems(data);
    }
  };
  //pagination
  const handlePagination = (num: number) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    if (parseInt(sort) === 1) {
      alphabeticalSort(data);
    } else {
      numberSort(data);
    }
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    setItems(currentPosts);
  }, [currentPage, sort]);

  //sort
  const handleSort = (e: any) => {
    setSort(e.target.value);
  };

  return (
    <>
      <Header bucket />
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
              <select className="form-select" onChange={handleSort}>
                <option value="1">title</option>
                <option value="2">price</option>
              </select>
            </div>
          </Row>
          <Row>
            <Col md={3} xs={12}>
              <aside>
                <FilterBox onSubmit={handleFilter} />
              </aside>
            </Col>
            <Col md={9} xs={12}>
              <Row xs={1} md={3}>
                {items.map((item) => {
                  return (
                    // <Col>
                      <CardItem
                        item={item}
                        key={item ? item.id : ""}
                        onClick={() => addToBucket(item)}
                      />
                    // </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
           <PaginationBox
            totalPost={data.length}
            postPerPage={postPerPage}
            onClick={handlePagination}
          />
        </Container>
    </>
  );
}

export default ResortsList;
