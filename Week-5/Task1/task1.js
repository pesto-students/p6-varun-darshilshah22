// Using Async Await
console.log("------------- Using Async/await ------------------");
function func1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await func1();
  console.log(result);
}

asyncCall();

// Using generators

console.log("------------- Using Generators ------------------");
function* func1() {
  yield 'resolved';
  setTimeout(() => {
    console.log('resolved');
  }, 2000);
}

function* gen() {
  console.log('calling');
  yield* func1();
}

const iter = gen();

iter.next();
iter.next();