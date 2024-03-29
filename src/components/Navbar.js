//import { Fragment } from "react";
import logoWhite from "../assets/logoWhite.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import MyListbox from "./ListboxMedias";

const navigation = [
  { name: "Accueil", href: "/homeboard", current: true },
  { name: "Les musiciens", href: "/musiciens", current: false },
  { name: "Evènements", href: "/evenements", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800  md:p-2 w-screen fixed z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className=" flex h-16 items-center justify-between relative">
              <div className=" inset-y-0 left-0 flex items-center lg:hidden">
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
                <div className="hidden md:ml-28 lg:block">
                  <div className="flex space-x-8 items-center">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-700 text-white flex items-center lg:text-xl p-2	"
                            : "text-red-700 hover:bg-gray-700 hover:text-white block p-2 rounded-md lg:text-xl font-medium flex items-center text-center"
                        }
                        aria-current={item.current ? "page" : undefined}
                        end
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <MyListbox />

                    <NavLink
                      key={uuid()}
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-700 text-white flex items-center text-xl p-2	"
                          : "text-red-700 hover:bg-gray-700 hover:text-white block p-2 rounded-md text-xl font-medium flex items-center text-center"
                      }
                      end
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={logoWhite}
              alt=""
              className="hidden absolute w-32 lg:block md:left-5 md:top-5"
            />
          </div>

          <Disclosure.Panel className="lg:hidden  ">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-700 text-gray-300 flex items-center text-base p-2	rounded-lg shadow-lg"
                      : " text-red-600 hover:bg-gray-700 hover:text-white block p-2 rounded-md text-base font-medium flex items-center text-center"
                  }
                  end
                >
                  {item.name}
                </NavLink>
              ))}
              <MyListbox />
           
              <NavLink
                key={uuid()}
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 text-gray-300 flex items-center text-base p-2	"
                    : " text-red-600 hover:bg-gray-700 hover:text-white block p-2 rounded-md text-base font-medium flex items-center text-center"
                }
                end
              >
                Contact
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
