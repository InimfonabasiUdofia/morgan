
import { Footer } from '../../components/footer/footer';
import Navbar from '../../components/nav/navbar';
import Gallary from '../../components/repitition/gallary'
import Top from '../../components/repitition/top';
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
  
    <Top top="ENGAGEMENTS"></Top>
       <div className="-mt-25">
        <Gallary selected={selected} buttonview="Book a seasion" link="./"></Gallary>
       </div>
       <Footer></Footer>
    </>
  )
}

export default Potfolio1