import React from "react";
const Pill = ({ label }) => {
  return (
    <span className="inline-block bg-[#F53833] rounded-full px-3 py-1 text-sm font-semibold text-white-500 mr-2 mb-2">
      # <span className="capitalize">{label}</span>
    </span>
  );
};
const VideoCard2 = () => {
  return (
    <div
      className="shadow-card rounded-xl bg-no-repeat !bg-contain overflow-hidden"
      style={{
        background:
          'url("https://img.youtube.com/vi/bawxSnL-QiA/maxresdefault.jpg")',
      }}
    >
      <div className="backdrop-blur">
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">Send Keys Not Working</div>
          <p className="text-black-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 ">
          <Pill label={"code"} />
          <Pill label={"software"} />
          <Pill label={"selenium"} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard2;
