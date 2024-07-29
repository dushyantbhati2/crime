import React from 'react'
import CommunityPost from '../CommunityPost'
import { useGetAllPostsQuery } from '../../../01Redux/Service/Post'
import { useGetUserDetailsQuery } from '../../../01Redux/Service/profile'
import { useParams } from 'react-router-dom'

const ProfileDetailSection = () => {
  const { username } = useParams()
  console.log(username)
  const { data: profile } = useGetUserDetailsQuery(username)
  console.log(profile)

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col py-4 lg:py-0 lg:flex-row w-full justify-between space-y-4 lg:space-y-0 lg:space-x-4 border-b lg:pb-2 border-gray-500/30 pb-4">
        <div className="flex space-x-2 md:space-x-4">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-16 h-16 border-[3px]  sm:border-[4px]  border-rose-600 lg:w-24 lg:h-24 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex flex-col mt-1">
              <h1 className="text-start sm:text-xl font-semibold">
                Lakshay Kumawat
              </h1>
              <h2 className="text-xs sm:text-sm text-gray-200 font-medium">
                {profile?.user?.username}
              </h2>
            </div>
            <div className="followers flex gap-3 sm:gap-4 text-sm sm:text-base mt-2 sm:mt-0">
              <div>{profile?.posts?.length} Posts</div>
              <div>26 Followers</div>
              <div>30 Following</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:justify-around lg:flex-col ">
          <div className="font-semibold text-sm sm:text-base mb-2 sm:mb-0 text-center bg-white/10 px-8 py-2 rounded-full">
            Edit
          </div>
          <div className="font-semibold text-sm sm:text-base mb-2 sm:mb-0 bg-rose-600 px-6 py-2 rounded-full">
            Follow
          </div>
        </div>
      </div>
      <section className="py-4 overflow-y-auto no-scrollbar h-[calc(100vh-200px)]">
        {profile?.posts?.map((post, index) => (
          <CommunityPost key={index} post={post} />
        ))}
        {profile?.posts?.length == null && (
          <h1 className="text-3xl text-gray-200 text-center m-auto">
            No posts available
          </h1>
        )}
      </section>
    </div>
  )
}

export default ProfileDetailSection
