import React from 'react'
import { FaRegClock } from 'react-icons/fa6'
import { IoIosPeople } from 'react-icons/io'
import { TbStarsFilled } from 'react-icons/tb'

function DetailHeader({ fetchData }) {
  if (!fetchData) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center min-w-[50rem]  w-5/6 ml-[5rem]">
      <div className="w-2/5 px-6 min-w-[22rem]">
        {/* 서버에서 이미지 받아오기 */}
        <img
          className="min-w-[24rem] h-[30rem]"
          src={fetchData.img}
          alt=""
        />
      </div>
      <div className="w-3/5">
        <div className="w-full m-4">
          <div className="flex justify-between">
            <div className="text-2xl ml-5 font-bold pl-10">
              {fetchData.recipeName}
            </div>
            <div className="flex justify-center items-center p-2">

              <h4 className="p-1">{fetchData.Like}</h4>
            </div>
          </div>

          <div className="flex items-center justify-around p-1">
            <div className="flex items-center flex-col">
              <div className="p-4 text-4xl text-slate-500">
                <IoIosPeople style={{ height: 40 }} />
              </div>
              <p className="text-xs text-slate-500 font-bold">
                {fetchData.portion}
              </p>
            </div>
            <div className="flex items-center flex-col">
              <div className="p-4 text-3xl text-slate-500">
                <FaRegClock style={{ height: 40 }} />
              </div>
              <p className="text-xs text-slate-500 font-bold">
                {fetchData.leadTime}
              </p>
            </div>
            <div className="flex items-center flex-col">
              <div className="p-4 text-3xl text-slate-500">
                <TbStarsFilled style={{ height: 40 }} />
              </div>
              <p className="text-xs text-slate-500 font-bold">
                {fetchData.level}
              </p>
            </div>
          </div>
        </div>

        <div className="py-2 flex items-center justify-center flex-col">
          <p className="text-1xl pl-20 py-2 font-extrabold w-full">
            재료 및 분량{' '}
            <span className="text-orange-600">{fetchData.portion}</span>
          </p>
          <div className="bg-gray-100 px-8 pt-3 font-medium flex flex-wrap w-9/12 min-h-[17rem]">
            {fetchData?.ingredient?.map((item, index) => {
              return (
                <div key={index} className="p-2 w-1/2">
                  {`${item.item} ${item.unit}`}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailHeader
