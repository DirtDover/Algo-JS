// Correction 

function removeDuplicates(arr) {

    return arr.filter((item, index) => arr.indexOf(item) === index)

}

const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index)

// autre méthodes

const removeDuplicates = arr => arr.reduce((acc, cur) => acc.indexOf(cur) < 0 ? [...acc, cur] : [])


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




