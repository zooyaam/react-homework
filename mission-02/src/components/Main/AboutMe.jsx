export default function AboutMe() {
  return (
    <section id="aboutMe" className="border-t-[5px] border-gray-200">
      <h2 className="sr-only">자기소개</h2>
      <div className="py-2 px-3">
        <span
          aria-label="기수"
          className="text-[#396CEF] leading-none text-label-sm px-1 py-[2px] rounded border-[1px] border-[#396CEF]"
        >
          프론트엔드 스쿨 8기
        </span>
        <span className="block mt-3 text-label-md">
          당근마켓 ∙ 프론트엔드 개발자
        </span>
      </div>
      <div className="mt-[10px] mb-4 mx-3 bg-bluegray-100 rounded-lg">
        <span className="block p-[10px] text-paragraph-sm font-normal">
          작성한 자기소개가 없습니다.
        </span>
      </div>
    </section>
  );
}
