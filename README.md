# wrap-index
A tiny library to keep an index within the bounds of an array by wrapping around if out of bounds. Written in plain JavaScript with no dependencies.

## Install

```
npm install wrap-index
```

## Usage examples

```js
import wrapIndex from 'wrap-index';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

months[wrapIndex(0, months.length)];    // Output: January
months[wrapIndex(11, months.length)];   // Output: December
months[wrapIndex(12, months.length)];   // Output: January
months[wrapIndex(17, months.length)];   // Output: June
months[wrapIndex(1024, months.length)]; // Output: May
```

```js
import wrapIndex from 'wrap-index';

const images = ['1.png', '2.png', '3.png'];
let currentImage = 0;

setInterval(() => {
  console.log(images[wrapIndex(currentImage++, images.length)]);
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
