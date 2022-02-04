import React from "react";
import { Row } from "react-bootstrap";

import { useLocalStorage } from "../../hooks/localStorage";
import { itemInterface } from "../../constants/interface";
import { CardItem,Header } from "../../components";

function Bucket() {
  const [storedInBucket, setStoredInBucket] = useLocalStorage("bucket", "");

  const deleteItem = (item: itemInterface) => {
    let filteredItmes = storedInBucket.filter(
      (obj: itemInterface) => obj.id !== item.id
    );
    setStoredInBucket(filteredItmes);
  };
  const BucketList = () => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {storedInBucket.map((item: itemInterface) => (
            <tr key={item.id}>
              <th scope="row">{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteItem(item)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <>
       <Header resorts/>
      {storedInBucket?.length > 0 ? (
        <BucketList />
      ) : (
        <p className="text-center mt-5">there is nothing in bucket!</p>
      )}
    </>
  );
}

export default Bucket;
