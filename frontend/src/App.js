// import "bootswatch/dist/lumen/bootstrap.min.css";
// import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Login from "./components/Login";
import Trail1 from "./components/Publications";
import Home  from "./components/Home";
import WorkFlow from "./components/WorkFlow";
import FirstData from "./components/NewPublication";
import FirstData1 from "./components/NewPublication1";
import Publications1 from "./components/Publications1";
import Publications2 from "./components/Publications2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/publications" element={<Publications2/>}/>

          {/* <Route path="/insert" element={<WorkFlow/>}/> */}
          <Route path="/insert" element={<FirstData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App