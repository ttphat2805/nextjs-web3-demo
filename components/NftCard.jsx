/* eslint-disable @next/next/no-img-element */
import React from "react";

const NftCard = ({ data }) => {
  console.log("data: ", data);
  return (
    <div className="card col-span-1 backdrop-blur-sm bg-white/30 shadow-lg p-4 rounded-xl backdrop-opacity-50">
      <p className="text-xl">
        Name: <b>{data?.meta.name}</b>
      </p>

      <img
        src={data?.meta?.content[0]?.url}
        alt="image"
        className="w-full h-auto rounded-xl mt-4"
      />
    </div>
  );
};

export default NftCard;
