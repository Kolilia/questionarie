import React from "react";
import photoSrc from "../../shared/images/header-img.png";

const Header = () => {
  return (
    <header className="item-center bg-[#F9FAFB]   mb-24 hidden  w-full  px-16  min-desktop:flex min-desktop:w-full min-desktop:px-120">
      <div className="flex flex-1 items-center  justify-center py-20">
        <div className="flex-center">
          by{" "}
          <img
            src={photoSrc}
            width={150}
            height={50}
            alt=""
            className="ml-20"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
