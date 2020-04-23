
async function waitTime(seconds: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log(`waitTime for ${seconds}`)
      resolve(seconds)
    }, seconds)
  }) 
}

async function waitWithAwait() {
  console.log("-----------start")
  console.log("-----------wait for waitTime(3000)")
  const num1 = await waitTime(3000)
  console.log("-----------wait for waitTime(1000)")
  const num2 = await waitTime(1000)
  console.log("-----------wait for waitTime(3000)")
  const num3 = await waitTime(3000)
  console.log("-----------end")

  return true
}

async function wait() {
  waitTime(3000)
  waitTime(1000)
  waitTime(3000)
}

console.log("-----------async-await")
// wait()
waitWithAwait().then((value)=>{
  console.log(value)
})
