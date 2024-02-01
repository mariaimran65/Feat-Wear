/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const abc = [
  {
    id: v4(),
    name: "CLOUDFOAM PURE SHOES",
    href: "#",
    price: "$256",
    dis: "5%",
    cut: "$45",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct1Maain.png?alt=media&token=57390b99-b996-41f8-a184-472b5c21bc90",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: v4(),
    name: "Basic Tee",
    href: "#",
    price: "$32",
    dis: "5%",
    cut: "$45",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct2Main.png?alt=media&token=8a15e1a3-6514-4d4f-ab80-135efb35b59c",
    imageAlt: "Front of plain black t-shirt.",
  },

  {
    id: v4(),
    name: "RACER TR23 SHOES",
    href: "#",
    price: "$32",
    dis: "5%",
    cut: "$45",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: v4(),
    name: "RUNFALCON 2.0 SHOES",
    href: "#",
    price: "$32",
    dis: "5%",
    cut: "$45",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: v4(),
    name: "KAPTIR 3.0 SHOES",
    href: "#",
    price: "$32",
    dis: "5%",
    cut: "$45",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: v4(),
    name: "ADILETTE SANDALS",
    href: "#",
    price: "$32",
    dis: "5%",
    cut: "$45",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: v4(),
    name: "RACER TR23 SHOES",
    href: "#",
    price: "$32",
    dis: "5%",
    cut: "$45",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68",
    imageAlt: "Front of plain black t-shirt.",
  },

  // More products...
];
const navigation = [
  { name: "Adidas", href: "/adidas", icon: HomeIcon, current: true },
  { name: "Nike", href: "/nike", icon: UsersIcon, current: false },
  { name: "Service", href: "/service", icon: FolderIcon, current: false },
  { name: "Bata", href: "/bata", icon: CalendarIcon, current: false },
  { name: "Ndure", href: "#", icon: InboxIcon, current: false },
  { name: "Stylo", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Adidas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex md:hidden z-40"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col mt-32 ml-10 md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="border rounded-md border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
            <div className="flex-grow mt-5 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="md:pl-64">
          <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
            <div className="sticky mt-5 top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 md:px-0">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <main className="flex-1">
              <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                  {/* Replace with your content */}
                  <div className="py-4">
                    <div className="bg-white">
                      <div className="flex flex-row ml-10 mt-10 ">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900">
                          --Adidas
                        </h2>
                        <p className="font-semibold ml-10 text-3xl text-slate-300">
                          Check our New Products
                        </p>
                      </div>

                      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <h2 className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3  sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 ">
                          {abc.map((product) => (
                            <Link to={"/productdetail/" + product.id}>
                              <div
                                key={product.id}
                                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-lg "
                              >
                                <div className="aspect-w-3  bg-gray-200  group-hover:opacity-75 sm:aspect-none sm:h-64">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full  object-center object-cover sm:w-full sm:h-full"
                                  />
                                </div>
                                <div className="flex-1 p-4 space-y-0 h-20 flex flex-col">
                                  <h3 className="text-sm font-medium text-gray-900">
                                    <a
                                      className="font-semibold text-xl"
                                      href={product.href}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute  inset-0"
                                      />
                                      {product.name}
                                    </a>
                                  </h3>
                                  <p className="text-md mt-5">
                                    {product.description}
                                  </p>
                                  <div className="flex-1 flex flex-col justify-end">
                                    <p className="text-md ">
                                      {product.options}
                                    </p>
                                    <div className="flex">
                                      <p className="text-base font-medium line-through text-slate-500 ">
                                        {product.cut}
                                      </p>
                                      <p className="text-base ml-3 font-medium text-red-700  ">
                                        {product.price}
                                      </p>

                                      <p className="text-base ml-40 font-medium text-green-500 ">
                                        {product.dis}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
