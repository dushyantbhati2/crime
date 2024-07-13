import React, { useRef, useState } from "react";
import CommunityPost from "./CommunityPost";
import { FaImage } from "react-icons/fa6";
import { MdOutlineAttachFile, MdEmojiEmotions } from "react-icons/md";
import LeftSection from "./LeftSection";
import { useCreatePostMutation, useGetAllPostsQuery } from "../../01Redux/Service/Post";
import RightSection from "./RightSection";
import { toast } from "react-toastify";

const Community = () => {
  const [description, setDescription] = useState("");
  const desc = useRef(null);
  const [images, setImages] = useState([]);
  const { data: posts, isLoading, isError, refetch } = useGetAllPostsQuery();
  const [post, { isLoading: isPostLoading }] = useCreatePostMutation();

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert(`You can only upload a maximum of ${4} files.`);
    }
  
    else{
      setImages(files);
    }
  };


 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", desc.current.value);
      images.forEach((image) => {
        formData.append("files", image);
      });

      await post(formData).unwrap();
      toast.success("Post sent successfully");
      refetch();  // Refetch the posts to update the list with the new post
    } catch (error) {
      console.error("Error posting:", error);
      toast.error("Failed to post.");
    }
  };

  return (
    <div className="min-h-screen sm:px-8 bg-gray-900 text-white grid sm:grid-cols-10 pt-[50px]">
      <LeftSection />
      <main className="col-span-6 my-3 p-6 overflow-y-auto no-scrollbar h-[calc(100vh-70px)]">
        {isLoading && <div>Loading...</div>}
        <header className="flex mb-6 -ml-3">
          <div className="w-full bg-gray-900 p-3 rounded-lg right-0">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <input
                type="text"
                ref={desc}
                required
                placeholder="What's on your mind?"
                className="flex-grow bg-gray-800 text-white placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button className="bg-[#be123c] rounded-full p-2 focus:outline-none focus:ring-2 cursor-pointer focus:ring-white">
                  <label htmlFor="upload">
                    <FaImage className="h-6 w-6 cursor-pointer" />
                  </label>
                  <input
                    type="file"
                    id="upload"
                    className="hidden"
                    multiple
                    accept="image/*"
                    required
                    onChange={handleImagesChange}
                  />
                </button>
                <button className="bg-[#be123c] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white">
                  <MdOutlineAttachFile className="h-6 w-6" />
                </button>
                <button className="bg-[#be123c] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white">
                  <MdEmojiEmotions className="h-6 w-6" />
                </button>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#be123c] text-white rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
              >
                {isPostLoading ? "Posting" : "Post"}
              </button>
            </div>
          </div>
        </header>
        <section>
          {posts?.map((post, index) => (
            <CommunityPost key={index} post={post} />
          ))}
        </section>
      </main>
      <RightSection />
    </div>
  );
};

export default Community;
