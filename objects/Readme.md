# JavaScript Inheritance and Prototypes

## Basic Concepts

* **Objects** in JavaScript can inherit properties and methods from other objects. This is achieved through prototypes.

* **Prototypes** are essentially the mechanism by which JavaScript objects inherit features from one another.

## Example Explained

### Defining Basic Structures

* **Person Function**: Acts as a constructor for creating new [`Person`]() objects with [`firstName`]() and [`lastName`]() properties.
```js 
function Person(firstName, lastName) { 
	this.firstName = firstName; 
	this.lastName = lastName; 
} 
```

* **Adding Methods to Person**: A method `getFullName` is added to `Person`'s prototype for returning the full name of the person.
```javascript 
Person.prototype.getFullName = function () { 
	return `${this.firstName} ${this.lastName}`; 
}; 
```

### Extending Functionality through Inheritance

* **EMP Function**: Represents a different entity, presumably an employee, with a method to generate a random employee ID.
```javascript
function EMP() {}

EMP.prototype.getEMPId = function () { 
	let empID = Math.random(); 
	return empID; 
}; 
```

* **Inheritance Setup**: The `Person` prototype is set to inherit from `EMP` prototype, allowing instances of `Person` to access methods defined in `EMP` prototype.
```javascript 
Object.setPrototypeOf(Person.prototype, EMP.prototype); 
```

### Implementation and Usage

* **Creating Instances**: Instances of [`Person`]() are created, which now also have access to the [`getEMPId`]() method due to the inheritance setup.
```javascript 
let p1 = new Person("John", "Doe"); 
console.log(p1.getFullName()); // Outputs the full name

let p2 = new Person("Jane", "Doe"); 
console.log(p2.getEMPId()); // Outputs a random employee ID
console.log(p2.getFullName()); // Outputs the full name 
```

### Additional JavaScript Concepts Demonstrated

* **Object.setPrototypeOf**: Used to set the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`.

* **Prototype Chain Modification**: The example demonstrates modifying the prototype chain of objects to achieve inheritance, a powerful feature that allows one object to inherit the properties and methods of another.

### Important Notes

* **Use of** **`Object.setPrototypeOf`**: While it's shown in the example, it's generally recommended to avoid changing the prototype of an object after it's been created due to performance reasons. Instead, use object literals or functions to set up the desired prototype chain from the start.

* **Prototypal Inheritance**: JavaScript's inheritance is different from classical inheritance models. Understanding the prototype chain is crucial for effective JavaScript development.