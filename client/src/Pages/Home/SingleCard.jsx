import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCard.css';

export const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};
document.body.addEventListener('pointermove', syncPointer);

const SingleCard = ({ heading, des, link, img, classname, classnameimg }) => {
  return (
    <>
      <div
        className={`flex py-16 lg:py-0 flex-col lg:flex-row  ${classname} justify-center w-full text-white gap-8  items-center  h-auto min-h-[500px] p-4 lg:p-0`}
      >
        <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-heading">
            {heading}{' '}
          </h1>
          <p className="text-base lg:text-lg text-gray-100 font-text">{des} </p>
          <div className="flex justify-center lg:justify-start">
            <Link to={link}>
              <a href="#" className="button">
                <span>Explore</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={` w-full sm:w-1/2 ${classnameimg}   flex  `}>
          <img className="w-[350px] h-72 object-cover" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default SingleCard;
