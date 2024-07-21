import React from "react";

const RightSection = () => {
  return (
    <aside>
      <div className="flex items-center justify-between">
        <div className="font-semibold text-gray-200 ">Suggested for you</div>
        <div className="text-sm font-medium text-gray-100">See all</div>
      </div>
      <ul className="mt-4 pb-2 flex flex-col gap-4 border-b border-gray-500/50">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h2 className=" font-medium text-base leading-5 mb-2">
              {"Crime Prevention"}
            </h2>
          </div>
          <div className=" font-semibold text-sm mb-2 bg-rose-600 px-4 py-2 rounded-full">Follow</div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h2 className=" font-medium text-base leading-5 mb-2">
              {"Crime Prevention"}
            </h2>
          </div>
          <div className=" font-semibold text-sm mb-2 bg-rose-600 px-4 py-2 rounded-full">Follow</div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h2 className=" font-medium text-base leading-5 mb-2">
              {"Crime Prevention"}
            </h2>
          </div>
          <div className=" font-semibold text-sm mb-2 bg-rose-600 px-4 py-2 rounded-full">Follow</div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h2 className=" font-medium text-base leading-5 mb-2">
              {"Crime Prevention"}
            </h2>
          </div>
          <div className=" font-semibold text-sm mb-2 bg-rose-600 px-4 py-2 rounded-full">Follow</div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h2 className=" font-medium text-base leading-5 mb-2">
              {"Crime Prevention"}
            </h2>
          </div>
          <div className=" font-semibold text-sm mb-2 bg-rose-600 px-4 py-2 rounded-full">Follow</div>
        </div>
      
      </ul>

      <div className="font-semibold mt-4">Parenting Resources</div>
      <ul className="my-4 border-b border-gray-500/50">
        <li className="my-2">
          <a href="#">Supportive Community</a>
        </li>
        <li className="my-2">
          <a href="#">Parenting Milestones</a>
        </li>
        <li className="my-2">
          <a href="#">Parenting Challenges</a>
        </li>
      </ul>
    </aside>
  );
};

export default RightSection;
