import axios from 'axios'
import { QueryFunction } from '@tanstack/react-query'
import { Comment } from './APIResponsesTypes'

const fetchTestComment: QueryFunction<Comment[]> = async ({ queryKey }) => {
  try {
    const apiRes = await axios.get(
      `http://kdt-sw-7-team06.elicecoding.com:8088/reviews`,
    )

    return apiRes.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default fetchTestComment
