"use client";
import useDataContext from "@/context/useDataContext";
import Image from "next/image";
import Link from "next/link";

export default function Recipes() {
	const { categories, recipes } = useDataContext();

	return (
		<main className="container mx-auto px-4 py-8 mt-[100px]">
			<div className="flex justify-between items-center mb-8">
				<div>
					<h1 className="text-4xl font-bold mb-2">
						Desserts{" "}
						<span className="text-gray-500 text-2xl font-normal">
							{`(${recipes.length} Recipes)`}
						</span>
					</h1>
					<p className="text-gray-600">
						One thing I learned living in the Canarsie section of Brooklyn, NY
						was how to cook a good Italian meal. Here is a recipe I created
						after having this dish in a restaurant. Enjoy!
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{recipes
					.sort((a, b) => a.published_date.localeCompare(b.published_date))
					.slice(0, 8)
					.map((e) => (
						<Link key={e.itmId + "46421g35"} href={`/Pages/${e.itmId}`}>
							<div className="bg-white rounded-lg overflow-hidden shadow-md">
								<Image
									width={352}
									height={192}
									src={`/thumbs/${e.thumbnail}`}
									alt="Decadent Raspberry and Cream Cake"
									className="w-full h-48 object-cover"
								/>
								<div className="p-4 ">
									<h2 className="h-[55px] overflow-hidden font-semibold text-lg mb-2">
										{e.title}
									</h2>
								</div>

								{categories.map(
									(ee) =>
										ee.id === e.category_id && (
											<p
												key={ee.id + "454546598"}
												className="text-gray-600 pl-6 pb-3"
											>
												{ee.name}
											</p>
										)
								)}
							</div>
						</Link>
					))}

				{/* <!-- Repeat the above div structure for the remaining dessert items --> */}
			</div>
		</main>
	);
}
