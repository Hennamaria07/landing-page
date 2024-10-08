
import Image from 'next/image'
import { members } from '../data'
import Layout from './Layout'

const About = () => {
  return (
    <section id='about' className='wrapper-height'>
      <div className="px-8 pt-16">
        <div className="row">
          <div className="col text-center">
            <h2 className='text-4xl font-bold text-gray-700'>Latest Classes</h2>
            <h6 className='py-1 text-sm'>Sub Heading To Explain More</h6>
            <p className='text-center leading-8 py-2'>
              At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla cras.
              Non eget sem curabitur vehicula diam integer. Magna tortor dignissim imperdiet 
              pulvinar ante sed metus consequat in. Feugiat id ipsum lacinia nec nunc odio 
              pellentesque.
            </p>
          </div>
          <div className="">
           <Layout />
          </div>
          <div className="col flex justify-center">
            <button className='border-custom-green rounded-lg text-sm p-2 font-semibold text-custom-green'>
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
