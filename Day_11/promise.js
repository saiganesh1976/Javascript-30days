// Creation of Promise..

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Promise Resolved");
    } else {
      reject("rejected the Promise");
    }
  }, 2000);
});

// Handling the promises..

promise
  .then((message) => {
    console.log(message);
    console.log("Hello from Promise");
  })
  .catch((error) => {
    console.log(error);
    console.log("Hello from rejected");
  });
