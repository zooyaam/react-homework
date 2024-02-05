import mannerData from "../../data/mannerData.json";

export default function MyHistory() {
  const nonZero = mannerData.manners.filter((manner) => manner.count !== 0);
  return (
    <section className="border-t-[5px] border-gray-200">
      <h2 className="sr-only">나의 활동 목록</h2>
      <ul className="relative">
        <li className="w-full h-12 hover:bg-gray-100 hover:rounded transition-all duration-300 border-b-[1px] border-gray-200">
          <button
            type="button"
            aria-label="활동배지 보기"
            className="h-full w-full flex justify-between items-center"
          >
            <span className="text-paragraph-md ml-3">활동배지 10개</span>
            <span className="bg-right-icon block bg-no-repeat bg-right w-4 h-4 mr-4" />
          </button>
        </li>
        <li className="w-full h-12 hover:bg-gray-100 hover:rounded transition-all duration-300 border-b-[1px] border-gray-200">
          <button
            type="button"
            aria-label="판매상품 보기"
            id="sellingProduct"
            className="h-full w-full flex justify-between items-center"
          >
            <span className="text-paragraph-md ml-3">판매상품 12개</span>
            <span className="bg-right-icon block bg-no-repeat bg-right w-4 h-4 mr-4" />
          </button>
        </li>
        <li className="w-full h-12 hover:bg-gray-100 hover:rounded transition-all duration-300">
          <button
            type="button"
            aria-label="내가 받은 매너 평가 보기"
            className="h-full w-full flex justify-between items-center"
          >
            <span className="text-paragraph-md ml-3">받은 매너 평가</span>
            <span className="bg-right-icon block bg-no-repeat bg-right w-4 h-4 mr-4" />
          </button>
          <div
            aria-label="내가 받은 매너 평가 목록"
            className="py-[14px] px-3 absolute top-full left-0"
          >
            {nonZero.map(({ count, type }) => (
              <div
                key={type}
                className="bg-people_black-icon bg-no-repeat flex gap-[9px] mb-3"
              >
                <span className="text-label-md ml-6">{count}</span>
                <span className="text-paragraph-md bg-blue-100 p-2 rounded-[0_8px_8px_8px]">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </li>
        <li className="absolute w-full top-[315px] h-12 hover:bg-gray-100 hover:rounded transition-all duration-300 border-t-[1px] border-gray-200">
          <button
            type="button"
            aria-label="내가 받은 거래 후기 보기"
            className="h-full w-full flex justify-between items-center"
          >
            <span className="text-paragraph-md ml-3">받은 거래 후기</span>
            <span className="bg-right-icon block bg-no-repeat bg-right w-4 h-4 mr-4" />
          </button>
          <div className="px-[10px] py-[14px]">
            <div className="flex items-start gap-[9px]">
              <img
                src="/assets/profile-img.svg"
                alt="윤이첵오의 프로필 이미지"
                className="w-10 h-10 border rounded-full"
              />
              <div className="flex flex-col justify-center items-start">
                <span aria-label="프로필 이름" className="text-label-sm">
                  윤이첵오
                </span>
                <span
                  aria-label="리뷰어 정보"
                  className="text-paragraph-sm font-normal text-contents-content-secondary"
                >
                  구매자 ∙ 부산광역시 사하구 ∙ 4개월 전
                </span>
                <span className="text-paragraph-md font-normal">
                  오메오메~! 감사합니당
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
