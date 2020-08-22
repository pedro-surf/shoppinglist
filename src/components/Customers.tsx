import * as React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { customers } from "../state";
import { v4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";

export default function Customers() {
  const [inputValue, setInputValue] = React.useState("");
  const setCustomers = useSetRecoilState(customers);

  const addItem = () => {
    setCustomers((items) => [
      ...items,
      {
        id: v4(),
        name: inputValue,
        joinedAt: new Date(),
      },
    ]);
    setInputValue("");
    toast.success("Registered successfully");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="container h-100 pt-3">
      <div className="row h-100">
        <div className="align-self-center col-10 offset-1 text-center">
          <h3>Register</h3>
          <ToastContainer />
          <div className="form-group d-flex flex-column justify-content-center">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              className="my-2 form-control"
              type="text"
              value={inputValue}
              onChange={onChange}
            />

            <button
              type="button"
              className="py-2 btn btn-outline-info w-100"
              onClick={addItem}
            >
              Add
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
