var target = document.querySelector('#draggable');
var x = 0, y = 0;

function move(direction) {
    var step = 10; // Cambia questo per controllare la distanza di ogni movimento
    switch (direction) {
        case 'up': y -= step; break;
        case 'down': y += step; break;
        case 'left': x -= step; break;
        case 'right': x += step; break;
    }
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
}

function changeColor() {
    var color = document.getElementById('bgColor').value;
    document.querySelector('.story').style.backgroundColor = color;
}

function changeImage() {
    var url = document.getElementById('imgUrl').value;
    document.getElementById('draggableImg').src = url;
}

function connectInstagram() {
    // URL di autorizzazione di Instagram
    var authUrl = 'https://api.instagram.com/oauth/authorize';

    // I tuoi dettagli dell'applicazione
    var clientId = 'your-client-id';
    var redirectUri = 'your-redirect-uri';

    // Costruisci l'URL di autorizzazione completo
    var url = authUrl + '?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=code&scope=user_profile,user_media';

    // Reindirizza l'utente all'URL di autorizzazione
    window.location.href = url;
}
