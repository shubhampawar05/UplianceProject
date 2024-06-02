import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./counter/Counter";
import Header from "./header/Header";
import Editor from "./Editor/Editor";
import UserData from "./UserData/UserData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
       
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/UserData" element={<UserData />} />
            <Route path="/Editors" element={<Editor />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
        
    </>
  );
}

export default App;
