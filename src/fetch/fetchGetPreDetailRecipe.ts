import axios from "axios"

export const getPreviousRecipeData  =  async(recipeId : number) => {
    try {
        const fetchData = axios.get(
          `http://kdt-sw-7-team06.elicecoding.com:8088/recipes/${recipeId}`,
        )
        return (await fetchData).data
    } catch (e) {
        console.log("e",e)
    }
}