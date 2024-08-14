'use client'
import React from 'react';
import { Contact } from 'lucide-react';
import { ImagesSlider } from './ui/images-slider';
import { images } from '@/data';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section>
       <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {/* The hero section slideshow <br /> nobody asked for */}
          <h1 className='text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold'>
             YOGA FIRST <span className='block md:inline'>FITNESS ALWAYS</span>
           </h1>
           <p className='text-center px-5 md:px-0 mx-auto text-[#cbe0b9] text-[16px] sm:text-lg md:w-1/2 font-medium leading-6 sm:leading-7 py-4 sm:py-5'>
             Welcome to Great Fitness, Los Angeles' premier destination for yoga and fitness enthusiasts. Nestled in the vibrant heart of the city, we offer a sanctuary where mind, body, and spirit align.
           </p>
           <div className='flex gap-5 items-center justify-center w-full'>
           <button type="button" className="focus:outline-none text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-md text-sm p-3  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border">Book A Session</button>
               <button
                 type="button"
                 className="font-semibold text-white bg-transparent hover:border border rounded-md text-sm p-3 flex items-center gap-2"
               >
                 <span>Contact Us</span>
                 <Contact className='w-5 h-5'/>
               </button>
           </div>
        </motion.p>
      </motion.div>
    </ImagesSlider>
    </section>
  );
};

export default Home;
