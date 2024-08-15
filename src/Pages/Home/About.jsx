

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 mt-[40vh]">
            <div className="relative">
                <img className="w-3/4 absolute left-[10vw] -top-[40vh] border-white border-[10px] lg:border-[20px] rounded-lg bg-white m-20" src="https://i.ibb.co/SKM6FZb/9636.jpg" alt="" />
                <img className="-ml-20" src="https://i.ibb.co/fYSHjRH/2151264503.jpg" alt="" />
            </div>
            <div className="w-9/12 mx-auto">
                <h1 className="lg:text-4xl text-xl font-serif font-bold lg:-mt-20 mb-8">Welcome to GearUp</h1>
                <p>Discover your dream home with Dreams Real Estate, where we turn your property aspirations into reality. Whether you&apos;sre looking to buy, sell, or rent, our dedicated team of experts is here to guide you every step of the way.</p>
                    <br />
                    <p>
                        At Dreams Real Estate, we understand that finding the perfect home is more than just a transaction—it&apos;s about creating a space where you can build memories and enjoy a lifetime of happiness. Our comprehensive listings feature a diverse range of properties to suit every need and budget, from cozy apartments to luxurious estates.
                    </p>
                    <br />
                    <p>
                         Join our community of satisfied clients and experience the difference of personalized service, local market expertise, and unwavering commitment to your satisfaction. Your dream home is just a click away—start your journey with Dreams Real Estate today!
                    </p>
            </div>
        </div>
    );
};

export default About;