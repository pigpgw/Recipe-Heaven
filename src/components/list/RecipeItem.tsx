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
  const { id, title, image, userId, postDate, avgRating, reviewCnt } = props
  return (
    <Link to={`/detail/${id}`}>
      <div>{title}</div>
    </Link>
  )
}

export default RecipeItem
