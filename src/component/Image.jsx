import Picture1 from '../images/Picture1.jpg';
import Picture2 from '../images/Picture2.jpg';
import Picture3 from '../images/Picture3.jpg';


function Image() {
    return (
        <div className="container xl:ml-20 px-2 py-2 md:px-4 md:my-20">
        <div className="-m-1 md:flex flex-wrap">
            <div className="flex xl:w-10/12 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
                <img
                alt="ittc_photo"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Picture3}
                />
            </div>
            <div className="w-1/2 p-1 md:p-2">
                <img
                alt="ittc_photo"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Picture2}
                />
            </div>
            <div className="w-full p-1 md:p-2">
                <img
                alt="ittc_photo"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Picture1}
                />
            </div>
            </div>
        </div>
        </div>
    );
}

export default Image;
