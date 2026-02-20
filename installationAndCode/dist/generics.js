"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(34);
wrapInArray({ flavour: "Ginger" });
function pair(a, b) {
    return [a, b];
}
pair("masala", "test");
pair("masala", "masala");
pair("masala", { flavour: "lemon" });
const stringBox = { content: "cardboard" };
const numberBox = { content: 37 };
const res = {
    status: 200,
    data: { flavour: "masala" }
};
//# sourceMappingURL=generics.js.map