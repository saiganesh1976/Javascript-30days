const calci = (operation, num1, num2) => {
  switch (operation) {
    case "addition":
      let addition = num1 + num2;
      console.log(`Addition of ${num1} and ${num2} : ${addition}`);
      break;
    case "Substraction":
      let diff = num1 - num2;
      console.log(`Substraction of ${num1} and ${num2} : ${diff}`);
      break;
    case "Multiplication":
      let mul = num1 * num2;
      console.log(`Multiplication of ${num1} and ${num2} : ${mul}`);
      break;
    case "Division":
      let div = num1 / num2;
      console.log(`Division of ${num1} and ${num2} : ${div}`);
      break;
    case "Power":
      let pow = num1 ** num2;
      console.log(`Power of ${num1} and ${num2} : ${pow}`);
      break;
    case "Reminder":
      let reminder = num1 % num2;
      console.log(`Remainder of ${num1} and ${num2} : ${reminder}`);
      break;
    default:
      console.log("Enter proper Data");
      break;
  }
};

module.exports = calci;
