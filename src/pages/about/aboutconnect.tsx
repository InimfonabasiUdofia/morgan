

const Aboutconnect = ({height}:any) => {
  return (
    <>
          <div className="w-full  text-center">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="Bride back view"
            className={`w-full ${height} object-cover  shadow-lg`}
          />
          <div className="absolute top-65 lg:top-115  text-center  text-white  bg-opacity-30   ">
            <div className="">
            <h2 className="text-2xl md:text-3xl font-[Montserrat] mb-4">
              LET'S CONNECT
            </h2>
            <p className="text-center  mb-6   font-[Montserrat]">
              I can’t wait to hear your story and capture your special day. Drop
              me a message and let's create something amazing together!
            </p>
          <button className="px-6 py-3 bg-[#363636] text-white  font-[Montserrat] font-sm shadow-md cursor-pointer">
              CONTACT ME
            </button>
            </div>
          </div>
        </div>

    </>
  )
}

export default Aboutconnect