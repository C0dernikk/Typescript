let response: any = "44"
// we can access any property or method, to get suggestion
// and make sure we know the type we use forceful assertion
let numericLength: number = (response as string).length
console.log(numericLength);

type Book = {
    name: string
}

let bookString = '{"name": "who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement

let value: any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
if(typeof newValue === "string"){
    newValue.toUpperCase() // needs guard
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error)
}


const data: unknown = "chai aur code"
const strData: string = data as string

type Role = "admin" | "user" | "moderator"

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log(`Redirecting to admin page`);
        return
    }
    if(role === "user"){
        console.log(`Redirecting to user page`);
        return
    }
    role; // this can be present and can be hovered to check,
    // if some types are remaining, if not then it has type never
}
// return value never means either execution stops(throw error) or never completes
function neverReturn(): never {
    while(true){}
}


