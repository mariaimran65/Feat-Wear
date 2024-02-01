/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

// eslint-disable-next-line
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
// eslint-disable-next-line
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  let loggedUser = useSelector((store) => store.authSection.loggedUser);

  function toggleDropdown(event) {
    const dropdown = event.target.closest(".dropdown");

    // Toggle the "open" class to show/hide the dropdown
    if (dropdown) {
      dropdown.classList.toggle("open");
    }
  }
  return (
    <Disclosure as="nav" className="bg-white h-20 shadow z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://shoe-paradies.vercel.app/_next/image?url=%2Faddidas.jpg&w=96&q=75"
                      alt="Workflow"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden lg:block h-16 mt-6 w-auto"
                      src="https://shoe-paradies.vercel.app/_next/image?url=%2Faddidas.jpg&w=96&q=75"
                      alt="Workflow"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {!loggedUser ? (
                    <Link
                      to="/login"
                      className=" mt-5 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Log In
                    </Link>
                  ) : null}
                  {loggedUser ? (
                    <div className="flex space-x-4 mt-5">
                      <Link
                        to="/gu"
                        className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        Completed<span className="ml-1">Orders</span>
                      </Link>
                      <Link
                        to="/pendingorders"
                        className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        Pending<span className="ml-1">Orders</span>
                      </Link>
                    </div>
                  ) : null}

                  {!loggedUser ? (
                    <Link
                      to="/adminpanel"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 mt-5 border-b-2 text-sm font-medium"
                    >
                      Admin Panel
                    </Link>
                  ) : null}

                  {loggedUser ? (
                    <li
                      class="dropdown bg-white border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 mt-5 border-b-2 text-sm font-medium"
                      onClick={(event) => toggleDropdown(event)}
                    >
                      <a href="#bfbdf" className="font-bold text-lg">
                        Brands
                      </a>
                      <div class="dropdown-content">
                        <Link to="/adidas">Adidas</Link>
                        <Link to="nike">Nike</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/bata">Bata</Link>
                      </div>
                    </li>
                  ) : null}
                  {loggedUser ? (
                    <div className="flex mt-7 nav md:ml-0">
                      <Link to="/">
                        Log<span className="ml-1">Out</span>
                      </Link>
                      <a href="nsjsd">
                        <UserIcon className="h-6 ml-3 w-6"></UserIcon>
                      </a>
                      <Link className="flex" to="/cart">
                        <ShoppingBagIcon className="h-6 ml-3 w-6">
                          <p>0</p>
                        </ShoppingBagIcon>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="-mr-2 flex items-center z-50 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-4 ml-[161px]">
            <Disclosure.Panel className="absolute sm:hidden w-[230px] z-50 bg-gray-500 text-white">
              <div className="pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/"
                  className=" block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {!loggedUser ? <Link to="/login">Log In</Link> : null}
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {!loggedUser ? (
                    <Link to="/adminpanel">Admin Panel</Link>
                  ) : null}
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {loggedUser ? (
                    <Link to="/pendingorders">Pending Orders</Link>
                  ) : null}
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {loggedUser ? (
                    <div>
                      <Link to="/">
                        <p>Log out</p>
                      </Link>
                      <a href="nsjsd">
                        <UserIcon className="h-6 ml-3 mt-3 w-6"></UserIcon>
                      </a>
                      <Link className="flex" to="/cart">
                        <ShoppingBagIcon className="h-6 ml-3 mt-5 w-6">
                          <p>0</p>
                        </ShoppingBagIcon>
                      </Link>
                    </div>
                  ) : null}
                  {loggedUser ? (
                    <li
                      class="dropdown bg-white border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 mt-5 border-b-2 text-sm font-medium"
                      onClick={(event) => toggleDropdown(event)}
                    >
                      <a href="#bfbdf" className="font-bold text-lg">
                        Brands
                      </a>
                      <div class="dropdown-content">
                        <Link to="/adidas">Adidas</Link>
                        <Link to="nike">Nike</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/bata">Bata</Link>
                      </div>
                    </li>
                  ) : null}
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
