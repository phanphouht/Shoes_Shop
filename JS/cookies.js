// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let c = cookiesArray[i].trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Function to check for a cookie
function checkCookie(name) {
    const value = getCookie(name);
    return value !== "";
}
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Set cookies for username
        setCookie("username", username, 7); // Save for 7 days
        alert("Login successful! Cookie saved.");
        // You can redirect to a dashboard or home page here
        window.location.href = "../JS/index.html"; // Example redirection
    } else {
        alert("Please fill in all fields.");
    }
});
window.onload = function () {
    const username = getCookie("username");
    if (username) {
        alert(`Welcome back, ${username}!`);
        // Auto-fill the username field
        document.getElementById("username").value = username;
    }
};
