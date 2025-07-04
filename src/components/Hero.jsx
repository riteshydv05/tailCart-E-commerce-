import React from "react";
import Slider from "react-slick";
import Headphone from "../../public/Headphone.avif";
import ps5 from "../../public/ps5.jpg.png";
import vision from "../../public/Vision.png";

const HeroData = [
  {
    id: 1,
    img: Headphone,
    subtitle: "Sony WH-1000XM5",
    title: "Wireless Headphones",
    description:
      "Experience the freedom of wireless sound with our latest headphones, designed for comfort and superior audio quality.",
  },
  {
    id: 2,
    img: ps5,
    subtitle: "Sony Ps5",
    title: "Gaming Console",
    description:
      "Unleash the power of next-gen gaming with the PlayStation 5, featuring stunning graphics and lightning-fast load times.",
  },
  {
    id: 3,
    img: vision,
    subtitle: "Vision Pro",
    title: "Apple Vision ",
    description:
      "Step into the future with Apple Vision Pro, a revolutionary device that blends augmented reality with everyday life, offering an immersive experience like never before.",
  },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      {/* Custom Slick spacing */}
      <style>
        {`
          .react-slick-spacing .slick-list {
            padding: 0 0px;
          }
          .react-slick-spacing .slick-slide {
            padding: 0 10px;
          }
        `}
      </style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex items-center justify-center">
          <div className="container pb-10 sm:pb-0">
            <Slider className="react-slick-spacing" {...settings}>
              {HeroData.map((data) => (
                <div key={data.id}>
                  <div className="relative p-6 sm:p-10 lg:p-14 my-6 bg-gradient-to-br from-white via-gray-100 to-blue-50 dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#111827] text-gray-900 dark:text-white rounded-[2rem] shadow-2xl backdrop-blur-sm border border-white/20 dark:border-white/10 opacity-0 animate-[fadeSlideUp_1s_ease-out_forwards] overflow-hidden transition-colors duration-500">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-blue-400/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-[2rem] pointer-events-none"></div>

                    {/* Floating glow particles */}
                    <div className="absolute top-[-2rem] left-[-2rem] w-28 h-28 bg-gradient-to-br from-purple-400/10 to-blue-400/10 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
                    <div className="absolute bottom-[-2rem] right-[-2rem] w-36 h-36 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 dark:from-pink-500/10 dark:to-yellow-500/10 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      {/* Text Section */}
                      <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 dark:from-yellow-300 dark:via-pink-300 dark:to-blue-300 leading-tight tracking-tight opacity-0 animate-[slideInLeft_1.2s_ease-out_0.3s_forwards] drop-shadow-lg"
                          >
                          {data.title}
                        </h1>

                        <h2 className="text-base sm:text-lg lg:text-xl font-medium max-w-md mx-auto lg:mx-0 leading-relaxed opacity-0 animate-[slideInLeft_1.2s_ease-out_0.6s_forwards]">
                          <span className="text-purple-500 dark:text-purple-300"
                          >
                            {data.subtitle.split(" ")[0]}
                          </span>{" "}
                          <span className="text-pink-500 dark:text-pink-300">
                            {data.subtitle.split(" ").slice(1, 3).join(" ")}
                          </span>{" "}
                          <span className="text-blue-500 dark:text-blue-300">
                            {data.subtitle.split(" ").slice(3).join(" ")}
                          </span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0 opacity-0 animate-[slideInLeft_1.2s_ease-out_0.7s_forwards]"
                        data-aos="zoom-out"
                          data-aos-delay="800"
                          data-aos-once="true">
                          {data.description}
                        </p>

                        <div className="pt-4 opacity-0 animate-[slideInLeft_1.2s_ease-out_0.9s_forwards]"
                          >
                          <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-900 text-cyan-100 text-sm sm:text-base font-bold rounded-full shadow-lg hover:shadow-purple-900/50 transform hover:scale-105 transition-all duration-300 overflow-hidden border border-purple-500/30">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10 flex items-center gap-2">
                              Shop Now
                              <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="flex justify-center order-1 lg:order-2 opacity-0 animate-[slideInRight_1.2s_ease-out_0.4s_forwards]">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                          <img
                            src={data.img}
                            alt={data.title || "Product image"}
                            className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 ease-out"
                          />

                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
