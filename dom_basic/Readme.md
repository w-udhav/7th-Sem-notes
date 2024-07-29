# Event Propogation


Event propagation refers to the process of an event being passed through a hierarchy of elements or components in a software system. When an event occurs, such as a user interaction or a system event, it is typically propagated from the source of the event to its parent elements or components, and potentially further up the hierarchy.

Event propagation allows different elements or components in a software system to respond to events in a coordinated manner. It enables event handlers to be defined at different levels of the hierarchy, allowing for flexibility and modularity in the design of software systems.

In summary, event propagation is the mechanism by which events are passed through a hierarchy of elements or components in a software system, allowing for coordinated event handling and enabling modular and flexible software design.

<b>Phases involved:</b>
1. `Capturing`
2. `Target`
3. `Bubbling`

### Capturing

The capturing phase in the DOM (Document Object Model) is the first phase of event propagation. During this phase, the event is captured by the outermost element and then propagated through its ancestors towards the target element. This means that the event handlers attached to the parent elements are triggered before the event reaches the target element. The capturing phase is useful for implementing event delegation and allows for handling events at a higher level in the DOM hierarchy. It provides a way to capture events on multiple elements with a single event handler.


### Target
The target phase in the DOM (Document Object Model) is the second phase of event propagation. During this phase, the event reaches the target element, which is the element on which the event was originally triggered. The event handlers attached to the target element are then executed. This phase allows for specific actions to be performed on the target element based on the event that occurred. For example, if a button is clicked, the target phase would execute the event handler associated with that button. It is an important phase for implementing interactive functionality in web applications.


### Bubbling

The bubbling phase in the DOM (Document Object Model) is the third and final phase of event propagation. After the target phase, the event bubbles up through the ancestors of the target element. This means that the event handlers attached to the parent elements are triggered after the event reaches the target element. The bubbling phase is useful for implementing global event handling and allows for handling events at a higher level in the DOM hierarchy. It provides a way to capture events on multiple elements with a single event handler. This phase is commonly used for implementing event delegation and allows for efficient event handling in complex web applications.

<br/>

#### Example

To better understand event propagation, let's consider an example with a nested HTML structure:

```html
<div id="outer">
	<div id="inner">
		<button id="button">Click me!</button>
	</div>
</div>
```

In this example, we have an outer `<div>` element containing an inner `<div>` element, which in turn contains a button.

Now, let's attach event handlers to each element using JavaScript:

```javascript
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');

outer.addEventListener('click', () => {
	console.log('Outer div clicked');
});

inner.addEventListener('click', () => {
	console.log('Inner div clicked');
});

button.addEventListener('click', () => {
	console.log('Button clicked');
});
```

When we click the button, the event propagation process begins. Here's how it unfolds:

1. Capturing Phase: The event starts at the outermost element (`<div id="outer">`) and propagates through its ancestors towards the target element (`<button id="button">`). During this phase, the event handler attached to the outer `<div>` is triggered, and we see the message "Outer div clicked" in the console.

2. Target Phase: The event reaches the target element (`<button id="button">`). The event handler attached to the button is executed, and we see the message "Button clicked" in the console.

3. Bubbling Phase: After the target phase, the event bubbles up through the ancestors of the target element. During this phase, the event handler attached to the inner `<div>` is triggered, and we see the message "Inner div clicked" in the console.

By understanding event propagation, we can leverage it to handle events efficiently and implement functionality at different levels of the DOM hierarchy.

<br/>

# Event Delegation

Event delegation is a technique in web development that allows for handling events on multiple elements with a single event handler. Instead of attaching event handlers to individual elements, event delegation involves attaching the event handler to a parent element that contains the target elements. When an event occurs on one of the target elements, the event bubbles up to the parent element, where the event handler is triggered. This approach is particularly useful when working with dynamically generated or large numbers of elements, as it reduces the number of event handlers needed and improves performance. Event delegation promotes a more efficient and scalable way of handling events in web applications.
