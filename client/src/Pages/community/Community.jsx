import React from 'react';
import { FaBell, FaEnvelope, FaUser } from 'react-icons/fa';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 grid sm:grid-cols-10  items-center shadow">
        <div className="text-lg sm:text-2xl font-medium font-heading sm:col-span-2 px-1">Community</div>
        <div className="flex sm:col-span-8 justify-between w-full items-center space-x-4 font-text">
          <input
            type="text"
            placeholder="Search for help"
            className="px-4 py-2 border rounded-full"
          />
          <div className="flex items-center space-x-7">
            <FaEnvelope className="text-xl" />
            <FaBell className="text-xl" />
            <FaUser className="text-xl" />
          </div>
        </div>
      </header>
      <div className="grid sm:grid-cols-10 ">
        <aside className="bg-gray-100  p-4 space-y-6 sm:col-span-2">
          <nav>
            <ul className="space-y-4 font-Poppins px-2">
              <li className="flex items-center space-x-2">
                
                <span className=''>Following</span>
              </li>
             
              <li className="flex text-[15px] items-center space-x-2 ml-6">
                <span>Alerts</span>
              </li>
              <li className="flex text-[15px] items-center space-x-2 ml-6">
                <span>List</span>
              </li>
              <li className="flex text-[15px] items-center space-x-2 ml-6">
                <span>Scheduled</span>
              </li>
              <li className="flex text-[15px] items-center space-x-2 ml-6">
                <span>Community Activities</span>
              </li>
              <li className="flex items-center space-x-2">
                
                <span>Donations</span>
              </li>
              <li className="flex items-center space-x-2 ">
                <span>NGO Support</span>
              </li>
              <li className="flex items-center space-x-2 ">
                <span>Report Incident</span>
              </li>
              <li className="flex items-center space-x-2 ">
                <span>Support NGOs</span>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-4 left-4">
            <span>Help & Support</span>
          </div>
        </aside>
        <main className=" flex-1 p-4 space-y-6 sm:col-span-6">
          <h1 className="text-2xl font-semibold font-heading">Emergency Alerts</h1>
          <section className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-heading font-medium mb-4">New Updates</h2>
            <div className="space-y-4 font-Poppins">
              <div className="flex  border-b py-2 justify-between items-start">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Community Alert</p>
                    <p>on Incident - 3600</p>
                    <p>Stay safe, stay aware</p>
                    <p>Ackno Respon</p>
                  </div>
                </div>
                <span className='font-semibold'>1 hour ago</span>
              </div>
              <div className="flex border-b py-2  justify-between items-start">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">NGO Support Team</p>
                    <p>on Incident - 3600</p>
                    <p>Thank you for your contribution</p>
                    <div className="flex space-x-2">
                      <button className="text-blue-500">Like</button>
                      <button className="text-blue-500">Reply</button>
                    </div>
                  </div>
                </div>
                <span className='font-semibold'>1 hour ago</span>
              </div>
            </div>
          </section>
        </main>
          <section className="bg-gray-100 p-4 rounded shadow sm:col-span-2">
            <h2 className="text-lg sm:text-xl mb-6 font-medium font-heading">Filter Options</h2>
            <div className="space-y-4 font-Poppins">
              <div className="flex justify-between items-center">
                <span>Comments</span>
                <input type="checkbox" checked className="form-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span>Likes</span>
                <input type="checkbox" checked className="form-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span>Reviews</span>
                <input type="checkbox" checked className="form-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span>Mentions</span>
                <input type="checkbox" checked className="form-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span>Donations</span>
                <input type="checkbox" checked className="form-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span>Messages</span>
                <input type="checkbox" checked className="form-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Select all</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">Unselect all</button>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
};

export default Community;
