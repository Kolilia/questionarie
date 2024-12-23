import React from "react";
import vkSrc from "../../shared/images/vk-icon.svg";
import youtubeSrc from "../../shared/images/youtube-icon.svg";
import tgSrc from "../../shared/images/telegram-icon.svg";
import instSrc from "../../shared/images/instagram-icon.svg";
import yaSrc from "../../shared/images/ya.svg";

const Footer = () => {
  return (
    <footer className="bottom-0 mt-20 flex w-full  items-center justify-around bg-[#F9FAFB] px-16 py-0 text-md min-desktop:px-120 min-desktop:py-40">
      <div>
        <b className="text-h6 font-bold ">Наши соцсети:</b>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.open("https://vk.com/vyrasteshpoymesh", "_blank");
        }}
      >
        <img src={vkSrc} width={64} height={64} alt="" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.open(
            "https://youtube.com/@vyrastesh_poymesh?si=uSrcGry6QMhltT0j",
            "_blank"
          );
        }}
      >
        <img src={youtubeSrc} width={64} height={64} alt="" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.open("https://t.me/vyrastesh_poymesh", "_blank");
        }}
      >
        <img src={tgSrc} width={64} height={64} alt="" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.open(
            "https://www.instagram.com/vyrastesh_poymesh?igsh=cDVhcWJ0YzBrazgw",
            "_blank"
          );
        }}
      >
        <img src={instSrc} width={64} height={64} alt="" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.open("https://dzen.ru/id/6731ddbc192f5b7c94d45283", "_blank");
        }}
      >
        <img src={yaSrc} width={64} height={64} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
