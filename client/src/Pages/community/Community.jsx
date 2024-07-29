import React from 'react';

import RightSection from './RightSection';
import MainSection from './MainSection';
import LeftSection from './LeftSection';

const Community = () => {
  return (
    <div className="min-h-screen sm:px-8 bg-gray-900 w-full text-white flex pt-[30px] md:pt-[50px]">
      <div className="w-[260px] hidden sm:block h-auto lg:h-[630px] overflow-hidden my-10 bg-gray-800 rounded-xl text-lg text-white p-4">
        <LeftSection />
      </div>
      <div className="flex-1 justify-center my-3 py-6 px-4 sm:px-10 overflow-y-auto no-scrollbar h-[calc(100vh-70px)]">
        <MainSection />
      </div>
      <div className="w-full lg:w-[260px] h-auto lg:h-[630px] bg-gray-800 text-lg p-4 my-10 rounded-3xl hidden xl:block">
        <RightSection />
      </div>
    </div>
  );
};

export default Community;
