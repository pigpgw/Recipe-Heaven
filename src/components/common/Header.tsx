import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { dummyCategoriesData } from '../../../public/dummy'
import useUserStore from './userStore'
import axios from 'axios';
import { QueryFunction } from '@tanstack/react-query'
// import { create } from 'zustand';

function Header() {
  //카테고리 navbar 더미데이터 가져오기
  // dummyCategoriesData.map((item) => {
  //   console.log("item", item)
  // })
  // const ingredientCategoryTitle = dummyCategoriesData[0]?.name;
  // const situationCategoryTitle = dummyCategoriesData[1]?.name;

  // const ingredientCategory = dummyCategoriesData.find(item => item.id === 1)?.children || [];
  // const situationCategory = dummyCategoriesData.find(item => item.id === 2)?.children || [];

  // console.log('ingredientCategoryTitle', ingredientCategoryTitle)
  // console.log('ingredientCategory', ingredientCategory)
  // console.log('situationCategoryTitle', situationCategoryTitle)
  // console.log('situationCategory', situationCategory)

  // API에서 데이터 가져오기
  interface Category {
    categoryId: number;
    categoryName: string;
    categoryParent: string | null; // categoryParent가 문자열 또는 null일 수 있다고 가정
  }

  // 카테고리 navbar API 가져오기
  async function getCategoryData(): Promise<Category[]> {
    try {
      const res = await axios.get('/category');
      console.log('API 성공', res);
      return res.data // 데이터를 Category 배열 타입으로 캐스팅
      console.log("이건 또 왜 안뜨냐")
      console.log('res.data: ', res.data)
    } catch (error) {
      console.error('API 실패', error);
      throw error; // 필요시 에러를 다시 던질 수 있습니다.
    }
  }

  getCategoryData()
    .then(apiResponse => {
      // "categoryParent"가 "null"인 항목 필터링
      // console.log("필터링")
      const topLevelCategories = apiResponse.filter(category => category.categoryParent === null);
      console.log('필터링된 결과:', topLevelCategories);
    })
    .catch(error => {
      console.error('에러:', error);
    });

  //마이페이지, 글쓰기 아이콘 로그인 판별
  const { token } = useUserStore();
  const { administration } = useUserStore();
  const navigate = useNavigate();

  console.log('Token:', token);

  const mypageIconClick = () => {
    if (token) {
      // 토큰이 존재하면 로그인된 상태로 간주
      navigate('/search'); //주소변경 필요
      console.log("회원-로그인화면 이동");
    } else {
      // 토큰 존재x, 관리자 권한o
      if (administration) {
        navigate('/admin_caterory'); //주소변경 필요
        console.log("관리자-관리자페이지 이동")
      }
      else {
        navigate('/Login'); //주소변경 필요
        console.log("비회원-로그인페이지 이동");
      }
    }
  };

  const writingIconClick = () => {
    if (token) {
      // 토큰이 존재하면 로그인된 상태로 간주
      navigate('/uploadrecipe'); //글 쓰기 페이지 주소변경 필요
    } else {
      // 토큰이 존재하지 않으면 로그인 페이지로 이동
      navigate('/Login');
    }
  };

  return (
    <div id="header" className="flex mt-3 items-center w-full justify-center">
      <link rel="stylesheet" href="./src/components/navbar.css"></link>
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
            />
          </Link>
        </button>
      </div>

      <ul className="navbar items-center flex ml-8 text-lg font-bold">
        <li>
          <Link to="/">
            <span className="mx-7 cursor-pointer">레시피</span>
          </Link>
        </li>
        {/* <li>
          <div className="dropdown">
            <button className="dropbtn">{ingredientCategoryTitle}</button>
            <div className="dropdown-content">
              {ingredientCategory.map((item) => {
                return (
                  <>
                    <Link
                      to={`/category/${item.name}`}
                      className="block px-4 py-1 "
                    >
                      {item.name}
                    </Link>
                  </>
                )
              })}
            </div>
          </div>
        </li> */}
        <li>
          <div className="dropdown">
            {/* <button className="dropbtn">{situationCategoryTitle}</button>
            <div className="dropdown-content">
              {
                situationCategory.map((item) => {
                  return (
                    <>
                      <Link
                        to={`/category/${item.name}`}
                        className="block px-4 py-1 "
                      >
                        {item.name}
                      </Link>
                    </>
                  )
                })
              }
            </div> */}
          </div>
        </li>
        <li>
          <Link to="/">
            <span className="mx-7 cursor-pointer">SPECIAL</span>
          </Link>
        </li>
      </ul>
      <span className="mr-7">|</span>

      {/* 마이페이지/글쓰기 아이콘 */}
      <div className="flex items-center">
        <Link to="/">
          <img
            className="mr-4"
            src="./src/assets/ico_user.png"
            alt=""
            onClick={mypageIconClick}
          />
        </Link>
        <Link to="/">
          <img
            className="mr-4"
            src="./src/assets/rcp_write.png"
            alt=""
            onClick={writingIconClick}
          />
        </Link>
      </div>
    </div>
  )
}
export default Header