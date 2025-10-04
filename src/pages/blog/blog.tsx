import { Navbar } from "../../components/nav/navbar";
import { Footer } from "../../components/footer/footer";
import { useState } from "react";
import Testioniamlblog from "../../components/repitition/testioniamlblog";

type Post = {
  id: number;
  category: "Couples" | "Tips" | "Weddings";
  title: string;
  date: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    category: "Weddings",
    title: "How to feel comfortable in front of the camera on your wedding day",
    date: "November 28th, 2024",
    image: "https://picsum.photos/id/1018/1920/1080",
  },
  {
    id: 2,
    category: "Tips",
    title: "10 Must-have photos for your wedding album",
    date: "November 28th, 2024",
    image: "https://picsum.photos/id/1015/1920/1080",
  },
  {
    id: 3,
    category: "Couples",
    title: "Romantic ideas to make your engagement unforgettable",
    date: "October 20th, 2024",
    image: "https://picsum.photos/id/1016/1920/1080",
  },
];

const Blog = () => {
  const [filter, setFilter] = useState<"All" | "Couples" | "Tips" | "Weddings">(
    "All"
  );

  const filteredPosts =
    filter === "All" ? posts : posts.filter((post) => post.category === filter);
  const navcolor = "text-white";
  type ContentItem = {
    text1: string;
    text2: string;
    text3: string;
    img: string;
  };

  const content: ContentItem[] = [
    {
      text1: "THE STORIES",
      text2: " Love Stories and Resources",
      text3:
        "Explore heartfelt love stories and practical resources to inspire your wedding journey, from real moments of connection to expert tips for planning your perfect day.",
      img: "https://picsum.photos/id/1016/1920/1080",
    },
  ];
  return (
    <div>
      <Navbar navcolor={navcolor}></Navbar>

      <Testioniamlblog content={content[0]}></Testioniamlblog>

      {/* Blog Section */}
      <section className="w-full px-6 lg:px-30 py-10">
        {/* Category Filter */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex space-x-6 text-[17px] font-[Montserrat] uppercase">
            {["All", "Couples", "Tips", "Weddings"].map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setFilter(cat as "All" | "Couples" | "Tips" | "Weddings")
                }
                className={`pb-1 ${
                  filter === cat
                    ? "border-b border-black font-semibold"
                    : "hover:border-b"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.64 5.64a7.5 7.5 0 0011.01 11.01z"
              />
            </svg>
          </button>
        </div>

        {/* Posts */}
        <div className="  ">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`grid grid-cols-1 lg:grid-cols-2  items-center  pt-4`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="order-2 lg:order-1 py-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full object-cover  shadow"
                    />
                  </div>

                  {/* Text */}

                  <div className={`text-center lg:px-20 order-1 lg:order-2`}>
                    <p className="text-sm text-gray-500 mb-2 font-[lora]">{post.date}</p>
                    <h2 className="text-2xl font-light mb-2 font-[Montserrat] ">{post.title}</h2>
                    <p className="text-gray-700 font-semibold font-[lora]">
                      {post.category}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className={`text-center lg:px-20`}>
                    <p className="text-sm text-gray-500 mb-2 font-[lora]">{post.date}</p>
                    <h2 className="text-2xl font-light mb-2 font-[Montserrat]">{post.title}</h2>
                    <p className="text-gray-700 font-semibold">
                      {post.category}
                    </p>
                  </div>
                  <div className="py-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full object-cover  shadow"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
