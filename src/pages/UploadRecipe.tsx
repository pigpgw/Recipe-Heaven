import React, { useState } from 'react'
import { dummyCategoriesData } from '../../public/dummy'

function UploadRecipe() {
  const [recipeMainImg, setRecipeMainImg] = useState('')
  const [mainImgVisible, setMainImageVisible] = useState(false)

  function previewImg(event) {
    // Set the main image source when the file input changes
    setMainImageVisible(true)
    setRecipeMainImg(URL.createObjectURL(event.target.files[0]))
  }

  const ingredientCategoryTitle = dummyCategoriesData[0].name
  const situationCategoryTitle = dummyCategoriesData[1].name
  const ingredientCategory = dummyCategoriesData.filter(
    (item) => item.id === 1,
  )[0].children
  const situationCategory = dummyCategoriesData.filter(
    (item) => item.id === 2,
  )[0].children

  function mainBtnClick() {
    const mainBtn = document.querySelector('.main-imgUpload-btn')
    mainBtn.click()
  }

  const initialRecipeSequenceItem = [
    <div className="add-sequence-item">
      <div className="add-sequence-item-title">Step 1</div>
      <input
        className="add-sequence-item-input"
        type="text"
        placeholder="예) 소고기는 기름기를 떼어내고 적당한 크기를 썰아주세요"
      />
    </div>,
  ]

  const initialIngredientItem = [
    <div className="add-ingredient-item">
      <input
        className="add-ingredient-input"
        type="text"
        placeholder="예: 닭"
      />
      <input
        className="add-ingredient-input"
        type="text"
        placeholder="예: 한마리"
      />
    </div>,
    <div className="add-ingredient-item">
      <input
        className="add-ingredient-input"
        type="text"
        placeholder="예: 돼지고기"
      />
      <input
        className="add-ingredient-input"
        type="text"
        placeholder="예: 120g"
      />
    </div>,
    <div className="add-ingredient-item">
      <input
        className="add-ingredient-input"
        type="text"
        placeholder="예: 설탕"
      />
      <input
        className="add-ingredient-input"
        type="text"
        placeholder="예: 100g"
      />
    </div>,
  ]
  const [recipeSuquenceItems, setRecipeSequenceItems] = useState(
    initialRecipeSequenceItem,
  )

  const addRecipeSequenceBtnHandler = () => {
    const item = (
      <div className="add-sequence-item">
        <div className="add-sequence-item-title">{`Step ${
          recipeSuquenceItems.length + 1
        }`}</div>
        <input
          className="add-sequence-item-input"
          type="text"
          placeholder="예) 소고기는 기름기를 떼어내고 적당한 크기를 썰아주세요"
        />
      </div>
    )

    setRecipeSequenceItems((previous) => [...previous, item])
  }

  const [ingredientitems, setIngredientitems] = useState(initialIngredientItem)

  const addIngredientItem = () => {
    const newItem = (
      <div className="add-ingredient-item">
        <input
          className="add-ingredient-input"
          type="text"
          placeholder="추가할 재료"
        />
        <input className="add-ingredient-input" type="text" placeholder="양" />
      </div>
    )

    setIngredientitems((prevItems) => [...prevItems, newItem])
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="./src/components/uploadRecipe/uploadRecipe.css"
      />
      <div className="w-full flex items-center justify-center flex-col">
        <div className="main-container">
          {/* main img upload container */}
          <p className="main-title">레시피 등록</p>
          <div className="main-uploadImg-bg">
            {/* Use recipeMainImg state to display the uploaded image */}
            {mainImgVisible ? (
              <img
                src={recipeMainImg}
                className="main-imgUpload-btn-box"
                onClick={mainBtnClick}
                alt="Uploaded Main Image"
              />
            ) : (
              <img
                src="./src/assets/uploadRecipe/uploadMainfoodimg.png"
                className="main-imgUpload-btn-box"
                onClick={mainBtnClick}
                alt="Default Main Image"
              />
            )}
            <input
              className="main-imgUpload-btn"
              type="file"
              onChange={previewImg}
            />
          </div>

          <div className="recipe-box">
            <div className="item-title">레시피 제목</div>
            <input type="text" placeholder="예) 소고기 미역국" />
          </div>

          <div className="recipe-box">
            <div className="item-title">카테고리</div>
            <select>
              <option value="none">{ingredientCategoryTitle}</option>
              {ingredientCategory.map((item) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            <select>
              <option value="none">{situationCategoryTitle}</option>
              {situationCategory.map((item) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
          </div>

          <div className="recipe-box">
            <div className="item-title">요리정보</div>
            <div className="info-box">
              <div>인원</div>
              <input className="infoInput" type="text" placeholder="인원" />
            </div>
            <div className="info-box">
              <div>시간</div>
              <input className="infoInput" type="text" placeholder="인원" />
            </div>
            <div className="info-box">
              <div>난이도</div>
              <input className="infoInput" type="text" placeholder="인원" />
            </div>
          </div>

          <div className="recipe-box">
            <div className="item-title">레시피 재료</div>
            <div className="add-ingredient-container">
              <div className="add-ingredient-input-container">
                {ingredientitems}
              </div>
              <button
                onClick={addIngredientItem}
                className="addRecipeSequenceBtn"
              >
                추가
              </button>
            </div>
          </div>

          <div className="sequence-container">
            <div className="item-title">요리 순서</div>
            <div className="alert-info">
              요리의맛이 좌우될 수 있는 중요한 부분은 빠짐없이 적어주세요
            </div>

            {/* sequence 컨테이너 */}
            <div className="sequence-item-container">
              {recipeSuquenceItems}
              <div
                className="add-sequence-item-btn"
                onClick={addRecipeSequenceBtnHandler}
              >
                순서 추가
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadRecipe
