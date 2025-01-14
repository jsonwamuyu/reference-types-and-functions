//     ## QUESTION 0NE
//     Sort the following array:
//          let names = [{name:"John"}, {name:"Jane"}, {name:"Doe"}];

function sortNames() {
    let names = [{ name: "John" }, { name: "Jane" }, { name: "Doe" }];
    return names.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sortNames());


function sortStudents() {
    let students = [
        { grade: "B", fullName: "James White" },
        { grade: "F", fullName: "Christopher James" },
        { grade: "C", fullName: "Lusyder Nyambura" },
        { grade: "D", fullName: "John Doe" },
        { grade: "A", fullName: "Nancy Doe" }
    ]
    return students.sort((fist, second) => first.grade.localeCompare(second.grade));
} 

console.log(sortStudents());

//      ## QUESTION TWO
//      Give the sum of the prices(try chaining methods):
//          [{price:10.99},{price:5.99},{price:29.99}]

function sumPrices() {
    let prices = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
    return prices.reduce((acc, price) => acc + price.price, 0);
}

console.log(sumPrices());

