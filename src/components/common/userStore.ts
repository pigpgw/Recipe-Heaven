import create from 'zustand';

interface UserState {
    userInfo: {
      username: string;
    };
    setUserInfo: (userInfo: { username: string }) => void;
    token: string | null;
    setToken: (token: string | null) => void;
  }

const useUserStore = create<UserState>((set) => ({
    userInfo: { username: '' },
    setUserInfo: (userInfo) => set({ userInfo }),
    token: null,
    setToken: (token) => set({ token }),
  }));
  
  export default useUserStore;