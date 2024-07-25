// Promise Creation
function call() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    }, 1000);
  });
  return promise;
}

// Defining Async Function

async function promiseHandle() {
  try {
    const message = await call();
    console.log(message);
    console.log("Hello from Promise--Async Await");
  } catch (error) {
    console.log(error);
    console.log("hello from reject");
  }
}

// call Async function
promiseHandle();
