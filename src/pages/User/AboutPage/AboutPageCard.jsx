import no_image from "../../../assets/no-image.png";

function AboutPageCard() {
    return (
        <>
            <div className="w-[328px]">
                <img src={no_image} alt="Generic Logo" className="h-[232px]"/>
                <div className="mt-4">
                    <p className="text-[#C10A28]">Blog</p>
                    <p className="font-bold">Introducing new features in 4 Rays: How you’ll get benefits from it</p>
                    <button className="mt-4 px-12 py-2 rounded-2xl border border-[#C10A28]"><p
                        className="text-[#C10A28]">Read More</p></button>
                </div>
            </div>
        </>
    );
}

export default AboutPageCard;