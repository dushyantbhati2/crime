import React from 'react'

const RightSection = () => {
  return (
    <aside className="w-[250px] sm:col-span-2 h-[530px] bg-gray-800 p-4 my-10 rounded-3xl relative left-5  ">
        <div className="font-semibold">Parental events</div>
        <ul className="mt-4 pb-2 border-b border-gray-500/50">
          <li className="my-2">
            <a href="#">Parental gathering</a>
          </li>
          <li className="my-2">
            <a href="#">Parental decision-making</a>
          </li>
          <li className="my-2">
            <a href="#">Parental music event</a>
          </li>
          <li className="my-2">
            <a href="#">Parental stand-up</a>
          </li>
        </ul>
        <div className="font-semibold mt-4">Parenting Workshops</div>
        <ul className="my-6 pb-2 border-b border-gray-500/50">
          <li className="my-2">
            <a href="#">Interactive Sessions</a>
          </li>
          <li className="my-2">
            <a href="#">Parent Name</a>
          </li>
          <li className="my-2">
            <a href="#">Community Support</a>
          </li>
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
  )
}

export default RightSection
