import React from 'react';

function Header() {
  return (
    <div id="header" className="flex mx-52 mt-3 items-center">
      <div className="logo">
        <a href="http://127.0.0.1:5173/"><img className="w-40" src="../assets/common/logo.png" alt="logo" /></a>
      </div>
      <div className="mx-4 my-4 w-60 h-10 p-1.5 rounded-full border border-solid space-between">      
        <input type="text" placeholder="검색어를 입력해주세요" className="items-center border-none outline-none ml-4 text-xs" />
        <button id="submit" aria-label="submit" className=""><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" className="w-4 top-2 right-3 m-0 ml-10" /></button>
      </div>

      <ul className="navbar items-center flex ml-8 text-lg font-bold">
        <li>
          <a href=""><span className="mx-7 cursor-pointer">레시피</span></a>
        </li>
        <li>
           <a href=""><span className="mx-7 cursor-pointer">재료별</span></a>
        </li>
        <li>
           <a href=""><span className="mx-7 cursor-pointer">상황별</span></a>
        </li>
        <li>
           <a href=""><span className="mx-7 cursor-pointer">SPECIAL</span></a>
        </li>
      </ul>
      <span className="mr-7">|</span>
      <div className="flex items-center">
        <a href=""><img className="mr-4" src="../assets/ico_user.png" alt="" /></a>
        <a href=""><img className="mr-4" src="../assets/rcp_write.png" alt="" /></a>
      </div>
      <div className="search flex flex-col items-center">
        <div className="mt-14 mb-7 font-black text-5xl">FIND A RECIPE</div>
        <div className="mx-4 my-4 w-2/5 h-10 p-1.5 rounded-full border border-solid space-between">      
          <input type="text w-64" placeholder="검색어를 입력해주세요" className="items-center border-none outline-none ml-6 mr-52" />
          <button id="submit" aria-label="submit" className=""><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" className="w-4 top-2 right-3 m-0 ml-10" /></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
