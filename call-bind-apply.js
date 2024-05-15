// Call Bind And Apply
// Function Borrowing
// Resource https://www.youtube.com/watch?v=75W8UPQ5l7k


// Call -> // Object.funtionBorrowed.call.bindingthis
// Comma seprated Arguments like Object.funtionBorrowed.call(bindingthis, arg1, arg2)


const person = {
    fname: 'Abc',
    lname: 'S',
    print: function () {
        console.log(this.fname + this.lname);
    }
}

const person1 = {
    fname: 'Sachin',
    lname: 'Ten'
};


// Object.funtionBorrowed.call.bindingthis
person.print.call(person1);

function salary(){
    console.log('Sal');
}

salary.call(person1);


function printAddress(home){
    return this.fname + this.lname + home;
}

printAddress.call(person, 'Home')

// ---------------------------------------------


// apply -> // Object.funtionBorrowed.apply.bindingthis
// Comma seprated Arguments in array like Object.funtionBorrowed.call(bindingthis, [arg1, arg2])

printAddress.apply(person,['Home'])


// ---------------------------------------------

// bind -> return a copy of the method
// Comma seprated Arguments like Object.funtionBorrowed.bind(bindingthis, arg1, arg2)

let salaryUpdatedfn = printAddress.bind(person);

console.log(salaryUpdatedfn());