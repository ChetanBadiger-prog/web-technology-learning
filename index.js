let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    let city = document.getElementById("city").value
    let apikey = "340677cb6d7066e64bdaa44b46a6f727"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    let result = document.getElementById("result")

    fetch(api)
    .then(x=>x.json())
    .then(y=>{
        console.log(y)
        if (y.cod!="200"){
            alert("City not Found")
        }else{
            result.innerHTML=`
            <p>${y.name},${y.sys.country}</p>
            <p>${y.main.temp}</p>
            <p>${y.wind.speed}</p>
            <p>${y.weather[0].description}</p>
            <p>${y.main.temp_min}</p>  `
        }
    })
})