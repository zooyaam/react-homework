import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <a
        href=""
        role="button"
        aria-label="돌아가기"
        className="bg-direction-icon block w-10 h-10 bg-no-repeat bg-center shrink-0 rotate-90 hover:bg-gray-100 hover:rounded transition-all duration-300"
      ></a>
      <h1 className="text-label-md">나의 프로필</h1>
      <button
        type="button"
        aria-label="공유하기"
        className="bg-share-icon w-10 h-10 bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"
      ></button>
    </div>
  );
}
