import Image from "next/image";
import HYGButton from "./HYGComponents/HYGButton";

const Banner = () => {
    return (
        <div className=" md:px-10 px-4 py-4">
            <div className=" w-full md:bg-secondary flex flex-col items-center gap-4 md:grid grid-cols-2 rounded-[50px] md:overflow-clip">
                <div className=" col-span-1 flex flex-col justify-center md:pl-10 gap-4 md:gap-8">
                    <a className=" text-tagline italic block md:hidden ">- Skincare Products</a>
                    <a className=" text-5xl font-bold">
                        We Offer the Best<br /> Products for your Skin
                    </a>
                    <HYGButton text="Shop now" />
                </div>
                <div className=" bg-secondary md:w-full flex items-center justify-center w-[331px] aspect-square md:aspect-auto rounded-3xl">
                    <div className=" w-[295px] h-[221px] md:w-[768px] md:h-[576px] relative">
                        <Image src="/images/Banner-image.png" alt="banner" fill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;