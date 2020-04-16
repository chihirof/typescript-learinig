
const sym1 = Symbol();
const sym2 = Symbol();

// シンボルは固有であることが保証されている。以下の２つはどちらもfalse
// console.log(sym1 === sym2);
// console.log(sym1 ==　sym2);

const sym3 = Symbol('description-sym3');
console.log(sym3);