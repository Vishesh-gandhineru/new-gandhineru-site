"use client"

import { create } from 'zustand'

type CursorState = {
    cursorType: "default" | string
    cursorText: string
    setCursorText: (cursorText: string) => void
    setCursorType: (cursorType: "default" | string ) => void

}

export const useCursorState = create<CursorState>((set) => ({
    cursorType: "default",
    cursorText : "",
    setCursorText: (cursorText: string) => set({cursorText}),
    setCursorType: (cursorType: "default" | string) => set({cursorType})
}))