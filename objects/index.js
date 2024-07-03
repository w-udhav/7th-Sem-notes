// Person
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Employee
function EMP() {}

EMP.prototype.getEMPId = function () {
  let empID = Math.random();
  return empID;
};

// Inheritance
// Person.prototype.__proto__ = EMP.prototype;
Object.setPrototypeOf(Person.prototype, EMP.prototype);

// ====================================================================

// Implementation
let p1 = new Person("John", "Doe");
console.log(p1.getFullName());

let str = "abc";
console.log(Object.getPrototypeOf(str));

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
};

Object.setPrototypeOf(obj1, obj2);
console.log(obj1);

let p2 = new Person("Jane", "Doe");
console.log(p2.getEMPId());
console.log(p2.getFullName());
