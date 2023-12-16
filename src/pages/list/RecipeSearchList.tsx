import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchSearchRecipe from '../../fetch/fetchSearchRecipe'
import { ListBySearchAPIResponse } from '../../fetch/APIResponsesTypes'
import useIntersect from '../../components/list/useIntersect'

function RecipeSearchList() {
  // const { keyword } = useParams<{ keyword: string }>()
  const keyword = '피자'
  if (!keyword) {
    throw new Error('검색어를 입력해주세요')
  }

  const [page, setPage] = useState<number>(1)
  // FIXME 한페이지에 보여줄 아이템 수, 아직 프론트에서 정할지 백에서 정할지 논의 필요합니다.
  const items = 30
  const [recipes, setRecipes] = useState<ListBySearchAPIResponse[]>([])

  useEffect(
    () => () => {
      setRecipes([])
    },
    [],
  )

  const { data, isLoading } = useQuery<ListBySearchAPIResponse[]>({
    queryKey: ['search', { keyword, items, page }],
    queryFn: fetchSearchRecipe,
  })

  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      setRecipes((prevRecipes) => [...prevRecipes, ...data])
    }
  }, [isLoading, data])

  const intersectRef = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!isLoading && data?.length === items) {
        setPage((prevPage) => prevPage + 1)
      }
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <div>
      {recipes.map((recipe) => (
        <div>레시피아이템컴포넌트에레시피전달</div>
      ))}
      <div ref={intersectRef} className="h-20 bg-transparent"></div>
    </div>
  )
}

export default RecipeSearchList
