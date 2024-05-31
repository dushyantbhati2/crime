import React from "react";
import { Link, NavLink } from "react-router-dom";


const CommunityCard = () => {
  return (
    <div className="font-heading w-full
     min-h-80 sm:w-96 glass border border-zinc-300 rounded sm:rounded-md sm:my-2  shadow-md  shadow-zinc-400">
      <Link to="/community/1" className="w-full flex justify-center object-fill">
        <img
          className="w-full rounded sm:rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRUTUKAsxYJxwUzr9bfEu0Rx84jQUrK4mIg&s"
          alt="car!"
        />
      </Link>
      <div className="card-body p-4 ">
        <h2 className="card-title text-lg font-medium ">Crime-Free Together</h2>
        <p className="text-gray-900">
          Connect, share, and collaborate with neighbors to prevent crime and
          enhance safety...
        </p>
        <div className="card-actions justify-end">
          <div className="flex  justify-end pt-4">
            <button className="bg-zinc-800 text-white  px-7 py-3  rounded-lg hover:scale-105 transition-transform duration-150">
              Follow
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
