// ma version + Chatgpt

function getTime() {
    let currentDate = new Date();
    let hour = currentDate.getHours()
    let min = currentDate.getMinutes()
    let sec = currentDate.getSeconds()

    let result = `${hour}:${min}:${sec}`
    
    
    return result.toLocaleString()
};
// correction
function getTime(){
    return new Date().toTimeString().slice(0,8);
}

// autre méthode 

const getTime = () => new Date().toDateString().slice(0,8)

/* ÉNONCÉ 📚 */

/*
 Créez un algorithme qui retourne l'heure affichée sous la forme : hh:mm:ss
 Utilisez l'objet date qui regorge d'informations pratiques lorsqu'on manipule le temps en JS.
*/


/* Tests à passer 🧪 */

console.log(getTime()); // 12:00:00 (par ex)




