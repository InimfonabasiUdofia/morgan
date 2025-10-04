import React from 'react'
type TestimonialHomeProps = {
  img: String;
};


const Testinomialhome: React.FC<TestimonialHomeProps> = ({ img }) => {
  return (
    <>
         <section
        className="relative h-[100vh] flex bg-cover bg-center  items-center  lg:px-35 px-5 py-20"
        style={{
          backgroundImage: "url('"+ img+"') ",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10  text-white ">
          <p className="text-[40px]  font-[Montserrat] mb-6">
            LET'S CONNECT
          </p>
        </div>
      </section>
      <section>
        <div className="lg:flex relative justify-between bottom-40 lg:px-35 px-5">
          <div className="">
            <p className="mb-6 text-white lg:w-3/5 font-[Montserrat] ">
              I look forward to hearing from you and helping you create memories
              that will last a lifetime.
            </p>
          </div>
          <div className="relative lg:left-30">
            <button className="px-6 py-3 bg-[#363636] text-white  font-[Montserrat] font-[1rem] shadow-md cursor-pointer">
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