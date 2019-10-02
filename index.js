'use strict'
const w = document.querySelector('#w');
// “Array” Methods

function chunk(array, size=1) {
if (!Array.isArray(array) || array.length === 0) return [];
size = size === 0 ? 1 : size;
  const newArr = [];
  let temp = 0;
  let index = 0;
  while(array.length > index) {
    newArr[temp++] = array.slice(index, index += size);
  } 
  return newArr;
} 

w.innerHTML = chunk(["a","b","c","d"] , 0);
// => [['a', 'b'], ['c', 'd']]
 
//w.innerHTML += '<br>' + chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]