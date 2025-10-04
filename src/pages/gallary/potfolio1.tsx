
import { Footer } from '../../components/footer/footer';
import Navbar from '../../components/nav/navbar';
import Gallary from '../../components/repitition/gallary'
import Top from '../../components/repitition/top';

const Potfolio1 = () => {
 type items = {
    image: string;
    height: string;
    smheight: string;
  };
  const selected: items[] = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[310px]",smheight:"h-[210px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[580px]",smheight:"h-[380px]"
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "lg:h-[550px]", smheight:"h-[350px]"},

    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[260px]",smheight:"h-[160px]"
    },

    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[250px]",smheight:"h-[150px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[590px]",smheight:"h-[390px]"
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "lg:h-[300px]" ,smheight:"h-[200px]"},
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[550px]",smheight:"h-[350px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[600px]",smheight:"h-[400px]"
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      height: "lg:h-[230px]",smheight:"h-[150px]"
    },
    { image: "https://picsum.photos/id/1018/1920/1080", height: "lg:h-[590px]", smheight:"h-[390px]"},
  ];
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