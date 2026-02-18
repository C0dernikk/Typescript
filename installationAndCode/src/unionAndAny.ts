let subs: number | string = '1M'

let apiStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'window'

const orders = ["12", "44", 3, true]

let currOrder: string | undefined;
// All possible execution path is analysed
for (const order of orders) {
    if(order === "44"){
        currOrder = order;
        break
    }
    currOrder = "33"
}

console.log(currOrder);
