import React from "react";
import { FaImage } from "react-icons/fa6";
import { MdOutlineAttachFile } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

const Community = () => {
  return (
    <div className="min-h-screen sm:px-16 bg-gray-900 text-white flex ">
      <aside className="w-[220px] h-[650px] my-10 bg-gray-800 rounded-3xl  text-white p-4 relative right-5">
        <div className="text-xl font-bold">Connected</div>
        <nav className="mt-4">
          <ul>
            <li className="my-2">
              <a href="#">
                Home
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Parent Profile
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <div className="font-semibold">Favorites</div>
          <ul>
            <li className="my-2">
              <a href="#" >
                Messages
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Friends
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Activities
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Workshops
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Peer Networks
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Progress Tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <div className="font-semibold">Workshops</div>
          <ul>
            <li className="my-2">
              <a href="#" >
                Parent Community
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Tech Enthusiasts
              </a>
            </li>
            <li className="my-2">
              <a href="#" >
                Seminar Attendees
              </a>
            </li>
            <li className="my-2">
              <a href="#">
                Pet Lovers
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="w-full bg-rose-700 text-white py-2 rounded">
            Support & Signout
          </button>
        </div>
      </aside>
      <main className="flex-1 my-3 p-6">
        <header className=" flex mb-6 -ml-3">
          <div className="w-full  bg-gray-900 p-3 rounded-lg right-0 ">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-grow bg-gray-800 text-white placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button className="bg-[#be123c] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white">
                  <FaImage className="h-6 w-6" />
                </button>
                <button className="bg-[#be123c] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white">
                  <MdOutlineAttachFile className="h-6 w-6" />
                </button>
                <button className="bg-[#be123c] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white">
                  <MdEmojiEmotions className="h-6 w-6" />
                </button>
              </div>
              <button className="bg-[#be123c] text-white rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-white-500">
                Post
              </button>
            </div>
          </div>
        </header>
        <section>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <h2 className="text-lg font-semibold mb-2">Parent's joyful moment</h2>
            </div>
            <p className="text-gray-400 ml-14">
              Parent's gratitude and love for family adventures. Travel memories
              shared.
            </p>
            <div className="flex mt-4">
              <img
                src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Travel"
                className="w-1/2 rounded-lg mr-4"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1682513184135-b7b9b76fb4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"
                alt="Travel"
                className="w-1/2 rounded-lg"
              />
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="bg-gray-900 text-white px-4 py-2 rounded">
                Emp
              </button>
              <button className="bg-blue-900 text-white px-4 py-2 rounded">
                Engage
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Join
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Con
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold mb-2">
                Parenting Community Engagement
              </h2>{" "}
            </div>

            <p className="text-gray-400 ml-14">Parenting Community Discussions</p>
            <div className="flex  justify-between mt-4 space-x-4">
              <img
                src="https://images.unsplash.com/photo-1603201101485-e232d22ad18b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlfGVufDB8fDB8fHww"
                alt="Discussion"
                className="md:w-[270px] object-cover rounded-lg"
              />
              <img
                src="https://media.istockphoto.com/id/1687720497/photo/business-meeting-sales-team-meeting-of-a-startup-company-brainstorming-and-summarizing.webp?b=1&s=170667a&w=0&k=20&c=26bRvTbpq3QOoS8kMA55ixeR1vHWdmuVisbXKdksKB0="
                alt="Discussion"
                className="md:w-[270px] object-cover rounded-lg"
              />
              <img
                src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?b=1&s=170667a&w=0&k=20&c=PlA-PNKbN4j3GWuy0vbtCqD3IkbrE3mJLlQ2mHWRAjo="
                alt="Discussion"
                className="md:w-[270px] object-cover rounded-lg"
              />
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Interact
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Eng
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Share
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <h2 className="text-lg font-semibold mb-2">Parenting Advocate</h2>
            </div>
            <p className="text-gray-400 ml-14">Parenting Story & Experience Sharing</p>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Interact
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Eng
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Share
              </button>
            </div>
          </div>
        </section>
      </main>
      <aside className="w-[250px] h-[500px] bg-gray-800 p-4 my-10 rounded-3xl relative left-5  ">
        <div className="font-semibold">Parental events</div>
        <ul className="mt-4">
          <li className="my-2">
            <a href="#" >
              Parental gathering
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Parental decision-making
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Parental music event
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Parental stand-up
            </a>
          </li>
        </ul>
        <div className="font-semiboldmt-8">
          Parenting Workshops
        </div>
        <ul className="mt-4">
          <li className="my-2">
            <a href="#" >
              Interactive Sessions
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Parent Name
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Community Support
            </a>
          </li>
        </ul>
        <div className="font-semibold mt-8">
          Parenting Resources
        </div>
        <ul className="mt-4">
          <li className="my-2">
            <a href="#" >
              Supportive Community
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Parenting Milestones
            </a>
          </li>
          <li className="my-2">
            <a href="#" >
              Parenting Challenges
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Community;
