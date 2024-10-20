import img from '../images/Picture1.jpg'

function Card() {
    return (
        <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-64 mt-10 mb-5 rounded-2xl hover:duration-700 ">
        <div>
            <img src={img} alt="" className="h-72 object-cover" />
        </div>
        <div className="absolute bg-gray-50 -bottom-24 w-64 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-gray-800 font-bold text-3xl">مصرف اشور الدولي</span>
            <p className="text-neutral-800">
            استخدام نظام ادارة المحتوى المؤسسي في الخدمات المصرفية 
            </p>
        </div>
        </div>
    );
}

export default Card;
