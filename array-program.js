const a = [1, 2, [3, 4, [5,[6]]]];


function flattenArray(arr, flatArr) {
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flattenArray(el, flatArr)
    } else {
      flatArr.push(el);
    }
  })
  
  return flatArr;
}


console.log(flattenArray(a, []))

// -------------------------------------------------- -------------------------------------------------- --------------------------------------------------