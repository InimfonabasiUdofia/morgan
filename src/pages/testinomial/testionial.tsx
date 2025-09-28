import Testioniamlblog from "../../components/repitition/testioniamlblog";
import { Navbar } from '../../components/nav/navbar'

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
  const navcolor="text-white"

const Testinomial = () => {
    
  return (
    <>
       <Navbar navcolor={navcolor}></Navbar>
        <Testioniamlblog content={content[0]}></Testioniamlblog>
    </>
  )
}

export default Testinomial