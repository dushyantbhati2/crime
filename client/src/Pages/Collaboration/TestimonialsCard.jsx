import React from 'react';
import img3 from '../../assets/smiling-businessman-face-portrait-wearing-suit 1.png';

const TestimonialsCard = () => {
  return (
    <div className="flex justify-center bg-gray-100 rounded-2xl p-4  h-[300px] w-[300px] shadow-lg z-0 relative mt-16">
      <div className="flex justify-center -top-16  absolute">
        <img src={img3} className="rounded-full w-36 h-36 " />
      </div>
      <p className=" flex text-sm text-center relative text-black font-faint top-20">
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim
        Veniam, Quis"
      </p>
    </div>
  );
};

export default TestimonialsCard;
