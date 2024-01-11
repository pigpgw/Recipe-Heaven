// FIXME 백엔드에서 전달받기 전이라, 일단 예시로 작성했습니다.

export interface Recipe {
  // 레시피 상세
  id: string
}

export interface Comment {
  reviewId: number
  star: number
  comment: string
  userId: string
  recipeId: number
  deletedAt: null
  updatedAt: Date
  createdAt: Date
}

export interface MyComment {
  reviewId: number
  star: number
  comment: string
  userId: string
  deletedAt: null
  updatedAt: Date
  createdAt: Date
  recipeName: string
  recipeImage: string
}

// 좋아요한 레시피 임시
export interface TempRecipe {
  id: number
  title: string
  body: string
  userId: number
}

// 레시피 목록의 카드UI에 들어갈 자료
export interface RecipeCard {
  recipeId: number
  recipeName: string
  image: string
  userId: string
  createdAt: Date
  aveStar: number
  reviews: Array<string>
}

// 키워드로 검색 시
export interface ListBySearchAPIResponse {
  id: string
  recipe: RecipeCard[]
}

// 카테고리로 검색 시
export interface ListByCategoryAPIResponse {
  id: string
  mainCategory: string
  subCategory: string
  recipe: RecipeCard[]
}
