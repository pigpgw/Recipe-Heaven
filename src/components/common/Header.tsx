import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import useUserStore from './userStore';

function Header() {
  const { token } = useUserStore();
  const navigate = useNavigate();

  const mypageIconClick = () => {
    if (token) {
      // 토큰이 존재하면 로그인된 상태로 간주
      navigate('/mypage'); //주소변경 필요
    } else {
      // 토큰이 존재하지 않으면 로그인 페이지로 이동
      navigate('/Login');
    }
  };

  const writingIconClick = () => {
    if (token) {
      // 토큰이 존재하면 로그인된 상태로 간주
      navigate('/'); //글 쓰기 페이지 주소변경 필요
    } else {
      // 토큰이 존재하지 않으면 로그인 페이지로 이동
      navigate('/Login');
    }
  };

  return (
    
    <div id="header" className="flex mt-3 items-center w-full justify-center">
      <link rel="stylesheet" href="src\components\common\navbar.css"></link>
      <div className="logo">
        <Link to="/">
          <img className="w-40" src="./src/assets/common/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="mx-4 my-4 w-60 h-10 p-1.5 rounded-full border border-solid space-between">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="items-center border-none outline-none ml-4 text-xs"
          size={25}
        />
        <button id="submit" aria-label="submit" className="">
          <Link to="/search">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
            className="w-4 top-2 right-3 m-0 ml-5 justify-end"
          /></Link>
        </button>
      </div>

      <ul className="navbar items-center flex ml-8 text-lg font-bold">
        <li>
          <Link to='/'>
            <span className="mx-7 cursor-pointer">레시피</span>
          </Link>
        </li>
        <li>
            {/* <span className="mx-7 cursor-pointer">재료별</span>
            <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-2 space-y-2 group-hover:block text-sm font-medium">
            <Link to="/category/beef" className="block px-4 py-1 ">소고기</Link>
            <Link to="/category/pork" className="block px-4 py-1">돼지고기</Link>
            <Link to="/category/chicken" className="block px-4 py-1">닭고기</Link>
            <Link to="/category/seafood" className="block px-4 py-1">해산물</Link>
            <Link to="/category/vegetable" className="block px-4 py-1">채소</Link>
          </div> */}
          <div className="dropdown">
              <button className="dropbtn">재료별</button>
              <div className="dropdown-content">
              <Link to="/category/beef" className="block px-4 py-1 ">소고기</Link>
              <Link to="/category/pork" className="block px-4 py-1">돼지고기</Link>
              <Link to="/category/chicken" className="block px-4 py-1">닭고기</Link>
              <Link to="/category/seafood" className="block px-4 py-1">해산물</Link>
              <Link to="/category/seafood" className="block px-4 py-1">채소</Link>
              </div>
            </div>
        </li>
        <li>
            {/* <span className="mx-7 cursor-pointer">상황별</span>
            <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-2 space-y-2 group-hover:block text-sm font-medium">
              <Link to="/category/beef" className="block px-4 py-1 ">일상</Link>
              <Link to="/category/pork" className="block px-4 py-1">파티요리</Link>
              <Link to="/category/chicken" className="block px-4 py-1">다이어트</Link>
              <Link to="/category/seafood" className="block px-4 py-1">간편요리</Link>
            </div> */}
            <div className="dropdown">
              <button className="dropbtn">상황별</button>
              <div className="dropdown-content">
              <Link to="/category/beef" className="block px-4 py-1 ">일상</Link>
              <Link to="/category/pork" className="block px-4 py-1">파티요리</Link>
              <Link to="/category/chicken" className="block px-4 py-1">다이어트</Link>
              <Link to="/category/seafood" className="block px-4 py-1">간편요리</Link>
              </div>
            </div>
        </li>
        <li>
          <Link to='/'>
            <span className="mx-7 cursor-pointer">SPECIAL</span>
          </Link>
        </li>
      </ul>
      <span className="mr-7">|</span>

      {/* 마이페이지/글쓰기 아이콘 */}
      <div className="flex items-center">
        <Link to='/'>
          <img className="mr-4" src="./src/assets/ico_user.png" alt="" onClick={mypageIconClick}/> 
        </Link>
        <Link to='/'>
          <img className="mr-4" src="./src/assets/rcp_write.png" alt="" onClick={writingIconClick}/> 
        </Link>
      </div>
    </div>
  );
}
export default Header;