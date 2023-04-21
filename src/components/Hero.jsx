import React from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
   <section className='relative w-full h-screen  mx-auto'>
    <div className='sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
      <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-4 h-4 rounded-full bg-[#915eff]' />
      <div className=' violet-gradient w-1 sm:h-80 h-40' />
      </div>
      <div>
        <h1 className="font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[98px] mt-2">Hi, I'm <span className='text-[#915eff]'>Jay</span></h1>
        <p className='text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[16px] lg:leading-[40px] mt-2 text-white-100'>I am a Web developer</p>
      </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.dev
        animate = {{
          y:[0,24,0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className = 'w-5 h-2 rounded-full  bg-secondary mb-1'


        />

        

        </div>
      </a>

      </div>
   
   </section>
  )
}

export default Hero;