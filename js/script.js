
const hoverArea = document.getElementById('hoverArea');
const hoverSound = document.getElementById('hoverSound');
hoverArea.addEventListener('mouseenter', function() {
    hoverSound.play();  
});

hoverArea.addEventListener('mouseleave', function() {
    hoverSound.pause(); 
    hoverSound.currentTime = 0; 
});

function toggleText() {
    var text = document.getElementById("show");
    if (text.classList.contains("visible")) {
        text.classList.remove("visible"); 
    } else {
        text.classList.add("visible"); 
    }
}

function updateData() {
    fetch("https://206.189.146.138/api/sensors")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // แสดงข้อมูลในหน้าเว็บ
        document.getElementById("timestamp").innerHTML = data.timestamp;
        document.getElementById("temperature").innerHTML = data.temperature ;
        document.getElementById("humidity").innerHTML = data.humidity ;
        document.getElementById("luxsensor").innerHTML = data.luxsensor ;
        document.getElementById("motion").innerHTML = data.motion ;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // อัปเดตข้อมูลทุกๆ 1 วินาที
setInterval(updateData, 1000);


const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
e.preventDefault(); 


const formData = new FormData(thisForm).entries();

const response = await fetch('https://206.189.146.138/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData))
     
});



const result = await response.json();
console.log(result); 
});

function start() {
    document.getElementById("profile_name").classList.add("change");
}

function stop() {
    document.getElementById("profile_name").classList.remove("change");
}