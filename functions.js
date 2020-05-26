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

function testing() {
    return 1;
}