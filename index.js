
// Fonction pour ajouter des espaces tous les 4 chiffres
function formatNumber(input) {
    // Retirer les caractères non numériques
    let value = input.value.replace(/\D/g, '');
    
    // Ajouter un espace tous les 4 chiffres
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();

    // Mettre à jour l'entrée avec la valeur formatée
    input.value = formattedValue;
}

// Sélectionner l'élément input
const formattedNumberInput = document.getElementById('inputTwo');

// Ajouter un événement pour détecter les changements dans l'input
formattedNumberInput.addEventListener('input', function() {
    formatNumber(this);
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
const twoNumber1 = document.getElementById('twoNumber1');
const spanOne= document.getElementById('spanOne');

// Ajouter un événement pour détecter les changements dans l'input
twoNumber1.addEventListener('input', function() {
    // Mettre à jour le texte affiché
    spanOne.textContent = twoNumber1.value;
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