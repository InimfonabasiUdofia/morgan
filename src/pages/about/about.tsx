import { Navbar } from "../../components/nav/navbar";
import { Footer } from "../../components/footer/footer";
import Aboutconnect from "./aboutconnect";
import styles from "./style.module.css";

export const About = () => {
  const navcolor = "text-black";
  return (
    <>
      <Navbar navcolor={navcolor}></Navbar>
      <div className="px-5 lg:px-30 mt-22">
        <div className="bg-[#F7F7F2] w-full h-[350px]"></div>
      </div>
      <section className="">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center ">
          {/* Left - Image */}

          <div className=" relative bottom-60 w-full h-full ">
            <div className={`${styles.big} px-20`}>
              <h2 className="text-2xl md:text-3xl font-[Montserrat] font-light text-gray-900 mb-2">
                HI, I AM MORGAN WELLS
              </h2>
              <p className="uppercase font-[Montserrat]  text-gray-500 text-sm mb-8 ">
                Let’s get to know each other
              </p>
            </div>
            <div className=" flex justify-center">
              <img
                src="https://picsum.photos/id/1018/1920/1080"
                alt="Morgan Wells"
                className="object-cover lg:h-[500px] h-[330px] w-1/2"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="px-8 relative bottom-60">
            <div className={`${styles.small}`}>
              <h2 className="text-2xl md:text-3xl font-[Montserrat] font-light text-gray-900 mb-2">
                HI, I AM MORGAN WELLS
              </h2>
              <p className="uppercase font-[Montserrat]  text-gray-500 text-sm mb-8 ">
                Let’s get to know each other
              </p>
            </div>

            <p className="text-gray-700 text-base leading-relaxed lg:pt-35 font-[lora]">
              I'm a wedding and portrait photographer based in Portland, Oregon.
              As a proud husband and dad, I've learned that the happiest moments
              often happen in the quiet, unplanned spaces of our everyday lives.
              The times when you can be yourself, unencumbered, accepted, and
              loved – no matter if you're happy or sad. Over the past decade,
              I’ve had the privilege of photographing thousands of these
              moments, and I'd be honoured to capture your story, too. Let’s
              connect and see where this journey takes us.
            </p>
          </div>
        </div>
      </section>
      <section>
        {/* Quote Section */}
        <div className="relative w-full h-[80vh] bottom-25 bg-black">
          <img
            src="https://picsum.photos/id/1018/1920/1080" // replace with your image path
            alt="Inspiration"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="relative  top-90 lg:top-105 text-center px-6">
            <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-[Montserrat]">
              "HOW WONDERFUL TO BE WHO I AM, MADE OUT OF EARTH AND WATER, MY OWN
              THOUGHTS, MY OWN FINGERPRINTS — ALL THAT GLORIOUS, TEMPORARY
              STUFF."
            </p>
            <span className="text-white text-xs uppercase block mt-4 tracking-wide font-[Montserrat]">
              – Mary Oliver
            </span>
          </div>
        </div>

        {/* As Seen In Section */}
        <div className="pb-16 ">
          <div className="lg:px-30 px-5  ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-4 text-sm text-gray-700 bg-[#f9f9f4] lg:px-10 lg:py-20 px-5 py-10">
              <div className="">
                <p className="uppercase tracking-widest font-[Montserrat] text-gray-500 text-xs lg:mb-8 mb-3 ">
                  As Seen In:
                </p>
              </div>
              <div className=""></div>
              <div className="">
                <p className=" text-[17px] font-[lora] text-black">
                  Elle Magazine
                </p>
                <p className="pt-4 text-[15px] font-[lora] text-black">
                  Style Me Pretty
                </p>
                <p className="pt-4 text-[15px] font-[lora] text-black">
                  Louis Vuitton
                </p>
              </div>
              <div className="">
                <p className=" text-[15px] font-[lora]l text-black">Vogue</p>
                <p className="pt-4 text-[15px] font-[lora] text-black">
                  The Knot
                </p>
                <p className="pt-4 text-[15px] font-[lora] text-black">
                  Martha Stewart
                </p>
              </div>
              <div className="">
                <p className=" text-[15px] font-[lora] text-black">
                  Harper Bazaar Bride
                </p>
                <p className="pt-4 text-[15px] font-[lora] text-black">
                  Elle Magazine
                </p>
                <p className="pt-4 text-[15px] font-[lora] text-black">
                  Martha Stewart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2     md:grid-cols-3   gap-4 bg-white py-4 lg:px-20 px-5">
        {/* Left Image */}
        <div className="lg:justify-center lg:flex lg:mt-10">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="Wedding moment"
            className="lg:w-1/2 w-full lg:h-[300px] h-[230px]   object-cover shadow-md"
          />
        </div>

        {/* Center Image with Overlay */}
        <div
          className={`relative flex-shrink-0 order-3 md:order-2 lg:order-2 h-[700px] ${styles.small}`}
        >
          <Aboutconnect height="h-[700px]"></Aboutconnect>
        </div>
        {/* Right Image */}
        <div className="lg:flex lg:justify-center lg:mt-95 order-2 md:order-3 lg:order-3">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="Bride smiling"
            className="lg:w-1/2 w-full lg:h-[300px] h-[230px] object-cover  shadow-md"
          />
        </div>
      </section>
      <div className={`relative  h-[500px] mx-5  ${styles.big}`}>
        <Aboutconnect height="h-[500px] "></Aboutconnect>
      </div>

      <Footer></Footer>
    </>
  );
};
