"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 2);
function getChaiPrice() {
    return 22;
}
// return type is multiple (infered)
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
// Void
function logChai() {
    console.log("Chai is ready");
}
// Optional
function orderChai(type) {
    if (type) {
        console.log(type);
    }
    else {
        console.log("Nothing passed");
    }
}
orderChai();
orderChai("masala");
// Default
function orderTea(type = "Milk Tea") {
    console.log("Your order:", type);
}
orderTea("Ice");
orderTea();
// Parameter ordering - Required, Default, Optional
// composite types
function createChai(order) {
    return 3;
}
//# sourceMappingURL=functionTs.js.map