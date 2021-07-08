console.log("client size JS");

fetch('http://localhost:3200/weather?address=!').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})
