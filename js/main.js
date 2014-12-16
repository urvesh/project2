$(document).ready(function () {

    var formValidation = function () {


        $('#registration').validate({
            rules : {
                firstName: "required",
                lastName: "required",
                email: {
                    required: true,
                    email:true
                },
                password: {
                    required: true,
                    minlength: 8
                }
            },
            messages : {
                firstName: "Please enter your first name.",
                lastName: "Please enter your last name.",
                email: "Please enter a valid email",
                password: {
                    required: "Please enter your password",
                    minlength: "Your password must be greater than 8 characters"
                }
            },
            submitHandler: function(form) {
                form.submit();
            }
        });

    };

    formValidation();

});