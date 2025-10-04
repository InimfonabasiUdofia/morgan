import { useState } from "react";
import { Navbar } from "../../components/nav/navbar";
import { Footer } from "../../components/footer/footer";
import styles from "./style.module.css";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do you travel for destination weddings?",
    answer:
      "Yes, I love capturing destination weddings! Whether you dream of a beachside ceremony, a mountaintop celebration, or a charming city backdrop, I’m excited to travel together. Let’s chat more about your destination and how we can make your special day unforgettable, no matter where it takes us.",
  },
  {
    id: 2,
    question: "Do you help with planning our engagement session?",
    answer:
      "I’d be happy to! I can help suggest awesome locations, offer guidance on outfits, and discuss themes to ensure your session reflects your love story. We’ll work together to choose the best settings and ideas to make the most of your time in front of the camera and capture your love most genuinely.",
  },
  {
    id: 3,
    question: "What is your cancellation or rescheduling policy?",
    answer:
      "If you need to cancel or reschedule, please inform me as soon as possible. Cancellations more than 30 days before the event may receive a partial refund. Rescheduling will be accommodated based on availability, with possible fees for changes within 30 days of the event.",
  },
  {
    id: 4,
    question: "Do you offer digital files, prints, or albums?",
    answer:
      "Absolutely! I provide digital files, high-quality prints, wall art, holiday cards, and custom albums. You’ll receive a private online gallery with a set number of downloadable images, and you can choose from various print options and custom-designed albums as add-ons to your initial package.",
  },
  {
    id: 5,
    question: "How long does it take to receive our photos?",
    answer:
      "You can expect your full wedding gallery within 6-8 weeks. Sneak peeks are delivered within the first week so you can relive those special moments right away.",
  },
  {
    id: 6,
    question: "Do you provide raw/unedited photos?",
    answer:
      "No, I don’t provide raw images as they do not represent the quality and style of my work. Each delivered photo is carefully edited to ensure it tells your love story beautifully.",
  },
  {
    id: 7,
    question: "How long does it take to receive our photos?",
    answer:
      "You can expect your full wedding gallery within 6-8 weeks. Sneak peeks are delivered within the first week so you can relive those special moments right away.",
  },
  {
    id: 8,
    question: "Do you provide raw/unedited photos?",
    answer:
      "No, I don’t provide raw images as they do not represent the quality and style of my work. Each delivered photo is carefully edited to ensure it tells your love story beautifully.",
  },
];

