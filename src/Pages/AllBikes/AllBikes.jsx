import { Link } from "react-router-dom";
import bikes from "../../../public/bikes.json";

const AllBikes = () => {

    const brands = bikes.map(bike => bike.brand)
    const categories = bikes.map(bike => bike.category)
    console.log(brands);


    return (
        <form className="mt-36">
            <div className="w-1/2 mx-auto md:mb-10 relative">
                <input className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" type="search" name="search" id="" />
                <input className="absolute top-3 right-0 px-7 btn bg-gray-900 text-white" type="submit" value="Search" />
            </div>
            <div className="flex">
                <aside className="w-[30vw] px-10">
                    <div className="space-y-5" action="">
                        <h4 className="font-medium">Price Range:</h4>
                        <div className="flex justify-center items-center space-x-2">
                            <input type="number" name="" id="" className="input input-bordered w-1/2" />
                            <span>To</span>
                            <input type="number" name="" id="" className="input input-bordered w-1/2" />
                        </div>

                        <div className="flex justify-between">
                            <div className="flex justify-center gap-2 items-center">
                                <input value='low to high' type="radio" name="radio-1" className="radio" />
                                <span>Low to High</span>
                            </div>

                            <div className="flex justify-center gap-2 items-center">
                                <input value='high to low' type="radio" name="radio-1" className="radio" />
                                <span>High to Low</span>
                            </div>
                        </div>


                        {/* Brand filter */}
                        <div>
                            <h4 className="font-medium mb-5">Brand:</h4>
                            <div className="grid grid-cols-2 gap-y-3">
                                {
                                    categories.map((category, index) => <div key={index} className="flex  gap-2 items-center">
                                        <input value='categoryName' type="checkbox" name="categoryName" className="checkbox" />
                                        <span>{category}</span>
                                    </div>)
                                }
                            </div>

                        </div>



                        {/* Category filter */}
                        <div>
                            <h4 className="font-medium mb-5">Category:</h4>
                            <div className="grid grid-cols-2 gap-y-3">
                                {
                                    brands.map((brand, index) => <div key={index} className="flex  gap-2 items-center">
                                        <input value='brandName' type="checkbox" name="brandName" className="checkbox" />
                                        <span>{brand}</span>
                                    </div>)
                                }
                            </div>
                        </div>
                        <input className="btn w-full bg-emerald-600" type="submit" value="Filter" />
                    </div>
                </aside>
                <div className="grid grid-cols-3 gap-[2vw] w-4/5 mx-auto">
                    {
                        bikes.map((bike, index) =>
                            <div key={index} className="flex flex-col">
                                <img className="rounded-lg" src={bike.image} alt="" />
                                <div className="p-2">
                                    <h2 className='text-2xl font-bold text-center mb-[1vw]'>{bike.name}</h2>
                                    <div className='h-full'>
                                        <div className="flex flex-row-reverse justify-between mb-[1vw]">
                                            <h5 className='text-amber-300 text-right'>{bike.category}</h5>
                                            <div>
                                                <p><span className="font-semibold mr-3">Brand:</span> {bike.brand}</p>
                                                <p><span className="font-semibold mr-3">Made In:</span>{bike.madeInCountry}</p>
                                                <p><span className="font-semibold mr-3">Condition:</span> {bike.condition}</p>
                                                <p><span className="font-semibold mr-3">Price:</span> {bike.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Link><button className="btn px-10 text-black bg-yellow-400">Details</button></Link>
                                            <Link><button className="btn px-10 text-black bg-yellow-400">Buy</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </form>
    );
};

export default AllBikes;