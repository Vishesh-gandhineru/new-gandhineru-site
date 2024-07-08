"use client"

import React from 'react'
import {motion , Reorder} from 'framer-motion'
import { useState } from 'react'

const ShflleCard = () => {
    const [items, setItems] = useState([0, 1, 2, 3])
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
    {items.map((item) => (
      <Reorder.Item key={item} value={item}>
        {item}
      </Reorder.Item>
    ))}
  </Reorder.Group>
  )
}

export default ShflleCard