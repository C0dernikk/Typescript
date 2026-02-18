// Typechecker are present which helps in knowing what datatype to pass
// Type of return value
// Ensures consistency and boosts collabration, reduces bugs at early stage
// Ts --> Process --> Js --> run it using node or bun

function greet(name: string): string {
    return `Hello ${name}`;
}

console.log(greet("Nikhil"));
// console.log(greet(34));