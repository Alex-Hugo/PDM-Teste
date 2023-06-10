import {create} from 'zustand';

const themeStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));

export default themeStore;