import HYGButton from "./HYGComponents/HYGButton";
import HYGSectionHeader from "./HYGComponents/HYGSectionHeader";
import ProductCard from "./ProductCard";

export type dummyDataType = {
    id: number;
    name: string;
    discount_rate?: string;
    current_price: string;
    actual_price: string;
    category: string;
    image: string;
}[]

const dummyData: dummyDataType = [
    {
        id: 1,
        name: "Sun Cream",
        // discount_rate: "50",
        current_price: "50",
        actual_price: "100",
        category: "SUNCARE",
        image: "/images/Suncream.png"
    },
    {
        id: 2,
        name: "Night Eye Cream",
        discount_rate: "10",
        current_price: "90",
        actual_price: "100",
        category: "EYECARE",
        image: "/images/Producttwo.png"
    },
    {
        id: 2,
        name: "Dry Skin Rescue",
        // discount_rate: "10",
        current_price: "90",
        actual_price: "100",
        category: "ONSALE",
        image: "/images/Productthree.png"
    },
    {
        id: 1,
        name: "Sun Cream",
        discount_rate: "50",
        current_price: "50",
        actual_price: "100",
        category: "SUNCARE",
        image: "/images/Suncream.png"
    },
    {
        id: 2,
        name: "Night Eye Cream",
        discount_rate: "10",
        current_price: "90",
        actual_price: "100",
        category: "EYECARE",
        image: "/images/Producttwo.png"
    },
    {
        id: 2,
        name: "Dry Skin Rescue",
        // discount_rate: "10",
        current_price: "90",
        actual_price: "100",
        category: "EYECARE",
        image: "/images/Productthree.png"

    },
    {
        id: 1,
        name: "Sun Cream",
        discount_rate: "50",
        current_price: "50",
        actual_price: "100",
        category: "SUNCARE",
        image: "/images/Suncream.png"
    },
    {
        id: 2,
        name: "Night Eye Cream",
        discount_rate: "10",
        current_price: "90",
        actual_price: "100",
        category: "ONSALE",
        image: "/images/Producttwo.png"
    },
    {
        id: 2,
        name: "Dry Skin Rescue",
        discount_rate: "10",
        current_price: "90",
        actual_price: "100",
        category: "EYECARE",
        image: "/images/Productthree.png"

    },
]

const ProductsList = () => {
    return (
        <div className=" md:px-10 px-4 md:py-4 py-2 flex flex-col gap-16">
            <HYGSectionHeader title="New Arrivals" subTitle="" />
            <div className=" flex flex-wrap gap-8 md:gap-20 md:my-4 justify-center">
                {dummyData?.map((item, index: number) => (
                    <ProductCard key={`PI_${index}`} item={item} />
                ))}
            </div>
            <div className=" flex justify-center">
                <HYGButton text="View all" />
            </div>
        </div>
    );
}

export default ProductsList;