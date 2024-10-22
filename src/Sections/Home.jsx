import React from 'react'

function Home() {
  return (
  <section>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl mb-6lg:mb-8 md:text-lg lg:text-xl text-gray-800">ITTC - Iraq Technology Training Center
            ITTC is part of the Iraq Technology Solutions group, specializing in providing professional development 
            and training in the field of information technology. The center aims to enhance the technical skills and 
            capabilities of industry professionals through comprehensive and integrated training programs.</p>
            <button type="button" className='py-3 px-5 text-sm font-semibold text-center my-6 rounded-lg sm:w-fit bg-gray-200 hover:bg-[#5A4FCF] hover:text-white focus:ring-4 focus:outline-none'>
            Contact As
            </button>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://cdn.pixabay.com/photo/2016/10/02/19/51/chip-1710300_1280.png" alt="" />
        </div>                
    </div>
</section>
  )
}

export default Home