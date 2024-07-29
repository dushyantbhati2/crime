import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';
import { PiGithubLogoDuotone } from 'react-icons/pi';
import { PiTwitterLogoDuotone } from 'react-icons/pi';
const CustomShareComponent = ({ postId, postContent }) => {
  const postUrl = `http://localhost:8000/api/allposts/${postId}`;
  const encodedPostContent = encodeURIComponent(postContent);
  const encodedPostUrl = encodeURIComponent(postUrl);

  const shareOptions = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedPostUrl}`,
      icon: <PiYoutubeLogoDuotone className="w-12 h-12" />,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedPostUrl}&text=${encodedPostContent}`,
      icon: 'https://www.example.com/twitter-icon.png',
    },
    {
      name: 'Email',
      url: `mailto:?subject=Check out this post&body=${encodedPostContent} - ${encodedPostUrl}`,
      icon: 'https://www.example.com/email-icon.png',
    },
  ];

  return (
    <div>
      <p>{postContent}</p>
      <div className="share-buttons">
        {shareOptions.map((option) => (
          <a
            key={option.name}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={option.icon}
              alt={option.name}
              style={{ width: '32px', marginRight: '8px' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CustomShareComponent;
