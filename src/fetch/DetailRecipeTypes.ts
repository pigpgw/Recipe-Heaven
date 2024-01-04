export interface Ingredient {
  item: string
  unit: string
}

export interface RecipeSequenceItem {
  stepNum: number
  des: string
  imgUrl: string
}

export interface Step {
  des: string
  imgUrl: string
  stepNum: number
}

export interface RecipeDetail {
  recipeId: number
  recipeName: string
  img: string
  portion: number
  leadTime: number
  level: number
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  ingredient: Ingredient[]
  step: Step[]
  reviews: any[]
}
