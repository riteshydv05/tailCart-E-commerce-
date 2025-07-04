import React from "react";

function Partners() {
  return (
    <>
      <hr className="my-4 border-t border-gray-300" />
      <div className="py-5">
        <div className="container mx-auto px-6 md:px-10" data-aos="zoom-out">
          <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Partner logos go here */}
            <div className="flex justify-center">
              <img
                src="/Apple.png"
                alt="Partner 1"
                className="h-20"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/Samsung.png"
                alt="Partner 2"
                className="h-20"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/Oneplus.png"
                alt="Partner 3"
                className="h-20"
              />
            </div>
            <div className="flex justify-center">
              <img src="/Lg.png" alt="Partner 4" className="h-20" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
    </>
  );
}

export default Partners;
