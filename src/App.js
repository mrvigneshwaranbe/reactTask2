import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Services from "./Services";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header>
      <h3 className="log">THE HOTEL GRAND</h3>
      <nav className="items">
        <a href = "/">Home</a>
        <a href = "/About">About</a>
        <a href = "/Services">Services</a>
        <a href = "/Contact">Contact</a>
        <a href = "/Login">Login</a>
      </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;