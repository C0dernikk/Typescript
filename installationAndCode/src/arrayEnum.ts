const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [20, 25]
const price: Array<number> = [3, 4, 8]

type ratingDetails = {
    stars: number;
    description: string;
}

const ratingReview: Array<ratingDetails> = [
    {stars: 4, description: "I love masala tea"},
    {stars: 4.5, description: "I like adrak"}
]

// Another syntax
// const ratingReview: ratingDetails[] = [
//     {stars: 4, description: "I love masala tea"},
//     {stars: 4.5, description: "I like adrak"}
// ]

type Chai = {
    name: string;
    price: number;
}
type Coffee = {
    type: string;
}
//Each element can be either chai or coffee
const menu: (Chai | Coffee)[]= [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 10},
    {type: "Espresso", name: "lemon"}
]
// menu.pop() - gives suggestion

// Readonly array
const cities: readonly string[] = ["Delhi", "Mumbai"]
// cities.pop() - no suggestion

//Discriminated union
type Chai1 = {
  kind: "chai";
  name: string;
  price: number;
};

type Coffee1 = {
  kind: "coffee";
  type: string;
};

const menu1: (Chai1 | Coffee1)[] = [
  { kind: "chai", name: "Masala", price: 15 },
  { kind: "chai", name: "Adrak", price: 10 },
  { kind: "coffee", type: "Espresso" }
];

// 2d array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]
// Can be used to have strict ordered types
let chaiTuple: [string, number, boolean];
chaiTuple = ["Ice", 2, true]
// chaiTuple = ["masala", false, 4] -- order matters

let userInfo: [string, number, boolean?]
userInfo = ["Nikhil", 37];
userInfo = ["Nikhil", 37, true];

// Readonly tupples
const location: readonly [number, number] = [28.4, 34.2]

// Named tupples -- Names are for developer clarity only.

const chaiItems: [name: string, price: number] =["Masala", 20]

//Enums

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM

// Standard practice to use ALL CAPS for enum Values
enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

const status = Status.PENDING

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log("Making", type);
}

makeChai(ChaiType.GINGER)
// makeChai("ginger") -- we can only select from enum 

// Not suggested, we keep all the member to be of same type
enum RandomEnum {
    ID = 1,
    NAME = "Chai"
}


// Can use const -- No enum object is generated(small bundle size, faster runtime)
const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugar.MEDIUM

// as tupple is array only, hence careful
// Because Ts still thinks t[2] is invalid
let t: [string, number] = ["chai", 10]
t.push("extra")






