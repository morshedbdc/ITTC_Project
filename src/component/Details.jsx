import { useLocation, useParams } from "react-router-dom";


function Details() {

    const { id } = useParams();
    const location = useLocation();
    const data = location.state?.data || []; 

    const item = data.find((item) => item.id === parseInt(id));

    if (!item) return <p>Item not found</p>;

    return (
        <div className="cursor-pointer w-full">
            <div className="p-3 border border-[#151515] rounded-2xl">
            <h1 className="text-gray-800 font-bold text-base">{item.title}</h1>
            <ul>
                {item.description.map((desc) => (
                    <li key={desc.id}>{desc.title}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Details;
