//import { Fragment } from "react";
import logo from "../assets/logo.png";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
	{ name: "Accueil", href: "/", current: true },
	{ name: "Le groupe", href: "/groupe", current: false },
	{ name: "Les musiciens", href: "/musiciens", current: false },
	{ name: "Evènements", href: "/evenements", current: false },
	{ name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-gray-800  md:p-2">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
										className="block h-8 w-auto md:hidden"
										src={logo}
										alt="Your Company"
									/>
									<img
										className="hidden h-8 w-auto md:block"
										src={logo}
										alt="Your Company"
									/>
								</div>
								<div className="hidden md:ml-28 md:block">
									<div className="flex space-x-8">
										{navigation.map((item) => (
											<NavLink
												key={item.name}
												to={item.href}
												className={({ isActive }) =>
													isActive
														? "bg-gray-700 text-white flex items-center text-xl p-2"
														: "text-red-700 hover:bg-gray-700 hover:text-white block p-2 rounded-md text-xl font-medium"
												}
												aria-current={item.current ? "page" : undefined}
												end
											>
												{item.name}
											</NavLink>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
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
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
