import React from "react";
import Image from "next/image";
const Pill = ({ label }) => {
  return (
    <span className="inline-block bg-[#F53833] rounded-full px-3 py-1 text-sm font-semibold text-white-500 mr-2 mb-2">
      # <span className="capitalize">{label}</span>
    </span>
  );
};
const VideoCard = () => {
  return (
    <div className="shadow-card rounded-xl !overflow-hidden">
      <div className="p-2">
        <Image
          src="https://img.youtube.com/vi/bawxSnL-QiA/maxresdefault.jpg"
          alt="selenium ninja video icon"
          layout="responsive"
          height={20}
          width={35}
        />
      </div>
      <div className="px-6 py-4">
        <span className="text-xs text-black-500">13 Dec, 2022</span>
        <div className="font-bold text-xl mb-2">Send Keys Not Working</div>
        <p className="text-black-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Pill label={"code"} />
        <Pill label={"software"} />
        <Pill label={"selenium"} />
      </div>
    </div>
  );
};

export default VideoCard;
