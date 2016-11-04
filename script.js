function Person() {
    this.name = 'Max';
    this.greet = function () {
        console.log('Hello from within constructor, ' + this.name);
    };
}

Person.prototype.greet2 = function () {
    console.log('Hello ' + this.name);
};

var person = new Person();

person.greet();
person.greet2();