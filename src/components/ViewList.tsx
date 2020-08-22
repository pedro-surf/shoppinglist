import React from "react";
import { Item, HorizontalList } from ".";
import { items as currentItems } from "../state";
import { useRecoilValue } from "recoil";

const ViewList = ({ path }) => {
  const items = useRecoilValue(currentItems);
  const [, setItemDetails] = React.useState(null);

  const showDetails = (key) => {
    setItemDetails(items[key]);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className="align-self-center col-12 justify-content-center text-center">
          <h2>Items List</h2>
        </div>
      </div>
      <div className="row h-50">
        <div className="align-self-center col-12 justify-content-center text-center">
          <HorizontalList
            showDetails={(key) => showDetails(key)}
            item={Item}
            list={items}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewList;
