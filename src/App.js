import React from "react";
import About from "./components/About/about";
import Contactus from "./components/Contactus/Contactus";
import Header from "./components/Header/Header";
import Navigate from "./components/Navigate/Navigate";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Link,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigate />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
