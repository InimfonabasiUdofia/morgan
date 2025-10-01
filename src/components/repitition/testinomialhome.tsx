import React from 'react'
type TestimonialHomeProps = {
  img: String;
};


const Testinomialhome: React.FC<TestimonialHomeProps> = ({ img }) => {
  return (
    <>
         <section
        className="relative h-[100vh] flex bg-cover bg-center  items-center  lg:px-20 px-5"
        style={{
          backgroundImage: "url('"+ img+"') ",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10  text-white ">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            LET'S CONNECT
          </h2>
        </div>
      </section>
      <section>
        <div className="lg:flex relative justify-between bottom-40 px-5 lg:px-20">
          <div className="">
            <p className="mb-6 text-white">
              I look forward to hearing from you and helping you create memories
              that will last a lifetime.
            </p>
          </div>
          <div className="">
            <button className="px-8 py-3 bg-black text-white uppercase tracking-widest  shadow-md hover:bg-gray-800 transition">
              Get In Touch
            </button>
          </div>
          <div className=""></div>
        </div>
      </section>
    </>
  )
}

export default Testinomialhome