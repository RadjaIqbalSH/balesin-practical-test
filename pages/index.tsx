import { getDataKatalog } from "@services/getDataKatalog";

import { Card } from "@components";

interface IData {
	[x: string]: any;
	id: string;
	name: string;
	price: string;
	description: string;
	image: string;
	createdAt: string;
}

interface IDataKatalog {
	data: IData;
}

export const getServerSideProps = async () => {
	const data = await getDataKatalog();
	return {
		props: { data },
	};
};

const Home = (props: IDataKatalog) => {
	const { data } = props;
	// console.log("data => ", props.data);
	return (
		<div className="container mx-auto my-28 px-10 lg:px-0 ">
			<h1 className="w-fit mb-28 mx-auto text-6xl font-bold text-white">KATALOG</h1>
			<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
				{data.map((data: IData) => {
					return <Card name={data.name} price={data.price} description={data.description} image={data.image} key={data.id} />;
				})}
			</div>
		</div>
	);
};

export default Home;
