import { isValid } from './manage-token.js';

// Link to the file form
const fileTabTokenList = document.getElementById('file-tab__upload-file');
const fileTabOutputOl = document.getElementById('file-tab__output');

document.getElementById('file-tab__submit').addEventListener('click', () => {
    const file = fileTabTokenList.files[0];

    if (file) {
        fileTabOutputOl.innerHTML = '';

        const reader = new FileReader();

        reader.onload = function(event) {
            let contents = event.target.result;
            let tokens = contents.split('\n');
            
            tokens.forEach(async element => {

                let li = document.createElement('li');

                let icon = document.createElement('div');
                icon.classList.add('icon-pending');
                
                const text = document.createElement('p');
                text.innerHTML = "..." + element.slice(-32);

                li.appendChild(icon);
                li.appendChild(text);
                fileTabOutputOl.appendChild(li);
                
                let status = await isValid(element);
                icon.className = '';

                if (status)
                    icon.classList.add('icon-valid');
                else
                    icon.classList.add('icon-invalid');
                
            });

        };

        reader.readAsText(file);
  }

  else {
    alert('Choose a file to read.');
  }

});
