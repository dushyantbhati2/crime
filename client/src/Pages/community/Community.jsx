import React from "react";
import CommunityHero from "./CommunityHero";
import CommunityCard from "./CommunityCard";
import SidebarFilter from "./CommunitySidbar";

const Community = () => {
  return (
    <div className="flex">
      <SidebarFilter />
      <div>
        <CommunityHero />
       

        <div className="header py-8">
          <h1 className="text-center py-4 font-semibold text-2xl underline">
            Explore Communities
          </h1>
          <div className="flex flex-wrap p-4 gap-6 justify-center sm:justify-start sm:px-16  ">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
