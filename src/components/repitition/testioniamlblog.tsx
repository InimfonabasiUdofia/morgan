// Define type for a single item
type ContentItem = {
  text1: string;
  text2: string;
  text3: string;
  img: string;
};

// Props type for the component
type TestimonialBlogProps = {
  content: ContentItem;
};

const TestimonialBlog: React.FC<TestimonialBlogProps> = ({ content }) => {
  return (
    <section className="relative h-[680px] w-full">
      <img
        src={content.img}
        alt="Love Stories"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            {content.text1}
          </h1>
          <p className="mt-2 text-sm md:text-base tracking-widest uppercase">
            {content.text2}
          </p>
          <p className="mt-6 text-gray-200 text-sm md:text-lg leading-relaxed">
            {content.text3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBlog;
