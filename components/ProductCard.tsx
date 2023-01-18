import Image from "next/image";
import { dummyDataType } from "./ProductsList";

type ProductCardProps = {
    item: dummyDataType
}
const categorySwitcher = (categoryType: string) => {
    switch (categoryType) {
        case "SUNCARE":
            return `bg-yellow-100/50 text-yellow-500`
        case "EYECARE":
            return ` bg-blue-100/50 text-blue-500`
        case "ONSALE":
            return ` bg-green-100/50 text-green-500`
        default:
            return ` bg-blue-100/50 text-blue-500`
    }
}
const ProductCard = ({ item }: any) => {
    return (
        <div className=" w-fit flex flex-col gap-3 relative">
            {item?.discount_rate && (
                <div className=" absolute -right-5 top-5 px-3 py-1 text-sm bg-discountred text-white font-semibold rounded-3xl">{item?.discount_rate}% OFF</div>
            )}

            <div className=" w-[200px] aspect-square bg-secondary flex justify-center items-center rounded-3xl">
                <div className=" relative w-2/6 h-3/4 object-scale-down">
                    <Image src={item?.image} alt="Sun-cream" fill />
                </div>
            </div>
            <div className=" flex flex-col gap-3">
                <a className=" text-xl font-semibold">{item?.name}</a>
                <div className=" flex gap-4">
                    <div className={`capitalize w-fit px-3 py-1 text-xs font-bold rounded-xl ${categorySwitcher(item?.category)}`}>
                        <a>{item?.category}</a>
                    </div>
                    <div className=" flex items-center gap-1">
                        {item?.discount_rate && (<a className=" text-xs text-slate-500 line-through">${item?.actual_price}</a>)}
                        <a className=" text-base font-semibold">${item?.current_price}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;