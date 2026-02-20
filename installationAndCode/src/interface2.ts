// Interface vs Type

// Feature 	             Interface	    Type

// Object shape	              ✅	       ✅
// Declaration merging	      ✅	       ❌
// Union types	              ❌	       ✅
// Tuple types	              ❌	       ✅
// Mapped types	              ❌	       ✅
// Implements in class	      ✅	       ✅
// Extendable	             extends	  &

interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavour: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {id: 1, name: "chaiCode caffe"}
// s.id = 2

interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

// Index signature

interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 3.8,
    adrak: 4.7
}

// merge

interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: "Nikhil",
    age: 22
}

// Manual merging

interface A {a: string}
interface B {b: string}

interface C extends A, B {}
 
