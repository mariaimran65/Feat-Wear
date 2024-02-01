import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
  let dispatch = useDispatch();
  let params = useParams();
  let data = useSelector((store) => {
    return store.ProductsSection.products;
  });
  let productId = data.find((item) => item.id === params.id);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
      <section className="overflow-hidden bg-white py-11  font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto z-0 relative lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2">
              <div className="sticky top-0 z-50 overflow-hidden">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 -z-1">
                  <img
                    src={productId.imageSrc}
                    alt=""
                    className="object-cover object-center w-full h-96 lg:h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-8">
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {productId.name}
                  </h2>
                  <p className="max-w-md mb-8 text-gray-700 font-bold dark:text-gray-400">
                    {productId.description}
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400">
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      {productId.cut}
                    </span>
                    <span className="font-medium text-base text-red-600">
                      {productId.price}
                    </span>
                  </p>
                  <p className="text-green-600 dark:text-green-300">
                    7 in stock
                  </p>
                </div>
                <h2 className="text-xl font-bold dark:text-gray-400">
                  Select Size:
                </h2>
                <form>
                  <div class="flex items-center mb-8">
                    <div class="flex flex-wrap -mx-2 -mb-2 space-x-5">
                      <button
                        className={`py-2 mb-2 ml-5 h-10 rounded-md font-bold border w-32 hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 6" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 6")}
                      >
                        UK 6
                      </button>
                      <button
                        className={`py-2 w-32  mb-2 mr-1 h-10 rounded-md font-bold border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 6.5" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 6.5")}
                      >
                        UK 6.5
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 7" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 7")}
                      >
                        UK 7
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 7.5" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 7.5")}
                      >
                        UK 7.5
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 8" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 8")}
                      >
                        UK 8
                      </button>
                      <button
                        className={`py-2 w-32 h-10 rounded-md font-bold mb-2 mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 8.5" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 8.5")}
                      >
                        UK 8.5
                      </button>
                      <button
                        className={`py-2 w-32 h-10 rounded-md font-bold mb-2 mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 9" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 9")}
                      >
                        UK 9
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 9.5" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 9.5")}
                      >
                        UK 9.5
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 10" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 10")}
                      >
                        UK 10
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 10.5"
                            ? "bg-black text-white"
                            : ""
                        }`}
                        onClick={() => setSelectedSize("UK 10.5")}
                      >
                        UK 10.5
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 11" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setSelectedSize("UK 11")}
                      >
                        UK 11
                      </button>
                      <button
                        className={`py-2 w-32 mb-2 h-10 rounded-md font-bold mr-1 border  hover:border-black hover:bg-black hover:text-white dark:border-gray-400  dark:hover:border-gray-300 dark:text-gray-400 ${
                          selectedSize === "UK 11.5"
                            ? "bg-black text-white"
                            : ""
                        }`}
                        onClick={() => setSelectedSize("UK 11.5")}
                      >
                        UK 11.5
                      </button>
                    </div>
                  </div>
                  ;
                  <div className="flex flex-wrap flex-col space-y-5 -mx-4">
                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                      <Link to="/cart">
                        <button
                          onClick={() => {
                            dispatch({
                              type: "ADDED_tO_CART",
                              payload: productId,
                            });
                          }}
                          className="flex items-center justify-center w-full p-2 border rounded-3xl dark:text-gray-200 dark:border-blue-600 hover:bg-black hover:border-black hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                        >
                          Add to Cart
                        </button>
                      </Link>
                    </div>
                    <div className="w-full px-4 mb-4 lg:w-1/2">
                      <button className="flex items-center justify-center w-full p-2 text-black border border-black rounded-3xl dark:text-gray-200 dark:border-blue-600 hover:bg-black hover:border-black hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
