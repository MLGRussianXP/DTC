async function isTokenValid(token) {
    const url = 'https://discord.com/api/v10/users/@me';
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      const response = await fetch(url, { headers });
  
      if (response.status === 200) {
        return true; // Token is valid; the user is authenticated
      } else {
        return false; // Token is invalid or expired
      }
    } catch (error) {
      return false; // An error occurred during the request
    }
}

// Link to the file form
const fileTabTokenList = document.getElementById('file-tab__upload-file');
const fileTabOutputP = document.getElementById('file-tab__output');

document.getElementById('file-tab__submit').addEventListener('click', () => {
    let file = fileTabTokenList.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function(event) {
            let contents = event.target.result;
            let tokens = contents.split('\n');
            
            let valid = 0
            tokens.forEach(async element => {
                if (await isTokenValid(element))
                    valid++;
            });

            fileTabOutputP.textContent = valid;
        };

        reader.readAsText(file);
  }

  else {
    alert('Выберите файл для чтения.');
  }

});
