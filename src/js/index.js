// Handler
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName('tab__content');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    tablinks = document.getElementsByClassName('tab__link');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
  
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Setup handlers
document.getElementById('login-tab__button').onclick = function(event) { openTab(event, 'login-tab') };
document.getElementById('file-tab__button').onclick = function(event) { openTab(event, 'file-tab') };

// Open default tab
document.getElementsByClassName('default-open')[0].click();
