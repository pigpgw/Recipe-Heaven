import axios from 'axios'

export const fetchDeleteRecipe = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(
      `http://kdt-sw-7-team06.elicecoding.com:8088/recipes/${id}`,
    )
    return response.data
  } catch (error) {
    throw new Error('레시피 삭제하는 중 오류 발생')
  }
}

export const fetchDeleteRecipes = async (
  recipeIds: number[],
): Promise<void> => {
  try {
    const recipePromises = recipeIds.map((id) => fetchDeleteRecipe(id))
    await Promise.all(recipePromises)
  } catch (error) {
    throw new Error('레시피 삭제하는 중 오류 발생')
  }
}
