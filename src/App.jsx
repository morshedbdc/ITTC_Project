import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/navbar";
import Home from "./Sections/Home";
import AboutUs from "./Sections/AboutUs";
import Courses from "./Sections/Courses";


function App() {
  return (
    <div className="bg-black h-screen font-oswald">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/contact" element={<contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
