
function getMoreCuteDogs(){
    // A message to show during the time the webpage is  getting a reply from server.
    document.getElementById('picture').innerHTML = 'Please wait while the Image Loads'

    // Making the API call to get Data from the server
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((res) => {
    document.getElementById('picture').innerHTML = `<img src = ${res.message}>`
    }).catch((err) => console.log(err))
}

// Making sure that an image is displayed on the page load too.
window.onload = getMoreCuteDogs;