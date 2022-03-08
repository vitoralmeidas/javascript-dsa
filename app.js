function bmi(weight, height) {
  let bmi = weight / height ** 2;
  switch (bmi) {
    case 30:
      return "Obese";
      break;
    case 25:
      return "Normal";
      break;
    case 18.5:
      return "Underweight";
      break;
    default:
      return "test";
      break;
  }
}

console.log(bmi(100 / 2));
