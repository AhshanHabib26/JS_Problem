const rotateLeft = (arr, rotateByNum) => {
    for (let i = 1; i <= rotateByNum; i++) {
      arr.push(arr.shift());
    }
    return arr;
  };
  
  const arrNum = [1, 2, 3, 4, 5];
  const result = rotateLeft(arrNum, 4);
  console.log(result);
  