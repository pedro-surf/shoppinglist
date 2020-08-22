import * as React from "react";
import { useSetRecoilState } from "recoil";
import { items } from "../state";
import { v4 } from "uuid";
import * as src from "../assets/icon.png";
import { Link } from "@reach/router";

export default function AddItem({ path }) {
  const [inputValue, setInputValue] = React.useState("");
  const setItems = useSetRecoilState(items);

  const addItem = () => {
    setItems((items) => [
      ...items,
      {
        id: v4(),
        src,
        caption: inputValue,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className="align-self-center col-12 justify-content-center text-center">
          <h3>Add a product</h3>
          <div className="form-group row justify-content-center">
              <input
                className="btn btn-outline-info"
                type="text"
                value={inputValue}
                onChange={onChange}
              />

              <button
                type="button"
                className="ml-2 btn btn-outline-info btn-sm"
                onClick={addItem}
              >
                Add
              </button>
          </div>
        </div>{" "}
      </div>
      <div className="row h-50">
        <div className="align-self-center col-12 justify-content-center text-center">
          <Link to="/view">
            <span className="btn btn-outline-info btn-lg" role="button">
              See all products
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
