import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchSearchRecipe from '../fetch/fetchSearchRecipe'
import { RecipeListAPIResponse } from './APIResponsesTypes'

function RecipeSearchList() {
  // const { keyword } = useParams<{ keyword: string }>();
  const keyword = '치킨'
  if (!keyword) {
    throw new Error('검색어를 입력해주세요')
  }

  const [page, setPage] = useState(1 as number)
  // FIXME 한페이지에 보여줄 아이템 수, 아직 프론트에서 정할지 백에서 정할지 안정함
  const items = 30 as number
  const [recipes, setRecipes] = useState<RecipeListAPIResponse[]>([])

  useEffect(
    () => () => {
      setRecipes([])
    },
    [],
  )

  const result = useQuery<RecipeListAPIResponse[]>(
    ['search', { keyword, items, page }],
    fetchSearchRecipe,
  )

  const searchData = result.data

  if (!searchData) {
    throw new Error('레시피 검색 결과가 없습니다.')
  }
  useEffect(() => {
    if (result.isLoading && searchData?.length > 0) {
      setRecipes(((prevRecipes: RecipeListAPIResponse[]) => [
        ...prevRecipes,
        ...(searchData as RecipeListAPIResponse[]),
      ])
    }
  }, [result.isLoading, searchData])

  return (
    <div>
      <h1>Recipe Search List</h1>
    </div>
  )
}

export default RecipeSearchList
