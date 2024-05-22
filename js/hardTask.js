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

  const getAveragePriceGoods = ([...arr]) => {
    const arrayPriceOneProduct = arr.map(([...priceProduct]) => {      
      const [product, sum] = priceProduct;
      return Math.round(sum / product);
    })
    return Math.round
    (arrayPriceOneProduct.reduce((sum, current) => sum + current) 
    / arrayPriceOneProduct.length);
  }
  console.log(getAveragePriceGoods(allCashbox));
}