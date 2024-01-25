
// Function to toggle between dark mode and light mode
function toggleTheme() {
    // Check if the 'mode' cookie is set
    var currentMode = getCookie('mode') || 'light-mode';

    // Toggle between light mode and dark mode
    var newMode = (currentMode === 'light-mode') ? 'dark-mode' : 'light-mode';

    // Apply the new mode to the body
    document.body.className = newMode;

    // Set the 'mode' cookie to remember the chosen mode
    setCookie('mode', newMode, 7); // Expires in 7 days
}

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Function to get the value of a cookie by name
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}