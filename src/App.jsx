import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import WarMovie from "./War";
import Api from "./components/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Cartoons" element={<Api />} />
        <Route path="/War_movies" element={<WarMovie />} />
      </Routes>
    </BrowserRouter>
    //    <BrowserRouter>
    //          <div className='App'>

    // <NavBar/>
    // <Router>
    //   {/* <div className="Appp"> */}
    //   <Route path="/" element={<Api/>}/>
    //   {/* <Route path="./War" element={<WarMovie/>}/> */}

    //   {/* </div> */}
    // </Router>

    // <Api/>
    // </div>
    //         </BrowserRouter>
  );
}

export default App;
