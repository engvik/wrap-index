# wrap-index
A function to keep an index within bounds of an array by wrapping around if out of bounds.

## Install

```
npm install wrap-index
```

## Usage examples

```js
const arr = ['a', 'b', 'c'];

// Return the wrapped index:
wrapIndex(0, arr.length); // Output: 0
wrapIndex(5, arr.length); // Output: 2

// Return the wrapped value:
wrapIndex(0, arr);        // Output: a
wrapIndex(5, arr);        // Output: c
```

```js
import wrapIndex from 'wrap-index';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

wrapIndex(0, months.length);    // Output: 0
wrapIndex(11, months.length);   // Output: 11
wrapIndex(12, months.length);   // Output: 0
wrapIndex(17, months.length);   // Output: 5
wrapIndex(1024, months.length); // Output: 4
wrapIndex(0, months);           // Output: January
wrapIndex(11, months);          // Output: December
wrapIndex(12, months);          // Output: January
wrapIndex(17, months);          // Output: June
wrapIndex(1024, months);        // Output: May
```

```js
import wrapIndex from 'wrap-index';

const images = ['1.png', '2.png', '3.png'];
let currentImage = 0;

setInterval(() => {
  console.log(wrapIndex(currentImage++, images));
}, 1000);

/*
  Output:

  1.png (currentImage: 0)
  2.png (currentImage: 1)
  3.png (currentImage: 2)
  1.png (currentImage: 3)
  2.png (currentImage: 4)
  3.png (currentImage: 5)
  1.png (currentImage: 6)
  2.png (currentImage: 7)
  3.png (currentImage: 8)
  ...
        (currentImage: n)
*/
```
