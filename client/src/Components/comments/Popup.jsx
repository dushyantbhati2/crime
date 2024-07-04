import React from "react";
import { RxCross2 } from "react-icons/rx";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { PiTwitterLogoDuotone } from "react-icons/pi";

const InfoPopup = ({ hideModal, confirmPrivacy, isVisible }) => {
  return (
    <>
      {isVisible && (
        <div
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 w-full h-modal md:h-full overflow-y-auto overflow-x-hidden flex justify-center items-center inset-0 bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
              <div className="mb-4 text-sm font-light text-gray-200 dark:text-gray-200">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Share
                </h3>
                <div className="shareitems flex items-center justify-between">
                <div className="flex justify-center items-center border w-16 h-16 rounded-full">
                    {/* <img src={youtube} alt="YouTube Icon" className="w-9 h-9" /> */}
                    <PiYoutubeLogoDuotone className="w-12 h-12" />
                </div>
                <div className="flex justify-center items-center border w-16 h-16 rounded-full">
                    {/* <img src={instagram} alt="Instagram Icon" className="w-9 h-9" /> */}
                    <PiInstagramLogoDuotone className="w-11 h-11"  />
                </div>
                <div className="flex justify-center items-center border w-16 h-16 rounded-full">
                    {/* <img src={github} alt="GitHub Icon" className="w-9 h-9" /> */}
                    <PiGithubLogoDuotone  className="w-11 h-11"  />
                </div>
                <div className="flex justify-center items-center border w-16 h-16 rounded-full">
                    {/* <img src={twitter} alt="Twitter Icon" className="w-9 h-9" /> */}
                    <PiTwitterLogoDuotone  className="w-11 h-11"  />
                </div>
                </div>
                <div className="text-center text-white font-semibold text-xl my-4">
                    Or
                </div>

                <div>
                    <p className="text-white font-medium text-lg">Copy Link: </p>
                    <div className=" my-4">
                <input
                  type="text"
                  disabled={true}
                  value={"https://x.com/deekshas24/status/1808190467017719851"}
                  placeholder="Post your reply"
                  className="w-full text-muli bg-white/5 outline-none
                   text-white rounded-lg py-2 px-2 text-base mr-2"
                />
                <button className="bg-rose-600 text-white rounded-lg py-2 px-4 hover:bg-rose-800 font-medium mt-2">
                  Copy
                </button>
              </div>
                </div>
              </div>
              <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                  <button
                    onClick={hideModal}
                    type="button"
                    className="w-8 h-8 flex
                    absolute top-2 right-2 justify-center items-center bg-white/10 rounded-full "
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPopup;
