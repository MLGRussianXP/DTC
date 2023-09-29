const tokenField = document.getElementById("main-token-input");

document.getElementById("main-check-form").addEventListener("submit", function () {
    // Open Discord tab
    chrome.tabs.create({ url: "https://discord.com/login" }, tab => {
        // Execute login script
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: (token) => {
                console.log(token);

                setInterval(() => {
                    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
                }, 50);
                
                setTimeout(() => {
                    location.reload();
                }, 100);
            },
            args: [tokenField.value]
        }).then(() => console.log("Done!"));
    });
});