"use client"

import { create } from 'zustand'

type CursorState = {
    cursorType: "default" | "BlogCard"
    cursorText: string
    setCursorText: (cursorText: string) => void
    setCursorType: (cursorType: "default" | "BlogCard" | undefined) => void

}

export const useCursorState = create<CursorState>((set) => ({
    cursorType: "default",
    cursorText : "",
    setCursorText: (cursorText: string) => set({cursorText}),
    setCursorType: (cursorType: "default" | "BlogCard" | undefined) => set({cursorType})
}))