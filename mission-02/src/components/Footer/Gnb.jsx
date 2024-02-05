import React from "react";

export default function Gnb() {
  return (
    <nav className="bottom-0 min-w-screen max-w-screen w-full h-[69px] pl-2 pr-3 pt-2 pb-5 border-t-[1px] border-gray-200 bg-white">
      <ul className="w-full h-full flex justify-between items-center">
        <li className="is-select h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
          <a
            className="bg-home-icon block relative h-full text-paragraph-sm font-normal bg-no-repeat bg-top"
            href=""
          >
            <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">
              홈
            </span>
          </a>
        </li>
        <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
          <a
            className="bg-board-icon block relative h-full text-paragraph-sm font-normal bg-no-repeat bg-top"
            href=""
          >
            <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">
              게시판
            </span>
          </a>
        </li>
        <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
          <a
            className="bg-near-icon block relative h-full text-paragraph-sm font-normal bg-no-repeat bg-top"
            href=""
          >
            <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">
              내 근처
            </span>
          </a>
        </li>
        <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
          <a
            className="bg-chat-icon block relative h-full text-paragraph-sm font-normal bg-no-repeat bg-top"
            href=""
          >
            <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">
              채팅
            </span>
          </a>
        </li>
        <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
          <a
            className="bg-my_full-icon block relative h-full text-paragraph-sm font-normal bg-no-repeat bg-top"
            href=""
          >
            <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">
              나의 이듬
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
