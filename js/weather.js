const API_KEY="c900540d80c2d2ed7da160796e77500b";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(URL).then(response => response.json()).then(data=>{
        const city=document.querySelector("#weather span:first-child");
        const Weather=document.querySelector("#weather span:last-child");
        const name=data.name;
        const weather=`${data.weather[0].main} / ${data.main.temp}`;
        city.innerHTML=name;
        Weather.innerHTML=weather;
    });
}
function onGeoError(){
    alert("Can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);