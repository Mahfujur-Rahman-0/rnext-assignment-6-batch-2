"use client";
import useDataContext from "@/context/useDataContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const { categories, recipes } = useDataContext();

	const itemCounts = recipes.reduce((acc, item) => {
		const category = item.category_id;
		acc[category] = (acc[category] || 0) + 1;
		return acc;
	}, {});

	const repeatedItems = Object.keys(itemCounts)
		.sort((a, b) => b - a)
		.filter((item) => itemCounts[item] >= 1);

	return (
		<>
			<main className="container mx-auto px-4 mt-[100px]">
				<section className="mb-16 bg-orange-50">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<Image
								src={
									categories
										.filter(
											(e) => e.id === "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0"
										)
										.map((e) => e.image)[0]
								}
								alt="Mighty Super Cheesecake"
								width={736}
								height={450}
								className="object-cover rounded-lg"
							/>
						</div>

						{recipes
							.filter(
								(e) => e.category_id === "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0"
							)
							.map((e) => (
								<div key={e.category_id}>
									<h1 className="text-4xl font-bold mb-4">{e.title}</h1>
									<p className="text-gray-600 mb-4">{e.description}</p>
									<Link
										href="/Pages/blogDetails"
										className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
									>
										View Recipe
									</Link>
								</div>
							))}
					</div>
				</section>

				<section className="mb-16" id="super_delicious">
					<h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{recipes
							.sort((a, b) => b.rating.average_rating - a.rating.average_rating)
							.slice(0, 3)
							.map((e) => (
								<div key={e.id}>
									<Image
										src={`/thumbs/${e.thumbnail}`}
										width={480}
										height={300}
										alt="Chicken Meatball with Creamy Cheese"
										className="w-full h-[300px] object-cover rounded-lg mb-4"
									/>
									<h3 className="text-xl font-semibold mb-2">{e.title}</h3>
									<div className="flex items-center text-yellow-500 mb-2">
										{e.rating.average_rating >= 1 && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										)}
										{e.rating.average_rating >= 2 && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										)}
										{e.rating.average_rating >= 3 && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										)}
										{e.rating.average_rating >= 4 && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										)}
										{e.rating.average_rating >= 5 && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										)}
									</div>
									<p className="text-gray-600">{e.cooking_time}</p>
								</div>
							))}
					</div>
				</section>

				<section className="mb-16">
					<div className="flex justify-between items-top">
						<h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
						<Link href="/Pages/CategoryesPage" className="text-orange-500">
							View All
						</Link>
					</div>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
						{categories.map((e) =>
							repeatedItems.slice(0, 6).map(
								(ee) =>
									e.id == ee && (
										<div
											key={e.id}
											className="cursor-pointer text-center group"
										>
											<div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
												<Image
													width={80}
													height={80}
													src={e.image}
													alt="Breakfast"
													className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
												/>
											</div>
											<p className="transition-transform duration-300 group-hover:scale-105">
												{e.name}
											</p>
										</div>
									)
							)
						)}
					</div>
				</section>

				<section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
					<h2 className="text-3xl font-bold mb-4">
						Deliciousness to your inbox
					</h2>
					<p className="text-gray-600 mb-4">
						Enjoy weekly hand picked recipes and recommendations
					</p>
					<form className="flex flex-col md:flex-row gap-4">
						<input
							type="email"
							placeholder="Email Address"
							className="flex-grow px-4 py-2 rounded-full"
						/>
						<button
							type="submit"
							className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
						>
							Join
						</button>
					</form>
				</section>
				<section className="mb-16">
					<h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
						Hand-Picked Collections
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div
							key={recipes[19].category_id}
							className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
						>
							<Image
								width={736}
								height={400}
								src={`/thumbs/${recipes[19].thumbnail}`}
								alt="Sushi Combos"
								className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
								<h3 className="text-xl font-semibold mb-2">
									{recipes[19].title}
								</h3>
								<Link
									href="/Pages/DyRecipes"
									className="text-orange-300 hover:underline"
								>
									View Collection
								</Link>
							</div>
						</div>

						<div
							key={recipes[17].category_id}
							className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
						>
							<Image
								width={736}
								height={400}
								src={`/thumbs/${recipes[17].thumbnail}`}
								alt="Everything Bagel"
								className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
								<h3 className="text-xl font-semibold mb-2">
									{recipes[17].title}
								</h3>
								<Link
									href="/Pages/DyRecipes"
									className="text-orange-300 hover:underline"
								>
									View Collection
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="mb-16">
					<h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
					<div className="grid md:grid-cols-4 gap-8">
						{recipes
							.sort((a, b) => a.published_date.localeCompare(b.published_date))
							.slice(0, 4)
							.map((e) => (
								<div key={e.category_id}>
									<Image
										width={352}
										height={300}
										src={`/thumbs/${e.thumbnail}`}
										alt="Strawberry Cream"
										className="w-full h-[300px] object-cover rounded-lg mb-4"
									/>
									<h3 className="text-lg font-semibold mb-2">{e.title}</h3>
									{categories.map(
										(ee) =>
											ee.id === e.category_id && (
												<p key={1 + ee.id} className="text-gray-600">
													{ee.name}
												</p>
											)
									)}
								</div>
							))}
					</div>
				</section>
			</main>
		</>
	);
}
