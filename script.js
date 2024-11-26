// Afficher ou masquer le mot de passe
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

// Gérer la soumission du formulaire
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le rechargement de la page

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Vérification des champs vides
    if (email === '' || password === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    if (!email.includes('@') ||  !email.includes('.')) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    // Vérification de la complexité du mot de passe
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Le mot de passe doit contenir au moins 8 caractères, avec une lettre majuscule, une lettre minuscule et un chiffre.');
        return;
    }

    alert('Connexion réussie !');
});