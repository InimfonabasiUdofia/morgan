import Testioniamlblog from "../../components/repitition/testioniamlblog";
import { Navbar } from '../../components/nav/navbar'
import Testinomialhome from "../../components/repitition/testinomialhome";
import { Footer } from "../../components/footer/footer";

  type ContentItem = {
    text1: string;
    text2: string;
    text3: string;
    img: string;
  };
 const content: ContentItem[] = [
    {
      text1: "Testimonials",
      text2: "Kind words from my amazing clients",
      text3:
        "What I'm most grateful for is meeting wonderful people, witnessing their love, and framing their emotions into photos. Thank you for the privilege of documenting your stories.",
      img: "https://picsum.photos/id/1016/1920/1080",
    },
  ];
  const navcolor="text-white";
  type Testimonial = {
  id: number;
  text: string;
  author: string;
  img?: string;
  height?:string
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Morgan’s talent for capturing both the big moments and the small, meaningful details is unmatched. They have a unique way of making every photo feel personal and significant. We are thrilled with the beautiful memories they created for us. Thank you, Morgan!",
    author: "RACHEL + ALEX",
  },
  {
    id: 2,
    text: "We couldn’t have asked for a better photographer. They made us feel completely comfortable and truly understood what we wanted. The photos are stunning and perfectly capture the joy and love of our wedding day. Such an amazing talent, we highly recommend Morgan.",
    author: "CAROLINE + CHRISTOPHER",
  },
  {
    id: 3,
    text: "From the moment we met Morgan, we knew we were in good hands. They photographed our wedding with such authenticity. Each image brings back all the feelings of that day. We couldn’t have asked for a better photographer, and we ended up finding a wonderful friend in Morgan.",
    author: "AARON + TABITHA",
  },
  {
    id: 4,
    text: "Working with Morgan was one of the best decisions for our wedding. His warm and personable approach made us feel comfortable and at ease. The photos are stunning! We can’t thank Morgan enough for his incredible work and for making our day unforgettable.",
    author: "LUCAS + DANIELLE",
    img: "https://picsum.photos/id/1015/400/500",
    height:'h-[200px]',
  },
   {
    id: 5,
    text: "Working with Morgan was one of the best decisions for our wedding. His warm and personable approach made us feel comfortable and at ease. The photos are stunning! We can’t thank Morgan enough for his incredible work and for making our day unforgettable.",
    author: "LUCAS + DANIELLE",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", 
    height:'h-[250px]',// Example placeholder
  },
];
 const imgconnect:String="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"


const Testinomial = () => {
    
  return (
    <>
       <Navbar navcolor={navcolor}></Navbar>
        <Testioniamlblog content={content[0]}></Testioniamlblog>
        <section className=" py-16 lg:px-30 px-5">
      {/* Top row (3 columns) */}
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-15 py-10 lg:py-20 bg-[#f9f9f4]">
        {testimonials.slice(0, 3).map((item) => (
          <div key={item.id} className=" ">
            <p className="text-gray-400 text-[17px] mb-4 font-[Montserrat]">
              {item.id.toString().padStart(2, "0")}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 font-[lora]">
              “{item.text}”
            </p>
           <p className=" text-gray-900 text-xl font-[Montserrat] pt-3">
              {item.author}
            </p>
          </div>
        ))}
      </div>

     
      <div className="  mt-16 grid grid-cols-1 md:grid-cols-2  items-center px-6 lg:px-20">
        {testimonials.slice(3,5).map((item)=>{
          return(<>
           {item.img && (
          <div className="">
               <span className="">
            <p className="text-gray-400 text-[17px]  font-[Montserrat] relative lg:top-20 ">0{item.id}</p>
          </span>
          <span className="justify-center flex lg:mx-20">
            <img
            src={item.img}
            alt={item.author}
            className={`shadow-md ${item.height} w-1/2 object-cover`} 
          />
          </span>
         
          </div>
        )}
        <div>
        
           <p className="text-gray-700 text-sm leading-relaxed mb-6 font-[lora] pt-5">
            “{item.text}”
          </p>
           <p className=" text-gray-900 text-xl font-[Montserrat] pt-3">
            {item.author}
          </p>
        </div>
          </>)
        })}
       </div>
    </section>
    <Testinomialhome img={imgconnect}></Testinomialhome>
    <Footer></Footer>
    </>
  )
}

export default Testinomial