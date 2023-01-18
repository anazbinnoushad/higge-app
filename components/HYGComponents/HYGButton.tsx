type HYGButtonProps = {
    text: string
}

const HYGButton = ({ text }: HYGButtonProps) => {
    return (
        <div>
            <button className=" py-2 px-5 md:py-3 md:px-8 bg-primary rounded-3xl text-white text-base font-bold capitalize">
                {text}
            </button>
        </div>
    );
}

export default HYGButton;