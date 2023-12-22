import React, { useEffect, useState } from 'react'
import { dummyCategoriesData } from '../../public/dummy'
import axios from 'axios'
import { error } from 'console'

function UploadRecipe() {
  const ingredientCategoryTitle = dummyCategoriesData[0].name
  const situationCategoryTitle = dummyCategoriesData[1].name
  const ingredientCategory = dummyCategoriesData.filter(
    (item) => item.id === 1,
  )[0].children
  const situationCategory = dummyCategoriesData.filter(
    (item) => item.id === 2,
  )[0].children

  const [recipeName, setRecipeName] = useState('')
  const [recipeMainImg, setRecipeMainImg] = useState('')
  const [portion, setPortion] = useState('')
  const [leadTime, setLeadTime] = useState('')
  const [level, setLevel] = useState('')
  const [ingredients, setIngredients] = useState([{ name: '', stock: '' }])
  const [categoryIg, setCategoryIg] = useState('')
  const [categorySt, setCategorySt] = useState('')
  const [mainImgVisible, setMainImageVisible] = useState(false)
  const [recipeSequenceItems, setRecipeSequenceItems] = useState([
    { stepNum: 1, des: '', imgUrl: '' },
  ])

  function mainBtnClick() {
    const mainBtn = document.querySelector('.main-imgUpload-btn')
    mainBtn.click()
  }

  function previewImg(event) {
    setMainImageVisible(true)
    setRecipeMainImg(URL.createObjectURL(event.target.files[0]))
  }

  function addRecipeSequenceBtnHandler() {
    const newItem = {
      stepNum: recipeSequenceItems.length + 1,
      des: '',
      imgUrl: '',
    }
    setRecipeSequenceItems([...recipeSequenceItems, newItem])
  }

  const handleStepChange = (index, key, value) => {
    const updatedSteps = [...recipeSequenceItems]
    updatedSteps[index][key] = value
    setRecipeSequenceItems(updatedSteps)
    console.log('recipe steps', recipeSequenceItems)
  }

  const handleIngredientChange = (index, key, value) => {
    const updatedIngredients = [...ingredients]
    updatedIngredients[index][key] = value
    setIngredients(updatedIngredients)
    console.log('ingredient', ingredients)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', stock: '' }])
  }

  //   const forapi = {
  //     recipeName: recipeName,
  //     img: recipeMainImg,
  //     portion: portion,
  //     leadTime: leadTime,
  //     setCgIngredient: categoryIg,
  //     setCgSituation: categorySt,
  //     level: level,
  //     ingredient: ingredients,
  //     step: recipeSequenceItems,
  //   }

  //   const submit = () => {
  //     axios.post('/recipe/insert',{
  //         recipeName: recipeName,
  //         img: recipeMainImg,
  //         portion: portion,
  //         leadTime: leadTime,
  //         setCgIngredient: categoryIg,
  //         setCgSituation: categorySt,
  //         level: level,
  //         ingredient: ingredients,
  //         step: recipeSequenceItems,
  //       })
  //       .then((res) => (console.log(res)))
  //       .catch((e) => (console.log("error",e)))
  //   }

  const submit = async () => {
    try {
      await axios.post('/recipe/insert', {
        recipeName: recipeName,
        img: recipeMainImg,
        portion: portion,
        leadTime: leadTime,
        setCgIngredient: categoryIg,
        setCgSituation: categorySt,
        level: level,
        ingredient: ingredients,
        step: recipeSequenceItems,
      })
    } catch (e) {
    //   throw new Error
        console.log("error",e)
    }
  }

  //   const checkPostApiData = () => {
  //     const formData = new FormData()
  //     formData.append('recipeName', recipeName)
  //     formData.append('img', recipeMainImg)
  //     formData.append('portion', portion)
  //     formData.append('portion', portion)
  //     formData.append('leadTime', leadTime)
  //     formData.append('setCgIngredient', categoryIg)
  //     formData.append('setCgSituation', categorySt)
  //     formData.append('level', level)
  //     formData.append('ingredient', JSON.stringify(ingredients))
  //     formData.append('step', JSON.stringify(recipeSequenceItems))
  //     console.log('check for Api data', formData)
  //   }

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
              accept="image/*"
              onChange={previewImg}
            />
          </div>

          <div className="recipe-box">
            <div className="item-title">레시피 제목</div>
            <input
              type="text"
              placeholder="예) 소고기 미역국"
              value={recipeName}
              onChange={(e) => {
                setRecipeName(e.target.value)
                console.log('rercipe title', recipeName)
              }}
            />
          </div>

          <div className="recipe-box">
            <div className="item-title">카테고리</div>
            <select
              className="select-item"
              onChange={(e) => {
                setCategoryIg(e.target.value)
              }}
            >
              <option value="none">{ingredientCategoryTitle}</option>
              {ingredientCategory.map((item) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            <select
              className="select-item"
              onChange={(e) => {
                setCategorySt(e.target.value)
              }}
            >
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
              <input
                className="infoInput"
                type="text"
                placeholder="인원"
                value={portion}
                onChange={(e) => {
                  setPortion(e.target.value)
                }}
              />
            </div>
            <div className="info-box">
              <div>시간</div>
              <input
                className="infoInput"
                type="text"
                placeholder="인원"
                value={leadTime}
                onChange={(e) => {
                  setLeadTime(e.target.value)
                }}
              />
            </div>
            <div className="info-box">
              <div>난이도</div>
              <input
                className="infoInput"
                type="text"
                placeholder="인원"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value)
                }}
              />
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
              {/* {recipeSuquenceItems} */}
              {recipeSequenceItems.map((item, index) => {
                return (
                  <div key={index} className="add-sequence-item">
                    <div className="add-sequence-item-title">{`Step ${item.stepNum}`}</div>

                    <input
                      className="add-sequence-item-input"
                      type="text"
                      placeholder="Example) Remove the fat from the beef and cut it into appropriate sizes."
                      value={item.des}
                      onChange={(e) =>
                        handleStepChange(index, 'des', e.target.value)
                      }
                    />

                    <input
                      id={`imageInput_${index}`}
                      className="add-sequence-item-img-input"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleStepChange(
                          index,
                          'imgUrl',
                          URL.createObjectURL(e.target.files[0]),
                        )
                      }
                    />
                    {item.imgUrl === '' && (
                      <label
                        htmlFor={`imageInput_${index}`}
                        className="add-sequence-item-img-input-btn"
                      >
                        +
                      </label>
                    )}
                    {item.imgUrl && (
                      <img
                        src={item.imgUrl}
                        alt={`Step ${item.stepNum}`}
                        className="recipe-step-image"
                      />
                    )}
                  </div>
                )
              })}

              <button
                className="add-sequence-item-btn"
                onClick={addRecipeSequenceBtnHandler}
              >
                순서 추가
              </button>
            </div>
          </div>
        </div>

        <div onClick={checkPostApiData}>저장</div>
      </div>
    </>
  )
}

export default UploadRecipe
