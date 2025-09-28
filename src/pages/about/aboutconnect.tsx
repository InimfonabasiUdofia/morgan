

const Aboutconnect = ({height}:any) => {
  return (
    <>
          <div className="w-full md:w-[500px] text-center">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="Bride back view"
            className={`w-full ${height} object-cover  shadow-lg`}
          />
          <div className="absolute top-70 lg:top-115  text-center  text-white  bg-opacity-30   px-6">
            <div className="">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              LET'S CONNECT
            </h2>
            <p className="text-center max-w-md mb-6 text-sm md:text-base">
              I can’t wait to hear your story and capture your special day. Drop
              me a message and let's create something amazing together!
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition">
              CONTACT ME
            </button>
            </div>
          </div>
        </div>

    </>
  )
}

export default Aboutconnect