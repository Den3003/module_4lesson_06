'use strict'

{
  const allCashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

  const getAveragePriceGoods = (arr) => {
    const result = arr.reduce((res, currentValue) => 
      [res[0] + currentValue[0], res[1] + currentValue[1]])
      .reduce((acc, value) => value / acc);
    
    return +result.toFixed(2);
  }
  console.log(getAveragePriceGoods(allCashbox));
}