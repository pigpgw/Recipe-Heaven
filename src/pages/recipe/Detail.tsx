import react from 'react'
import { useState, useEffect } from 'react'
import DetailHeader from '../../components/detail/DetailHeader'
import DetailMainList from '../../components/detail/DetailMainList'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Comment from '../../components/comment/Comment'
import '../../../src/components/uploadRecipe/uploadRecipe.css'
import { fetchDetailRecipe } from '../../fetch/fetchGetDetailRecipe'
import { deleteRecipe } from '../../fetch/fetchDeleteDetailRecipe'
import { Step, Ingredient, RecipeDetail } from '../../fetch/DetailRecipeTypes'

function Detail() {
  const [fetchData, setFetchData] = useState<RecipeDetail | null>(null)
  const [explaincontentList, setExplaincontentList] = useState<string[]>([])
  const [sequenceImgList, setSequenceImgList] = useState<string[]>([])
  const [ingredientNameList, setIngredientNameList] = useState<string[]>([])
  const [ingredientUnitList, setIngredientUnitList] = useState<string[]>([])
  const [myBlogContent, setMyBlogContent] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const { recipeId } = useParams()

  useEffect(() => {
    fetchDetailRecipe(recipeId).then((res) => {
      setFetchData(res)
      const step: Step[] = res.step
      const explainList: string[] = step.map((item) => item.des)
      const imgList: string[] = step.map((item) => item.imgUrl)
      const ingredient: Ingredient[] = res.ingredient
      const ingNameList: string[] = ingredient.map((item) => item.item)
      const ingUnitList: string[] = ingredient.map((item) => item.unit)
      setIngredientNameList(ingNameList)
      setIngredientUnitList(ingUnitList)
      setExplaincontentList(explainList)
      setSequenceImgList(imgList)
      console.log('res', res)
    })
    console.log('recipeId', recipeId)
  }, [recipeId])

  const handleMoreClick = () => {
    setShowOptions(!showOptions)
  }
  const navigate = useNavigate()
  const handleDeleteClick = async () => {
    try {
      const result = await deleteRecipe(recipeId)
      navigate('/')
      console.log('레시피 삭제', result)
    } catch (e) {
      console.log('삭제 실패', e)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-[480px]">
      <div className="w-5/6 bg-white h-90 flex flex-wrap items-center justify-center min-w-[800px]">
        {myBlogContent && (
          <div className="w-full mt-14">
            <div
              className="float-right px-5 py-5 relative top-5"
              onClick={handleMoreClick}
            >
              <div className="w-40 h-14 cursor-pointer mr-20 pr-20 text-xl">더보기</div>
              {showOptions && (
                <div className="absolute right-6 bottom-8 bg-white border border-gray-300 shadow-md p-2">
                  <Link to={`/modify/${recipeId}`}>
                    <button className="block w-full text-left py-1 px-1 hover:bg-gray-100">
                      수정하기
                    </button>
                  </Link>
                  <button
                    className="block w-full text-left py-1 px-1 hover:bg-gray-100 text-red-500"
                    onClick={handleDeleteClick}
                  >
                    삭제하기
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <DetailHeader fetchData={fetchData} />
        <DetailMainList
          explaincontentList={explaincontentList}
          sequenceImgList={sequenceImgList}
        />
        <Comment recipeId={recipeId} />
      </div>
    </div>
  )
}
export default Detail
