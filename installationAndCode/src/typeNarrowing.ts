function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

// finding truthiness
// Rule - Optional parameter comes after required parameters
function serveChai(msg?: string){ // In this empty string are also falsy
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default`
}

//Option 2 - if (msg !== undefined)
//Option 3
function serveTea(msg?: string) {
    return `Serving ${msg ?? "default"}`
}


//Exhaustive checks
function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small chai...`
    }
    if(size == "medium" || size === "large"){
        return `make extra chai`
    }
    return `chai size: ${size}`
}

//typeGuards - (typeof, instanceof, property in object, custom guards).

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}

class Cutting{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

// If function returns true, then obj can be treated as ChaiOrder.
// Custom guard
function isChaiOrder(obj: any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala", spiceLevel: number}
type GingerChai = {type: "ginger", amount: number}
type ElaichiChai = {type: "elaichi", aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        
        case "ginger":
            return `Ginger chai`
            break;
        
        case "elaichi":
            return `Elaichi chai`
            break;
        
        default:
            break;
    }
}
// in operator guard
function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //Do something
    }
}

// Unknown vs any
// Follow this link for more: 
// https://dev.to/sachinchaurasiya/type-safety-in-typescript-unknown-vs-any-55c0

function processData(data: unknown): string {
  if (typeof data === 'string') {
    return data.toUpperCase();
  } else {
    // Handle other cases appropriately
    return "Invalid data";
  }
}

// No compilation error
const result = processData("Hello, TypeScript!");


function processDynamicData(data: any): string {
  // No compilation error
  return data.toUpperCase(); 
}

// No compilation error, works as expected
const result1 = processDynamicData("Hello, TypeScript!"); 
console.log(result1); // Outputs: "HELLO, TYPESCRIPT!"

// No compilation error, but will cause a runtime error
const result2 = processDynamicData(12345); 
console.log(result2); // Error: data.toUpperCase is not a function


function isStringArray(arr: unknown): arr is string[]{
    return(
        Array.isArray(arr) &&
        arr.every(item => typeof item == "string")
    )
}


