import React from "react";
import { Link } from "@reach/router";

const Home = ({ path }) => {
  return (
    <div className="container justify-content-center text-center m-auto pl-0">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to ShoppingList App!</h1>
        <p className="lead">
          This is a simple job test made with CRA and Bootstrap.
        </p>
        <hr className="my-4" />
        <p>
         Made in less than 24h
        </p>
        <Link to="/add"><span className="btn btn-primary btn-lg" role="button">
          Learn more
        </span>
        </Link>
      </div>

    </div>
  );
};

export default Home;
