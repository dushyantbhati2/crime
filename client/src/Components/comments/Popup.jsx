import React from "react";
import { RxCross2 } from "react-icons/rx";
import { PiFacebookLogoDuotone, PiWhatsappLogoDuotone, PiLinkedinLogoDuotone, PiTwitterLogoDuotone } from "react-icons/pi";
// import PostComponent from '../SharePost/Postshare.jsx';

const InfoPopup = ({ hideModal, isVisible, id }) => {
  const postUrl = `http://localhost:8000/api/allposts/${id}`;
  const postTitle = 'Check out this post!';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`);
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle)}%20${encodeURIComponent(postUrl)}`);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postUrl).then(() => {
      alert('Link copied to clipboard');
    }).catch((error) => {
      console.error('Error copying text: ', error);
    });
  };

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
                {/* <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  <PostComponent postId={id} postContent="Post sharing" />
                </h3> */}
                <div className="shareitems flex items-center justify-between">
                  <div className="flex justify-center items-center cursor-pointer border w-16 h-16 rounded-full" onClick={shareOnFacebook}>
                  <PiFacebookLogoDuotone className="w-11 h-11" />
                  </div>
                  <div className="flex justify-center items-center cursor-pointer border w-16 h-16 rounded-full" onClick={shareOnLinkedIn}>
                  <PiLinkedinLogoDuotone className="w-11 h-11" />
                  </div>
                  <div className="flex justify-center items-center cursor-pointer border w-16 h-16 rounded-full" onClick={shareOnWhatsApp}>
                  <PiWhatsappLogoDuotone className="w-11 h-11" />
                  </div>
                  <div className="flex justify-center items-center cursor-pointer border w-16 h-16 rounded-full" onClick={shareOnTwitter}>
                    <PiTwitterLogoDuotone className="w-11 h-11" />
                  </div>
                </div>
                <div className="text-center text-white font-semibold text-xl my-4">
                  Or
                </div>
                <div>
                  <p className="text-white font-medium text-lg">Copy Link: </p>
                  <div className="my-4">
                    <input
                      type="text"
                      disabled={true}
                      value={postUrl}
                      placeholder="Post your reply"
                      className="w-full text-muli bg-white/5 outline-none text-white rounded-lg py-2 px-2 text-base mr-2"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="bg-rose-600 text-white rounded-lg py-2 px-4 hover:bg-rose-800 font-medium mt-2"
                    >
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
                    className="w-8 h-8 flex absolute top-2 right-2 justify-center items-center bg-white/10 rounded-full"
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
