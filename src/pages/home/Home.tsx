import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/nav/navbar";
import { useState } from "react";
import styles from "./style.module.css";
import Testinomialhome from "../../components/repitition/testinomialhome";
import Gallary from "../../components/repitition/gallary";



export const Home = () => {
  const imgconnect:String="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", 
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", 
    "https://picsum.photos/id/1018/1920/1080",
  ];
   type items={
    image:string;
    height:string;
 }
  const selected:items[] = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[310px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[650px]",
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "h-[550px]" },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[790px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[260px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[590px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[160px]",
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "h-[260px]" },
     {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[590px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "h-[160px]",
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "h-[260px]" },
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
  const navcolor="text-white";

  return (
    <>
      <Navbar navcolor={navcolor}></Navbar>
      <section
        className="relative h-screen w-full bg-cover bg-center"
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
          <div
            onClick={() => {
              setIndex((prev) => (prev + 1) % images.length);
            }}
          >
            <svg
              className={`${styles.arrow_left}`}
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
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center">
              MORGAN WELLS
            </h1>
            <p className="mt-4 text-center ">
              Modern, Elegant & Refined Wedding Photography
            </p>
          </div>
          <div
            onClick={() => {
              setIndex((prev) => (prev + 1) % images.length);
            }}
          >
            <svg
              className={`${styles.arrow_right}`}
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
        <div
          className="bottom-20 relative flex justify-between"
          onClick={() => {
            setIndex((prev) => (prev + 1) % images.length);
          }}
        >
          <div className="">
            <svg
              className={`${styles.arrow_right2}`}
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
          <div
            className="cursor-pointer"
            onClick={() => {
              setIndex((prev) => (prev + 1) % images.length);
            }}
          >
            <svg
              className={`${styles.arrow_left2}`}
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
      <section className=" px-6 lg:px-30 grid md:grid-cols-2  lg:grid-cols-2 gap-12 items-center">
        <div className="flex gap-8 ">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="detail"
            className="w-1/3 lg:h-[380px] h-[300px]  object-cover mt-15 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="bride"
            className="w-1/2 lg:h-[500px] h-[400px] object-cover"
          />
        </div>
        <div className="lg:px-30">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            LASTING MEMORIES THROUGH BREATHTAKING, SOULFUL IMAGERY
          </h2>
          <p className="text-gray-600 mb-6">
            Learn to love your most beautiful moments by preserving the
            intimacy, beauty, and emotions of your wedding day. My photography
            tells a timeless story filled with elegance, authenticity, and
            passion.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Gallery Section */}
           <h3 className="text-center text-xl font-semibold mb-12 tracking-widest">
            SELECTED WORKS
          </h3>
     <Gallary selected={selected} buttonview="VIEW PORTFOLIO" link="./"></Gallary>
      <section className=" py-16 ">
        <div className="max-w-6xl mx-auto px-6 bg-[#f9f9f4] py-10">
          <div className="flex justify-between ">
            <div className="">
              <h2 className="uppercase tracking-widest text-gray-600 text-sm  ">
                Testimonials
              </h2>
            </div>
            <div className="flex">
              <svg
                className={``}
                onClick={() => {
                  setTestimonial((prev) => (prev + 1) % testimonials.length);
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
                className={``}
                onClick={() => {
                  setTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  );
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

          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonials[Testimonials].text}
              </p>
              <p className="font-semibold text-gray-900 text-xs tracking-wide">
                {testimonials[Testimonials].author}
              </p>
            </div>

            {/* Testimonial 2 */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonials[(Testimonials + 1) % testimonials.length].text}
              </p>
              <p className="font-semibold text-gray-900 text-xs tracking-wide">
                {testimonials[(Testimonials + 1) % testimonials.length].author}
              </p>
            </div>

            {/* Testimonial 3 */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonials[(Testimonials + 2) % testimonials.length].text}
              </p>
              <p className="font-semibold text-gray-900 text-xs tracking-wide">
                {testimonials[(Testimonials + 2) % testimonials.length].author}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
     <Testinomialhome img={imgconnect}></Testinomialhome>
      <Footer></Footer>
    </>
  );
};
