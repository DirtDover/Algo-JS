// ma version 

function interval(min,max,nb){
  if(nb < max && nb > min) {
    return true
  } 
  else {
    return false
  }
}

// correction

const interval = (min, max, nb) => nb <= max && nb >= min;
/* ÉNONCÉ 📚 */


/*
  Créez un algorithme qui détermine si le troisième argument passé à la fonction se situe entre les deux premiers.
  Retournez true ou false.
*/

/* Tests à passer 🧪 */

console.log(interval(10, 200, 35));         // true
console.log(interval(444, 555, 1200));      // false
console.log(interval(-100, 0, -50));        // true





