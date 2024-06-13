const port = process.env.PORT || 3000;


window.onload() =
    fetch(`http://localhost:${port}/title`)
                  .then(response => response.json())
                  .then(data => {
                    // Set the title from the response data
                    document.getElementById('mainLogo').textContent = data.title;
                  })
                  .catch(error => {
                    console.error('Error fetching the title:', error);
                  });

