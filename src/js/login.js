import { login } from './manage-token.js';

// Link to main form
const loginTabTokenField = document.getElementById('main-token-input');
document.getElementById('login-tab-button__submit').addEventListener('click', () => {
    if (!loginTabTokenField.value) {
        alert("Enter the token!")
        return;
    }

    login(loginTabTokenField.value)
});

// Link to check form
const checkTabTokenField = document.getElementById('check-token-input');
const checkTabTokenList = document.getElementById('check-tab__tokens-list');
document.getElementById('check-tab-button__submit').addEventListener('click', () => {
    // Clear the list
    checkTabTokenList.innerHTML = "";

    // Fill the list
    checkTabTokenField.value.split('\n').forEach(element => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        checkTabTokenList.appendChild(li);
    });
});