// creo lista degli ospiti
const guests = ['Pippo', 'Ciccio', 'Marco', 'Lorenz0' ,'Fabio'];

// Dichiaro i documenti
const guestFieldElement = document.getElementById('guest-name');
const button = document.getElementById('button');
const result = document.getElementById('result');


let validInvite = false;

// aggancio event listener al bottone
button.addEventListener('click' , function(){
    // Raccolgo il nome dall'input
    guestName = guestFieldElement.value.trim();
    console.log(guestName);
    for (let i = 0; i < guests.length; i++) {


        if (guestName === guests){
        }
    }


    result.innerText = validInvite ? 'Ospite invitato' : 'Ospite non invitato';
})
