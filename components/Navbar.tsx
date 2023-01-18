import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" flex justify-between md:px-10 px-4 py-4">
            <div className=" w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Image src="/svg/Hamburger.svg" alt="menu" width={20} height={18} />
            </div>
            <div className=" hidden md:block">
                <Image src="/svg/Logo-web.svg" alt="Hygee" width={154} height={43} />
            </div>
            <div className=" md:hidden">
                <Image src="/svg/Logo-mob.svg" alt="Hygee" width={100} height={43} />
            </div>
            <div className=" flex items-center gap-10">
                <div className=" hidden md:block">
                    <Image src="/svg/Search-icon.svg" alt="search-icon" width={24} height={24} />
                </div>
                <div>
                    <Image src="/svg/Cart-icon.svg" alt="cart-icon" width={32} height={28} />
                </div>
                <div className=" hidden md:block">
                    <Image src="/svg/Profile-icon.svg" alt="cart-icon" width={24} height={24} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;