// Ma version (Aide Google)

function reverse(str) {

    let split = str.split("")
    let reverse = split.reverse()
    let result = reverse.join('')

return result 
}

// Tout seul 

const reverse = str => str.split("").reverse().join("")

// Correction

function reverse(str) {


return str.split("").reverse().join("") 
}

const reverse = str => str.split("").reverse().join("")


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne la chaîne de caractères passée en argument à l'envers. */


/* Tests à passer 🧪 */

console.log(reverse("Bonjour à tous"));                         // suot à ruojnoB
console.log(reverse("Être haut comme trois pommes"));           // semmop siort emmoc tuah ertÊ
console.log(reverse("Ne pas chercher midi à quatorze heures")); // serueh ezrotauq à idim rehcrehc sap eN


