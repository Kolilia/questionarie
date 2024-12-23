import React from "react";

const Block = ({ isLeftPicture, imageUrl, title, text, id }) => {
  return isLeftPicture ? (
    <div className="flex flex-1 mb-14" id={id}>
      <div className="flex items-center justify-center h-[400px] flex-1">
        <img src={imageUrl} alt="" className="max-h-full" />
      </div>

      <div className="flex  flex-col flex-1">
        <h2 className="text-[1.6rem]  font-bold leading-tight">{title}</h2>

        <div dangerouslySetInnerHTML={{ __html: text || "" }} />
      </div>
    </div>
  ) : (
    <div className="flex  flex-1 mb-14" id={id}>
      <div className="flex flex-1 flex-col ">
        <h2 className="text-[1.6rem]  font-bold leading-tight">{title}</h2>

        <div dangerouslySetInnerHTML={{ __html: text || "" }} />
      </div>

      <div className="flex flex-1 items-center justify-center h-[400px] ">
        <img src={imageUrl} alt="" className="max-h-full" />
      </div>
    </div>
  );
};

export default Block;
