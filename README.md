1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer: getElementById: It selects an element by its id and returns a single element object.
   getElementsByClassName: It selects all elements with the given class name, and returns an HTML collection.
   querySelector: It selects the first matching element using a CSS selector and returns a single element.
   querySelectorAll: It selects all matching elements using a CSS selector and returns a NodeList.

2. How do you create and insert a new element into the DOM?
   Answer: using this method 'document.createElement().'

3. What is Event Bubbling? And how does it work?
   Answer: It is a mechanism in the DOM where, when an event occurs in a child element, that event first acts on the element, then moves up its parent, grandparent, and document.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer: Event Delegation is a method where we place a single event listener on their parent element, rather than having separate event listeners on each child element. This works because of Event Bubbling.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer: These two methods are related to events, but their work is different.
   preventDefault() stops the default browser behaviour of the element, and stopPropagation() does not allow the event to bubble up to the parent.
 
