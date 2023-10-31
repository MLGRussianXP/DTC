import { login } from './manage-token.js';

// Link to main form
const tokenField = document.getElementById("main-token-input");
document.getElementById("main-check-form").addEventListener("submit", () => {
    login(tokenField.value)
});
