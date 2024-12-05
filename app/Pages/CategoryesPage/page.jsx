"use client";

import useDataContext from "@/context/useDataContext";
import Image from "next/image";
import Link from "next/link";

export default function CatRec() {
	const { categories, recipes } = useDataContext();
	return (
		<main className="container mx-auto px-4 py-8 mt-[100px]">
			<h1 className="text-5xl font-bold mb-12">Categories</h1>

			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
				{categories.map((e) => (
					<Link key={e.id + "4465f45dfg"} href={`/Pages/CatagoriDel/${e.id}`}>
						<div className="text-center">
							<div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
								<Image
									width={224}
									height={224}
									src={e.image}
									alt="Seafood"
									className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</div>
							<h2 className="text-xl font-semibold">{e.name}</h2>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
