type HYGSectionHeaderProps = {
    title: string,
    subTitle: string
}

const HYGSectionHeader = ({ title, subTitle }: HYGSectionHeaderProps) => {
    return (
        <div className="flex flex-col justify-center gap-4 md:gap-8 md:px-10 px-4 py-4">
            <a className=" text-tagline italic block md:hidden ">{subTitle}</a>
            <a className=" text-3xl md:text-5xl font-bold">
                {title}
            </a>
        </div>
    );
}

export default HYGSectionHeader;