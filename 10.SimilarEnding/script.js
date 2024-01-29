// ma version

function similarEnd(str, end) {
 if(str.slice(0, -end.length ) === end) {               // c'est le zéro qui merde. qui fait que ca ne marche pas 
    return true
 } 
  else {
     return false
  }
}

// correction 

function similarEnd(str, end) {
    const strEnd = str.slice(-end.length);
    
    if(strEnd === end) {
       return true
    } 
     else {
        return false
     }
   }

   // autre méthode

   const similarEnd = (str, end) => str.slice(-end.length) === end ? true : false


/* ÉNONCÉ 📚 */


/*
Créez un algorithme qui vous informe si les lettres du second argument correspondent à la fin du premier argument.
Si elles correspondent, retournez true, sinon false.
*/


/* Test à passer 🧪 */

console.log(similarEnd("ours", "rs"));          // true
console.log(similarEnd("fonction", "zzz"));     // false
console.log(similarEnd("Mario", "io"));         // true