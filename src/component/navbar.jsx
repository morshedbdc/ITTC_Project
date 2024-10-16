import { Link } from "react-router-dom";
import ittc from "../images/ittc.png";

function Navbar() { // Capitalized component name
  return (
    <div>
      <div
        className="max-w-screen- flex flex-wrap items-center justify-between mx-auto p-1 rounded-b-md fixed"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, #5A4FCF, #f1f2f6, #FF3503, #FFD700)",
        }}
      >
        <img src={ittc} alt="" className="w-40 xl:w-52" />

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
