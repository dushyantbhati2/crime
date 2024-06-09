import React from "react";
import sideImage from "../../assets/communitySide.png";
import img1 from "/Users/ro..../Desktop/Crime/crime/client/src/assets/imgforhome1.jpg"
import img2 from "/Users/ro..../Desktop/Crime/crime/client/src/assets/imgforhome2.jpg"
import img3 from "/Users/ro..../Desktop/Crime/crime/client/src/assets/imgforhome3.jpg"
import gif1 from "/Users/ro..../Desktop/Crime/crime/client/src/assets/gif/map3.gif"
import gif2 from "/Users/ro..../Desktop/Crime/crime/client/src/assets/gif/map.gif"

import SingleCard from "./SingleCard";
const Cards = () => {
  return (
    <>
      <div className="flex flex-col space-y-8">
      <SingleCard
        heading=" Join community, Empower Together"
        des="Collaborate with your community to prevent crime and create a safer environment for all."
        link="/community"
        img={sideImage}
        classname=	""
        classnameimg="justify-end"

      />
      <SingleCard
        heading="Track crime in real-time"
        des="Discover our safety features.
"
        link="/community"
        img={gif1}
        classname="lg:flex-row-reverse justify-center"
        classnameimg="justify-start"
      />
      <SingleCard
        heading="Intuitive and user-friendly design"
        des="We offer a variety of safety services, including live crime tracking, community collaboration, and emergency assistance.
"
        link="/community"
        img={gif2}
        classname=	""
        classnameimg="justify-end"

      />
      <SingleCard
        heading="Customized solutions for all"
        des="Whether you're an individual or a community organization, we have safety measures to suit your needs. We tailor our services to ensure maximum protection.
"
        link="/community"
        img={img3}
        classname="lg:flex-row-reverse "
        classnameimg="justify-start"

      />
      </div>
    </>
  );
};

export default Cards;
