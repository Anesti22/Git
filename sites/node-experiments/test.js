const fs = require('fs')
const https = require('https')

fs.writeFile(__dirname + '/index.html', "<h1>Html Is great</h1>", function(error){
    if(error) {
        return console.log(error)
    } else {
        return console.log("Congrats!")
    }
})


// Https Request
const urlPhoto = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/cat-dog.jpg'

https.get(urlPhoto, function(res) {
    res.pipe(fs.createWriteStream(__dirname + '/mydog.jpeg'))
})
