import React from 'react';

function ProductCard({ data }) {
  return (
    <div className="mb-10 mx-auto px-4">
      <div className="md:flex md:justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="group relative w-full max-w-[300px] sm:max-w-xs p-5 
              bg-base-100 text-white rounded-2xl shadow-xl border border-white/10 
              overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Soft Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl z-0 pointer-events-none"  />

              {/* Floating Glow Spots */}
              <div className="absolute top-[-1rem] left-[-1rem] w-16 h-16 bg-purple-500/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>
              <div className="absolute bottom-[-1rem] right-[-1rem] w-20 h-20 bg-pink-500/10 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_reverse] z-0"></div>

              {/* Product Image */}
              <div className="relative mb-3 overflow-hidden rounded-md z-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[160px] w-full sm:h-[180px] sm:w-[260px] object-cover rounded-md transition duration-300"
                />

                {/* Hover Overlay */}
                <div className="hidden group-hover:flex absolute inset-0 bg-black/40 backdrop-blur-sm justify-center items-center rounded-md transition duration-300">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center space-y-1 z-10 relative">
                <h2 className="text-md font-semibold truncate text-white">
                  {item.name}
                </h2>
                <p className="text-purple-400 font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
