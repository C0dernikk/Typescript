type chaiOrder = {
    type: string
    sugar: number
    strong: boolean
}

function makeChai(order: chaiOrder){
    console.log(order);
}

function serveChai(order: chaiOrder){
    console.log(order);
}

// implements type does not work with Union and primitive type
type teaReceipe = {
    water: number
    milk: number
}
// Ts only checks whether water, milk is present ensuring structural check
// A class can implement a type alias if that type describes an object structure.

//Interface 
interface tReceipe {
    water: number
    milk: number
}
// can use teaReceipe
class MasalaChai implements tReceipe{
    water = 100
    milk = 50
}

// These string are known as literal types
interface cupSize{
    size: "small" | "large"
}
// Here we don't know what is the shape or structure
//In classes we use interface mostly, only normal object type can be used if wanted
class Chai implements cupSize {
    size: "small" | "large" = "large";
}

// Cannot implements this union type object
// type Response = {ok : true} | {ok: false}
// class myRes implements Response{
//     ok: boolean = true
// }


// Intersection
type BaseChai = {teaLeaves: number}
type AddOn = {clove: number}

type kadakChai = BaseChai & AddOn

const cup: kadakChai = {
    teaLeaves: 2,
    clove: 1
}


// Optional

type User = {
    username: string,
    bio?: string
}

const user1: User = {
    username: "Nikhil"
}

const user2: User = {
    username: "realnikk",
    bio: "He is the Og"
}

//readOnly

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "MasterJI",
    version: 1
}
// cfg.appName = "fasdf"
// cfg.version = 2