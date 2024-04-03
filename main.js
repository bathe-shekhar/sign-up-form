const buttonCreateAccount = document.querySelector("#create-account");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

buttonCreateAccount.addEventListener("click", () => {
    console.log(passwordInput.value);
    console.log(confirmPassword.value);
    if (passwordInput.value != confirmPassword.value) {
        let html = "<p id='errorMsg'> * Passwords do not match</p > ";
        passwordInput.insertAdjacentHTML("afterend", html);

    }
});


passwordInput.addEventListener("click", () => {
    const errorMsges = document.querySelectorAll("#errorMsg");
    errorMsges.forEach(errorMsg => {
        errorMsg.remove();
    });
});

confirmPassword.addEventListener("click", () => {
    const errorMsges = document.querySelectorAll("#errorMsg");
    errorMsges.forEach(errorMsg => {
        errorMsg.remove();
    });
});

// buttonCreateAccount.addEventListener("click", () => {
//     if (password.textContent != confirmPassword.textContent) {
//         let errorMsg = "<p style={color: red}>* Passwords do not match</p>";
//         password.insertAdjacentElement("afterend", p)
//     }
// });