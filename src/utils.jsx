export function currencyFormat(num)  {
  return   `  $`+  num
}
export function percentageFormat(num){
    return `${new Number(num).toFixed(2)}%`
   
}