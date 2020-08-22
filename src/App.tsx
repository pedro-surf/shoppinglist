import React from "react";
import { Router } from "@reach/router";
import { Sidebar, ViewList, Settings, AddItem, Customers } from "./components";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

let App = () => {
  return (
    <RecoilRoot>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div  style={{ minWidth: "90vw" }}  className="px-0">
            <Router style={{ height: "100vh" }}>
              <Home path="/" />
              <ViewList path="/view" />
              <Settings path="/settings" />
              <AddItem path="/add" />
              <Customers path="/customers" />
            </Router>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
