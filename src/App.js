
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";
import "./css/main.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Project from "./Pages/Project";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ScrollToTop from "./../src/Utils/scrollToTop";

function App() {
  return (
    <div className="App">
   
   <Router>   {/* Это BrowserRouter, все что вне тега не может юзать навигацию и роуты */}
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/project/:id" element={<Project></Project>}/>
      </Routes>
    <Footer></Footer>
    </Router>

   

    <script src="./js/main.js"></script>

    </div>
  );
}

export default App;
