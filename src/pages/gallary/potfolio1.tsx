
import { Footer } from '../../components/footer/footer';
import Navbar from '../../components/nav/navbar';
import Gallary from '../../components/repitition/gallary'
import Top from '../../components/repitition/top';
 type items = {
    image: string;
    height: number;
  };
  const selected: items[] = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 310,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 580,
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: 550 },

    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 260,
    },

    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 250,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 590,
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: 300 },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 550,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 600,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: 230,
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: 290 },
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