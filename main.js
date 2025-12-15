const input = document.querySelector("input")
const loc = document.querySelector("#loc")
const temp = document.querySelector("#temp")
const feels = document.querySelector("#feels")
const img = document.querySelector("#img")


const weatherApi = async () => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${input.value}&aqi=no`)
        const data = await response.json()
        console.log(data)


        loc.innerHTML = `Location : ${data.location.name}`
        temp.innerHTML = `temp : ${data.current.temp_c}`
        feels.innerHTML = `Feels Like : ${data.current.feelslike_c}`
        input.value=''

        if(data.current.condition.text==="Mist"){
            
        }



    }
    catch (error) {
        loc.innerHTML = "location not found"
        temp.innerHTML = ""
        feels.innerHTML = ""

    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') weatherApi()
})

console.log("hello");
