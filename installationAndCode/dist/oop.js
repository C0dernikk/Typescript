// class Chai {
//     flavour: string;
//     price: number;
//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this);
//     }
// }
// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "masala"
class Chai {
    flavour = "Masala";
    secretIngredient = "cardamom"; // Can be accessed within the class
    reveal() {
        return this.secretIngredient;
    }
}
const c = new Chai();
class Shop {
    shopName = "chai corner"; // can be accessed within the class and among inherited members
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
new Branch().getName; // Can access shopName via Branch
class Wallet {
    #balance = 100; // private
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
class Cup {
    capacity = 250; // You cannot change the value
    constructor(capacity) {
        if (capacity !== undefined)
            this.capacity = capacity;
    }
}
const cup1 = new Cup(300);
console.log(cup1.capacity);
// cup1.capacity = 400
const cup2 = new Cup();
console.log(cup2.capacity);
// Controlled gates
// '_' meant internal usage only for the given propery and
// if name of property and its getter/setters matches, it helps to avoid
// recursion
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const mChai = new ModernChai();
mChai.sugar = 3;
console.log(mChai.sugar);
//TypeScript automatically:
// Declares a class property named flavour
// Assigns the constructor argument to that property
class EkChai {
    flavour;
    static shopName = "chaiCode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName); // Static values are accessed by Class name
// Abstract class defines the methods and functionalities that would be present
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}
//Composition --> works like inheritance
class Heater {
    heat() {
    }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oop.js.map