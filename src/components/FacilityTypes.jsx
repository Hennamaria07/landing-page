import React from 'react';
import { facilityDataMain, facilitySubData } from '../data';
import { useRouter } from 'next/router';

const YogaCategory = ({ type }) => {
  const Dataset = facilityDataMain.filter((item) => item.type === parseInt(type, 10));
  const SubDataset = facilitySubData.filter((item) => item.type === parseInt(type, 10));

  return (
    <>
      {Dataset.map((item, i) => (
        <div key={i} className='grid gap-10 lg:grid-cols-2'>
          <div className="grid-items w-full lg:grid hidden">
            <div className="image-wrapper rounded-lg max-w-full lg:max-h-80vh xl:max-h-80vh">
              <img
                src={item.Image}
                className='mx-auto w-full h-full object-cover'
                alt="yoga image"
              />
            </div>
          </div>
          <div className="grid-items text-center lg:text-justify">
            <h4 className='text-2xl font-semibold'>{item.title}</h4>
            <p className='leading-6 py-3 text-justify text-green-700'>{item.des}</p>
            <div className='grid md:gap-x-10 md:grid-cols-2'>
              {SubDataset.map((subItem, j) => (
                <div className="grid-items mx-auto md:mx-0 pt-5" key={j}>
                  <img
                    src={subItem.icon}
                    className='mx-auto md:mx-0'
                    alt="number icon"
                  />
                  <p className='text-lg text-center md:text-justify pt-2 font-semibold'>{subItem.subTitle}</p>
                  <p className='leading-6 text-justify text-sm py-3 text-green-700'>{subItem.subDes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const YogaPage = () => {
  const router = useRouter();
  const { type } = router.query;

  if (!type) return <p>Loading...</p>;

  return <YogaCategory type={type} />;
};

export default YogaPage;
