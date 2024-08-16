import { Link } from "react-router-dom";
import useBikes from "../../hooks/useBikes";
import { useState } from "react";
import useBikesFiltered from "../../hooks/useBikesFiltered";

const AllBikes = () => {

    const [currentPage, setCurrentPage] = useState(0)
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [params, setParams] = useState({})
    console.log(params);


    const [refetch, bikes] = useBikes()
    const [, bikesFiltered] = useBikesFiltered(params)
    const allBrands = bikes.map(bike => bike.brand)
    const allCategories = bikes.map(bike => bike.category)
    const brands = [...new Set(allBrands)];
    const categories = [...new Set(allCategories)];


    const count = bikes?.length
    const perPage = 10
    const pages = Math.ceil(count / perPage)

    const pagination = [...Array(pages).keys()]

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     const search = (e.target.search.value);
    //     setParams((prevParams) => ({
    //         ...prevParams,
    //         search: search,
    //     }));
    // }

    const handleNext = () => {
        if (currentPage < pagination.length - 1) {
            setCurrentPage(currentPage + 1)
            refetch()
        }
    }


    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            refetch()
        }
    }

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setParams((prevParams) => ({
            ...prevParams,
            sortValue,
        }));
    }

    const handleBrands = (e) => {
        const { value, checked } = e.target;
        setSelectedBrands((prev) =>
            checked ? [...prev, value] : prev.filter((brand) => brand !== value)
        );
    }
    const handleCategories = (e) => {
        const { value, checked } = e.target;
        setSelectedCategories((prev) =>
            checked ? [...prev, value] : prev.filter((category) => category !== value)
        );
    }

    const handleFilter = (e) => {
        e.preventDefault()
        const form = e.target
        const min = form.min?.value
        const max = form.max?.value
        const brands = selectedBrands
        const categories = selectedCategories
        const search = form.search.value
        setParams({ min, max, brands, categories,search })
    }

    return (
        <form onSubmit={handleFilter} className="mt-32">
            <div className="w-1/2 mx-auto md:mb-10 relative">
                <div className="w-3/4 mx-auto md:mb-10 relative">
                    <input className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" type="search" name="search" id="" />
                    <input className="absolute top-3 right-0 px-7 btn bg-gray-900 text-white" type="submit" value="Search" />
                </div>
            </div>
            <div onSubmit={handleFilter}>
                <div className="flex">
                    <aside className="w-[35vw] px-10">
                        <div className="space-y-5" action="">
                            <h4 className="font-medium">Price Range:</h4>
                            <div className="flex justify-center items-center space-x-2">
                                <input
                                    name="min"
                                    type="number"
                                    placeholder={params?.min}
                                    className="input input-bordered w-1/2"
                                />
                                <span>To</span>
                                <input
                                    name="max"
                                    type="number"
                                    placeholder={params?.min}
                                    className="input input-bordered w-1/2"
                                />
                            </div>
                            <div className="flex justify-start mb-3">
                                <select
                                    onChange={handleSortChange}
                                    className="select select-bordered w-full max-w-xs">
                                    <option defaultValue>Default</option>
                                    <option value={"Low to High"}>Low to High</option>
                                    <option value={'High to Low'}>High to Low</option>
                                </select>
                            </div>
                            {/* Brand filter */}
                            <div>
                                <h4 className="font-medium mb-5">Brand:</h4>
                                <div className="grid grid-cols-2 gap-y-3">
                                    {
                                        brands.map((brand, index) => <div key={index} className="flex  gap-2 items-center">
                                            <input
                                                value={brand}
                                                type="checkbox"
                                                onChange={handleBrands}
                                                name="brandName" className="checkbox" />
                                            <span>{brand}</span>
                                        </div>)
                                    }
                                </div>

                            </div>



                            {/* Category filter */}
                            <div>
                                <h4 className="font-medium mb-5">Category:</h4>
                                <div className="grid grid-cols-2 gap-y-3">
                                    {
                                        categories.map((category, index) => <div key={index} className="flex  gap-2 items-center">
                                            <input
                                                value={category}
                                                type="checkbox"
                                                name="categoryName"
                                                onChange={handleCategories}
                                                className="checkbox" />
                                            <span>{category}</span>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <input className="btn w-full bg-emerald-600" type="submit" value="Filter" />
                        </div>
                    </aside>
                    <div>
                        <div className="grid grid-cols-3 gap-[2vw] w-[75vw] mx-auto">
                            {
                                bikesFiltered.map((bike) =>
                                    <div key={bike._id} className="flex flex-col">
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
                        {/* pagination */}
                        <div className="flex justify-center space-x-1 dark:text-gray-800">
                            <button
                                title="previous"
                                type="button"
                                onClick={() => handlePrev()}
                                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
                                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            {
                                pagination.map(page => <button
                                    key={page}
                                    type="button"
                                    title={`Page ${page + 1}`}
                                    onClick={() => { setCurrentPage(page), refetch() }}
                                    className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600 ${currentPage == page && 'bg-yellow-400'}`}>{page + 1}</button>)
                            }


                            <button
                                title="next"
                                type="button"
                                onClick={() => handleNext()}
                                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
                                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AllBikes;