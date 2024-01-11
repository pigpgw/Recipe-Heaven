import axios from 'axios'

export const fetchCategoryData = async () => {
  try {
    const fetchData = await axios.get(
      'http://kdt-sw-7-team06.elicecoding.com:8088/categories',
    )
    return fetchData.data
  } catch (e) {
    console.log('e', e)
  }
}

export const categoryFetchData = async () => {
  const categoryData = await fetchCategoryData()

  const ingredientCategoryList = categoryData
    ?.filter((item) => {
      return item.categoryName?.indexOf('재료별') === 0
    })
    .map((item) => {
      return item.categoryName?.split('_')[1]
    })

  const situationCategoryList = categoryData
    ?.filter((item) => {
      return item.categoryName?.indexOf('상황별') === 0
    })
    .map((item) => {
      return item.categoryName?.split('_')[1]
    })
  return { ingredientCategoryList, situationCategoryList }
}
