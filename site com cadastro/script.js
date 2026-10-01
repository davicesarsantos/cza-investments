/* =========================
   MOVIMENTO DO FUNDO
========================= */

const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");
const orb3 = document.querySelector(".orb-3");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (event) => {

    mouseX = (event.clientX / window.innerWidth - 0.5);
    mouseY = (event.clientY / window.innerHeight - 0.5);

    orb1.style.transform = `
        translate(${mouseX * 45}px, ${mouseY * 45}px)
    `;

    orb2.style.transform = `
        translate(${mouseX * -60}px, ${mouseY * -40}px)
    `;

    orb3.style.transform = `
        translate(${mouseX * 35}px, ${mouseY * -50}px)
    `;
});


/* =========================
   PARTÍCULAS
========================= */

const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    const duration = 5 + Math.random() * 10;

    particle.style.animationDuration = duration + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.opacity =
        Math.random() * 0.5;

    particlesContainer.appendChild(particle);
}


/* =========================
   MOSTRAR SENHA
========================= */

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
});


/* =========================
   LOGIN
========================= */

const form = document.getElementById("loginForm");

const email = document.getElementById("email");

const emailError =
    document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");

const loginButton =
    document.getElementById("loginButton");

const message =
    document.getElementById("message");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    message.textContent = "";
    message.className = "message";

    let valid = true;


    /* Validar e-mail */

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim()) {

        emailError.textContent =
            "Digite seu e-mail.";

        valid = false;

    } else if (!emailRegex.test(email.value)) {

        emailError.textContent =
            "Digite um e-mail válido.";

        valid = false;
    }


    /* Validar senha */

    if (!password.value.trim()) {

        passwordError.textContent =
            "Digite sua senha.";

        valid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        valid = false;
    }


    if (!valid) return;


    /* Loading */

    loginButton.classList.add("loading");


    setTimeout(() => {

        loginButton.classList.remove("loading");

        message.textContent =
            "Login realizado com sucesso.";

        message.classList.add("success");

    }, 1200);

});