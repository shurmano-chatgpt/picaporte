// Cargar configuración
document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["apiUrl", "apiKey"], (settings) => {
        if (settings.apiUrl) document.getElementById("apiUrl").value = settings.apiUrl;
        if (settings.apiKey) document.getElementById("apiKey").value = settings.apiKey;
    });

    document.getElementById("saveSettings").addEventListener("click", () => {
        const apiUrl = document.getElementById("apiUrl").value;
        const apiKey = document.getElementById("apiKey").value;

        chrome.storage.sync.set({ apiUrl, apiKey }, () => {
            alert("Configuración guardada.");
        });
    });
});
