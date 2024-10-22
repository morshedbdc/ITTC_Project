import { Link } from 'react-router-dom';
import ittc from '../images/ittc.png'
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    // const [toggleNav, setToggleNav] = useState(false);
    return (
        <div>
       
        <nav className='flex px-4 border-b md:shadow-lg items-center relative' style={{
            backgroundImage:
                "linear-gradient(-45deg, #5A4FCF, #f1f2f6, #FF3503, #FFD700)",
            }}
        >
             <div
            className="text-lg font-bold md:py-0 py-4"
            >
            <img src={ittc} alt="" className="w-40 xl:w-52" />
            
            </div>
       

        <ul className='md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0'>
          <li>
            <Link to="/" className='flex md:inline-flex p-4 items-center hover:text-gray-500'>Home</Link>
          </li>
          <li>
            <Link to="/AboutUs" className='flex md:inline-flex p-4 items-center hover:text-gray-500'>AboutUs</Link>
          </li>
          <li>
            <Link to="/Courses" className='flex md:inline-flex p-4 items-center hover:text-gray-500'>Courses</Link>
          </li>
          <li>
          <Link to="/Contact" className='flex md:inline-flex p-4 items-center hover:text-gray-500'>contact</Link>
          </li>
        </ul>
        <div className='ml-auto md:hidden cursor-pointer'>
            <TiThMenuOutline className='size-5'/>
            <AiOutlineClose className='size-5'/>
        </div>
      </nav>
        </div>
    );
}

export default Navbar;
