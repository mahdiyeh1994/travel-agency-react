import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItem,Header } from "../../components";
import {data} from "../../constants/data";
import { useLocalStorage } from "../../hooks/localStorage";
import { itemInterface } from "../../constants/interface";

function ResortDetails() {
  const { id } = useParams();
  const [storeInBucket, setStoreInBucket] = useLocalStorage("bucket", "");
    let item = data.find((item) => item.id === parseInt(id!));
    const addToCart = (item: itemInterface) => {
      setStoreInBucket([...storeInBucket, item]);
    };

  return (
    <>
      <Header  />
      <CardItem item={item!} fullDescription onClick={() => addToCart(item!)} />
    </>
  );
}

export default ResortDetails;
