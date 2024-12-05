// Oculta elementos del DOM
function hideIgnoredUsers(ignoredUsers) {
    const selectors = [
        ".ranking-list .username",
        ".users-online .username",
        ".top-reactions .username"
    ];
    
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (ignoredUsers.includes(element.textContent.trim())) {
                element.closest(".user-item").style.display = "none";
            }
        });
    });
}

// Solicita la lista de usuarios ignorados al fondo
chrome.runtime.sendMessage({ action: "getIgnoredUsers" }, (response) => {
    if (response && response.ignoredUsers) {
        hideIgnoredUsers(response.ignoredUsers);
    }
});
