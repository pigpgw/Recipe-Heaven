import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchSearchRecipe from '../../fetch/fetchSearchRecipe'
import {
  ListBySearchAPIResponse,
  RecipeCard,
} from '../../fetch/APIResponsesTypes'
import RecipeItem from '../../components/list/RecipeItem'
import useIntersect from '../../components/list/useIntersect'
import ErrorBoundary from '../../components/error/ErrorBoundary'

function RecipeSearchList() {
  // const { keyword } = useParams<{ keyword: string }>()
  const keyword = '피자'
  if (!keyword) {
    throw new Error('검색어를 입력해주세요')
  }

  const [page, setPage] = useState<number>(1)
  // FIXME 한페이지에 보여줄 아이템 수, 아직 프론트에서 정할지 백에서 정할지 논의 필요합니다.
  const items = 30
  const [recipes, setRecipes] = useState<RecipeCard[]>([])

  useEffect(
    () => () => {
      setRecipes([])
    },
    [],
  )

  const { data, isLoading, isError } = useQuery<ListBySearchAPIResponse>({
    queryKey: ['search', { keyword, items, page }],
    queryFn: fetchSearchRecipe,
  })
  if (isError) {
    throw new Error(
      `${keyword}에 대한 레시피 데이터 로드중 문제가 발생했습니다`,
    )
  }

  if (isLoading) {
    return <div>로딩스피너</div>
  }

  const recipeList = data?.recipe

  if (!recipeList) {
    return <div>"{keyword}" 검색 결과가 없습니다</div>
  }

  useEffect(() => {
    if (!isLoading && data && recipeList?.length) {
      setRecipes((prevRecipes) => [...prevRecipes, ...recipeList])
    }
  }, [isLoading, data])

  const intersectRef = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!isLoading && recipeList?.length === items) {
        setPage((prevPage) => prevPage + 1)
      }
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <div>
      {/* {recipes.map((recipe) => ( */}
      {[1].map((recipe, idx) => (
        <RecipeItem
          key={idx}
          id={'tempId'}
          title={'샐러드'}
          image={
            'https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_640.jpg'
          }
          userId={'샐러드요정'}
          postDate={new Date()}
          avgRating={1.5}
          reviewCnt={100}
          // key={recipe.id}
          // id={recipe.id}
          // title={recipe.title}
          // image={recipe.image}
          // userId={recipe.userId}
          // postDate={recipe.postDate}
          // avgRating={recipe.avgRating}
          // reviewCnt={recipe.reviewCnt}
        />
      ))}
      <div ref={intersectRef} className="h-20 bg-transparent"></div>
    </div>
  )
}

export default function SearchErrorBoundary() {
  return (
    <ErrorBoundary>
      <RecipeSearchList />
    </ErrorBoundary>
  )
}
