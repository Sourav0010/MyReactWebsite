function App() {
  return (
    <>
     <div className=" bg-[#F0EFEE] flex flex-col p-9 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]">
      <div className="flex items-center w-full justify-between visible max-sm:invisible">
         <div className=" flex gap-3 items-center">
          <h3 className="text-xs">mohantysourav656@gmail.com</h3>
          <button className="px-2 py-1 bg-white text-xs rounded-md" onClick={(e)=>{
            window.navigator.clipboard.writeText("mohantysourav656@gmail.com")
            e.target.innerText = "Copied!"
            e.target.style.backgroundColor = "#2bff00"
            e.target.style.color = "white"
          }}>Copy</button>
        </div>
        <ol className="flex text-xs ">
          <p><a href="https://www.linkedin.com/in/sourav-mohanty-link/">linkedin</a> / <a href="https://leetcode.com/u/Sourav010/">LeetCode</a> / <a href="https://github.com/Sourav0010">Github</a></p>
        </ol>
      </div>
      <div className="py-32 flex flex-col items-center">
        <div className="relative w-[24rem] max-sm:w-[13rem]">
            <div className=" m-auto  w-28 h-28 rounded-full max-sm:w-16 max-sm:h-16 overflow-hidden">
                <img src="https://i.ibb.co/tCdPhPx/profile.jpg" />
            </div> 
            <div className=" absolute top-0 right-0 bg-white p-2 rounded-md top-0">
                <p className="max-sm:text-[8px]">Hi!👋 I'm Sourav </p>
            </div>
        </div>
        
       
        <h2 className=" mt-5 text-center text-4xl font-bold max-sm:text-xl">Frontend Developer</h2>
        <p className=" text-center text-sm max-sm:text-[8px]">Building Web Applications, Brands and products</p>
        <div className="w-[17rem] mt-2 mb-2 bg-black h-[1px] max-sm:w-[9rem]"></div>
        <button className=" bg-black text-white px-6 py-4 rounded-lg mt-3 max-sm:px-3 max-sm:py-2 max-sm:text-[12px]">Download CV 🡥</button>
      </div>
     </div>

     <div className="bg-white mt-4 flex items-center flex-col">

        <div className="border border-black text-center py-3 px-4 max-sm:py-1 max-sm:px-2 mb-4">
          <h2 className=" font-medium max-sm:text-sm text-xl">Tech-Stacks</h2>
        </div>

        <div className="flex items-center w-full px-20 max-sm:px-10 justify-between">
              <div className="w-20 max-sm:w-10 max-sm-w-10 h-20">
                <img src="https://i.ibb.co/5RR24N1/image.png" className="w-fit h-fit" alt="image" />
              </div>
              <div className="w-20 max-sm:w-10 max-sm-w-10 h-20">
                <img src="https://i.ibb.co/XVPncxs/image.png" alt="image" />
              </div>
              <div className="w-20 max-sm:w-10 max-sm-w-10 h-20">
                <img src="https://i.ibb.co/CvNh4GM/image.png" alt="image" />
              </div>
              <div className="w-20 max-sm:w-10 max-sm-w-10 h-20">
                <img src="https://i.ibb.co/BtTS84X/image.png" alt="image" />
              </div>
              <div className="w-20 max-sm:w-10 max-sm-w-10 h-20">
                <img src="https://i.ibb.co/7pNjzKm/image.png" alt="image" />
              </div>
              <div className="w-20 max-sm:w-10 max-sm-w-10 h-20">
              <img src="https://i.ibb.co/8z8xFN6/image.png" alt="image" />
              </div>
        </div>
     </div>

    <div className="bg-[#F0EFEE] max-sm:mt-10 max-sm:rounded-[2rem]  mt-20 pb-20 rounded-[6rem]">
        <div className="p-20">
          <h2 className="text-center text-4xl max-sm:text-lg  font-bold">Collaborating with agencies <br></br> and brands for impactful outcome </h2>
        </div>

        <div className="w-full relative ">
        <div className=" bg-slate-700 h-[1px] w-[90%] m-auto"></div>
        <div className="px-10 py-2 max-sm:px-5 max-sm:py-1 max-sm:text-xs bg-white  w-fit border rounded-full absolute top-0 translate-x-[-50%] translate-y-[-50%] -rotate-3 left-[50%] ">
          <p>Services</p>
        </div>

        <div className=" mt-20 flex-wrap px-20 max-sm:px-5 flex flex-row items-center justify-around">
            <div className=" flex text-center flex-col w-[14rem] max-sm:w-[11rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center max-sm:text-xl text-2xl fa-solid fa-paintbrush"></i>
              <h2 className="font-medium mt-2 max-sm:text-sm mb-2">UX/UI</h2>
              <p className="max-sm:text-xs">Designing interfaces that are reliable, profitable and easy to use.  </p>
            </div>
            
            <div className=" flex text-center flex-col w-[14rem] m-4 max-sm:w-[11rem] border border-gray-500 rounded-md p-4">
              <i className="text-center text-2xl max-sm:text-xl fa-solid fa-laptop"></i>
              <h2 className="font-medium mt-2 max-sm:text-sm mb-2">Web & Mobile Apps</h2>
              <p className="max-sm:text-xs">Migrating ideas into real world web and mobile applications. </p>
            </div>

            <div className=" flex text-center flex-col w-[14rem] max-sm:w-[11rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center text-2xl max-sm:text-xl fa-solid fa-paint-roller"></i>
              <h2 className="font-medium mt-2 max-sm:text-sm mb-2">Design & Creative</h2>
              <p className="max-sm:text-xs">Painting stunning designs which connects you with your costumers.</p>
            </div>

            <div className=" flex flex-col text-center w-[14rem] max-sm:w-[11rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center text-2xl max-sm:text-xl fa-solid fa-server"></i>
              <h2 className=" max-sm:text-[12px] font-medium mt-2 mb-2">Deploy & Development</h2>
              <p className="max-sm:text-xs">Deploying your dreams into real world with trending technologies.</p>
            </div>
        </div>
        </div>
    </div>

    <div className="mt-20 flex flex-col items-center">
      <div className="bg-[#EEEDEC] w-[4rem] h-[4rem]  flex items-center justify-center rounded-full">
        <i className="text-2xl fa-regular fa-handshake"></i>
      </div>

      <div className="flex flex-col items-center mb-20">
        <h2 className="text-4xl max-sm:text-lg text-center mt-4 mb-4">Hire Me As <br /> A Frontend Engineer</h2>
        <div className="flex flex-row gap-4 mt-4 max-sm:mt-2">
            <div className=" flex flex-row max-sm:text-xs items-baseline w-fit gap-2 text-center justify-center cursor-pointer bg-black text-white px-4 py-2 rounded-full">
              <i className="fa-regular fa-envelope"></i>
               <p>Email</p>
            </div>
            <div className=" flex flex-row max-sm:text-xs items-baseline w-fit gap-2 text-center justify-center cursor-pointer bg-white text-black border px-4 py-2 rounded-full">
              <i class="fa-solid fa-phone"></i>
               <p>Phone</p>
            </div>
        </div>
      </div>
      <div className=" bg-slate-700 h-[1px] w-[90%] m-auto"></div>


      <div className="flex items-center flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full px-20 mt-9 mb-9">
        <p><i className="fa-regular fa-copyright"></i> @Sourav Mohanty | 2024</p>
        <p><a href="">linkedin</a> / <a href="">LeetCode</a> / <a href="">Github</a></p>
      </div>
    </div>

    </>
  )
}

export default App
