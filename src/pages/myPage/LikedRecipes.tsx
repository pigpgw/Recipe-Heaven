import React, { useEffect, useState } from 'react'
import { fetchRecipeListById } from '../../fetch/fetchRecipeLiked'
import { useStore, StoreState } from '../../components/store/store'
import LikedRecipeItem from '../../components/myPage/MypageRecipeItem'
import { RecipeCard } from '../../fetch/APIResponsesTypes'
import { TbMinusVertical } from 'react-icons/tb'
import { useDeleteLikesMutation } from '../../components/mutation/useLikesMutation'
import { useQuery } from '@tanstack/react-query'

const LikedRecipes = () => {
  const { likedRecipes }: StoreState = useStore()
  const [recipeList, setRecipeList] = useState<RecipeCard[]>([])
  const [checkedItems, setCheckedItems] = useState<number[]>([])
  const { deleteRecipes, isDeleting } = useDeleteLikesMutation(
    checkedItems,
    setCheckedItems,
  )

  useEffect(
    () => () => {
      setCheckedItems([])
    },
    [],
  )

  const { data, isLoading, isError } = useQuery<RecipeCard[]>({
    queryKey: ['likedRecipes', likedRecipes],
    queryFn: fetchRecipeListById,
  })

  useEffect(() => {
    if (data) {
      setRecipeList(data)
    }
  }, [data])

  const handleSingleCheck = (checked, recipeId: number) => {
    setCheckedItems((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, recipeId]
      } else {
        return prevCheckedItems.filter((id) => id !== recipeId)
      }
    })
  }

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(likedRecipes)
    } else {
      setCheckedItems([])
    }
  }

  const handelDelete = () => {
    deleteRecipes(checkedItems)
  }

  return (
    <div>
      <h2 className="text-lg font-bold">찜한레시피({recipeList.length})</h2>
      <div className="flex flex-col justify-center w-full">
        <div>
          <input
            type="checkbox"
            checked={checkedItems.length === likedRecipes.length}
            onChange={(e) => handleAllCheck(e.target.checked)}
            disabled={likedRecipes.length === 0}
          />
          <span className="text-gray-900 font-semibold ml-2">전체선택</span>
          <TbMinusVertical className="text-gray-400 my-5 -ml-2 inline text-[1.5rem]" />
          <button
            className="text-gray-900 my-5 font-semibold cursor-pointer"
            onClick={() => handelDelete()}
            disabled={isDeleting}
          >
            선택삭제
          </button>
        </div>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-x-6">
          {recipeList.length ? (
            recipeList.map((recipe) => (
              <div key={recipe.recipeId} className="flex">
                <input
                  type="checkbox"
                  checked={!!checkedItems.includes(recipe.recipeId)}
                  onChange={(e) =>
                    handleSingleCheck(e.target.checked, recipe.recipeId)
                  }
                />
                <div className="ml-3 my-3">
                  <LikedRecipeItem recipe={recipe} type={'like'} />
                </div>
              </div>
            ))
          ) : (
            <div>찜한 레시피가 없습니다</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LikedRecipes
