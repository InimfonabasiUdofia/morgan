import React, { useState } from "react";
import { Navbar } from "../../components/nav/navbar";
import { Footer } from "../../components/footer/footer";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const navcolor = "text-white";
  return (
    <>
      <Navbar navcolor={navcolor}></Navbar>
      <section className="bg-white">
        {/* Top text */}
        <div className="relative lg:h-[600px] h-[500px]   bg-[url('https://picsum.photos/id/1018/1920/1080')] bg-cover bg-center flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10"></div>

          <p className="text-xs tracking-widest uppercase text-white  font-[Montserrat]">
            Let’s begin your story together
          </p>
          <h1 className="text-4xl font-light text-white mt-2 font-[Montserrat]">
            Contact Me
          </h1>
          <p className="mt-3 text-white max-w-xl text-sm font-[lora]">
            I can’t wait to hear your story and capture your special day. Leave
            me a message in the form below, and let’s create something amazing
            together.
          </p>
        </div>

        <div className="max-w-2xl lg:mx-auto mx-5 -mt-20 bg-[#f8f8f3] shadow-md relative px-8 py-15  ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none resize-none"
              />
            </div>

            <button className="px-6 py-3 bg-[#363636] text-white  font-[Montserrat] font-sm shadow-md cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
