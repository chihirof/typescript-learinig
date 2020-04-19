function* generator(i: number) {
  yield i;
  yield i + 10;
  yield i + 20;
}

console.log("----------default");
const gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // undefined

console.log("----------for-of")
const fgen = generator(10);
for(const n of fgen){
  console.log(n);
}

console.log("----------while")
const wgen = generator(10);
let next = wgen.next();
while(!next.done) {
  console.log(next.value);
  next = wgen.next();
}