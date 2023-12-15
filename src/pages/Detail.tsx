import React from 'react'
import { dummyData , reviewModel } from '../../public/dummy'
import DetailHeader from '../components/detail/DetailHeader';
import DetailMainList from '../components/detail/DetailMainList'
import DetailMainReview from '../components/detail/DetailMainReview'

function Detail() {
    const explaincontentList = dummyData.sequenceExplain;
    const sequenceImgList = dummyData.sequenceImg;

    const review = reviewModel.filter((_) => _.recipeId == 0);

  return (
    <div className="flex flex-col items-center justify-center bg-red-400 min-w-[480px]">
      <div className="w-5/6 bg-white h-90 flex flex-wrap items-center justify-center min-w-[800px]">
        <DetailHeader />
        <DetailMainList
          explaincontentList={explaincontentList}
          sequenceImgList={sequenceImgList}
        />
        <DetailMainReview review={review} />
      </div>
    </div>
  )
}
export default Detail;
