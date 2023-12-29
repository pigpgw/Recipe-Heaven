// import { useMutation } from '@tanstack/react-query'
// import toast from 'react-hot-toast'
// import fetchDeleteRecipe from '../../fetch/fetchDeleteRecipe'
// import { useQueryClient } from '@tanstack/react-query'
// import { RecipeCard } from '../../fetch/APIResponsesTypes'

// export const useDeleteRecipeMutation = () => {
//   const queryClient = useQueryClient()
//   const { mutate: deleteComment, isPending: isDeleting } = useMutation<
//     void,
//     Error,
//     number
//   >({
//     mutationFn: (id: number) => fetchDeleteRecipe,
//     onMutate: async (id: number) => {
//       await queryClient.cancelQueries({ queryKey: ['myRecipes'] })
//       const previousRecipe = queryClient.getQueriesData<RecipeCard[]>([
//         'myRecipes',
//       ])
//       queryClient.setQueriesData<Comment[]>(
//         ['myRecipes'],
//         previousRecipe[0][1].filter((recipe) => recipe.recipeId !== id),
//       )
//       return { previousRecipe }
//     },
//     onSuccess: () => {
//       toast.success('댓글 삭제 완료')
//     },
//     onError: (error, variables, context) => {
//       toast.error('잠시 후 다시 시도해주세요')
//       queryClient.setQueriesData<RecipeCard[]>(
//         ['myRecipes'],
//         context.previousRecipe,
//       )
//     },
//     onSettled: () => {
//       // queryClient.invalidateQueries({ queryKey: ['myRecipes'] })
//     },
//   })

//   return { deleteComment, isDeleting }
// }
