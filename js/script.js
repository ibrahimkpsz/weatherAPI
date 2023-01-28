const url = "https://api.openweathermap.org";
const apiKey = "9e431367a353fd687809c431f49aad93";

const sehirGiris = document.getElementById("sehirGiris");
const aramaButonu = document.getElementById("aramaButonu");

let sehir = document.getElementById("sehir");
let derece = document.getElementById("derece");
let resim = document.getElementById("resim");
let h_sicaklik = document.getElementById("hissedilen");
let nem = document.getElementById("nem");

aramaButonu.addEventListener("click", (e) => {
  e.preventDefault();

  if (sehirGiris.value == "") {
    alert("Lütfen şehir giriniz!");
  } else {
    linkOlustur(sehirGiris.value);
  }
  sehirGiris.value = "";
});

const linkOlustur = (sehirAdi) => {
  let link = `${url}/data/2.5/weather?q=${sehirAdi}&APPID=${apiKey}&units=metric&lang=tr`;
  fetch(link)
    .then((weather) => {
      return weather.json();
    })
    .then(sonucuGoster);
};

const sonucuGoster = (weather) => {
  console.log(weather);
  sehir.innerText = weather.name;
  derece.innerHTML = `${Math.floor(weather.main.temp)}&deg;C`;
  h_sicaklik.innerHTML = `Hissedilen Sıcaklık : ${Math.floor(
    weather.main.feels_like
  )}&deg;C`;
  nem.innerHTML = `Nem : ${weather.main.humidity}`;
  console.log(weather.weather[0].id);

  let iconId = weather.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  resim.src = iconUrl;
};
