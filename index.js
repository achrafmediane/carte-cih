

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.inputTwo');

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
const lastInput = document.getElementById('lastInput');

// Ajouter un événement pour détecter les changements dans l'input
lastInput.addEventListener('input', function() {
    // Si la longueur de la valeur est supérieure à 3 caractères
    if (this.value.length > 3) {
        // Truncation de la valeur à 3 chiffres
        this.value = this.value.slice(0, 3);
    }
});