const Service = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const start = page * itemsPerPage;
  const currentFaqs = faqs.slice(start, start + itemsPerPage);

  const nextPage = () => {
    if (start + itemsPerPage < faqs.length) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <section className="relative w-full ">
        <div className="w-full h-[600px]  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Couple walking wedding"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="px-5 lg:px-30">
          <div className="relative bg-[#f8f8f5] py-12  -mt-24 shadow-lg px-6 grid lg:grid-cols-2  grid-cols-1">
            <div className="lg:px-20">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                SERVICES &amp; INVESTMENT
              </h2>
            </div>
            <div className="lg:px-15">
              <h3 className="uppercase text-xs   text-gray-500 ">
                More information about pricing, packages, and what to expect
              </h3>
              <p className="text-base text-gray-700  leading-relaxed pt-10">
                Photography is an investment in your memories. I aim to work
                with people who value the power of photography and want to
                create something meaningful together. Check out my packages, or
                let's connect and talk about your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 px-5 lg:px-30  py-25 gap-8">
        {/* LEFT: Engagement Package */}
        <div className="relative flex items-center justify-center pt-12 lg:mr-30 min-h-[700px]">
          <img
            src="https://picsum.photos/id/1016/1000/1400"
            alt="Engagement Package"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-xl px-8 text-white  md:text-left">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide">
              Engagement Package
            </h2>
            <p className="mt-2 text-sm md:text-base">FROM $900</p>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-100">
              Whether you’re celebrating a proposal, an anniversary, or just
              documenting your love as a couple, I offer packages starting at 4
              hours of coverage, with an online gallery of 90–100 edited photos.
              I’ll help you choose the perfect location and handle all the
              details, so you can relax and have fun!
            </p>
            <button className="mt-8 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 uppercase text-sm font-semibold shadow">
              Book a Session
            </button>
          </div>
        </div>

        {/* RIGHT: Portrait Package */}
        <div className="bg-[#f6f6f1] px-8 py-16 relative">
          {/* Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-light uppercase ">
              Portrait Package
            </h2>
            <p className="mt-1 text-sm text-gray-600">FROM $400</p>
          </div>

          <img
            src="https://picsum.photos/id/1013/200/200"
            alt="Rings and flowers"
            className={`absolute top-10 right-10 w-[170px] h-[200px] object-cover shadow-md ${styles.small}`}
          />

          {/* Main content grid */}
          <div className="lg:mt-40 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img
              src="https://picsum.photos/id/1015/500/600"
              alt="Couple portrait"
              className={`object-cover shadow-md w-full lg:w-[200px] h-[300px] `}
            />

            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Portrait sessions start at 1.5 h and include an online gallery
                with 35–40 edited images. We’ll choose a location of your
                choice, and do a classic photoshoot or an editorial-styled
                session. It’s up to you! Perfect for individual portraits,
                family photos, or creative projects. Add-ons are available
                (prints, extra coverage, etc.).
              </p>
              <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 uppercase text-sm font-semibold shadow">
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative  h-[600px] md:h-[700px] mx-5 lg:mx-30 pt-50 px-5  lg:pt-120 lg:px-10">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" // replace with actual path in your /public folder
          alt="Wedding couple"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay content */}
        <div className="relative  grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left side text */}
          <div className="text-white  space-y-3">
            <h2 className="text-3xl md:text-5xl font-light tracking-wide">
              WEDDING PACKAGE
            </h2>
            <p className="text-sm md:text-base tracking-wide">FROM $2900</p>
          </div>

          {/* Right side content */}
          <div className=" text-white space-y-6  mt-8 md:mt-0 lg:pl-30">
            <p className="text-sm  ">
              I offer both half-day and full-day coverage for weddings, with
              each package customized based on your hourly needs, the number of
              final photos, or your location. Please connect through my contact
              form and we’ll talk more. I can’t wait to hear all about your
              plans and dreams for the big day.
            </p>
            <button className="bg-white text-gray-900 px-6 py-3 text-sm tracking-wide uppercase font-medium shadow-lg hover:bg-gray-200 transition">
              Inquire Today
            </button>
          </div>
        </div>
      </section>
       <section className="bg-gray-50 my-16 mx-6 lg:mx-30 px-5 lg:px-10 py-10">
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-sm uppercase tracking-widest text-gray-600">
              Frequently Asked Questions
            </h2>

            {/* Arrows */}
            <div className="flex space-x-4">
              <button
                onClick={prevPage}
                disabled={page === 0}
                className="p-2 text-gray-600 disabled:opacity-30"
              >
                ←
              </button>
              <button
                onClick={nextPage}
                disabled={start + itemsPerPage >= faqs.length}
                className="p-2 text-gray-600 disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {currentFaqs.map((faq) => (
              <div key={faq.id}>
                <h3 className="text-lg font-medium mb-2">
                  {faq.id}. {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">
              PORTFOLIO
            </h2>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Portraits, Weddings, Engagements
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 text-sm tracking-wide uppercase font-medium shadow-md hover:bg-gray-700 transition">
              View All Works
            </button>
          </div>

          {/* Right images */}
          <div className="flex gap-10">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" // replace with actual path
                alt="Portfolio left"
                className="w-[200px] h-[400px] object-cover lg:w-[500px] lg:h-[500px] "
              />
            </div>
            <div className="mt-14">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" // replace with actual path
                alt="Portfolio right"
                className=" w-[170px] h-[300px]  lg:w-[350px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
     

      <section className="relative">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Couple"
          className="w-full h-[600px] object-cover"
        />

        {/* Overlay Box */}
        <div className=" relative -top-10 bg-[#f7f7f3] mx-8 md:mx-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between px-5 lg:px-10">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">
              LET’S CONNECT
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-lg tracking-wide">
              I LOOK FORWARD TO HEARING FROM YOU AND HELPING YOU CREATE MEMORIES
              THAT WILL LAST A LIFETIME.
            </p>
          </div>

          {/* Right Button */}
          <div className="mt-8 md:mt-0">
            <button className="bg-black text-white px-8 py-3 text-xs uppercase tracking-wider">
              Contact Me
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Service;
