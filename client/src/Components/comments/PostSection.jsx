import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsX,
} from "react-icons/bs";

import {
  useGetAllCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
} from "../../01Redux/Service/Comment";
import LeftSection from "../../Pages/community/LeftSection";
import RightSection from "../../Pages/community/RightSection";
import SingleReply from "./SingleReply";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useGetSinglePostQuery } from "../../01Redux/Service/Post";
import LikeSavedCommentBtns from "./LikeSavedCommentBtns";
import InfoPopup from "./Popup";

const PostSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { id } = useParams();
  console.log("post section", id);
  const { data: post, isLoading } = useGetSinglePostQuery(id);
  const isoDateString = post?.upload_time;
  const parsedDate = moment(isoDateString);
  const uploadedDate = parsedDate.format("D MMMM, YYYY");
  const uploadedTime = parsedDate.format("h:mm A");
  const [popup, setPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [files, setFiles] = useState([]);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const confirmPrivacy = () => {
    alert("Privacy accepted");
    hideModal();
  };
  useEffect(() => {
    // Update files state when post changes
    setFiles(post?.files || []);
  }, [post]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? files.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === files.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };

  const { data: comments = [], refetch } = useGetAllCommentsQuery(id);
  const [createComment] = useCreateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [newReply, setNewReply] = useState("");
  console.log(comments);

  const handleReply = async () => {

    console.log(newReply);
    console.log("post section 2", id);

    try {
      const formData = new FormData();
      formData.append("content", newReply);
      formData.append("postId", id);

      const res = await createComment({ id, content: formData }).unwrap();
      // console.log("formData:", formData);
      setNewReply("")
      console.log(res);
      toast.success("Reply sent successfully");
    } catch (error) {
      console.error("Error posting:", error);
      toast.error("Failed to post.");
    }
  };

  const handleDelete = async (commentId) => {
    await deleteComment(commentId);
    refetch();
  };

  return (<>
    <InfoPopup
    isVisible={isVisible}
    hideModal={hideModal}
    confirmPrivacy={confirmPrivacy}
    id={post?.post_id}
  />
   <div className="min-h-screen sm:px-8 bg-gray-900 w-full text-white flex pt-[30px] md:pt-[50px]">
      <div className="w-[260px] hidden sm:block h-auto lg:h-[630px] overflow-hidden my-10 bg-gray-800 rounded-xl text-lg text-white p-4">
        <LeftSection />
      </div>
      <div className="flex-1 justify-center my-3 py-6 px-4 sm:px-10 overflow-y-auto no-scrollbar h-[calc(100vh-70px)]">
      
        <div className="w-full max-w-2xl bg-gray-900 text-white rounded-lg p-6">
          <div className="mb-4">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-2 object-cover"
              />
              <div>
                <div className="font-bold text-gray-100 font-muli">
                  {post?.post_user?.username}
                </div>
              </div>
            </div>
            <div className="mt-2 text-lg">{post?.description}</div>
            {/* <div className="text-blue-400 mt-2">#buildinginpublic</div> */}
            <div className="flex mt-2 text-gray-400">
              <div>{`${uploadedTime} · ${uploadedDate} · 57.`}2K Views</div>
            </div>
            {files.length !== 0 && (
              <div className="flex w-full sm:full  lg:w-[80%] xl:w-[70%] h-64 md:h-80 lg:h-96 flex-wrap gap-1 mt-4">
              {files.slice(0, 4).map((file, index) =>
              (() => {
                if (files.length === 3 || files.length === 4) {
                  return (
                    <div
                      key={index}
                      className=" w-[40%] md:w-[45%]   bg-cover bg-center rounded-md cursor-pointer"
                      style={{ backgroundImage: `url(${file.file})` }}
                      onClick={() => handleImageClick(index)}
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
                      onClick={() => handleImageClick(index)}
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
                      onClick={() => handleImageClick(index)}
                    ></div>
                  );
                } else {
                  return null;
                }
              })()
            )}
              </div>
            )}

            {carouselVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative w-full max-w-3xl">
                  <div
                    style={{
                      backgroundImage: `url(${files[currentIndex]?.file})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-[500px] rounded-md object-contain duration-500"
                  ></div>
                  <div
                    className="absolute top-1 right-1 hover:bg-black/60 text-white bg-black/30 rounded-full cursor-pointer"
                    onClick={handleCloseCarousel}
                  >
                    <BsX size={30} />
                  </div>
                  <div className="absolute top-[50%] hover:bg-black/60 text-white bg-black/30 rounded-full left-5 text-2xl  p-2  cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  <div className="absolute top-[50%] hover:bg-black/60 text-white bg-black/30 rounded-full right-5 text-2xl  p-2  cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
                </div>
              </div>
            )}

            <div className="">
              <LikeSavedCommentBtns post={post} showModal={showModal}/>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Post your reply"
                className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 mr-2"
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <button
                className="bg-rose-600 text-white rounded-lg py-2 px-4 hover:bg-rose-800"
                onClick={() => handleReply()}
              >
                Reply
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {comments?.map((reply) => (
                <SingleReply
                key={reply?.id}
                  reply={reply}
                  onDelete={() => handleDelete(reply.id)}
                />
              ))}
            </div>
          </div>
        </div>
      
      </div>
      <div className="w-full lg:w-[250px] h-auto lg:h-[530px] bg-gray-800 p-4 my-10 rounded-3xl hidden xl:block">
        <RightSection />
      </div>
    </div>
  </>);
};

export default PostSection;
