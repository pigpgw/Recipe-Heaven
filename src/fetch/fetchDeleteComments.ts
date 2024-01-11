import axios from 'axios'

export const fetchDeleteComment = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(
      `http://kdt-sw-7-team06.elicecoding.com:8088/reviews/${id}`,
    )
    return response.data
  } catch (error) {
    throw new Error('댓글 삭제하는 중 오류 발생')
  }
}

export const fetchDeleteComments = async (
  commentIds: number[],
): Promise<void> => {
  try {
    const recipePromises = commentIds.map((id) => fetchDeleteComment(id))
    await Promise.all(recipePromises)
  } catch (error) {
    throw new Error('댓글 삭제하는 중 오류 발생')
  }
}
