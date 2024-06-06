function sameFrequency(num1, num2) {
    let createObj = (num) => {
      let obj = {};
      for (let i = 0; i < num.length; i++) {
        const letter = num[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
      }
      return obj;
    }
  
  
    const numObj1 = createObj(num1.toString());
    const numObj2 = createObj(num2.toString());
  
  
    for (let key in numObj1) {
      if (key in numObj2) {
        if (numObj2[key] != numObj1[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
  
  console.log(sameFrequency(22,222));
  