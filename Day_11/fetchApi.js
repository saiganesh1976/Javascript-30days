const url = "https://jsonplaceholder.typicode.com/posts";

async function handlePromise() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
handlePromise();
