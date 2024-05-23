import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Updata from "./components/Updata";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Updata />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
