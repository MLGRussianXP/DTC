import { login } from './manage-token.js';

// Context menus

const CONTEXT_MENU_ID = 'DTC_context_menu';
const LOGIN_CONTEXT_MENU_ID = 'DTC_login_context_menu';

chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.removeAll();

    let parent = chrome.contextMenus.create({
        title: 'Discord Token Checker',
        id: CONTEXT_MENU_ID,
        contexts:["selection"]
    });

    chrome.contextMenus.create({
        id: LOGIN_CONTEXT_MENU_ID,
        parentId: parent,
        title: "Login with %s", 
        contexts:["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
    switch (item.menuItemId) {

        case LOGIN_CONTEXT_MENU_ID:
            login(item.selectionText);
            break;

        default:
            console.log('Standard context menu item clicked.');
    }
});
