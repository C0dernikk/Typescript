"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}
// finding truthiness
// Rule - Optional parameter comes after required parameters
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default`;
}
//Option 2 - if (msg !== undefined)
//Option 3
function serveTea(msg) {
    return `Serving ${msg ?? "default"}`;
}
//Exhaustive checks
function orderChai(size) {
    if (size === "small") {
        return `Small chai...`;
    }
    if (size == "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai size: ${size}`;
}
//typeGuards - (typeof, instanceof, property in object, custom guards).
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
// If function returns true, then obj can be treated as ChaiOrder.
// Custom guard
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "ginger":
            return `Ginger chai`;
            break;
        case "elaichi":
            return `Elaichi chai`;
            break;
        default:
            break;
    }
}
// in operator guard
function brew(order) {
    if ("spicelevel" in order) {
        //Do something
    }
}
// Unknown vs any
// Follow this link for more: 
// https://dev.to/sachinchaurasiya/type-safety-in-typescript-unknown-vs-any-55c0
function processData(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    else {
        // Handle other cases appropriately
        return "Invalid data";
    }
}
// No compilation error
const result = processData("Hello, TypeScript!");
function processDynamicData(data) {
    // No compilation error
    return data.toUpperCase();
}
// No compilation error, works as expected
const result1 = processDynamicData("Hello, TypeScript!");
console.log(result1); // Outputs: "HELLO, TYPESCRIPT!"
// No compilation error, but will cause a runtime error
const result2 = processDynamicData(12345);
console.log(result2); // Error: data.toUpperCase is not a function
function isStringArray(arr) {
    return (Array.isArray(arr) &&
        arr.every(item => typeof item == "string"));
}
//# sourceMappingURL=typeNarrowing.js.map