// Es6 Data structre : set map
let set = new Set();
set.add(100);
set.add(200);
set.add(300);
set.add(100);
console.log(set);
console.log(set.size);

set.delete(200);

console.log(set);
console.log(set.size);

for (let el of set) {
    console.log(el);
}

set.forEach((el) => console.log(el));

set.clear();
console.log(set);

//Map

let map = new Map();
map.set('mango', 'Amm');
map.set('Banana', 'Kola');
map.set('Number', 65);

console.log(map);

for (let el of map) {
    console.log(el);
}



let hasEl = map.has('mango');
console.log(hasEl);

map.delete('mango');
console.log(map);


// weak set : only supported object data type

const ws = new WeakSet();
const obj1 = {};
const obj2 = {};
ws.add(obj1);
ws.add(obj2);
console.log(ws);

console.log(ws.has(obj1));
console.log(ws.has(obj2));
ws.delete(obj1);
console.log(ws.has(obj1));

//weak map 
const wm = new WeakMap();
wm.set(obj1, 123);

console.log(wm.has(obj1));
console.log(wm.get(obj1)); // print value of the obj1

wm.delete(obj1);
console.log(wm.has(obj1));