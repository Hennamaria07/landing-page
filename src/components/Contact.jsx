import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='min-h-96'>
      <div className="pt-16">
        <div className="py-24 px-6 max-h-full max-w-full bg-[url('https://res.cloudinary.com/freestyle07/image/upload/v1723629694/contact_zi7l02.webp')] bg-cover bg-center">
          <div className="ms-auto rounded-lg p-12 bg-white w-full md:w-[80%]">
            <h5 className='text-gray-700 font-bold text-justify text-4xl'>Free 30-Day Membership</h5>
            <p className='py-5 text-green-700'>
              At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla cras. 
              Non eget sem curabitur vehicula diam integer. Magna tortor dignissim imperdiet 
              pulvinar ante sed metus consequat in. Feugiat id ipsum lacinia nec nunc odio pellentesque.
            </p>
            <div className="flex gap-2">
              <button type="button" className="focus:outline-none font-semibold text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-md text-sm p-3 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Book A Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
