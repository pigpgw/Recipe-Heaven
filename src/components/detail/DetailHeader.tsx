import React from 'react'
import { FaRegClock } from 'react-icons/fa6'
import { IoIosPeople } from 'react-icons/io'
import { TbStarsFilled } from 'react-icons/tb'

function DetailHeader({ fetchData }) {
  if (!fetchData) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center min-w-[40rem] w-4/5 ml-[5rem]">
      <div className="w-6/12">
        {/* 서버에서 이미지 받아오기 */}
        <img className="w-[30rem] min-w-[20rem] h-[35rem]" src={fetchData.img} alt="" />
      </div>
      <div className="min-w-[30rem] w-6/12">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="text-3xl ml-5 font-bold pl-10">
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
              <p className="text-xl text-slate-500 font-bold">
                {fetchData.portion}
              </p>
            </div>
            <div className="flex items-center flex-col">
              <div className="p-4 text-3xl text-slate-500">
                <FaRegClock style={{ height: 40 }} />
              </div>
              <p className="text-xl text-slate-500 font-bold">
                {fetchData.leadTime}
              </p>
            </div>
            <div className="flex items-center flex-col">
              <div className="p-4 text-3xl text-slate-500">
                <TbStarsFilled style={{ height: 40 }} />
              </div>
              <p className="text-xl text-slate-500 font-bold">
                {fetchData.level}
              </p>
            </div>
          </div>
        </div>

        <div className="py-2 w-full flex items-center justify-center flex-col">
          <p className="text-1xl pr-10  pl-20 py-2 font-bold w-full">
            재료 및 분량{' '}
            <span className="text-orange-600">{fetchData.portion}</span>
          </p>
          <div className="bg-gray-100 p-3 rounded-[12px] font-medium flex flex-wrap flex-col w-10/12 max-h-[384px] min-h-[350px]">
            {fetchData?.ingredient?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-2 w-1/2 flex items-center justify-center "
                >
                  <a
                    href={`https://www.coupang.com/np/search?component=&q=${item.item}&channel=user`}
                    className="w-20 hover:text-red-700 text-15 text-center text-lg"
                  >
                    [구매]
                  </a>
                  <div className="flex flex-row w-full w-full text-lg">
                    <div>{item.item}</div>
                    <div className="pl-2"> {item.unit}</div>
                  </div>
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
