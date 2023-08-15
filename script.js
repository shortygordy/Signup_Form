document.addEventListener("DOMContentLoaded", function() {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("confirm-password");
    const errorMessage = document.getElementById("confirm-password-error");

    //create a tracker that checks if passwordConfirm has been focused
    let hasFocusedConfirmPassword = false;

    passwordConfirm.addEventListener("blur", function() {
        hasFocusedConfirmPassword = true;
    });

    passwordConfirm.addEventListener("blur", function() {
        if (passwordConfirm.value === password.value) {
            errorMessage.style.opacity = "0%";
        } else {
            errorMessage.style.opacity = "100%";
        }
    });

    passwordConfirm.addEventListener("input", function() {
        if (hasFocusedConfirmPassword) {
            if (passwordConfirm.value === password.value) {
                errorMessage.style.opacity = "0%";
            } else {
                errorMessage.style.opacity = "100%";
            }
        }
    });

});