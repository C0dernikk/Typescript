"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = 44;
// we can access any property or method, to get suggestion
// and make sure we know the type we use forceful assertion
console.log("here", response.length);
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString); // JSON.parse() return any
console.log(bookObject.name);
const inputElement = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
// value.toUpperCase()
let newValue; // Forces narrowing and validation
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase(); // needs guard
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai aur code";
const strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log(`Redirecting to admin page`);
        return;
    }
    if (role === "user") {
        console.log(`Redirecting to user page`);
        return;
    }
    role; // this can be present and can be hovered to check,
    // if some types are remaining, if not then it has type never
}
// return value never means either execution stops(throw error) or never completes
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map