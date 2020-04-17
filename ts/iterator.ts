
function rangeIterator(start: number, end: number) {
  let num = start;
  return {
    next: function(){
      if(num < end) {
        let result = {value: num, done: false}
        num++;
        return result;
      }
      return {value: num, done: true}
    }
  }
}

const it = rangeIterator(1, 10);

while(true){
  let result = it.next()
  if(result.done){
    console.log(result.value);
    break;
  }
  console.log(result.value);
}

console.log("---------- for-of loop");

const array = ['a', 'b', 'c'];
for(const num of array) {
  console.log(num);
}

const obj = {
  [Symbol.iterator]: function(){
    let count = 1;
    const iterator = {
      next: function(){
        return  (count <= 10)
            ? { value: count++,   done: false }
            : { value: undefined, done: true };
      }
    };
    return iterator;
  }
};

for(const num of obj){
  console.log(num);
}

console.log("---------- Spread syntax");
console.log(...obj)