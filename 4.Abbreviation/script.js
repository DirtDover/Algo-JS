// Corigé

function abreviation(str) {
    const splitNames = str.split(" ");                          // retourne un tableau avec tous les éléments ou la séparation a été faite la ou il y avait un espace
    return `${splitNames[0]} ${splitNames[1].charAt(0)}.`           // récupère le premier élément splitNames[0] + le second élément coupé après la première lettre (charAt(0))
    }         


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

