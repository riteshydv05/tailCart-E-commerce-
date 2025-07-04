import React from "react";
import delivery from "../../public/Delivery.png";
import payment from "../../public/Payment.png";
import returns from "../../public/Returns.png";
import customer from "../../public/Customer.png";
function Services() {
  return (
    <>
    <hr />
    <div className="py-5 transition-colors duration-500 md:ml-30 mb-6 mt-10 ">
  <div className="container mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      {/* Fast Delivery */}
      <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4 animate-fade-up duration-700 delay-100">
        <img
          src={delivery}
          alt="Fast Delivery"
          className="h-14 w-14 shadow-xl shadow-indigo-300 dark:shadow-indigo-900 rounded-full bg-indigo-100 p-2 dark:bg-indigo-900 transition-all duration-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Fast Delivery</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Get your order delivered to your doorstep in record time.</p>
        </div>
      </div>

      {/* Secure Payment */}
      <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4 animate-fade-up duration-700 delay-200">
        <img
          src={payment}
          alt="Secure Payment"
          className="h-14 w-14 shadow-xl shadow-green-300 dark:shadow-green-900 rounded-full bg-green-100 p-2 dark:bg-green-900 transition-all duration-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">Secure Payment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Your payment information is secure with us.</p>
        </div>
      </div>

      {/* Easy Returns */}
      <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4 animate-fade-up duration-700 delay-300">
        <img
          src={returns}
          alt="Easy Returns"
          className="h-14 w-14 shadow-xl shadow-yellow-300 dark:shadow-yellow-900 rounded-full bg-yellow-100 p-2 dark:bg-yellow-900 transition-all duration-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">Easy Returns</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Hassle-free returns within 30 days.</p>
        </div>
      </div>

      {/* Customer Support */}
      <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4 animate-fade-up duration-700 delay-400">
        <img
          src={customer}
          alt="24/7 Support"
          className="h-14 w-14 shadow-xl shadow-purple-300 dark:shadow-purple-900 rounded-full bg-purple-100 p-2 dark:bg-purple-900 transition-all duration-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">24/7 Support</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">We're here to help you anytime, day or night.</p>
        </div>
      </div>

    </div>
  </div>
</div>
<hr />

    </>
  );
}

export default Services;
