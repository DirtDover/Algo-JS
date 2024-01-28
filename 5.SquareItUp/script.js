// ma version + chatgpt

function squareDigits(num){

  let numStr = num.toString()
  let result = ""

    for (let i =0; i< numStr.length; i++) {
      let digit = parseInt(numStr[i], 10);
      let squaredDigit = Math.pow(digit, 2)
      result += squaredDigit;
    }
    return parseInt(result, 10);

  }

  // Correction 

  function squareDigits(num){

    return Number(('' + num).split("").map(val => val *val).join(""))       // la première parenthèse transforme en string, split créé un tableau map va itéré sur chaque élément du tableau et join("") va tout recoller en string. Le number au debut permet d'avoir a la fin un nombre. et donc transformer le string de join en nombre
  
    }

    // autre méthode 

    const squaredDigits = num => +num.toString().split("").map(val => val *val).join("") 

/* ÉNONCÉ 📚 */


/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/


/* Tests à passer 🧪 */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111