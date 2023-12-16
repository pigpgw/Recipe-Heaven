import React from 'react'
import { Link } from 'react-router-dom'

// 레시피 목록에 들어가는 카드 하나하나 -> 클릭시 상세페이지 이동
interface IProps {
  id: string
  title: string
  image: string
  userId: string
  postDate: Date
  avgRating: number
  reviewCnt: number
}

const RecipeItem = (props: IProps) => {
  const { id, title, image, userId, avgRating, reviewCnt } = props
  return (
    <Link to={`/detail/${id}`}>
      <div className="flex flex-col group relative overflow-hidden">
        <div className="overflow-hidden rounded w-full h-60">
          <img
            src={image}
            alt={`${title}의 메인이미지`}
            className="object-cover w-full h-60 duration-1000 group-hover:scale-125"
          />
        </div>
        <div>
          <div>{title}</div>
          <div>{userId}</div>
          <div className="flex">
            <div>{avgRating}</div>
            <div>{reviewCnt}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeItem
