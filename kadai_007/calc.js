let num = Math.floor(Math.random() * 31);
let ret = num;

// console.log(`入力値: ${num}`);

if (num >= 1){
  if (num % 15 === 0 ){
    ret = "3と5の倍数です";
  }else if (num % 3 === 0) {
    ret = "3の倍数です";
  }else if (num % 5 === 0) {
    ret = "5の倍数です";
  }

  console.log(`出力値: ${ret}`);
}
