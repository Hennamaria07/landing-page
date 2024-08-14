import { testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <div className="px-8 pt-16">
        <div className="flex justify-center">
          <div className="text-center">
            <h2 className='text-4xl font-bold text-gray-700'>Testimonials</h2>
          </div>
        </div>
      </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </section>
      )
}

      export default Testimonial