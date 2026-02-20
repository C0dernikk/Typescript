import React, { useState } from 'react'

interface OrderFormProps {
    onSubmit(order: {name: string; cups: number}): void
}

function OrderForm({onSubmit}: OrderFormProps) {
    const [name, setName] = useState<string>("masala")
    const [cups, setCups] = useState<number>(1)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit({name, cups})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='chaiName'>Chai Name</label>
        <input
        id="chaiName"
        type='string'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
        }
        />
        <label htmlFor='cups'>Cups</label>
        <input
        id='cups'
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value) || 0)
        }
        />
        <button
        type='submit'
        >Place order</button>
    </form>
  )
}

export default OrderForm