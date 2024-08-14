'use client'
import { useState } from 'react';
import { Beginners, Flow, Fly, Stretching, Yin } from './FacilityTypes';

const Facility = () => {
    const [display, setDisplay] = useState(0);

    const renderPage = () => {
        switch(display) {
            case 0: 
                return <Beginners />;
            case 1:
                return <Stretching />;
            case 2:
                return <Fly />;
            case 3:
                return <Yin />;
            case 4:
                return <Flow />;
            default:
                return null;
        }
    }

    return (
        <section id='facility' className='wrapper-height'>
            <div className="px-8 pt-16">
                <div className="text-center">
                    <h2 className='text-4xl font-bold text-gray-700'>Latest Classes</h2>
                    <h6 className='py-1 text-sm'>Sub Heading To Explain More</h6>
                </div>
                <div className="flex gap-2 flex-wrap justify-center py-2">
                    <button 
                        className={`border-2 font-semibold py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 ${display === 0 ? 'border-green-700 text-green-700' : 'border-transparent hover:border-green-700 hover:text-green-500 hover:font-semibold hover:border-green-500'}`} 
                        onClick={() => setDisplay(0)}
                    >
                        Beginners Yoga
                    </button>
                    <button 
                        className={`border-2 font-semibold py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 ${display === 1 ? 'border-green-700 text-green-700' : 'border-transparent hover:border-green-700 hover:text-green-500 hover:font-semibold hover:border-green-500'}`} 
                        onClick={() => setDisplay(1)}
                    >
                        Stretching
                    </button>
                    <button 
                        className={`border-2 font-semibold py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 ${display === 2 ? 'border-green-700 text-green-700' : 'border-transparent hover:border-green-700 hover:text-green-500 hover:font-semibold hover:border-green-500'}`} 
                        onClick={() => setDisplay(2)}
                    >
                        Fly-Yoga
                    </button>
                    <button 
                        className={`border-2 font-semibold py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 ${display === 3 ? 'border-green-700 text-green-700' : 'border-transparent hover:border-green-700 hover:text-green-500 hover:font-semibold hover:border-green-500'}`} 
                        onClick={() => setDisplay(3)}
                    >
                        Yin Yoga
                    </button>
                    <button 
                        className={`border-2 font-semibold py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 ${display === 4 ? 'border-green-700 text-green-700' : 'border-transparent hover:border-green-700 hover:text-green-500 hover:font-semibold hover:border-green-500'}`} 
                        onClick={() => setDisplay(4)}
                    >
                        Flow Yoga
                    </button>
                </div>
                <div className="pt-5">
                    {renderPage()}
                </div>
            </div>
        </section>
    )
}

export default Facility;
