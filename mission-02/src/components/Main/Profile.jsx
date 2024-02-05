export default function Profile() {
  return (
    <section className="pt-[1.125rem] px-3">
      <h2
        id="profile"
        aria-label="내 프로필"
        className="flex justify-start items-center gap-[9px] mb-[18px]"
      >
        <img
          src="/assets/profile-img.svg"
          alt="내 프로필 사진"
          id="userImg"
          className="size-20 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]"
        />
        <span className="text-label-lg">나는윤주</span>
        <span
          aria-label="내 검색 코드"
          className="text-label-sm text-contents-content-secondary"
        >
          #011128
        </span>
      </h2>

      <a
        href=""
        role="button"
        aria-label="프로필 수정하기"
        className="hover:brightness-95 block w-full px-7 py-3 my-[0.625rem] text-center text-label-md rounded bg-gray-100 text-bluegray-800"
      >
        프로필 수정
      </a>
      <div className="py-3">
        <h2 className="text-xs font-normal bg-information-icon bg-no-repeat bg-[42px_1px]">
          열정온도
        </h2>
        <img src="/assets/temperature.jpeg" alt="나의 열정 온도" />
      </div>
      <div className="py-4 flex justify-between gap-3">
        <div aria-label="내가 받은 좋아요" className="basis-1/2">
          <div className="flex gap-[5px]">
            <div className="bg-empty_heart-icon block bg-no-repeat w-5 h-5 bg-center" />
            <div className="flex items-center gap-[5px]">
              <span className="text-paragraph-sm font-normal">받은 좋아요</span>
              <span className="text-label-sm font-semibold">100%</span>
            </div>
          </div>
          <span className="pl-[25px] block text-paragraph-sm font-normal text-contents-content-secondary">
            11개 중 11명이 만족
          </span>
        </div>
        <div aria-label="내 응답률" className="basis-1/2">
          <div className="flex gap-[5px]">
            <div className="bg-speech-icon block bg-no-repeat w-5 h-5 bg-center" />
            <div className="flex items-center gap-[5px]">
              <span className="text-paragraph-sm font-normal">응답률</span>
              <span className="text-label-sm font-semibold">-%</span>
            </div>
          </div>
          <span className="pl-[25px] block text-paragraph-sm font-normal text-contents-content-secondary">
            표시될 만큼 충분히 채팅하지 않았어요.
          </span>
        </div>
      </div>
    </section>
  );
}
