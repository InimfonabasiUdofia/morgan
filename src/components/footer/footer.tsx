

export const Footer = () => {
  return (
    <>
      <section className="bg-white py-16 text-center">
        <p className="uppercase text-xs tracking-widest mb-6">
          Follow Me On Instagram
        </p>
        <div className=" lg:px-30 px-5 grid grid-cols-2 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta1"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta2"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta1"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta2"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta1"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta2"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110"
          />
        </div>
        <p className="font-semibold mb-6">@PIXIESET</p>
        <div className="flex justify-center gap-6 text-gray-600 mb-8">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="flex justify-center gap-8 text-sm text-gray-500 uppercase tracking-widest mb-6">
          {/* <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Info</a> */}
          {/* <a href="#">Contact</a> */}
        </div>
        <p className="text-xs text-gray-400">© 2025 Pixieset</p>
      </section>
    </>
  );
};
