

type item={
    top:string;
}

const Top = ({top}:item) => {
  return (
    <>
         <section className=" lg:px-20 px-4  mt-20">
      <div className=" bg-[#f9f9f5] h-[320px]">
        {/* Heading */}
        <h2 className="text-center pt-20 text-2xl tracking-widest font-light text-black mb-12">
          {top}
        </h2>

        {/* Image grid */}
       
      </div>
    </section>
    </>
  )
}

export default Top