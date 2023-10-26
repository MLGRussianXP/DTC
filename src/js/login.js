// Login function
function login(login_token) {
    // Open Discord tab
    chrome.tabs.create({ url: "https://discord.com/channels/@me" }, tab => {
        // Execute login script
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: (token) => {
                setInterval(() => {
                    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
                }, 50);
                setTimeout(() => {
                    location.reload();
                }, 2500);
            },
            args: [login_token]
        });
    });
};

// Link to main form
const tokenField = document.getElementById("main-token-input");
document.getElementById("main-check-form").addEventListener("submit", () => {
    login(tokenField.value)
});
