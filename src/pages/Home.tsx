
function Home() {
  return (
    <div className=" mx-auto h-screen  ">
      <div className="px-6 h-screen lg:px-16 py-10 ">
        <div className="pl-20text-black flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-3 lg:gap-10">
            <p className="text-xl sm:text-xl md:text-xl lg:text-2xl w-[35rem] flex">
            That's fantastic! Your journey through TypeScript has led to the creation of an outstanding e-commerce website, a testament to the power of ReactJS, TypeScript, and the finesse of Tailwind and Bootstrap. Cheers to innovation and success in every line of code!
            </p>
            <button className=" btn btn-sm lg:btn-lg h-12 bg-blue-400 text-white rounded-full border-none w-36 lg:w-44 capitalize hover:bg-blue-500">Get started</button>
          </div>
          <img className="w-[45rem]" src="https://oex-vcc.com/content/uploads/2021/03/ecommerce-2.png" alt="" />
        </div>
      </div>
    </div>

  )
}

export default Home