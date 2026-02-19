function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number{
    return 22
}

// return type is multiple (infered)
function makeOrder(order: string){
    if(!order) return null
    return order
}

// Void
function logChai(): void {
    console.log("Chai is ready");   
}

// Optional
function orderChai(type?:string): void {
    if(type){
        console.log(type);
    }
    else{
        console.log("Nothing passed");
    }   
}

orderChai()
orderChai("masala")

// Default
function orderTea(type: string = "Milk Tea"){
    console.log("Your order:", type);
}

orderTea("Ice")
orderTea()

// Parameter ordering - Required, Default, Optional

// composite types
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number{
    return 3
}
