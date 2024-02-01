import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/*
import Card from './Card';
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function Card() {
  let abc = useSelector((store) => store.ProductsSection.products);
  return (
    <div className="bg-white">
      <div className="flex flex-row ml-10 mt-10 ">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          --Product
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
                    <a className="font-semibold text-xl" href={product.href}>
                      <span aria-hidden="true" className="absolute  inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-md mt-5">{product.description}</p>
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-md ">{product.options}</p>
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
  );
}
