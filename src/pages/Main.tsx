import React from "react";
import Header from '../components/common/Header'
import MainSearch from "../components/main/MainSearch";
import Footer from '../components/common/Footer'
import RankItem from "../components/main/RankItem";

function Main() {
  return (

    <div>
      <Header />
      <MainSearch />
      {/* 현재 이미지 -> 우선순위 낮음: caroucel*/}
      <div className="flex items-center justify-center mt-10 mb-16">
        <img src="\src\assets\main\caroucel_1.jpg" alt="" className="w-[64rem]" />
      </div>
      <span className="flex flex-col items-center text-2xl font-bold my-7">이달의 인기 레시피 {'>'}</span>
      <RankItem />
      <span className="flex flex-col items-center text-2xl font-bold my-7">달콤한 인기 레시피 {'>'}</span>
      <RankItem />
      <Footer />
    </div>
  )
}

export default Main;