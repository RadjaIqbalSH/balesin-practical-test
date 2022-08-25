import Image from "next/image";
import { useState } from "react";

interface ICard {
	name: string;
	price: string;
	description: string;
	image: string;
}

export const Card = (props: ICard) => {
	const { name, price, description, image } = props;
	const [show, setShow] = useState(false);
	return (
		<div className="w-fit h-fit flex flex-col justify-start items-start space-y-2 p-8 bg-white">
			<div className="w-full h-52 relative bg-white">
				<Image src={image} alt="Product Image" layout="fill" objectFit="cover" />
			</div>
			<p className="pt-2 text-lg font-semibold line-clamp-1 cursor-pointer hover:text-blue-300">{name}</p>
			<p className="font-bold text-gray-400 cursor-default">$ {price}</p>
			<p className={show ? "" : "line-clamp-2"}>{description}</p>
			<button className="text-gray-300 hover:text-gray-500" onClick={() => setShow(!show)}>
				{show ? "Hide" : "Show more"}
			</button>
		</div>
	);
};
