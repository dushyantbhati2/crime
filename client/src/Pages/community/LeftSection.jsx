import React from 'react'

const LeftSection = () => {
  return (
    <aside className="w-[220px] sm:col-span-2 h-[630px]  my-10 bg-gray-800 rounded-3xl  text-white p-4 relative  left-0 top-0 ">
        <div className="text-xl font-bold">Connected</div>
        <nav className="mt-4  border-b border-gray-500/50">
          <ul>
            <li className="my-2">
              <a href="#">Home</a>
            </li>
            <li className="my-2">
              <a href="#">Parent Profile</a>
            </li>
          </ul>
        </nav>
        <div className="my-4 border-b border-gray-500/50">
          <div className="font-semibold">Favorites</div>
          <ul>
            <li className="my-2">
              <a href="#">Messages</a>
            </li>
            <li className="my-2">
              <a href="#">Friends</a>
            </li>
            <li className="my-2">
              <a href="#">Activities</a>
            </li>
            <li className="my-2">
              <a href="#">Workshops</a>
            </li>
            <li className="my-2">
              <a href="#">Peer Networks</a>
            </li>
            <li className="my-2">
              <a href="#">Progress Tracking</a>
            </li>
          </ul>
        </div>
        <div className="my-4 border-b border-gray-500/50">
          <div className="font-semibold">Workshops</div>
          <ul>
            <li className="my-2">
              <a href="#">Parent Community</a>
            </li>
            <li className="my-2">
              <a href="#">Tech Enthusiasts</a>
            </li>
            <li className="my-2">
              <a href="#">Seminar Attendees</a>
            </li>
            <li className="my-2">
              <a href="#">Pet Lovers</a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <button className="w-full bg-rose-700 text-white py-2 rounded">
            Signout
          </button>
        </div>
      </aside>
  )
}

export default LeftSection
