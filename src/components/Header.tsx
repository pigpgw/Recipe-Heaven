import React from 'react'

function Header() {
  return (
    <div id="header" class="flex mx-52 mt-3 items-center">
        <div class="logo">
            <img class="w-40" src="../assets/logo.png" alt="logo">
        </div>
        <div class="search pl-3.5 w-60 h-9">
            <input id="gnb_search" placeholder="검색어를 입력해주세요" class="text-xs items-center bg-neutral-100">
            <button id="submit" aria-label="submit" class=""></button>
        </div>
        
            <ul class="navbar items-center flex ml-8 text-lg font-bold">
                <li><span class="mx-7 cursor-pointer">레시피</span></li>
                <li><span class="mx-7 cursor-pointer">재료별</span></li>
                <li><span class="mx-7 cursor-pointer">상황별</span></li>
                <li><span class="mx-7 cursor-pointer">SPECIAL</span></li>
            </ul>
            <span class="mr-7">|</span>
            <div class="flex items-center">
                <img class="mr-4" src="../assets/ico_user.png" alt="">
                <img class="mr-4" src="../assets/rcp_write.png" alt="">
            </div>
        
    </div>
    <div class="searchbar">
        <div class="my-10">어디로 가시나요?</div>
        <div>
            <div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
