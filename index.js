

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('inputTwo');

    input.addEventListener('input', function() {
        let value = input.value.replace(/\s+/g, ''); // Enlever tous les espaces
        if (value.length > 16) {
            value = value.slice(0, 16); // Limiter à 16 chiffres
        }
        const formattedValue = value.match(/.{1,4}/g)?.join(' ') || ''; // Ajouter un espace après chaque 4 chiffres
        input.value = formattedValue;
    });
});




// Sélectionner l'élément input
const twoNumeber1 = document.getElementById('twoNumber1');

// Ajouter un événement pour détecter les changements dans l'input
twoNumeber1.addEventListener('input', function() {
    // Si la longueur de la valeur est supérieure à 2 caractères
    if (this.value.length > 2) {
        // Truncation de la valeur à 2 chiffres
        this.value = this.value.slice(0, 2);
    }
});


// Sélectionner l'élément input
const twoNumeber2 = document.getElementById('twoNumber2');

// Ajouter un événement pour détecter les changements dans l'input
twoNumeber2.addEventListener('input', function() {
    // Si la longueur de la valeur est supérieure à 2 caractères
    if (this.value.length > 2) {
        // Truncation de la valeur à 2 chiffres
        this.value = this.value.slice(0, 2);
    }
});


// Sélectionner l'élément input
const inputCode= document.querySelector('.inputCode');

// Ajouter un événement pour détecter les changements dans l'input
inputCode.addEventListener('input', function() {
    // Si la longueur de la valeur est supérieure à 3 caractères
    if (this.value.length > 3) {
        // Truncation de la valeur à 3 chiffres
        this.value = this.value.slice(0, 3);
    }
});


// Sélectionner les éléments
const inputOne = document.getElementById('inputOne');
const textTwo = document.getElementById('textTwo');

// Ajouter un événement pour détecter les changements dans l'input
inputOne.addEventListener('input', function() {
    // Mettre à jour le texte affiché
    textTwo.textContent = inputOne.value;
});



// Sélectionner les éléments
const inputTwo = document.getElementById('inputTwo');
const textOne = document.getElementById('textOne');

// Ajouter un événement pour détecter les changements dans l'input
inputTwo.addEventListener('input', function() {
    // Mettre à jour le texte affiché
    textOne.textContent = inputTwo.value;
});




// Sélectionner les éléments
const twoNumber2 = document.getElementById('twoNumber2');
const spanTwo= document.getElementById('spanTwo');

// Ajouter un événement pour détecter les changements dans l'input
twoNumber2.addEventListener('input', function() {
    // Mettre à jour le texte affiché
    spanTwo.textContent = twoNumber2.value;
});



// Sélectionner les éléments
const lastInput= document.getElementById('lastInput');
const code= document.getElementById('code');

// Ajouter un événement pour détecter les changements dans l'input
lastInput.addEventListener('input', function() {
    // Mettre à jour le texte affiché
    code.textContent = lastInput.value;
});