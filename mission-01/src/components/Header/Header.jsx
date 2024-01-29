import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header class="bg-white min-w-screen max-w-screen w-full h-10">
      <div class="flex justify-between items-center">
        <a
          href=""
          role="button"
          aria-label="돌아가기"
          class="bg-direction-icon block w-10 h-10 bg-no-repeat bg-center shrink-0 rotate-90 is-hover"
        ></a>
        <h1 class="text-label-md">나의 프로필</h1>
        <button
          type="button"
          aria-label="공유하기"
          class="bg-share-icon w-10 h-10 bg-no-repeat bg-center is-hover"
        ></button>
      </div>
    </header>
  );
}
