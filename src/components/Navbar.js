//import { Fragment } from "react";
import logoWhite from "../assets/logoWhite.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
	{ name: "Accueil", href: "/homeboard", current: true },
	{ name: "Les musiciens", href: "/musiciens", current: false },
	{ name: "Evènements", href: "/evenements", current: false },
];

function classNames(...classNamees) {
	return classNamees.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-gray-800  md:p-2 w-full fixed z-20">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
						<div className=" flex h-16 items-center justify-between relative">
							<div className=" inset-y-0 left-0 flex items-center md:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center ">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-12 md:hidden  w-15"
										src={logoWhite}
										alt="Your Company"
									/>
								</div>
								<div className="hidden md:ml-28 md:block">
									<div className="flex space-x-8 items-center">
										{navigation.map((item) => (
											<NavLink
												key={item.name}
												to={item.href}
												className={({ isActive }) =>
													isActive
														? "bg-gray-700 text-white flex items-center text-xl p-2	"
														: "text-red-700 hover:bg-gray-700 hover:text-white block p-2 rounded-md text-xl font-medium flex items-center text-center"
												}
												aria-current={item.current ? "page" : undefined}
												end
											>
												{item.name}
											</NavLink>
										))}
										<div className="group inline-block">
											<button className="outline-none focus:outline-none bg-gray-800 rounded-sm flex items-center min-w-32 hover:bg-gray-700 hover:text-white">
												<span className="pr-1 text-red-700 text-xl flex-1">
													Médias
												</span>
												<span>
													<svg
														className="fill-red-500 h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
													>
														<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
													</svg>
												</span>
											</button>
											<ul className="flex flex-col bg-gray-500 border border-red-700 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 text-white">
												<NavLink
													to="/photos"
													className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-red-700"
												>
													Photos
												</NavLink>
												<NavLink
													to="/videos"
													className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-red-700"
												>
													Vidéos
												</NavLink>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<img
							src={logoWhite}
							alt=""
							className="hidden absolute w-32 md:block md:left-5 md:top-5"
						/>
					</div>

					<Disclosure.Panel className="md:hidden  ">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
							<div className="group inline-block">
								<button className="outline-none focus:outline-none bg-gray-800 rounded-sm flex items-center min-w-32 hover:bg-gray-700 hover:text-white flex justify-between p-3">
									<span className="pr-1 text-red-700 text-base">Médias</span>
									<span>
										<svg
											className="fill-white h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</span>
								</button>
								<ul className="bg-gray-500 border border-red-700 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 text-white">
									<NavLink
										to="/photos"
										className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-red-700"
									>
										Photos
									</NavLink>
									<NavLink
										to="/videos"
										className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-red-700"
									>
										Vidéos
									</NavLink>
								</ul>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
