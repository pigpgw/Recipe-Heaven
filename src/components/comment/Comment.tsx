import React, { useState } from 'react'
import WriteComment from './WriteComment'
import { Comment } from '../../fetch/APIResponsesTypes'
import { useQuery } from '@tanstack/react-query'
import fetchTestComment from '../../fetch/fetchTestComment'

const Comment = () => {
  // const { data, isLoading, isError } = useQuery<Comment[]>({
  //   queryKey: ['comments'],
  //   queryFn: fetchTestComment,
  // })
  const comments = [
    {
      id: 1,
      star: 5,
      comment: 'Excellent service!',
      deletedAt: null,
      reviewId: 1,
      createdAt: '2023-12-20T00:59:02.044Z',
      updatedAt: '2023-12-20T00:59:02.044Z',
      userId: 'skswwwwksk',
    },
    {
      id: 2,
      star: 4,
      comment: 'The product exceeded my expectations.',
      deletedAt: null,
      reviewId: 2,
      createdAt: '2023-12-20T01:15:42.112Z',
      updatedAt: '2023-12-20T01:15:42.112Z',
      userId: 'skswwwwksk',
    },
    {
      id: 3,

      star: 3,
      comment: "It's decent, but could be improved.",
      deletedAt: null,
      reviewId: 3,
      createdAt: '2023-12-20T02:30:18.759Z',
      updatedAt: '2023-12-20T02:30:18.759Z',
      userId: 'skswwwwksk',
    },
    {
      id: 4,
      star: 5,
      comment: "I'm extremely satisfied with the purchase!",
      deletedAt: null,
      reviewId: 4,
      createdAt: '2023-12-20T04:45:57.208Z',
      updatedAt: '2023-12-20T04:45:57.208Z',
      userId: 'sksksk',
    },
    {
      id: 5,

      star: 2,
      comment: 'Disappointed. Not what I expected.',
      deletedAt: null,
      reviewId: 5,
      createdAt: '2023-12-20T06:20:35.510Z',
      updatedAt: '2023-12-20T06:20:35.510Z',
      userId: 'sksksk',
    },
  ]

  return (
    <div>
      <WriteComment />
    </div>
  )
}
export default Comment
