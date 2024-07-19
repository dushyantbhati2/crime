import React from 'react';
import { FaHome, FaMap, FaUsers, FaUserFriends, FaRegBookmark, FaChartLine } from 'react-icons/fa';
import { LuActivitySquare } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";

import { MdOutlineExplore, MdOutlineTrackChanges  } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../01Redux/features/authFeature';
import { postApi } from '../../01Redux/Service/Post';
import { Link, useNavigate } from 'react-router-dom';

const LeftSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const onLogout = () => {

    if (userInfo) {
      dispatch(logout());
      dispatch(postApi.util.resetApiState());
    } else navigate("/login");
  };
  return (
    <aside className='text-gray-100'>
      {/* <div className="text-xl font-bold">Community</div> */}
      <nav className="border-b sm:hidden border-gray-500/50">
        <ul>
          <li className="my-3 flex items-center ">
            <a href="#"><FaHome className="inline-block mr-2 h-6 w-6" />Home</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><FaMap className="inline-block mr-2 h-6 w-6" />Map</a>
          </li>
          <li className="my-3 flex items-center ">
            <Link to={'/community'} href="#"><FaUsers className="inline-block mr-2 h-6 w-6" />Community</Link>
          </li>
        </ul>
      </nav>
      <div className="my-4 border-b border-gray-500/50">
        <ul>
          <li className="my-3 flex items-center ">
            <a href="#"><FaUserFriends className="inline-block mr-2 h-6 w-6" />Community</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><FaRegBell className="inline-block mr-2 h-6 w-6" />Notifications</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><LuActivitySquare className="inline-block mr-2 h-6 w-6" />Your activity</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><FaRegBookmark className="inline-block mr-2 h-6 w-6" />Bookmarks</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><MdOutlineExplore className="inline-block mr-2 h-6 w-6" />Discover Networks</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><MdOutlineTrackChanges className="inline-block mr-2 h-6 w-6" />Progress Tracking</a>
          </li>
        </ul>
      </div>
      <div className="my-4 border-b border-gray-500/50">
        <div className="font-semibold">Workshops</div>
        <ul>
          <li className="my-3 flex items-center ">
            <a href="#"><IoMdPeople className="inline-block mr-2 h-6 w-6" />Parent Community</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><IoMdPeople className="inline-block mr-2 h-6 w-6" />Tech Enthusiasts</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><IoMdPeople className="inline-block mr-2 h-6 w-6" />Seminar Attendees</a>
          </li>
          <li className="my-3 flex items-center ">
            <a href="#"><IoMdPeople className="inline-block mr-2 h-6 w-6" />Pet Lovers</a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <button onClick={onLogout} className="w-full bg-rose-700 text-white py-2 rounded">
          Signout
        </button>
      </div>
    </aside>
  );
};

export default LeftSection;
