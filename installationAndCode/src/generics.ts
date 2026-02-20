function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(34)
wrapInArray({flavour: "Ginger"})

function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
}

pair("masala", "test")
pair("masala", "masala")
pair("masala", {flavour: "lemon"})

// They are used to design general templates

//Generic interface

interface Box<T> {
    content: T
}

const stringBox: Box<string> = {content: "cardboard"}
const numberBox: Box<number> = {content: 37}

 // they support class, partial, omit, picks and many things

// Real world usage

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}

