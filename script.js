const password = document.getElementById("password");
const passwordconfirm = document.getElementById("passwordconfirm");
const passworderror = document.getElementById("passworderrors");

const form = document.getElementById("form");


passwordconfirm.addEventListener("input", (event)=>{

    if (password.value!==passwordconfirm.value)
    {
        passwordMismatch();
    } else {
        passwordMatch();
    }

});


form.addEventListener("submit", (event)=>{

    console.log("it's submitted, bro");
    if (password.value!==passwordconfirm.value) {
        event.preventDefault();
    }
});

function passwordMismatch() {
    password.classList.add("error");
    passwordconfirm.classList.add("error");
    passworderror.classList.add("error");
}

function passwordMatch() {
    password.classList.remove("error");
    passwordconfirm.classList.remove("error");
    passworderror.classList.remove("error");
}