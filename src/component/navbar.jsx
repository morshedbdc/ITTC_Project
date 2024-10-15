import { Link } from 'react-router-dom';
import ittc from '../images/ittc.png'



function navbar() {
    return (
        <div>
        <div
            className="max-w-screen- flex flex-wrap items-center justify-between mx-auto p-1 rounded-b-md  position: fixed;"
            style={{
            backgroundImage:
                "linear-gradient(-45deg, #5A4FCF, #f1f2f6, #FF3503, #FFD700)",
            }}
        >
            <img src={ittc} alt="" className="w-40 xl:w-52" />
            
       
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
          <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
        </div>
        </div>
    );
}

export default navbar;
