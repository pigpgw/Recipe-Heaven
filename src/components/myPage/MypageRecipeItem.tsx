import React from 'react'
import { RecipeCard } from '../../fetch/APIResponsesTypes'
import { useDeleteRecipeMutation } from '../mutation/useMyRecipesMutation'
import { useDeleteLikeMutation } from '../../components/mutation/useLikesMutation'
import moment from 'moment'
import { Link } from 'react-router-dom'

const MypageRecipeItem = ({
  recipe,
  type,
}: {
  recipe: RecipeCard
  type: string
}) => {
  let deleteRecipe
  let isDeleting

  if (type === 'like') {
    const likeMutation = useDeleteLikeMutation(recipe.recipeId)
    deleteRecipe = likeMutation.deleteRecipe
    isDeleting = likeMutation.isDeleting
  } else {
    const recipeMutation = useDeleteRecipeMutation(recipe.recipeId)
    deleteRecipe = recipeMutation.deleteRecipe
    isDeleting = recipeMutation.isDeleting
  }

  const momentDate = moment(recipe.createdAt)
  const formattedDate = momentDate.format('YYYY-MM-DD. h:mm')

  return (
    <div className="flex">
      <Link to={`/detail/${recipe.recipeId}`}>
        <div className="flex gap-3">
          <img
            className="w-20 h-20 object-cover"
            src={
              'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fCVFQyU5QSU5NCVFQiVBNiVBQ3xlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`${recipe.recipeName}의 메인이미지`}
          />

          <div className="flex flex-col">
            <div>{recipe.recipeName}</div>
            <div>유저아이디{recipe.userId}</div>
            <div>{formattedDate}</div>
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          deleteRecipe(recipe.recipeId)
        }}
        disabled={isDeleting}
        className="ml-5"
      >
        X
      </button>
    </div>
  )
}

export default MypageRecipeItem
