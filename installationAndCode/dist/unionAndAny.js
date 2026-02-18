"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '1M';
let apiStatus = 'pending';
let airlineSeat = 'aisle';
airlineSeat = 'window';
const orders = ["12", "44", 3, true];
let currOrder;
// All possible execution path is analysed
for (const order of orders) {
    if (order === "44") {
        currOrder = order;
        break;
    }
    currOrder = "33";
}
console.log(currOrder);
//# sourceMappingURL=unionAndAny.js.map