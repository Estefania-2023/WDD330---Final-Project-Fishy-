  // Get the button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Function to show or hide the button based on scroll position
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };
  
  // Function to smoothly scroll back to the top
  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-4.93&lon=-80.34&units=metric&appid=337ef9758d978035a649bd1d6694ac58`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data); //Testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt","weather icon");
    captionDesc.textContent =`${desc}`;
}

apiFetch();


// to display 3 days
const tod = document.querySelector('#todayc');
const tom = document.querySelector('#tomorrowc');
const atom = document.querySelector('#atomorrowc');

const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=-4.93&lon=-80.34&units=metric&appid=337ef9758d978035a649bd1d6694ac58';

//get days
let todaydate = new Date();
let tomorrow= new Date();
tomorrow.setDate(todaydate.getDate() + 1);
let aftertomorrow = new Date();
aftertomorrow.setDate(todaydate.getDate() + 2);

let format = { weekday: 'long' };
let daytomorrow = tomorrow.toLocaleDateString('en-US', format);
let dayaftertomorrow = aftertomorrow.toLocaleDateString('en-US', format);

async function apiFetch2(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults2(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults2(data) {
  tod.innerHTML = `Today: <b>${Math.round(data.list[0].main.temp)}&deg;C</b>`;
  tom.innerHTML = `${daytomorrow}: <b>${Math.round(data.list[1].main.temp)}&deg;C</b>`;
  atom.innerHTML = `${dayaftertomorrow}: <b>${Math.round(data.list[2].main.temp)}&deg;C</b>`;
}
apiFetch2(url2);

//hide and show weather

