async function isTokenValid(token) {
    const url = 'https://discord.com/api/v10/users/@me';
    const headers = {
        Authorization: token,
    };
  
    try {
        const response = await fetch(
            url, { headers }
        );
  
        if (response.status === 200)
            return true; // Token is valid; the user is authenticated
        else
            return false; // Token is invalid or expired

    } catch (error) {
        return false; // An error occurred during the request
    }
}

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

                if (await isTokenValid(element))
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
