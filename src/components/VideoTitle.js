import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute pt-[18%] px-24 w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="font-bold bg-white text-black text-xl p-2 px-8 rounded-md hover:bg-opacity-80">
          <PlayArrowIcon fontSize="medium" />
          <span className="ml-2">Play</span>
        </button>
        <button className="font-bold mx-2 bg-gray-500 text-white text-xl p-2 px-8 bg-opacity-30 hover:bg-opacity-40 rounded-md">
          <InfoOutlinedIcon fontSize="medium" />
          <span className="ml-2">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
