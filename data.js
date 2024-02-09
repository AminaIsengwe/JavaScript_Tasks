// create a function which will return string and check 
// if that string is not number ad check if it contain one of alphabetic 
// and check the length of the string is to 8
// it should return true all condition being satisfied




 export  const check = (text) =>{
 if (text.includes("w") && text.length === 8 && isNaN(text)) {
        return true; 
      } 
      else {
        return false;
      }
    }
