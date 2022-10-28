function Person(){
}

Person.prototype.initialize = function(name , age){
    this.name = name;
    this.age = age;
}

function Teacher(name , age){
    Person.call(this , name , age);
}
Object.setPrototypeOf( Teacher.prototype , Person.prototype );

Teacher.prototype.teach = function(subject){
    console.log( this.name + " is now teaching " + subject + ".");
}

const teacher1 = new Teacher();
teacher1.initialize("Darshil" , 23);
teacher1.teach('JS');