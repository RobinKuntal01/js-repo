//date 

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

console.log(
    myDate.toLocaleString('default', {
        dateStyle:"full"
    })
); 

console.log(
    myDate.toLocaleString('default', {
        era:"long"
    })
); 