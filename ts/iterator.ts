
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
