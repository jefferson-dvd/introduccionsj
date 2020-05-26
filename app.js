//const functionsModule = require('./functions.js');

$(document).ready(function() {

    $('#submitbtn').click(function() {

        comprobarTodosloscampos();
        if (comprobarTodosloscampos()) {
            spinner();
            event.preventDefault();
            return true;
        }


    })


    $("#name, #lname, #email, #pass, #pass2").keyup(function() {

        comprobarTodosloscampos();

    });


});


function comprobarTodosloscampos() {

    comprobarNombre();
    comprobarApellidos();
    comprobarEmail();
    passvacia();
    comprobarPass();

    if (comprobarNombre() && comprobarApellidos() && comprobarEmail() && passvacia() && comprobarPass()) {
        return true;

    } else {
        return false;
    }


}






function comprobarNombre() {
    //funcion general donde hacemos todo en una funcion
    if ($.trim($('#name').val()) == '') { //comprubo si esta vacio para añadir el mensaje de error 

        if ($("#labelname").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();
            return false; //escapo la funcion

        } else {
            $("#labelname").append("<p id=errorname class=error>* Este campo es obligatorio*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }

    } else {
        $('#errorname').remove(); // si los campos no estan vacios elimino los mensajes de error
        return true;
    }
}


function comprobarApellidos() {

    if ($.trim($('#lname').val()) == '') {

        if ($("#lastname").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();
            return false; //escapo la funcion
        } else {
            $("#lastname").append("<p id=errorlname class=error>* Este campo es obligatorio*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }


    } else {
        $('#errorlname').remove(); // si los campos no estan vacios elimino los mensajes de error
        return true;
    }
}


function isValidEmailAddress(email) {

    let filtro = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    return filtro.test(email);

}

function comprobarEmail() {

    let email = $('#email').val();

    if (isValidEmailAddress(email)) {
        $('#erroremail').remove();
        return true;

    } else {

        if ($("#labelemail").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();
            return false; //escapo la funcion
        } else {
            $("#labelemail").append("<p id=erroremail class=error>*Este campo debe ser un email*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }
    }
}


function passvacia() {

    let firstPass = $('#pass').val();

    if ($.trim(firstPass) == '') { //comprubo si esta vacio para añadir el mensaje de error 

        if ($("#labelpwd").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();
            return false; //escapo la funcion

        } else {
            $("#labelpwd").append("<p id=errorpass1 class=error>* Este campo es obligatorio*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }

    } else {
        $('#errorpass1').remove(); // si los campos no estan vacios elimino los mensajes de error
        return true;
    }

}

function comprobarPass() {

    let firstPass = $('#pass').val();
    let secondPass = $('#pass2').val();


    if (firstPass != secondPass || secondPass == "") {

        if ($("#labelpwdconf").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();
            return false; //escapo la funcion
        } else {
            $("#labelpwdconf").append("<p id=error-pass-confirm class=error>*Las contraseñas deben coincidir*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }

    } else {

        $('#error-pass-confirm').remove();
        return true;

    }

}

function spinner() {

    $('#loader').css('display', "block");
    $('form').css('visibility', "hidden");
    $('.title').text('Registrando usuario....');

    setTimeout(redirecTomenu, 3000);
}

function redirecTomenu() {

    window.location.href = "./menu.html";
}