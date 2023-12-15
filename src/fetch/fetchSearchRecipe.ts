import axios from 'axios'
import { ListBySearchAPIResponse } from './APIResponsesTypes'
import { QueryFunction } from '@tanstack/react-query'

const fetchSearchRecipe: QueryFunction<ListBySearchAPIResponse[]> = async ({
  queryKey,
}) => {
  const { keyword, items, page } = queryKey[1]

  const apiRes = await axios.get(`https//에이피아이주소`)

  if (apiRes.status !== 200) {
    throw new Error(`${keyword}에 관한 레시피 검색 결과가 없습니다.`)
  }

  return apiRes.data
}

export default fetchSearchRecipe
