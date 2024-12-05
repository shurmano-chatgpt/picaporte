// Recupera la lista de usuarios ignorados de la API
async function fetchIgnoredUsers(apiUrl, apiKey) {
    try {
        const response = await fetch(`${apiUrl}/ignored-users`, {
            headers: { "Authorization": `Bearer ${apiKey}` }
        });
        if (response.ok) {
            const data = await response.json();
            return data.users.map(user => user.username); // Supongamos que devuelve una lista de usuarios
        }
    } catch (error) {
        console.error("Error al obtener usuarios ignorados:", error);
    }
    return [];
}

// Escucha cambios en la configuración
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getIgnoredUsers") {
        chrome.storage.sync.get(["apiUrl", "apiKey"], async (settings) => {
            const ignoredUsers = await fetchIgnoredUsers(settings.apiUrl, settings.apiKey);
            sendResponse({ ignoredUsers });
        });
        return true; // Indica que la respuesta será asincrónica
    }
});
