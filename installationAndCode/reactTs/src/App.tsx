import './App.css'
import ChaiCard from './components/ChaiCard.tsx'
import Counter from './components/Counter.tsx'
import ChaiList from './components/ChaiList.tsx'
import Card from './components/Card.tsx'
import type { Chai } from '../types.ts'
import OrderForm from './components/orderForm.tsx'

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 15},
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard 
        name="headphones"
        price={5000}
        />
        <ChaiCard 
        name="iPhone"
        price={90000}
        isSpecial={true}
        />
        <Counter />
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm 
        onSubmit={(order) => {
          console.log("Placed", order.name, order.cups);
        }}
        />
      </div>
      <div>
        <Card 
        title="Chai aur Typescript"
        footer={<button>Order Now</button>}
        />
      </div>
    </>
  )
}

export default App
