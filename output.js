const person = {
    fname: 'Abc',
    lname: 'S',
    print: function () {
        console.log(this.fname + this.lname);
    }
}
// This will print as normal function have this will be pointing to the object this.
console.log(person.print());



// -----------------------------


const person1 = {
    fname: 'Abc',
    lname: 'S',
    print: () => {
        console.log(this.fname + this.lname);
    }
}
// This will give undefined
console.log(person1.print());
