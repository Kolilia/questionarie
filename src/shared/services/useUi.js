import { create } from "zustand";

export const useUi = create((set) => ({
  showFinal: false,
  showPokolenies: false,
  pictures: [],
  step: 0,
  quesRes: {
    alfa: 0,
    bumer: 0,
    mil: 0,
    xceri: 0,
    zumers: 0,
  },
  updateStep: (payload) => set((state) => ({ ...state, step: payload })),
  updateShowPokolenies: (payload) =>
    set((state) => ({ ...state, showPokolenies: payload })),
  updateShowFinal: (payload) =>
    set((state) => ({ ...state, showFinal: payload })),
  updatePicture: (payload) =>
    set((state) => ({ ...state, pictures: [...state.pictures, payload] })),
  updateQuesRes: (key) =>
    set((state) => ({
      ...state,
      quesRes: { ...state.quesRes, [key]: state.quesRes[key] + 1 },
    })),
}));
