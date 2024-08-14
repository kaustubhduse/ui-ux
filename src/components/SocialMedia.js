import React from "react";
import Image from "next/image";

function SocialMedia() {
  return (
    <div className="flex space-x-5 justify-center items-center p-3">
      <Image
        width={20}
        height={20}
        src="/assets/facebook.png"
        alt="Facebook"
        className="h-[20px] mt-[3%] cursor-pointer"
      />
      <Image
        width={20}
        height={20}
        src="/assets/twitter.png"
        alt="Twitter"
        className="h-[20px] mt-[3%] cursor-pointer"
      />
      <Image
        width={20}
        height={20}
        src="/assets/instagram.png"
        alt="Instagram"
        className="h-[20px] mt-[3%] cursor-pointer"
      />
      <Image
        width={20}
        height={20}
        src="/assets/linkedin.png"
        alt="Linkedin"
        className="h-[20px] mt-[3%] cursor-pointer"
      />
    </div>
  );
}

export default SocialMedia;
