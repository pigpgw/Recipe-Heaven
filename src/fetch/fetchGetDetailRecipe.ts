import axios from 'axios'

export const fetchDetailRecipe = async (recipeId: number) => {
  try {
    const fetchData = await axios.get(
      `http://kdt-sw-7-team06.elicecoding.com:3000/recipes/${recipeId}`,
    )
    return fetchData.data
  } catch (e) {
    console.log('e', e)
  }
}
