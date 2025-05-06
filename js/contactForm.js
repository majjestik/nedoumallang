$(function() {
    let contactForm = $('#contactForm');

   // FORM VALIDATION WITH jQuery
    contactForm.validate({
        rules: {
            name: {
                required: true,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            objet: {
                required: true
            },
            message: {
                required: true,
                minlength: 50
            }
        },
        messages: {
            name: {
                required: "Veuillez entrer votre nom",
                lettersonly: "Seules les lettres sont autorisées"
            },
            email: {
                required: "Veuillez entrer votre adresse email",
                email: "Veuillez entrer une email valide"
            },
            objet: {
                required: "Veuillez entrer l'objet de votre message"
            },
            message: {
                required: "Veuillez nous faire part de votre préoccupation",
                minlength: "Veuillez entrer au moins 50 caractères"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "destination") {
                error.appendTo("#destinationErr");
            } else {
                error.insertAfter(element);
            }
        }
    });
});