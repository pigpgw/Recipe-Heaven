import React, { useEffect } from 'react'
import MainSearch from '../components/main/MainSearch'
import RankItem from '../components/main/RankItem'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Main() {
  return (
    <div>
      <MainSearch />
      {/* 현재 이미지 -> 우선순위 낮음: caroucel*/}
      <div className="flex items-center justify-center mt-10 mb-16">
        <Link to="/category/크리스마스">
          <img
            src="https://lh3.google.com/u/0/d/14Qu0DAEshBW9WWZ2DVNVjdsoCLtfmMdM=w1028-h912-iv1"
            alt=""
            className="w-[64rem]"
          />
        </Link>
      </div>

      {/* 경로변경필요 */}
      <span className="flex flex-col items-center text-2xl font-bold my-7">
        <Link to="/category/크리스마스">
          <p> 크리스마스 레시피 {'>'}</p>
        </Link>
      </span>
      <RankItem category={'크리스마스'} />
      {/* 경로변경필요 */}
      <span className="flex flex-col items-center text-2xl font-bold my-7">
        <Link to="/category/해산물">
          <p> 한끼 뚝딱 레시피 {'>'}</p>
        </Link>
      </span>
      <RankItem category={'해산물'} />
    </div>
  )
}

export default Main
