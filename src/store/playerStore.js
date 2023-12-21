import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playList: null, song: null, songs: []},
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic})
}))