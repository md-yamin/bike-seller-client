
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mb-[10vh] mt-[15vh]">
            <h2 className="font-serif italic text-[3vw] text-[#000000]">{heading}</h2>
            <h4 className="w-1/3 mx-auto">{subHeading}</h4>
        </div>
    );
};

export default SectionTitle;