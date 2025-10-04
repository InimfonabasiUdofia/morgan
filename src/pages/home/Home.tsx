import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/nav/navbar";
import { useState } from "react";
import styles from "./style.module.css";
import Testinomialhome from "../../components/repitition/testinomialhome";
import Gallary from "../../components/repitition/gallary";

export const Home = () => {
  const imgconnect: String =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80";
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    "https://picsum.photos/id/1018/1920/1080",
  ];
  type items = {
    image: string;
    height: string;
    smheight: string;
  };
  const selected: items[] = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[310px]",smheight:"h-[210px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[580px]",smheight:"h-[340px]"
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "lg:h-[550px]", smheight:"h-[300px]"},

    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[260px]",smheight:"h-[160px]"
    },

    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[250px]",smheight:"h-[150px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[590px]",smheight:"h-[300px]"
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "lg:h-[300px]" ,smheight:"h-[200px]"},
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[550px]",smheight:"h-[280px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[600px]",smheight:"h-[370px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[230px]",smheight:"h-[150px]"
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "lg:h-[590px]", smheight:"h-[350px]"},
  ];
  const testimonials = [
    {
      text: "“Morgan’s talent for capturing both the big moments and the small, meaningful details is unmatched. They have a unique way of making every photo feel personal and significant. We are thrilled with the beautiful memories they created for us. Thank you, Morgan!”",
      author: "RACHEL + ALEX",
    },
    {
      text: "“We couldn’t have asked for a better photographer. They made us feel completely comfortable and truly understood what we wanted. The photos are stunning and perfectly capture the joy and love of our wedding day. Such an amazing talent, we highly recommend Morgan.”",
      author: "CAROLINE + CHRISTOPHER",
    },
    {
      text: "From the moment we met Morgan, we knew we were in good hands. They photographed our wedding with such authenticity. Each image brings back all the feelings of that day. We couldn’t have asked for a better photographer, and we ended up finding a wonderful friend in Morgan.",
      author: "AEGON + TABITHA",
    },
    {
      text: "From the moment we met Morgan, we knew we were in good hands. They photographed our wedding with such authenticity. Each image brings back all the feelings of that day. We couldn’t have asked for a better photographer, and we ended up finding a wonderful friend in Morgan.",
      author: "lexi + TABITHA",
    },
    {
      text: "From the moment we met Morgan, we knew we were in good hands. They photographed our wedding with such authenticity. Each image brings back all the feelings of that day. We couldn’t have asked for a better photographer, and we ended up finding a wonderful friend in Morgan.",
      author: "Demond + TABITHA",
    },
  ];

  const [index, setIndex] = useState(0);

  const [Testimonials, setTestimonial] = useState(0);
  const navcolor = "text-white";

  return (
    <>
      <Navbar navcolor={navcolor}></Navbar>
      <section
        className="relative h-[100vh] w-full bg-cover bg-center"
        style={{
          height: "100vh",
          width: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${images[index]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0  bg-black/30" />

        <div className="relative z-10  lg:px-30  flex items-center  justify-between h-full text-white text-center">
          <div>
            <svg
              className={`${styles.arrow_left} cursor-pointer`}
              onClick={() => {
                setIndex((prev) => (prev + 1) % images.length);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="70"
              height="70"
              role="img"
              aria-label="Slim white arrow rotated"
            >
              <g
                fill="none"
                stroke="#ffffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="miter"
                transform="rotate(180 50 50)"
              >
                <line x1="10" y1="50" x2="50" y2="50" />

                <line x1="50" y1="50" x2="65" y2="50" />

                <line x1="65" y1="50" x2="55" y2="44" />
                <line x1="65" y1="50" x2="55" y2="56" />
              </g>
            </svg>
          </div>
          <div className="">
            <h1 className="text-3xl md:text-5xl font-[Montserrat]  text-center">
              MORGAN WELLS
            </h1>
            <p className="mt-4 text-center font-[Montserrat] font-[13px]">
              Modern, Elegant & Refined Wedding Photography
            </p>
            <div className=" flex justify-between cursor-pointer">
              {/* Left Arrow */}
              <svg
                className={`${styles.arrow_left2} cursor-pointer relative   top-65 `}
                onClick={() => {
                  setIndex((prev) => (prev + 1) % images.length);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="70"
                height="70"
                role="img"
                aria-label="Slim white arrow rotated"
              >
                <g
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  transform="rotate(180 50 50)"
                >
                  <line x1="10" y1="50" x2="50" y2="50" />

                  <line x1="50" y1="50" x2="65" y2="50" />

                  <line x1="65" y1="50" x2="55" y2="44" />
                  <line x1="65" y1="50" x2="55" y2="56" />
                </g>
              </svg>

              {/* Right Arrow */}
              <svg
                onClick={() => {
                  setIndex((prev) => (prev + 1) % images.length);
                }}
                className={`${styles.arrow_right2} cursor-pointer relative  top-65`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="70"
                height="70"
              >
                <g
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                >
                  <line x1="10" y1="50" x2="50" y2="50" />
                  <line x1="50" y1="50" x2="65" y2="50" />
                  <line x1="65" y1="50" x2="55" y2="44" />
                  <line x1="65" y1="50" x2="55" y2="56" />
                </g>
              </svg>
            </div>
          </div>
          <div>
            <svg
              onClick={() => {
                setIndex((prev) => (prev + 1) % images.length);
              }}
              className={`${styles.arrow_right} cursor-pointer`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="70"
              height="70"
              role="img"
              aria-label="Slim white arrow"
            >
              <g
                fill="none"
                stroke="#ffffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="miter"
              >
                <line x1="10" y1="50" x2="50" y2="50" />

                <line x1="50" y1="50" x2="65" y2="50" />

                <line x1="65" y1="50" x2="55" y2="44" />
                <line x1="65" y1="50" x2="55" y2="56" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className=" px-5 lg:px-30 grid md:grid-cols-2  lg:grid-cols-2 gap-12 my-20">
        <div className={`${styles.arrow_right2}`}>
          <p className=" font-[Montserrat] font-[10px] text-[black] ">
            MY PHILOSOPHY
          </p>
          <h2 className="text-3xl  font-[Montserrat] mb-4 text-[black] pt-5">
            LASTING MEMORIES THROUGH BREATHTAKING, SOULFUL IMAGERY
          </h2>
        </div>
        <div className="flex gap-7 lg:gap-20 lg:justify-end">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="detail"
            className="w-[40%] lg:h-[380px] h-[300px]  object-cover mt-15 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="bride"
            className="w-[50%] lg:h-[500px] h-[400px] object-cover"
          />
        </div>
        <div className="lg:px-22">
          <div className={`${styles.arrow_right}`}>
            <p className=" font-[Montserrat] font-[10px] text-[black] pt-5 lg:pt-10">
              MY PHILOSOPHY
            </p>
            <h2 className="text-3xl  font-[Montserrat] mb-4 text-[black] pt-5">
              LASTING MEMORIES THROUGH BREATHTAKING, SOULFUL IMAGERY
            </h2>
          </div>
          <p className="text-gray-700 mb-6 font-[lora]">
            Love is a journey that reveals itself in countless ways. From the
            joy of new relationships to the enduring strength of marriage,
            friendship, commitment and unwavering support.
          </p>
          <p className="text-gray-700 mb-6 font-[lora]">
            I'm Morgan Wells, and I’m here to document your story, your dearest
            moments together. That playful glance, a tender handhold, or the
            tearful joy of seeing each other down the aisle.
          </p>
          <button className="px-6 py-3 bg-[#363636] text-white  font-[Montserrat] font-[1rem] shadow-md cursor-pointer">
            Learn More
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <p className="text-center text-xl  mb-12 tracking-widest font-[Montserrat] pt-5 lg:pt-15">
        SELECTED WORKS
      </p>
      <Gallary
        selected={selected}
        buttonview="VIEW PORTFOLIO"
        link="./"
      ></Gallary>
      <section className=" py-16 lg:px-30 px-6 ">
        <div className=" bg-[#f9f9f4] py-10 lg:px-10 px-5">
          <div className="flex justify-between ">
            <div className="">
              <h2 className="uppercase  text-gray-600 text-sm  font-[Montserrat] relative top-3">
                Testimonials
              </h2>
            </div>
            <div className="flex">
              <svg
                className={`${styles.arrow_right} cursor-pointer`}
                onClick={() => {
                  setTestimonial((prev) => (prev + 1) % testimonials.length);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
                role="img"
                aria-label="Slim white arrow rotated"
              >
                <g
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  transform="rotate(180 50 50)"
                >
                  <line x1="10" y1="50" x2="50" y2="50" />

                  <line x1="50" y1="50" x2="65" y2="50" />

                  <line x1="65" y1="50" x2="55" y2="44" />
                  <line x1="65" y1="50" x2="55" y2="56" />
                </g>
              </svg>
              <svg
                className={`${styles.arrow_right} cursor-pointer`}
                onClick={() => {
                  setTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
                role="img"
                aria-label="Slim white arrow rotated"
              >
                <g
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  transform="rotate(0 50 50)"
                >
                  <line x1="10" y1="50" x2="50" y2="50" />

                  <line x1="50" y1="50" x2="65" y2="50" />

                  <line x1="65" y1="50" x2="55" y2="44" />
                  <line x1="65" y1="50" x2="55" y2="56" />
                </g>
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-left pt-6">
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-[lora]">
                {testimonials[Testimonials].text}
              </p>
              <p className=" text-gray-900 text-lg font-[Montserrat] pt-3">
                {testimonials[Testimonials].author}
              </p>
            </div>

            {/* Testimonial 2 */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-[lora]">
                {testimonials[(Testimonials + 1) % testimonials.length].text}
              </p>
              <p className=" text-gray-900 text-lg font-[Montserrat] pt-3">
                {testimonials[(Testimonials + 1) % testimonials.length].author}
              </p>
            </div>

            {/* Testimonial 3 */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-[lora]">
                {testimonials[(Testimonials + 2) % testimonials.length].text}
              </p>
              <p className=" text-gray-900 text-lg font-[Montserrat] pt-3">
                {testimonials[(Testimonials + 2) % testimonials.length].author}
              </p>
            </div>
            <div className="flex justify-between">
              <svg
                className={`${styles.arrow_right2} cursor-pointer`}
                onClick={() => {
                  setTestimonial((prev) => (prev + 1) % testimonials.length);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
                role="img"
                aria-label="Slim white arrow rotated"
              >
                <g
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  transform="rotate(180 50 50)"
                >
                  <line x1="10" y1="50" x2="50" y2="50" />

                  <line x1="50" y1="50" x2="65" y2="50" />

                  <line x1="65" y1="50" x2="55" y2="44" />
                  <line x1="65" y1="50" x2="55" y2="56" />
                </g>
              </svg>
              <svg
                className={`${styles.arrow_right2} cursor-pointer`}
                onClick={() => {
                  setTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
                role="img"
                aria-label="Slim white arrow rotated"
              >
                <g
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  transform="rotate(0 50 50)"
                >
                  <line x1="10" y1="50" x2="50" y2="50" />

                  <line x1="50" y1="50" x2="65" y2="50" />

                  <line x1="65" y1="50" x2="55" y2="44" />
                  <line x1="65" y1="50" x2="55" y2="56" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <Testinomialhome img={imgconnect}></Testinomialhome>
      <Footer></Footer>
    </>
  );
};
