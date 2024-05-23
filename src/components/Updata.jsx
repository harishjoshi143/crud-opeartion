import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Updata() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 

  const Navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleUpdata(e) {
    e.preventDefault();
    axios
      .put(`https://664d759eede9a2b556539573.mockapi.io/crud-operation/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        Navigate("/read");
      });
  }
  return (
    <>
      <div className="container">
        <h1 className="text-center">Update operation</h1>
        <form className="w-75">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdata}
          >
            Update
          </button>

          <Link to="/read">
            <button
              type="submit"
              className="btn btn-secondary ms-3"
            >
              Back
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
