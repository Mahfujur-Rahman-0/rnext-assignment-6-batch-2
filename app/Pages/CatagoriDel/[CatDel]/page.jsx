"use client";

import useDataContext from "@/context/useDataContext";
import Image from "next/image";
import Link from "next/link";

export default function CatRec({ params }) {
	const { categories, recipes } = useDataContext();

	const { CatDel } = params;
	const recipe = categories.find((e) => e.id == CatDel);

	return (
		<main className="container mx-auto px-4 py-8 mt-[100px]">
			<h1 className="text-5xl font-bold mb-12">
				{recipe?.name ? recipe.name : "Categories"}
			</h1>

			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
				{recipes.map(
					(e) =>
						e.category_id == CatDel && (
							<Link
								key={e.category_id + "1231fgd13"}
								href={`/Pages/${e.itmId}`}
							>
								<div className="text-center">
									<div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
										<Image
											width={224}
											height={224}
											src={`/thumbs/${e.thumbnail}`}
											alt="Seafood"
											className="w-[224px] h-[224px] transform transition-transform duration-300 ease-in-out hover:scale-110"
										/>
									</div>
									<h2 className="text-xl font-semibold">{e.name}</h2>
								</div>
							</Link>
						)
				)}
			</div>
		</main>
	);
}
