import React, { useEffect } from 'react'
import { useState } from 'react';
import { dummyData , reviewModel } from '../../public/dummy'
import DetailHeader from '../components/detail/DetailHeader';
import DetailMainList from '../components/detail/DetailMainList'
import DetailMainReview from '../components/detail/DetailMainReview'

function Detail() {
    const explaincontentList = dummyData.sequenceExplain;
    const sequenceImgList = dummyData.sequenceImg;

    const review = reviewModel.filter((_) => _.recipeId == 0);

    const [inputValue , setInputValue] = useState("");
    const [comments , setComments] = useState(review);
    console.log("comments", comments);
    console.log("review",review);

    useEffect(() => {

    },[comments])

    function getInputValueHandler(e){
        setInputValue(e.target.value)
    }

    function addCommentsHandler(){
      let previousCommentsList = [...comments]
      let User = {
        reviewId: 'ceads',
        recipeId: 0,
        id: 1,
        start: 4,
        comment: inputValue,
        time: '하하',
      }
      previousCommentsList.push(User)
      setComments(previousCommentsList)
      setInputValue('')
    }

  return (
    // 랜더링시 사용자가 클릭한 레시피에 해당하는 페이지 등장
    // id 를 활용해 레시피와 댓글 가져오기

    <div className="flex flex-col items-center justify-center bg-red-400 min-w-[480px]">
      <div className="w-5/6 bg-white h-90 flex flex-wrap items-center justify-center min-w-[800px]">
        <DetailHeader />
        <DetailMainList
          explaincontentList={explaincontentList}
          sequenceImgList={sequenceImgList}
        />
        <DetailMainReview review={comments} />
        
        <div className="w-full min-w-[10rem] p-5 flex items-center justify-center">
          <div className="w-[7rem] h-[7rem] flex flex-wrap items-center justify-center text-4xl border-solid border-2 border-black-800">
            +
          </div>
          <div className="w-4/6 h-[7rem] flex items-center justify-center">
            <input
              value={inputValue}
              onChange={getInputValueHandler}
              className="min-w-[35rem] h-[7rem] border-solid border-2 border-black-600"
              placeholder="무엇이 궁금하신가요 댓글을 남겨주세요"
            />
            <button
              onClick={addCommentsHandler}
              className="border-solid w-[7rem] h-[7rem] border-2 border-black-600 p-6"
            >
              등록
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}
export default Detail;
