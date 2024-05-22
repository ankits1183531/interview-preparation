const person = {
    fname: "Shantanu",
    lname: "Gautam",
    age: 27,
    address: {
      home: {
        city: "Jaipur",
        plot: "3"
      }
    },
    assets: {
      laptop: {
        company: "HP",
        model: "OMEN"
      },
      phone: {
        company: "Apple",
        model: "iPhone13"
      }
    }
  };
  
  function flattenObject(obj , updatedObj){
      if(!Object.keys(obj).length) {
        return ;
    }
  
      for(let key in obj){
        if(typeof obj[key] === 'object'){
        flatten(obj[key], updatedObj);
      }else {
          updatedObj[key] = obj[key];
      }
    }
    
    return updatedObj;
  }
  
  console.log(flattenObject(person, {}));
  