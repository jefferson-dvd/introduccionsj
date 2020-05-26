(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const functionsModule = require('./functions.js');

$(document).ready(function() {

    $('#submitbtn').click(function() {

        if (comprobarTodosloscampos()) {
            functionsModule.spinner();
            event.preventDefault();
            return true;
        }
    })


    $("#name , #lname , #email, #pass, #pass2").keyup(function() {
        comprobarTodosloscampos()
    });


});




function comprobarTodosloscampos() {

    if (comprobarNombre() && comprobarApellido() && comprobarEmail() && passvacia() && comprobarPass()) {
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


function comprobarApellido() {

    //funcion general donde hacemos todo en una funcion
    if ($.trim($('#lname').val()) == '') { //comprubo si esta vacio para añadir el mensaje de error 

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
    var filtro = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return filtro.test(email);
};


function comprobarEmail() {

    var email = $('#email').val();

    if (isValidEmailAddress(email)) {

        $('#erroremail').remove(); // si los campos no estan vacios elimino los mensajes de error
        return true;

    } else {

        if ($("#labelemail").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();

            return false; //escapo la funcion

        } else {
            $("#labelemail").append("<p id=erroremail class=error>* Debe introducir un email valido*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }
    }
}



function passvacia() {

    let firstpass = $('#pass').val();
    if ($.trim(firstpass) == '') {

        if ($("#labelpwd").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();

            return false; //escapo la funcion

        } else {
            $("#labelpwd").append("<p id=errorpwd class=error>* Este campo es obligatorio*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }

    } else {
        $('#errorpwd').remove(); // si los campos no estan vacios elimino los mensajes de error
        return true;
    }
}




function comprobarPass() {

    let firstpass = $('#pass').val();
    let secondpass = $('#pass2').val();

    if (firstpass != secondpass || secondpass == "") {

        if ($("#labelpwdconf").children().length > 0) { //compruebo si el menaje de error ya existe es decir si tiene un padre (label)
            event.preventDefault();

            return false; //escapo la funcion

        } else {
            $("#labelpwdconf").append("<p id=errorpass2 class=error>* Las contraseñas deben coincirdir*</p>");
            event.preventDefault();
            return false;
            // añado mensaje de error
        }
    } else {

        $('#errorpass2').remove(); // si los campos no estan vacios elimino los mensajes de error
        return true;

    }
}
},{"./functions.js":2}],2:[function(require,module,exports){
module.exports = {
    spinner: function() {

        $("#loader").css("display", "block");
        $("form").css("visibility", "hidden");
        $('.title').text('Registrando Usuario....');
        setTimeout(redirectMenu, 3000)
    }
}

function redirectMenu() {
    window.location.href = "./menu.html";
}

/*
function spinner() {
    $("#loader").css("display", "block");
    $("form").css("visibility", "hidden");
    $('.title').text('Registrando Usuario....');
    setTimeout(redirectMenu, 3000)
}

*/
},{}]},{},[1]);
