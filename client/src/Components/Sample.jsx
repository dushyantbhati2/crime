import React from "react";
// import { useGetAllPostsQuery } from '../01Redux/Service/dummy'
import { useGetAllCommentsQuery } from "../01Redux/Service/Comment";

function Sample() {
  let id = "382efe64-c9ea-4d2b-92a2-3123269f285e";
  const { data } = useGetAllCommentsQuery(id);
  console.log(data);

  return (
    <div className="my-40">
      {/* {data?.map ((item) => (
        <h1 key={item.post_user}>{item.description}</h1>
        ))} */}
    </div>
  );
}

export default Sample;
