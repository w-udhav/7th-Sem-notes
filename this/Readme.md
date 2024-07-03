# JavaScript `this`, `call`, `apply`, and `bind` Methods

## Understanding `this` in JavaScript

- `this` refers to the context in which the current code is executing. In the global scope, `this` refers to the global object (`window` in a web browser, `global` in Node.js).

## Objects and Methods

- **Objects** can have properties and methods. Methods can use `this` to access the object's properties.

### Example Objects

```javascript
obj = {
  name: "Object 1",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  getName: function () {
    console.log(this.name);
  },
};
```
* `obj.greet()` and `obj.getName()` use [`this`]() to refer to `obj` itself.

<br>

## `call` Method
* The `call` method calls a function with a given [`this`]() value and arguments provided individually.

### Usage

```js
obj.getName.call(obj2); 
// Sets `this` to `obj2` in `getName` method
```

* This allows you to call a method belonging to one object on another object.


<br>

## `apply` Method
* Similar to `call`, but arguments are passed as an array

### Usage
```js
obj.getName.apply(obj2); 
// Similar to `call` but for array-like arguments
```

<br>

## `bind` Method
* Creates a new function that, when called, has its [`this`]() keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### Usage
```js
let getName = obj.getName.bind(obj3);
getName(); // `this` is set to `obj3`
```

* Useful for ensuring that a function has the correct [`this`]() value in callback scenarios.

### Practical Example with Callback

```js
function foo(cb) {
	console.log("Function foo with cb");
	cb();
}

foo(obj.getName.bind(obj2)); // Ensures [`cb`]()
```

* Demonstrates using `bind` to set the [`this`]() context for a callback function.



<br>
<br>

### Key Takeaways

* [`this`]() provides context for function execution.
* `call`, `apply`, and `bind` are powerful methods to control the value of [`this`]() in JavaScript functions.