import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState<number | null>(null);

  return (
    <div>
        <p>Cups ordered: {count}</p>
        <button
        onClick={() => setCount((prev) => (prev ?? 0) + 1)}
        >Order one more</button>
    </div>
  )
}
