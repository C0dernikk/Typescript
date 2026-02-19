// Declaring object types

// Plain js object(TS infers)
const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

// Inline object type annotation
let tea: {
    name: string
    price: number
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

// type alias for object shape
type Tea = {
    name: string
    price: number
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 30,
    ingredients: ["ginger", "tea leaves"]
}


// Duck type - If it looks like a duck, walks like a duck it is a duck.
type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup //Assigning something more to if does not give error
console.log(smallCup);

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "arabica"}
const chaiBrew: Brew = coffee // sometime we want it to be error, so careful

//Find missing

type User = {
    username: string
    password: string
}

const u1: User = {
    username: "Nikhil",
    password: "123" // Comment it and see
}

// Type composition, nested object typing,
//  data modeling using type aliases, structural typing
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address;
}


type Chai = {
    name: string
    price: number
    isHot: boolean
}

// Partial<T> makes all property of T optional
// This function can accept any subset of Chai properties
const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with,", updates);
}

updateChai({price: 25})
updateChai({isHot: true})
updateChai({})// Can be used to depict No change
// As it makes all property optional, empty object is valid
// If we dont want empty objects to be allowed use AtLeastOne<T>
// type AtLeastOne<T> = {
//     [K in keyof T]: Pick<T, K>
// }[keyof T];

// Required
type ChaiOrder = {
    name?: string
    quantity?: number

}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "masala chai",
    quantity: 3
})

// Pick
type Chaha = {
    name?: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChahaInfo = Pick<Chaha, "name" | "price">

const chaiInfo: BasicChahaInfo = {
    // name: "ice tea",
    price: 3
}

// Omit
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChai = Omit<ChaiNew, "secretIngredients">


