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