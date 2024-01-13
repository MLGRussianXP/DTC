import { isValid } from './manage-token.js';

// Link to the file form
const fileTabTokenList = document.getElementById('file-tab__upload-file');
const fileTabOutputOl = document.getElementById('file-tab__output');

document.getElementById('file-tab__submit').addEventListener('click', () => {
    let file = fileTabTokenList.files[0];

    if (file) {
        fileTabOutputOl.innerHTML = '';

        let reader = new FileReader();

        reader.onload = function(event) {
            let contents = event.target.result;
            let tokens = contents.split('\n');
            
            tokens.forEach(async element => {
                let li = document.createElement('li');
                li.className = 'file-tab__li'

                let icon = document.createElement('img');
                icon.className = 'file-tab__li__icon';
                icon.width = 25;
                icon.height = 25;
                icon.src = '/img/icon/pending.svg';

                let text = document.createElement('p');
                text.className = 'file-tab__li__p';
                text.innerHTML = element;
                
                li.appendChild(icon);
                li.appendChild(text);
                fileTabOutputOl.appendChild(li);

                if (await isValid(element))
                    icon.src = '/img/icon/success.svg';
                else
                    icon.src = '/img/icon/failure.svg';
                
            });

        };

        reader.readAsText(file);
  }

  else {
    alert('Choose a file to read.');
  }

});
