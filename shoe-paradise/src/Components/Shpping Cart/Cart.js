import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.ProductsSection).orders;
  const move = useNavigate();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-12 sm:gap-x-12 sm:gap-y-12">
          <section className="sm:col-span-8">
            <h2 className="sr-only">Items in your shopping cart</h2>
            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cartItems.map((product, productIdx) => (
                <li key={product.id} className="flex py-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex flex-col justify-between ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-sm">
                        <a
                          href={product.href}
                          className="font-medium text-gray-700 hover:text-gray-800"
                        >
                          {product.name}
                        </a>
                      </h3>
                      <p className="ml-2 text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500">
                      <p>{product.color}</p>
                      {product.size && (
                        <p className="border-l pl-2 border-gray-200">
                          {product.size}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500 space-x-2">
                      {product.inStock ? (
                        <CheckIcon className="h-4 w-4 text-green-500" />
                      ) : (
                        <ClockIcon className="h-4 w-4 text-gray-300" />
                      )}
                      <p>{product.inStock ? "In stock" : product.leadTime}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section className="sm:col-span-4">
            {/* Order summary content */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a
                      href="#vsd"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a
                      href="#d"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $112.32
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  onClick={(evt) => {
                    evt.preventDefault();
                    axios
                      .post("/cart", cartItems)
                      .then((result) => {
                        console.log(result.data.success);
                        if (result.data.success) {
                          move("/pendingorders");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        alert("Error In Req");
                      });
                  }}
                >
                  Checkout
                </button>
              </div>
            </section>
            ;
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
