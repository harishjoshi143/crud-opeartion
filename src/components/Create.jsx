import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Contol-Allow-Origin": "*" };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("button clicked");
    axios
      .post("https://664d759eede9a2b556539573.mockapi.io/crud-operation", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  }
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-2">
          <h1 className="text-center">crud operation</h1>
          <Link to="/read">
            <button className="btn-primary btn text-white">Show Data</button>
          </Link>
        </div>
        <form className="w-75">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
