## Web API

* ```localStorage```
* ```fetch```
* ```document```
* ```setTimeout```

## Callstack
```
The call stack in JavaScript is a data structure that keeps track of function calls. It operates in a Last-In-First-Out (LIFO) manner, executing functions in the order they were called.
```


## Callback queue
```
The program is passed into the callback queue for execution. The asynchrnous code is forwarded to the webAPI.
```

## Eventloop
```
The event loop in JavaScript is responsible for handling asynchronous operations and ensuring that they are executed in the correct order. It continuously checks for any pending tasks in the callback queue and executes them one by one.

When an asynchronous operation, such as a setTimeout or an AJAX request, is encountered in the code, it is moved to the Web API for execution. Once the operation is completed, it is placed in the callback queue.

The event loop constantly checks if the call stack is empty. If it is, it takes the first task from the callback queue and pushes it onto the call stack for execution. This process continues until all tasks in the callback queue are processed.

This mechanism allows JavaScript to handle non-blocking operations efficiently, ensuring that the program remains responsive even when performing time-consuming tasks. It enables the execution of code in a single-threaded environment while still supporting asynchronous behavior.

Understanding the event loop is crucial for writing efficient and responsive JavaScript code, especially when dealing with tasks that involve network requests, timers, or other asynchronous operations.
