function trythis(a, b) {
  try {
    let division = a / b;
    console.log(division);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("try..Catch Block");
  }
}

let a = 10;
let b = 0;
trythis(a, b);
