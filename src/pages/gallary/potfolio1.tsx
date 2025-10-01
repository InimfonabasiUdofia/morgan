
import { Footer } from '../../components/footer/footer';
import Navbar from '../../components/nav/navbar';
import Gallary from '../../components/repitition/gallary'
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

const Potfolio1 = () => {

  return (
    <>
    <Navbar></Navbar>
    <section className=" lg:px-20 px-4  mt-20">
      <div className=" bg-[#f9f9f5] h-[320px]">
        {/* Heading */}
        <h2 className="text-center pt-20 text-2xl tracking-widest font-light text-black mb-12">
          ENGAGEMENTS
        </h2>

        {/* Image grid */}
       
      </div>
    </section>
       <div className="-mt-25">
        <Gallary selected={selected} buttonview="Book a seasion" link="./"></Gallary>
       </div>
       <Footer></Footer>
    </>
  )
}

export default Potfolio1