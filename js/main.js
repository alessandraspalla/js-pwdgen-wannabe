// Determino le variabili
let userName, userSurname, userColor

// Chiedi all’utente il suo nome
userName = prompt('Inserisci il tuo nome')
console.log(userName);

// Chiedi all'utente il suo cognome
userSurname = prompt('Inserisci il tuo cognome')
console.log(userSurname);

// Chiedi all'utente il suo colore preferito
userColor = prompt('Inserisci il tuo colore preferito')
console.log(userColor);

// Scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById('password').innerHTML = ("La tua password è " + userName + userSurname + userColor + "21")

// Altro modo per scrivere sulla pagina nomecognomecolorepreferito21
// document.getElementById('password').innerHTML = (`La tua password è ${userName}${userSurname}${userColor}21`)