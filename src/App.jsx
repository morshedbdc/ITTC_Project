import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./Sections/Home";
import AboutUs from "./Sections/AboutUs";
import Courses from "./Sections/Courses";
import Contact from "./Sections/Contact";


function App() {
  return (
    <div className="h-screen font-oswald">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
