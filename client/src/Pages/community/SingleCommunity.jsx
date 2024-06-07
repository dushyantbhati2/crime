import React from 'react'
import CommunityProfile from './CommunityProfile'
import CommunitySidbar from './CommunitySidbar'
import CommunityList from './CommunityList'

const SingleCommunity = () => {
  return (
    <div className='flex'>
    <div>
    <CommunitySidbar/>
    </div>
    <div className='w-full'>
    <CommunityProfile/> 
    <CommunityList/>
    </div>

    </div>
  )
}

export default SingleCommunity
