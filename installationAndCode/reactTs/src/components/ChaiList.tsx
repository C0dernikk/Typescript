import React from 'react'
import type {Chai} from "../../types.ts"
import ChaiCard from './ChaiCard.tsx'

interface ChaiListProps {
    items: Chai[]
}

export default function ChaiList({items}: ChaiListProps) {
  return (
    <div>
        {items.map((chai) => (
            <ChaiCard 
            key={chai.id}
            name={chai.name}
            price={chai.price}
            isSpecial={chai.price > 30}
            />
        ))}
    </div>
  )
}
