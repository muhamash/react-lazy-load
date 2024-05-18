import { Circle } from "react-feather";

const Size = () =>
{
    const sizeMap = ["16", "32", "48", "64", "96", "128", "144"];
    return (
        <div className="">
                {sizeMap.map((size, index) => (
                    <Circle
                        color="black"
                        fill="black"
                        key={index}
                        size={size}
                    />
                ))}
            </div>
    );
};

export default Size;