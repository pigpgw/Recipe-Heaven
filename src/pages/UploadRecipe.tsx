import React, { useEffect, useState } from 'react'
import { dummyCategoriesData } from '../../public/dummy'

function UploadRecipe() {
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

  function previewImg(event) {
    setMainImageVisible(true)
    setRecipeMainImg(URL.createObjectURL(event.target.files[0]))
  }

  const [recipeName, setRecipeName] = useState('')
  const [recipMainImg, setRecipMainImg] = useState('')
  const [portion, setPortion] = useState('')
  const [leadTime, setLeadTime] = useState('')
  const [level, setLevel] = useState('')
  const [ingredients, setIngredients] = useState([{ name: '', stock: '' }])

  const handleIngredientChange = (index, key, value) => {
    const updatedIngredients = [...ingredients]
    updatedIngredients[index][key] = value
    setIngredients(updatedIngredients)
    console.log('ingredient', ingredients)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', stock: '' }])
  }

  const initialRecipeSequenceItem = [
    // eslint-disable-next-line react/jsx-key
    <div className="add-sequence-item">
      <div className="add-sequence-item-title">Step 1</div>
      <input
        className="add-sequence-item-input"
        type="text"
        placeholder="예) 소고기는 기름기를 떼어내고 적당한 크기를 썰아주세요"
      />
      <input className="add-sequence-item-img-input" type="file" />
      <div className="add-sequence-item-img-input-btn">+</div>
    </div>,
  ]

  // const ForApi = {
    // "recipeName": "ahaha",
    // "img": "sjddfkkfjsdvjlksf",
    // "portion": 2,
    // "leadTime": 2,
    // "level": 3,
    // "ingredient": [
        // {"item": "apple", "unit": "1개"},
        // {"item": "soysource", "unit": "10g"}
    // ],
    // "step": [
        // {"stepNum": 1, "des": "abcd", "imgUrl": "dkldlksdlsd"},
        // {"stepNum": 2, "des": "qwerty", "imgUrl": "qwerty"}
    // ],
        // "aveStar": 4
  // }

  // 이미지 클리깃 preview 레시피 순서별 아이템 이미지는 어떻게 관리해야하나
  // 만약 순서와 이미지를 같이 쏴준다면

  const [recipeMainImg, setRecipeMainImg] = useState('')
  const [mainImgVisible, setMainImageVisible] = useState(false)
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
        <div className="add-sequence-item-img-input-btn">+</div>
      </div>
    )
    setRecipeSequenceItems((previous) => [...previous, item])
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
            <select className="select-item">
              <option value="none">{ingredientCategoryTitle}</option>
              {ingredientCategory.map((item) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            <select className="select-item">
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
                {/* {ingredientitems} */}
                {ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <input
                      className="add-ingredient-input"
                      type="text"
                      placeholder="예: 닭"
                      value={ingredient.name}
                      onChange={(e) =>
                        handleIngredientChange(index, 'name', e.target.value)
                      }
                    />
                    <input
                      className="add-ingredient-input"
                      type="text"
                      placeholder="예: 한마리"
                      value={ingredient.stock}
                      onChange={(e) =>
                        handleIngredientChange(index, 'stock', e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
              <button onClick={addIngredient} className="addRecipeSequenceBtn">
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
            {/* 현재는 이미지는 미 고려 우선은 텍스트만 서버에 전달 후 추후 이미지도 업로드 (백엔드와 상의 필요) */}
            <div className="sequence-item-container">
              {recipeSuquenceItems}
              <button
                className="add-sequence-item-btn"
                onClick={addRecipeSequenceBtnHandler}
              >
                순서 추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadRecipe
