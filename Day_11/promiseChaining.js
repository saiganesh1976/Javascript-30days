function nextData(step) {
  const promise = new Promise((resolve, reject) => {
    console.log("Data loading...");
    setTimeout(() => {
      if (Math.random() > 0) {
        resolve(`Data for ${step} fetched Successfully`);
      } else {
        reject(`Failed to Fetch ${step}`);
      }
    }, 1000);
  });
  return promise;
}

nextData(1)
  .then((message) => {
    console.log(message);
    return nextData(2);
  })
  .then((message) => {
    console.log(message);
    return nextData(3);
  })
  .then((message) => {
    console.log(message);
    return nextData(4);
  })
  .then((message) => {
    console.log(message);
    console.log("All data Fetched");
  })
  .catch((error) => {
    console.log(error);
  });
