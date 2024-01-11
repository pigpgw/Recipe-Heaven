import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface StoreState {
  likedRecipes: number[]
  toggleLikedRecipe: (recipeId: number) => void
  isLiked: (recipeId: number) => boolean
  accessToken: string | null
  memberInfo: MemberInfo | null // memberInfo 필드 추가
  setAccessToken: (token: string | null) => void
  setMemberInfo: (info: MemberInfo | null) => void // setMemberInfo 함수 추가
  getAccessToken: () => string | null
  getMemberInfo: () => MemberInfo | null // getMemberInfo 함수 추가
  clearToken: () => void
  clearLikedRecipe: () => void
}

export interface MemberInfo {
  userId: number
  nickname: string
  // 필요한 경우 다른 필드 추가
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        likedRecipes: [],
        clearLikedRecipe: () => {
          set((state) => ({ likedRecipes: [] }))
        },
        isLiked: (recipeId: number) =>
          get().likedRecipes.includes(recipeId) ? true : false,
        toggleLikedRecipe: (recipeId: number) =>
          set((state) => ({
            likedRecipes: state.likedRecipes.includes(recipeId)
              ? state.likedRecipes.filter((id) => id !== recipeId)
              : [...state.likedRecipes, recipeId],
          })),
        accessToken: null,
        setAccessToken: (newToken) => {
          if (newToken === null || typeof newToken !== 'string') {
            console.error('유효하지 않은 토큰 형식입니다.')
          } else {
            set(() => ({ accessToken: newToken }))
          }
        },
        memberInfo: null,

        setMemberInfo: (info: MemberInfo | null) => {
          set((state: StoreState) => ({
            ...state,
            memberInfo: info,
          }));
        },
        clearToken: () => {
          set(() => ({ accessToken: null, memberInfo: null })) 
        },
        getAccessToken: () => get().accessToken,
        getMemberInfo: () => get().memberInfo,
      }),
      {
        name: 'mystore',
        getStorage: () => localStorage,
      },
    ),
  ),
)
