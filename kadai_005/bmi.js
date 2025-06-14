let Weight = 68;
let Height = 1.7;
let bmi;

const calBmi = (weight, height) => {
  return (weight / (height * height));
}

bmi = calBmi(Weight, Height);
console.log(bmi);

