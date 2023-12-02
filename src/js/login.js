import { login } from './manage-token.js';

// Link to main form
const loginTabTokenField = document.getElementById('login-tab__input');
document.getElementById('login-tab__submit').addEventListener('click', () => {
    if (!loginTabTokenField.value) {
        alert("Enter the token!")
        return;
    }

    login(loginTabTokenField.value)
});
