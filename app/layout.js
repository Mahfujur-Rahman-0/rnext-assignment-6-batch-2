import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import ContextProvider from "@/context/context";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ContextProvider>
					<header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
						<nav className="flex justify-between items-center">
							<Link href="/" className="text-3xl font-bold">
								<Image
									alt="lws-kitchen"
									width={101}
									height={40}
									src="/lws-kitchen.png"
									className="h-10"
								/>
							</Link>
							<ul className="hidden md:flex space-x-6">
								<li>
									<Link href="/" className="hover:text-orange-500">
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/Pages/CategoryesPage"
										className="hover:text-orange-500"
									>
										Categories
									</Link>
								</li>
								<li>
									<Link
										href="/Pages/DyRecipes"
										className="hover:text-orange-500"
									>
										Latest Recipes
									</Link>
								</li>
							</ul>
							<div className="flex items-center space-x-4">
								<a href="#" className="hover:text-orange-500">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</a>
							</div>
						</nav>
					</header>
					<main> {children}</main>
					<footer className="bg-gray-100 py-8">
						<div className="container mx-auto px-4">
							<div className="grid md:grid-cols-4 gap-8">
								<div>
									<a href="/index.html" className="text-3xl font-bold">
										<Image
											alt="lws-kitchen"
											width={101}
											height={40}
											src="/lws-kitchen.png"
											className="h-10"
										/>
									</a>
									<p className="text-gray-600 mt-2 text-sm">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-4">LWS Kitchen</h4>
									<ul className="space-y-2">
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												About us
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Careers
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Contact us
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Feedback
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-4">Legal</h4>
									<ul className="space-y-2">
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Terms
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Conditions
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Cookies
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Copyright
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-4">Follow</h4>
									<ul className="space-y-2">
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Facebook
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Twitter
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Instagram
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-600 hover:text-orange-500"
											>
												Youtube
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</ContextProvider>
			</body>
		</html>
	);
}
