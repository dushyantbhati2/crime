import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfoPopup from "../../Components/comments/Popup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useDeletePostMutation } from "../../01Redux/Service/Post";
import { BsThreeDotsVertical } from "react-icons/bs";
import LikeSavedCommentBtns from "../../Components/comments/LikeSavedCommentBtns";
import moment from "moment";

function CommunityPost({ post }) {
  const { userInfo } = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const [popup, setPopup] = useState(false);
  const [files, setFiles] = useState([]);

  const [deletePost] = useDeletePostMutation();

  const isoDateString = post?.upload_time;
  const parsedDate = moment(isoDateString);
  const uploadedDate = parsedDate.format("D MMMM, YYYY");
  const uploadedTime = parsedDate.format("h:mm A");
  useEffect(() => {
    // Update files state when post changes
    setFiles(post?.files || []);
  }, [post]);
  const handleDeletePost = async (id) => {
    try {
      await deletePost(id).unwrap();
      toast.success("Post Deleted successfully");
      setPopup(false);
    } catch (error) {
      console.error("Failed to delete the post: ", error);
      toast.error("Post Deletion failed");
    }
  };

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const confirmPrivacy = () => {
    alert("Privacy accepted");
    hideModal();
  };



  const togglePopup = () => {
    setPopup(!popup);
  };

 

 

  return (
    <>
      <InfoPopup
        isVisible={isVisible}
        hideModal={hideModal}
        confirmPrivacy={confirmPrivacy}
        id={post?.post_id}
      />
      <div className="mb-6">
        <div className="">
          <div className="flex justify-between relative">
            <Link to={`/community/${post?.post_user?.username}`} className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold mb-2">
                {post?.post_user?.username}
              </h2>
            </Link>
           <div className="flex gap-2 items-center">
           <div className=" text-gray-400">
              <div>{`${uploadedDate}`}</div>
            </div>
           {userInfo.user.username === post?.post_user?.username && (
              <BsThreeDotsVertical
                className="text-xl cursor-pointer"
                onClick={togglePopup}
              />
            )}
            {userInfo.user.username === post?.post_user?.username && popup && (
              <div className="absolute z-50 right-4 top-4 py-1 px-3 flex flex-col rounded-md bg-gray-800">
                <button className="flex text-white hover:bg-gray-700 p-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post?.post_id)}
                  className="flex text-rose-600 hover:bg-gray-700 p-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
           </div>
          </div>
          <Link to={`/post/${post?.post_id}`} className="text-gray-300 ml-14">
            <div className="">{post?.description}</div>
          </Link>
        </div>

        {files.length !== 0 && (
          <Link
            to={`/post/${post?.post_id}`}
            className="flex w-full sm:full  lg:w-[80%] xl:w-[70%] h-64 md:h-80 lg:h-96 flex-wrap gap-1 mt-4"
          >
            {files.slice(0, 4).map((file, index) =>
              (() => {
                if (files.length === 3 || files.length === 4) {
                  return (
                    <div
                      key={index}
                      className=" w-[40%] md:w-[45%] xl:w-[35%]  bg-cover bg-center rounded-md cursor-pointer"
                      style={{ backgroundImage: `url(${file.file})` }}
                    ></div>
                  );
                } else if (files.length === 1) {
                  return (
                    <div
                      key={index}
                      className=" w-[70%] sm:w-[75%] lg:w-[70%] xl:w-[50%] h-full  rounded-md cursor-pointer"
                      style={{
                        backgroundImage: `url(${file.file})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  );
                
                } else if (files.length === 2) {
                  return (
                    <div
                      key={index}
                      className="w-[45%] h-full  rounded-md cursor-pointer"
                      style={{
                        backgroundImage: `url(${file.file})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  );
                } else {
                  return null;
                }
              })()
            )}
          </Link>
        )}

       

        <div>
          <LikeSavedCommentBtns showModal={showModal} post={post} />
        </div>
      </div>
    </>
  );
}

export default CommunityPost;
