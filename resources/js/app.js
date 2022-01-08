require('./bootstrap');

//Muestra el tipo de mensaje que se debe de mostrar de acuerdo al evento.
Echo.private('notifications').listen('UserSessionChanged', (e) =>{
    const notificationElement = document.getElementById('notification');

    notificationElement.innerText = e.message;

    notificationElement.classList.remove('invisible');
    notificationElement.classList.remove('alert-success');
    notificationElement.classList.remove('alert-danger');

    notificationElement.classList.add('alert-' + e.type);
});

