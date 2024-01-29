// Ma version qui fonctionne

function getLongestWord(str) {

        let number = []
        let words = str.split(" ")
    
        words.map(el => {
            number.push(el.length)
        })
         return Math.max.apply(null, number)
        
}

// correction

function getLongestWord(str){
    const arrayFromStr = str.split(" ")
    let longestLength = 0;

    for(let i = 0; i < arrayFromStr; i++){
        if(arrayFromStr[i].length > longestLength) {
            longestLength = arrayFromStr[i].length;
        }
    }
    return longestLength;
}
// Autre méthode

const longestWord = str => str.split(" ").reduce((acc, cur) => Math.max(acc, cur.length), 0)

/* ÉNONCÉ 📚 */


/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */


/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
