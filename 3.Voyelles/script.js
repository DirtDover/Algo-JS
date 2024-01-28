// Ma version + ChatGpt

function getVowelsNumber(txt) {
    let count = 0
    

    for( let i = 0; i < txt.length; i++){
        if(/[aeiouy]/.test(txt[i])) {
            count++
        }   
    }
    
    return count;   
}

// Corection

function getVowelsNumber(txt) {
    const vowels = txt.match(/[aeiouy]/gi)                      //le g veut dire gloabl ( ca ne s'arrète pas a la première reussite et i veut dire non sensible à la casse (les espaces))
    
    if(vowels){
        return vowels.length
    }
    else {
        return 0;
    }
   
}

// autre possibilité 

const getVowelsNumber = txt => txt.match(/[aeiouy]/gi) ? txt.match(/[aeiouy]/gi).length : 0 

/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */


/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumber("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumber("zzzZZZzz"));                                  // 0