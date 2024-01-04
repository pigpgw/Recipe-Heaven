import axios from "axios"

export const deleteRecipe = async (recipeId: number) => {
    try {
      const res = await axios.delete(
        `http://kdt-sw-7-team06.elicecoding.com:3000/recipes/${recipeId}`,
      )
      console.log('레시피 삭제', res)
    } catch (e) {
      console.log('삭제 실패', e)
    }
}