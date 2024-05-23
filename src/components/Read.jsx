import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https://664d759eede9a2b556539573.mockapi.io/crud-operation/`)
      .then((res) => {
        setData(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  function handleDelete(a) {
    axios.delete(
      `https://664d759eede9a2b556539573.mockapi.io/crud-operation/{a}`
    );
    const del = data.filter((itm, ind) => ind != a);
    setData(del);
  }

  function setlocalstorage(id, name, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-2">
          <h2>Read Operation</h2>
          <Link to="/">
            <button className="btn-secondary btn text-white">
              Create Button
            </button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={"/update"}>
                      <button
                        onClick={() =>
                          setlocalstorage(item.id, item.name, item.email)
                        }
                        className="bg-success text-white"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="bg-danger text-white"
                      onClick={(e) => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
