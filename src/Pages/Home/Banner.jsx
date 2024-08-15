

const Banner = () => {
    return (
        <div        >
            <div className="carousel w-full text-slate-200">
                {
                    banners.map(banner => <div key={banner.id} id={`item${banner.id}`} className="carousel-item w-full">
                        <div
                            style={{
                                backgroundImage: `url(${banner.background})`,
                            }}
                            className="w-full h-[80vh]">
                            <div className="bg-black bg-opacity-40 w-full h-full">
                                <div className="flex items-center pt-[30vh] w-[80vw] mx-auto">
                                    <div className="mx-auto w-[40vw]">
                                        <h1 className="text-4xl font-bold">{banner.heading}</h1>
                                        <p>{banner.description}</p>
                                        <button className="btn w-fit">View Offer</button>
                                    </div>
                                    <img className="w-[30vw]" src={banner.image} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>)
                }

            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};


const banners = [

    {
        id: 1,
        heading: "Offer 12% off",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit incidunt unde fugit modi quas vitae quis? Enim nemo delectus molestiae dicta, maiores aliquid, distinctio nihil error dolores quos recusandae accusantium.",
        image: 'https://i.ibb.co/bQXMbhK/2150799629.jpg',
        background: "https://i.ibb.co/bQXMbhK/2150799629.jpg"
    },
    {
        id: 2,
        heading: "Offer 12% off",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit incidunt unde fugit modi quas vitae quis? Enim nemo delectus molestiae dicta, maiores aliquid, distinctio nihil error dolores quos recusandae accusantium.",
        image: 'https://i.ibb.co/bQXMbhK/2150799629.jpg',
        background: "https://i.ibb.co/bQXMbhK/2150799629.jpg"
    },
    {
        id: 3,
        heading: "Offer 12% off",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit incidunt unde fugit modi quas vitae quis? Enim nemo delectus molestiae dicta, maiores aliquid, distinctio nihil error dolores quos recusandae accusantium.",
        image: 'https://i.ibb.co/bQXMbhK/2150799629.jpg',
        background: "https://i.ibb.co/bQXMbhK/2150799629.jpg"
    },
    {
        id: 4,
        heading: "Offer 12% off",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit incidunt unde fugit modi quas vitae quis? Enim nemo delectus molestiae dicta, maiores aliquid, distinctio nihil error dolores quos recusandae accusantium.",
        image: 'https://i.ibb.co/bQXMbhK/2150799629.jpg',
        background: "https://i.ibb.co/bQXMbhK/2150799629.jpg"
    },
]


export default Banner;