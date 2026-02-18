// Type inference - Implicitly set the type,
//  on the basis of possible incoming values

let drink = "chai"
let cups = Math.random() > 0.5 ? 5 : "5";

// Type annotation - Explicitly set the type
// Better for exports, parameters, apis.

let chaiFlavour: string = "masala chai"
let cntOrder: number = 3
let isPresent: boolean = false
