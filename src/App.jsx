import Header from "./Components/Header/Header"
function App() {
  return (
    <>
     <div className=" bg-[#F0EFEE] flex flex-col p-9 font-regular rounded-b-[6rem]">
      <div className="flex items-center w-full justify-between ">
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
          <p><a href="">linkedin</a> / <a href="">LeetCode</a> / <a href="">Github</a></p>
        </ol>
      </div>
      <div className="py-32 flex flex-col items-center">
        <div className="relative w-[24rem]">
            <div className=" m-auto  w-28 h-28 rounded-full overflow-hidden">
                <img src="https://i.ibb.co/tCdPhPx/profile.jpg" alt="profile" border="0"/>
            </div> 
            <div className=" absolute top-0 right-0 bg-white p-2 rounded-md top-0">
                <p>Hi!👋 I'm Sourav </p>
            </div>
        </div>
        
       
        <h2 className=" mt-5 text-center text-4xl font-bold">Frontend Developer</h2>
        <p className=" text-center text-sm">Building Web Applications, Brands and products</p>
        <div className="w-[17rem] mt-2 mb-2 bg-black h-[1px]"></div>
        <button className=" bg-black text-white px-6 py-4 rounded-lg mt-3">Download CV 🡥</button>
      </div>
     </div>

     <div className="bg-white rounded-b-[6rem] mt-4 flex items-center flex-col">
      <div className="border border-black text-center py-3 px-4 mb-4">
        <h2 className=" font-medium text-xl">Tech-Stacks</h2>
      </div>
     <div className="flex items-center w-full justify-between px-40">
      <div className="w-20 h-20">
        <img src="https://i.ibb.co/5RR24N1/image.png" alt="image" />
      </div>
      <div className="w-20 h-20">
        <img src="https://i.ibb.co/XVPncxs/image.png" alt="image" />
      </div>
      <div className="w-20 h-20">
        <img src="https://i.ibb.co/CvNh4GM/image.png" alt="image" />
      </div>
      <div className="w-20 h-20">
        <img src="https://i.ibb.co/BtTS84X/image.png" alt="image" />
      </div>
      <div className="w-20 h-20">
        <img src="https://i.ibb.co/7pNjzKm/image.png" alt="image" />
      </div>
      <div className="w-20 h-20">
       <img src="https://i.ibb.co/8z8xFN6/image.png" alt="image" />
      </div>
     </div>
     </div>

    <div className="bg-[#F0EFEE]  mt-20 pb-20 rounded-[6rem]">
        <div className="p-20">
          <h2 className="text-center text-4xl  font-bold">Collaborating with agencies <br></br> and brands for impactful outcome </h2>
        </div>

        <div className="w-full relative ">
        <div className=" bg-slate-700 h-[1px] w-[90%] m-auto"></div>
        <div className="px-10 py-2 bg-white  w-fit border rounded-full absolute top-0 translate-x-[-50%] translate-y-[-50%] -rotate-3 left-[50%] ">
          <p>Services</p>
        </div>

        <div className=" mt-20 px-20 flex flex-row items-center justify-around">
            <div className=" flex text-center flex-col w-[14rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center  text-2xl fa-solid fa-paintbrush"></i>
              <h2 className="font-medium mt-2 mb-2">UX/UI</h2>
              <p >Designing interfaces that are reliable, profitable and easy to use.  </p>
            </div>
            <div className=" flex text-center flex-col w-[14rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center text-2xl fa-solid fa-laptop"></i>
              <h2 className="font-medium mt-2 mb-2">Web & Mobile Apps</h2>
              <p>Migrating ideas into real world web and mobile applications. </p>
            </div>
            <div className=" flex text-center flex-col w-[14rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center text-2xl fa-solid fa-paint-roller"></i>
              <h2 className="font-medium mt-2 mb-2">Design & Creative</h2>
              <p>Painting stunning designs which connects you with your costumers.</p>
            </div>
            <div className=" flex flex-col text-center w-[14rem] m-4 border border-gray-500 rounded-md p-4">
              <i className="text-center text-2xl fa-solid fa-server"></i>
              <h2 className="font-medium mt-2 mb-2">Deploy & Development</h2>
              <p>Deploying your dreams into real world with trending technologies.</p>
            </div>
        </div>
        </div>
    </div>

    <div className="mt-20 flex flex-col items-center">
      <div className="bg-[#EEEDEC] w-[4rem] h-[4rem] flex items-center justify-center rounded-full">
        <i className="text-2xl fa-regular fa-handshake"></i>
      </div>

      <div className="flex flex-col items-center mb-20">
        <h2 className="text-4xl text-center mt-4 mb-4">Hire Me As <br /> A Frontend Engineer</h2>
        <div className="flex flex-row gap-4 mt-4">
            <div className=" flex flex-row items-baseline w-fit gap-2 text-center justify-center cursor-pointer bg-black text-white px-4 py-2 rounded-full">
              <i className="fa-regular fa-envelope"></i>
               <p>Email</p>
            </div>
            <div className=" flex flex-row items-baseline w-fit gap-2 text-center justify-center cursor-pointer bg-white text-black border px-4 py-2 rounded-full">
              <i class="fa-solid fa-phone"></i>
               <p>Phone</p>
            </div>
        </div>
      </div>
      <div className=" bg-slate-700 h-[1px] w-[90%] m-auto"></div>


      <div className="flex items-center justify-between w-full px-20 mt-9 mb-9">
        <p><i className="fa-regular fa-copyright"></i> @Sourav Mohanty | 2024</p>

          <p><a href="">linkedin</a> / <a href="">LeetCode</a> / <a href="">Github</a></p>
      
      </div>
    </div>

    </>
  )
}

export default App
