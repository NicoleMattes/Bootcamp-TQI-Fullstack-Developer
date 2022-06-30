/* solução 1 */

// function verificarPolidromo(string) {
//     if(!string) return;

//     return string.split("").reverse().join("") == string;
//  }

//  console.log(verificarPolidromo("Nicole"));


/* solução 2*/

function verificarPolidromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if (string[1] !== string[string.length - 1 - i]) {
            return false;
        }    
    }

    return true;
}

console.log(verificarPolidromo2("abba"));
