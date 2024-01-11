import axios from 'axios'
import { Comment } from './APIResponsesTypes'

export const fetchPostComment = async (comment: Comment): Promise<void> => {
  console.log('댓글등록 시행')
  console.log('comment')
  console.log(comment)
  const response = await axios.post(
    `http://kdt-sw-7-team06.elicecoding.com:8088/reviews`,
    comment,
  )
  return response.data
}

export const fetchUpdateComment = async (
  updatedComment: Comment,
): Promise<void> => {
  const response = await axios.patch(
    `http://kdt-sw-7-team06.elicecoding.com:8088/reviews/${updatedComment.reviewId}`,
    { comment: updatedComment.comment, star: updatedComment.star },
  )
  return response.data
}
