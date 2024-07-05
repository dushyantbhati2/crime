import React from 'react'
import { useGetAllPostsQuery } from '../01Redux/Service/dummy'


function Sample() {

    const {data} = useGetAllPostsQuery();
    console.log(data);

    return (
    <div className='my-40'>
      {data?.map ((item) => (
        <h1 key={item.post_user}>{item.description}</h1>
        ))}
    </div>

  )
}

export default Sample