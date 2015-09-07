# LinkedList-Javascript
How to implement Linked list in JS. 

Added basic functions for LinkedList 
- Push, 
- Pop, 
- Shift, 
- Unshift, 
- removeDuplicates, 
- removeSpecific 

Example

var ll = new linkedlist();
ll.push(3); // ll -> 3
ll.push(5); // ll -> 3,5
ll.push(11); // ll -> 3,5,11
ll.push(8); // ll -> 3,5,11,8

ll.pop(); // returns 8, ll -> 3,5,11
ll.push(8); // ll -> 3,5,11,8

ll.shift(9); // ll -> 9,3,5,11,8
ll.shift(6); // ll -> 6,9,3,5,11,8
ll.unshift(); // returns 6, ll -> 9,3,5,11,8

ll.shift(7); // ll -> 7,9,3,5,11,8
ll.shift(8); // ll -> 8,7,9,3,5,11,8

ll.removeDuplicate(); // ll -> 8,7,9,3,5,11
ll.removeSpecific(5); // ll -> 8,7,9,3,11
