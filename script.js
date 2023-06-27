// https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric

const form = document.querySelector(".top-Banner form");
const input = document.querySelector(".top-Banner input");
const txtDiscription = document.querySelector(".discription-city");
const list = document.querySelector(".list");

const apiKey = "8da9ac61caa2f7da327d1b5bddc04652";

form.addEventListener("submit" , searchCity);

function searchCity (e) {
    e.preventDefault();
    let cityName = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {main,name,sys,weather} = data;
        console.log(weather);
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        console.log(icon);
        const li = document.createElement("li");
        li.classList.add("list-city");

        const liBox = `
          <h1 class="city-name" data-name=${name},${sys.country}>
          <span>${name}</span>
          <span>${sys.country}</span>
          </h1>

          <div class="city-temp" >${Math.round(main.temp)}</div>

          <figure class="city-img">
            <img class="city-icon" src='${icon}' alt="weather state">
            <figcaption class="discription"> ${weather[0]["description"]} </figcaption> 
          </figure>
        `;

        li.innerHTML = liBox;
        list.appendChild(li);
        txtDiscription.innerText = "";
    })

    .catch ( () => {
        txtDiscription.innerText = "لطفا اسم شهر را درست وارد کنید";
    })

input.value = ""; 
}
