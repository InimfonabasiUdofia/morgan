import { Link } from "react-router-dom";

 
 type items={
    image:string;
    height:String;
 }
 type ItemsProps = {
  selected: items[];
  buttonview:string;
  link:string;
};

const Gallary = ({selected ,buttonview,link}:ItemsProps) => {
  return (
        <>
             <section className=" ">
        <div className="lg:px-30 px-6">
     
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
            {selected.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <img
                    src={image.image}
                    alt={`Gallery image ${index + 1}`}
                    className={`w-full ${image.height} object-cover transition-transform duration-300 group-hover:brightness-110`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
          <Link to={link}>
              <button className="px-8 py-3 bg-black text-white text-sm uppercase tracking-widest rounded-lg shadow-md hover:bg-gray-800 transition">
              {buttonview}
            </button>
          </Link>
          </div>
        </div>
      </section>
        </>
  )
}

export default Gallary