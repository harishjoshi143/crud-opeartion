import { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [fiterData, setFilterData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (fiterData.length !== 0) {
      setData(data.with(0, { name: name }));
      setFilterData([]);
      setName("");
    } else {
      setData([{ name: name }, ...data]);
      setName("");
    }
  }
  function deleteinput(a) {
    let val = data.filter((item, ele) => ele !== a);
    setData(val);
  }

  function editInput(i) {
    let edit = data.filter((item, ind) => ind == i);
    setFilterData(edit);
  }
  useEffect(() => {
    fiterData.map((item) => {
      setName(item.name);
    });
  }, [fiterData]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Your Name : </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <button>Submit</button>
      </form>

      {data.length == 0 ? (
        <h1>input is empty</h1>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {data.map((item, index) => {
            return (
              <div key={index} className="card_edit">
                <h1>name:{item.name}</h1>
                <button type="submit" onClick={() => deleteinput(index)}>
                  delete
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  type="submit"
                  // eslint-disable-next-line no-undef  
                  onClick={() => editInput(index)}
                >
                  edit
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
