"use strict";
// Declaring object types
Object.defineProperty(exports, "__esModule", { value: true });
// Plain js object(TS infers)
const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
};
// Inline object type annotation
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 30,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup; //Assigning something more to if does not give error
console.log(smallCup);
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew = coffee; // sometime we want it to be error, so careful
const u1 = {
    username: "Nikhil",
    password: "123" // Comment it and see
};
// Partial<T> makes all property of T optional
// This function can accept any subset of Chai properties
const updateChai = (updates) => {
    console.log("Updating chai with,", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({}); // Can be used to depict No change
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "masala chai",
    quantity: 3
});
const chaiInfo = {
    // name: "ice tea",
    price: 3
};
//# sourceMappingURL=objectTS.js.map