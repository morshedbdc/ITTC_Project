import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./Sections/Home";
import AboutUs from "./Sections/AboutUs";
import Courses from "./Sections/Courses";
import Contact from "./Sections/contact";
import Navbar from "./component/navbar";
import Details from "./component/Details";
import "./Asset/i18n"; 


function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/description/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;