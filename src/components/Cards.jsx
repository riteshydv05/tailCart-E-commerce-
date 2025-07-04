import React from "react";
import airpods from "../../public/Airpods.webp";
import watch from "../../public/Watch.png";
import mac from "../../public/Macbook.png";
import speaker from "../../public/Speakers.png";
import phone from "../../public/Phone.png";
import ps5 from "../../public/ps5.jpg.png";

function Cards() {
  return (
    <>
      <div className="py-10 px-4">
        <div className="container md:mx-28">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* First Card */}

            <div className="relative p-5 bg-gradient-to-br from-white/10 via-indigo-900/20 to-purple-900/30 dark:from-black/20 dark:via-gray-900/30 dark:to-indigo-900/40 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transition hover:scale-105 duration-500 overflow-hidden group animate-[fadeSlideUp_1s_ease-out_forwards]">
              {/* Background glow particle */}
              <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-400/10 dark:from-purple-600/20 dark:to-blue-600/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="space-y-2 text-left ">
                  <p className="text-purple-300 text-sm">Enjoy</p>
                  <p className="text-purple-200 text-sm">Apple's</p>
                  <p className="text-xl font-bold text-white">Airpods</p>
                  <button className="group mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-900 text-white font-semibold shadow-lg hover:shadow-purple-900/40 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10  ">Shop Now</span>
                  </button>
                </div>

                {/* Image with enhanced purple glow */}
                <div className="mt-4 md:mt-0 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={airpods}
                    alt="Airpods"
                    className="w-[100px] md:w-[320px] mx-auto 
          drop-shadow-[0_10px_15px_rgba(139,92,246,0.4)]
          group-hover:drop-shadow-[0_15px_30px_rgba(192,132,252,0.7)]
          transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Second Card */}

            <div className="relative p-5 bg-gradient-to-br from-white/10 via-indigo-900/20 to-purple-900/30 dark:from-black/20 dark:via-gray-900/30 dark:to-indigo-900/40 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transition hover:scale-105 duration-500 overflow-hidden group animate-[fadeSlideUp_1s_ease-out_forwards]">
              {/* Background glow particle */}
              <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-400/10 dark:from-purple-600/20 dark:to-blue-600/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="space-y-2 text-left">
                  <p className="text-purple-300 text-sm">Enjoy</p>
                  <p className="text-purple-200 text-sm">Apple's</p>
                  <p className="text-xl font-bold text-white">Watch Ultra</p>
                  <button className="group mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-900 text-white font-semibold shadow-lg hover:shadow-purple-900/40 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Shop Now</span>
                  </button>
                </div>

                {/* Image */}
                <div className="mt-4 md:mt-0 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={watch}
                    alt=" Watch Ultra"
                    className="w-[100px] md:w-[320px] mx-auto drop-shadow-[0_10px_15px_rgba(139,92,246,0.4)]
          group-hover:drop-shadow-[0_15px_30px_rgba(192,132,252,0.7)]
          transition-all duration-300 "
                  />
                </div>
              </div>
            </div>

            {/* third card */}

            <div className="relative p-5 bg-gradient-to-br from-white/10 via-indigo-900/20 to-purple-900/30 dark:from-black/20 dark:via-gray-900/30 dark:to-indigo-900/40 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transition hover:scale-105 duration-500 overflow-hidden group animate-[fadeSlideUp_1s_ease-out_forwards] col-span-2">
              {/* Background glow particle */}
              <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-400/10 dark:from-purple-600/20 dark:to-blue-600/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="space-y-2 text-left">
                  <p className="text-purple-300 text-sm">Enjoy</p>
                  <p className="text-purple-200 text-sm">Apple's</p>
                  <p className="text-xl font-bold text-white">Macbook</p>
                  <button className="group mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-900 text-white font-semibold shadow-lg hover:shadow-purple-900/40 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Shop Now</span>
                  </button>
                </div>

                {/* Image */}
                <div className="mt-4 md:mt-0 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={mac}
                    alt="Airpods"
                    className="w-[200px] md:w-[320px] mx-auto drop-shadow-[0_10px_15px_rgba(139,92,246,0.4)]
          group-hover:drop-shadow-[0_15px_30px_rgba(192,132,252,0.7)]
          transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* {fouth card} */}

            <div className="relative p-5 bg-gradient-to-br from-white/10 via-indigo-900/20 to-purple-900/30 dark:from-black/20 dark:via-gray-900/30 dark:to-indigo-900/40 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transition hover:scale-105 duration-500 overflow-hidden group animate-[fadeSlideUp_1s_ease-out_forwards]">
              {/* Background glow particle */}
              <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-400/10 dark:from-purple-600/20 dark:to-blue-600/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="space-y-2 text-left">
                  <p className="text-purple-300 text-sm">Enjoy</p>
                  <p className="text-purple-200 text-sm">Apple's</p>
                  <p className="text-xl font-bold text-white">Watch Ultra</p>
                  <button className="group mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-900 text-white font-semibold shadow-lg hover:shadow-purple-900/40 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Shop Now</span>
                  </button>
                </div>

                {/* Image */}
                <div className="mt-4 md:mt-0 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={speaker}
                    alt=" Watch Ultra"
                    className="w-[100px] md:w-[320px] mx-auto drop-shadow-[0_10px_15px_rgba(139,92,246,0.4)]
          group-hover:drop-shadow-[0_15px_30px_rgba(192,132,252,0.7)]
          transition-all duration-300 "
                  />
                </div>
              </div>
            </div>

            {/* Fifth Card */}

            <div className="relative p-5 bg-gradient-to-br from-white/10 via-indigo-900/20 to-purple-900/30 dark:from-black/20 dark:via-gray-900/30 dark:to-indigo-900/40 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transition hover:scale-105 duration-500 overflow-hidden group animate-[fadeSlideUp_1s_ease-out_forwards]">
              {/* Background glow particle */}
              <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-400/10 dark:from-purple-600/20 dark:to-blue-600/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="space-y-2 text-left">
                  <p className="text-purple-300 text-sm">Enjoy</p>
                  <p className="text-purple-200 text-sm">Apple's</p>
                  <p className="text-xl font-bold text-white">Watch Ultra</p>
                  <button className="group mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-900 text-white font-semibold shadow-lg hover:shadow-purple-900/40 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Shop Now</span>
                  </button>
                </div>

                {/* Image */}
                <div className="mt-4 md:mt-0 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={phone}
                    alt=" Watch Ultra"
                    className="w-[100px] md:w-[320px] mx-auto drop-shadow-[0_10px_15px_rgba(139,92,246,0.4)]
          group-hover:drop-shadow-[0_15px_30px_rgba(192,132,252,0.7)]
          transition-all duration-300 "
                  />
                </div>
              </div>
            </div>

            {/* Sixth Card */}

            <div className="relative p-5 bg-gradient-to-br from-white/10 via-indigo-900/20 to-purple-900/30 dark:from-black/20 dark:via-gray-900/30 dark:to-indigo-900/40 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transition hover:scale-105 duration-500 overflow-hidden group animate-[fadeSlideUp_1s_ease-out_forwards] col-span-2">
              {/* Background glow particle */}
              <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-400/10 dark:from-purple-600/20 dark:to-blue-600/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite] z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="space-y-2 text-left">
                  <p className="text-purple-300 text-sm">Enjoy</p>
                  <p className="text-purple-200 text-sm">Apple's</p>
                  <p className="text-xl font-bold text-white">Macbook</p>
                  <button className="group mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-900 text-white font-semibold shadow-lg hover:shadow-purple-900/40 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Shop Now</span>
                  </button>
                </div>

                {/* Image */}
                <div className="mt-4 md:mt-0 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={ps5}
                    alt="Airpods"
                    className="w-[200px] md:w-[260px] mx-auto drop-shadow-[0_10px_15px_rgba(139,92,246,0.4)]
          group-hover:drop-shadow-[0_15px_30px_rgba(192,132,252,0.7)]
          transition-all duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
