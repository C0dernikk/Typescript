"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [20, 25];
const price = [3, 4, 8];
const ratingReview = [
    { stars: 4, description: "I love masala tea" },
    { stars: 4.5, description: "I like adrak" }
];
//Each element can be either chai or coffee
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 10 },
    { type: "Espresso", name: "lemon" }
];
// menu.pop() - gives suggestion
// Readonly array
const cities = ["Delhi", "Mumbai"];
const menu1 = [
    { kind: "chai", name: "Masala", price: 15 },
    { kind: "chai", name: "Adrak", price: 10 },
    { kind: "coffee", type: "Espresso" }
];
// 2d array
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
// Can be used to have strict ordered types
let chaiTuple;
chaiTuple = ["Ice", 2, true];
// chaiTuple = ["masala", false, 4] -- order matters
let userInfo;
userInfo = ["Nikhil", 37];
userInfo = ["Nikhil", 37, true];
// Readonly tupples
const location = [28.4, 34.2];
// Named tupples -- Names are for developer clarity only.
const chaiItems = ["Masala", 20];
//Enums
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.MEDIUM;
// Standard practice to use ALL CAPS for enum Values
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102
})(Status || (Status = {}));
const status = Status.PENDING;
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log("Making", type);
}
makeChai(ChaiType.GINGER);
// makeChai("ginger") -- we can only select from enum 
// Not suggested, we keep all the member to be of same type
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "Chai";
})(RandomEnum || (RandomEnum = {}));
// Can use const -- No enum object is generated(small bundle size, faster runtime)
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MEDIUM"] = 2] = "MEDIUM";
    Sugar[Sugar["HIGH"] = 3] = "HIGH";
})(Sugar || (Sugar = {}));
const s = Sugar.MEDIUM;
// as tupple is array only, hence careful
// Because Ts still thinks t[2] is invalid
let t = ["chai", 10];
t.push("extra");
//# sourceMappingURL=arrayEnum.js.map