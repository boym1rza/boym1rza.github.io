function register() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("user", user);
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    }
}

function login() {
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "dashboard.html";
    }
}
