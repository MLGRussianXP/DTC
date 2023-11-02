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

// Link to check form
const checkTabTokenField = document.getElementById('check-tab__input');
const checkTabTokenList = document.getElementById('check-tab__tokens-list');
document.getElementById('check-tab__submit').addEventListener('click', () => {
    // Clear the list
    checkTabTokenList.innerHTML = "";

    // Fill the list
    checkTabTokenField.value.split('\n').forEach(element => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        checkTabTokenList.appendChild(li);
    });
});