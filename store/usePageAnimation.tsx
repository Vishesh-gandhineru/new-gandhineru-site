"use client"

import { create } from 'zustand'

type AnimationState = {
    startAnimation: boolean
    setStartAnimation: (startAnimation: boolean ) => void

}

export const usePageAnimation = create<AnimationState>((set) => ({
    startAnimation: false,   
    setStartAnimation: (startAnimation: boolean) => set({startAnimation})
}))