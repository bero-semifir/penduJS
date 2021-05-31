let tentative = 0;
const mot = 'poulet'.split('');
let guess = new Array();
let utilise = []

let input = document.querySelector('#input');
let message = document.querySelector('#message');
let devine = document.querySelector('#devine');

const nouveau = () => {
    guess = [];
    tentative = 0;
    for (let i = 0; i < mot.length; i++) {
        guess.push(' _ ');
    }
}

const pendu = () => {
    lettre = input.value.trim();
    utilise.push(lettre)
    input.value = '';

    if (tentative >= 7) {
        message.innerHTML = '<p>Vous n\'avez pas trouvé le mot</p>';
        nouveau();

    } else {
        if (mot.indexOf(lettre) != -1) {
            guess[mot.indexOf(lettre)] = lettre;
            message.innerHTML = '<p>La lettre est dans le mot</p>';
        } else {
            pendre(tentative+1);
        }
    }

    if (JSON.stringify(mot) == JSON.stringify(guess)) {
        message.innerHTML = 'Vous avez trouvé le mot !';
    }
    devine.innerHTML = "<p>" + guess.join('') + "</p>";
}

const pendre = (int) => {
    tentative++;
    document.getElementById('pendu').innerHTML = "<img src='img/" + int + ".PNG'>";
    message.innerHTML = str + " n'est pas dans le mot</p>";
}

input.addEventListener('keyup', pendu);
window.addEventListener('load', nouveau);
