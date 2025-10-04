import { Link } from "react-router-dom";

 
 type items={
    image:string;
    height:string;
    smheight:string;
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
     
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 lg:gap-6 space-y-4">
            {selected.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 lg:mb-6 group cursor-pointer"
              >
                <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <img
                    src={image.image}
                    alt={`Gallery image ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-300 group-hover:brightness-110 ${image.height} ${image.smheight}`}
                    // style={{
                    //   height: image.height > 500 ? `${image.height-200 }px` : `${image.height}px`,
                    // }}
                                    />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
          <Link to={link}>
              <button className="px-6 py-3 bg-[#363636] text-white  font-[Montserrat] font-[1rem] shadow-md cursor-pointer">
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