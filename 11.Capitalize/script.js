// Ma version (ne fonctionne pas) 

function capitalize(str) {
let strSplit = str.split(' ')

let strFirst = strSplit.map( el => el.charAt(0).toUpperCase())
let result = strFirst.join(' ')
console.log(result);


return strSplit;
}

// correction 
function capitalize(str) {
    let lowerCaseArray = str.toLowerCase().split(' ')
    
    let result = lowerCaseArray.map( word => {
       return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    })
     
    return result.join(" ");
    }

// autre méthode 

const capitalize = str => str.toLowerCase().split(" ").map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase)).join(" ")

/* ÉNONCÉ 📚 */


/* 
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/


/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...

