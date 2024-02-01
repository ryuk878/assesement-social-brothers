import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/molecules/navbar/navbar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./molecules/footer/footer.jsx";
import Blog from "./pages/blog/blog.jsx";
// import { ApiProvider } from "./api/api.jsx";

function App() {
  return (
    <Router>
      {/* <ApiProvider> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      {/* </ApiProvider> */}
    </Router>
  );
}

export default App;
