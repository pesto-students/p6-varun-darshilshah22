function introduce(fname, lname) {
    return "My name is " + this.fname + " " + this.lname;
}

//bind method
const intro = introduce.bind({fname: 'Darshil', lname: 'Shah'});
console.log(intro());

//call method
var person1 = {fname: 'Rushil', lname: 'Shah'};
var person2 = {fname: 'Joe', lname: 'Adam'};
console.log(introduce.call(person1));
console.log(introduce.call(person2));

//apply method
console.log(introduce.apply(person1));


