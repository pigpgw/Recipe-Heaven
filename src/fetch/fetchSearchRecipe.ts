import axios from 'axios'
import { ListBySearchAPIResponse } from './APIResponsesTypes'
import { QueryFunction } from '@tanstack/react-query'

const fetchSearchRecipe: QueryFunction<ListBySearchAPIResponse> = async ({
  queryKey,
}) => {
  const { keyword, items, page } = queryKey[1]

  const apiRes = await axios.get(
    // `https://jsonplaceholder.typicode.com/todos/10000`,
    `api호출 주소`,
  )

  if (apiRes.status !== 200) {
    throw new Error('레시피 로드중 에러발생.')
  }

  return apiRes.data
}

export default fetchSearchRecipe
