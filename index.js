let showCurrentTime = function(){
    let clock = document.getElementById('clock');
    let today = document.getElementById('day');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let mer = "AM";
    let day = currentTime.getDay();
    if(hours >= 12)
    {
        mer = "PM";
    }
    if(hours > 12)
    {
        hours = hours - 12;
    }
    if (min<10)
    {
        min = "0"+min;
    }
    if (sec <10)
    {
        sec = "0"+sec;
    }
    if(day == 0)
    {
        day = "Sunday";
    }
    if(day == 6)
    {
        day = "Saturday";
    }

    let time = hours + " : " + min + " : " + sec + " " + mer;
    clock.innerHTML = time;
    today.innerHTML = day;
    
}

showCurrentTime();
setInterval(showCurrentTime, 1000);

let i =0;
setInterval(()=>{
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      let motivation = document.getElementById("tumChangeHoJao");
        const myArray = Object.values(data);
        let textpart = JSON.stringify(myArray[i].text);
        let authorpart = myArray[i].author;
        motivation.innerHTML = textpart + "<br>~" + authorpart;
  }); 
  i++;
}, 5000);

let myElement = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


getLocation();