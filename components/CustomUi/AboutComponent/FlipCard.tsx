"use client"

import React from 'react'
import {motion} from 'framer-motion'


type FlipCardProps = {
    children: React.ReactNode
}

export function FlipCard () {
  return (
    <div>
        <div>
            
        </div>
    </div>
  )
}


export function Front({children} : FlipCardProps) {
    return (
        <div>
            <h1>Front</h1>
        </div>
    )
}

export function Back({children} : FlipCardProps) {
    return (
        <div>
            <h1>Back</h1>
        </div>
    )
}