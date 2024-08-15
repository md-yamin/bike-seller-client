import { Link } from "react-router-dom";
import bikes from "../../../public/bikes.json"
import SectionTitle from "../../Shared/SectionTitle";

const Featured = () => {
    return (
        <div>
            <SectionTitle/>
            <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
                {
                    bikes.map((bike, index) => <div key={index} className="card bg-base-300 shadow-xl image-full w-fit mb-10 h-full mx-auto relative">
                        <figure><img className="w-full" src={bike.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex flex-col">
                                <img className="rounded-lg" src={bike.image} alt="" />
                                <div className="p-2">
                                    <div className='h-full space-y-2'>
                                        <h2 className='text-2xl font-bold text-white text-center'>{bike.name}</h2>
                                        <h5 className='text-amber-300 text-right'>{bike.category}</h5>
                                        <p><span className="font-semibold mr-3">Brand:</span> {bike.brand}</p>
                                        <p><span className="font-semibold mr-3">Made In:</span>{bike.madeInCountry}</p>
                                        <p><span className="font-semibold mr-3">Condition:</span> {bike.condition}</p>
                                    </div>
                                    <div className="card-actions flex justify-center">
                                        <Link><button className="btn px-10 bg-white text-black">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>

    );
};

export default Featured;