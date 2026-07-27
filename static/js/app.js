/* ===========================
   FoldCharge AI
   Main JavaScript
=========================== */

// Loading Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

        document.getElementById("app").style.display = "flex";

        loadDashboard();

    },3000);

});


// Sidebar Navigation

const menuItems=document.querySelectorAll(".sidebar li");

menuItems.forEach(item=>{

    item.addEventListener("click",function(){

        menuItems.forEach(i=>i.classList.remove("active"));

        this.classList.add("active");

        let page=this.innerText.trim();

        switch(page){

            case "Dashboard":
                loadDashboard();
                break;

            case "Vehicle":
                loadVehicle();
                break;

            case "Charging":
                loadCharging();
                break;

            case "Solar":
                loadSolar();
                break;

            case "Battery":
                loadBattery();
                break;

            case "Payment":
                loadPayment();
                break;

            case "Analytics":
                loadAnalytics();
                break;

            case "CCTV":
                loadCamera();
                break;

            case "AI Assistant":
                loadAI();
                break;

            case "Settings":
                loadSettings();
                break;

        }

    });

});


// Dashboard

function loadDashboard(){

document.getElementById("content").innerHTML=`

<div class="dashboard">

<div class="cards">

<div class="card">

<h3>🔋 Battery</h3>

<h1 id="batteryValue">82%</h1>

<p>Battery Health Excellent</p>

</div>

<div class="card">

<h3>☀ Solar Power</h3>

<h1 id="solarValue">560 W</h1>

<p>Generating Power</p>

</div>

<div class="card">

<h3>⚡ Charging</h3>

<h1 id="chargingValue">2.4 kW</h1>

<p>Fast Charging</p>

</div>

<div class="card">

<h3>💰 Session Cost</h3>

<h1 id="costValue">₹46</h1>

<p>Current Session</p>

</div>

</div>

<div class="middle">

<div class="left-panel">

<div class="card">

<h2>Vehicle Information</h2>

<hr>

<br>

<p><b>Vehicle</b> : Ather 450X</p>

<p><b>Battery</b> : 82%</p>

<p><b>Charging Time</b> : 18 min</p>

<p><b>Connector</b> : Connected</p>

<p><b>Charging Mode</b> : AI Smart Mode</p>

</div>

<br>

<div class="card">

<h2>Charging Status</h2>

<br>

<progress value="82" max="100"></progress>

<br><br>

<h2 style="color:#00ff88;">82 %</h2>

</div>

</div>

<div class="right-panel">

<div class="card">

<h2>Live Station Status</h2>

<hr>

<br>

<p>🟢 Solar Available</p>

<p>🟢 Battery Healthy</p>

<p>🟢 AI Active</p>

<p>🟢 CCTV Online</p>

<p>🟢 Firebase Connected</p>

<p>🟢 Raspberry Pi Connected</p>

</div>

<br>

<div class="card">

<h2>Today's Summary</h2>

<hr>

<br>

<p>Energy Delivered : 18.6 kWh</p>

<p>Solar Energy : 12.4 kWh</p>

<p>Grid Energy : 6.2 kWh</p>

<p>CO₂ Saved : 14 kg</p>

<p>Revenue : ₹786</p>

</div>

</div>

</div>

</div>

`;

startLiveData();

}

// Vehicle

function loadVehicle(){

document.getElementById("content").innerHTML=`

<div class="vehicle-page">

<div class="vehicle-card">

<img src="https://img.icons8.com/color/480/electric-scooter.png" class="bike">

<div class="vehicle-info">

<h2>Vehicle Details</h2>

<hr><br>

<p><b>Vehicle :</b> Ather 450X</p>

<p><b>Owner :</b> Guest User</p>

<p><b>Battery Capacity :</b> 3.7 kWh</p>

<p><b>Battery Level :</b> <span id="vehicleBattery">82%</span></p>

<p><b>Range :</b> <span id="range">96 km</span></p>

<p><b>Temperature :</b> <span id="temp">31°C</span></p>

<p><b>Status :</b>

<span style="color:#00ff88;">● Connected</span>

</p>

<br>

<button onclick="connectVehicle()">

Connect Vehicle

</button>

<button onclick="disconnectVehicle()">

Disconnect

</button>

</div>

</div>

</div>

`;

vehicleLive();

}


// Charging

function loadCharging(){

document.getElementById("content").innerHTML=`

<div class="charging-page">

<div class="charge-left">

<div class="battery-circle">

<div class="inner-circle">

<h1 id="chargePercent">82%</h1>

<p>Charging...</p>

</div>

</div>

<div class="charge-buttons">

<button onclick="startCharging()">▶ Start</button>

<button onclick="pauseCharging()">⏸ Pause</button>

<button onclick="stopCharging()">⏹ Stop</button>

</div>

</div>

<div class="charge-right">

<div class="card">

<h2>Charging Information</h2>

<hr><br>

<p>⚡ Power : <span id="power">2.4 kW</span></p>

<p>🔌 Voltage : <span id="voltage">230 V</span></p>

<p>🔋 Current : <span id="current">10 A</span></p>

<p>⏱ Remaining Time : <span id="time">18 min</span></p>

<p>💰 Cost : <span id="cost">₹46</span></p>

<p>🌱 Charging Mode : AI Smart Charging</p>

</div>

<div class="card">

<h2>Energy Flow</h2>

<br>

<div class="energy-flow">

☀ Solar

➡

🔋 Battery

➡

🏍 EV

</div>

</div>

</div>

</div>

`;

chargingLive();

}
let charge=82;

function chargingLive(){

setInterval(()=>{

if(charge<100){

charge++;

}

document.getElementById("chargePercent").innerHTML=charge+"%";

document.getElementById("power").innerHTML=(2+Math.random()).toFixed(2)+" kW";

document.getElementById("current").innerHTML=Math.floor(Math.random()*3+9)+" A";

document.getElementById("cost").innerHTML="₹"+Math.floor(Math.random()*50+40);

document.getElementById("time").innerHTML=(100-charge)+" min";

},3000);

}

function startCharging(){

alert("Charging Started");

}

function pauseCharging(){

alert("Charging Paused");

}

function stopCharging(){

alert("Charging Stopped");

}

// Solar

function loadSolar(){

document.getElementById("content").innerHTML=`

<div class="solar-page">

<div class="solar-left">

<div class="card">

<h2>☀ Solar Panel Status</h2>

<hr><br>

<div class="sun-animation">

☀

</div>

<h1 id="solarPower">520 W</h1>

<p>Current Solar Generation</p>

</div>

<div class="card">

<h2>Solar Statistics</h2>

<hr><br>

<p>Today's Generation :
<span id="todayGeneration">12.5 kWh</span></p>

<p>Efficiency :
<span id="efficiency">94%</span></p>

<p>CO₂ Saved :
<span id="co2saved">15 kg</span></p>

<p>Battery Charging :
<span id="batteryCharge">Charging</span></p>

</div>

</div>

<div class="solar-right">

<div class="card">

<h2>Weather</h2>

<hr><br>

<h1>☀ Sunny</h1>

<p>Temperature :
<span id="tempSolar">33°C</span></p>

<p>Humidity :
45%</p>

<p>Wind Speed :
12 km/h</p>

</div>

<div class="card">

<h2>Power Source</h2>

<hr><br>

<p>☀ Solar : 82%</p>

<p>⚡ Grid : 18%</p>

<p>🔋 Battery Backup : ON</p>

</div>

</div>

</div>

`;

solarLive();

}


// Battery

function loadBattery(){

document.getElementById("content").innerHTML=`

<div class="battery-page">

<div class="battery-left">

<div class="card">

<h2>🔋 Battery Management System</h2>

<hr><br>

<div class="battery-pack">

<div class="battery-level" id="batteryFill"></div>

</div>

<h1 id="soc">82%</h1>

<p>State of Charge (SOC)</p>

</div>

<div class="card">

<h2>Battery Parameters</h2>

<hr><br>

<p>Voltage : <span id="voltageValue">51.2 V</span></p>

<p>Current : <span id="currentValue">10.5 A</span></p>

<p>Power : <span id="powerValue">2.4 kW</span></p>

<p>Temperature : <span id="temperatureValue">31°C</span></p>

<p>Battery Health : <span id="healthValue">96%</span></p>

</div>

</div>

<div class="battery-right">

<div class="card">

<h2>Battery Cells</h2>

<hr><br>

<div class="cells">

<div class="cell active"></div>
<div class="cell active"></div>
<div class="cell active"></div>
<div class="cell active"></div>
<div class="cell active"></div>
<div class="cell active"></div>
<div class="cell active"></div>
<div class="cell active"></div>

</div>

<br>

<p>✔ Cell Balancing Active</p>

<p>✔ Thermal Protection ON</p>

<p>✔ AI Monitoring Enabled</p>

</div>

<div class="card">

<h2>Estimated Backup</h2>

<hr><br>

<h1 id="backupTime">2h 18m</h1>

<p>Remaining Charging Time</p>

</div>

</div>

</div>

`;

batteryLive();

}


// Payment

function loadPayment(){

document.getElementById("content").innerHTML=`

<div class="payment-page">

<div class="payment-left">

<div class="card">

<h2>💳 Payment Details</h2>

<hr><br>

<p>Charging Cost : <span id="payCost">₹46</span></p>

<p>Charging Time : 28 min</p>

<p>Energy Delivered : 2.8 kWh</p>

<p>GST : ₹4</p>

<h1>Total : ₹50</h1>

</div>

<div class="payment-buttons">

<button onclick="pay('Google Pay')">Google Pay</button>

<button onclick="pay('PhonePe')">PhonePe</button>

<button onclick="pay('Paytm')">Paytm</button>

<button onclick="pay('Card')">Debit/Credit Card</button>

<button onclick="pay('Cash')">Cash</button>

</div>

</div>

<div class="payment-right">

<div class="card">

<h2>📱 Scan QR Code</h2>

<br>

<img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=FoldChargeAIPayment" class="qr">

<br><br>

<p>Scan using any UPI App</p>

</div>

<div class="card">

<h2>Payment Status</h2>

<hr><br>

<h1 id="paymentStatus" style="color:orange;">

Waiting...

</h1>

</div>

</div>

</div>

`;

}
function pay(method){

document.getElementById("paymentStatus").innerHTML="Processing...";

document.getElementById("paymentStatus").style.color="orange";

setTimeout(()=>{

document.getElementById("paymentStatus").innerHTML="Payment Successful";

document.getElementById("paymentStatus").style.color="#00ff88";

alert("Payment Successful via "+method);

},2500);

}


// Analytics

function loadAnalytics(){

document.getElementById("content").innerHTML=`

<div class="analytics-page">

<div class="top-cards">

<div class="card">
<h3>⚡ Energy Delivered</h3>
<h1 id="energy">18.5 kWh</h1>
</div>

<div class="card">
<h3>☀ Solar Generated</h3>
<h1 id="solarEnergy">12.8 kWh</h1>
</div>

<div class="card">
<h3>💰 Revenue</h3>
<h1 id="revenue">₹786</h1>
</div>

<div class="card">
<h3>🌱 CO₂ Saved</h3>
<h1 id="co2">15.4 kg</h1>
</div>

</div>

<div class="graph-card">

<h2>Energy Analytics</h2>

<canvas id="energyChart"></canvas>

</div>

<div class="card">

<h2>Today's Summary</h2>

<hr><br>

<p>Charging Sessions : 24</p>

<p>Average Charging Time : 34 min</p>

<p>Highest Charging Power : 3.2 kW</p>

<p>Solar Utilization : 84%</p>

<p>Grid Consumption : 16%</p>

</div>

</div>

`;

analyticsLive();

drawChart();

}


// Camera

function loadCamera(){

document.getElementById("content").innerHTML=`

<div class="camera-page">

<div class="camera-left">

<div class="card">

<h2>📷 Live CCTV Camera</h2>

<hr><br>

<video id="camera" autoplay muted playsinline></video>

<div class="camera-buttons">

<button onclick="startCamera()">▶ Start</button>

<button onclick="stopCamera()">⏹ Stop</button>

<button onclick="capturePhoto()">📸 Capture</button>

</div>

</div>

</div>

<div class="camera-right">

<div class="card">

<h2>Station Monitoring</h2>

<hr><br>

<p>🟢 Camera Status :
<span id="camStatus">Offline</span></p>

<p>🕒 Time :
<span id="camTime"></span></p>

<p>🎥 Recording :
<span style="color:red;">OFF</span></p>

<p>🚗 Vehicle :
Connected</p>

<p>⚡ Charger :
Active</p>

</div>

<div class="card">

<h2>Captured Image</h2>

<hr><br>

<canvas id="canvas" width="350" height="250"></canvas>

</div>

</div>

</div>

`;

cameraClock();

}


// AI

function loadAI(){

document.getElementById("content").innerHTML=`

<div class="ai-page">

<div class="ai-left">

<div class="card">

<h2>🤖 AI Smart Assistant</h2>

<hr><br>

<div id="chatBox" class="chat-box">

<div class="bot">

👋 Welcome to FoldCharge AI

</div>

<div class="bot">

Ask me anything about charging...

</div>

</div>

<div class="chat-input">

<input
type="text"
id="userInput"
placeholder="Type your question...">

<button onclick="sendMessage()">

Send

</button>

</div>

</div>

</div>

<div class="ai-right">

<div class="card">

<h2>AI Prediction</h2>

<hr><br>

<p>🔋 Battery Health</p>

<h1 id="health">96%</h1>

</div>

<div class="card">

<h2>Charging Recommendation</h2>

<hr><br>

<p id="recommend">

Eco Charging Recommended

</p>

</div>

<div class="card">

<h2>Solar Prediction</h2>

<hr><br>

<p id="forecast">

High Solar Generation Expected

</p>

</div>

<div class="card">

<h2>Station Status</h2>

<hr><br>

<p>🟢 AI Active</p>

<p>🟢 Camera Online</p>

<p>🟢 Raspberry Pi Connected</p>

<p>🟢 Firebase Online</p>

</div>

</div>

</div>

`;

AIlive();

}
function sendMessage(){

let input=document.getElementById("userInput");

let chat=document.getElementById("chatBox");

if(input.value==="") return;

chat.innerHTML+=`

<div class="user">

${input.value}

</div>

`;

let msg=input.value.toLowerCase();

let reply="Charging system working normally.";

if(msg.includes("battery"))

reply="Battery Health is Excellent (96%).";

else if(msg.includes("solar"))

reply="Solar generation is high today.";

else if(msg.includes("cost"))

reply="Estimated charging cost is ₹52.";

else if(msg.includes("time"))

reply="Charging completes in approximately 18 minutes.";

setTimeout(()=>{

chat.innerHTML+=`

<div class="bot">

${reply}

</div>

`;

chat.scrollTop=chat.scrollHeight;

},800);

input.value="";

}

function AIlive()
{

setInterval(()=>{

document.getElementById("health").innerHTML=

Math.floor(Math.random()*4+95)+"%";

},4000);

}


// Settings

function loadSettings(){

document.getElementById("content").innerHTML=`

<h1>Settings</h1>

`;

}
function startLiveData(){

setInterval(()=>{

let battery=Math.floor(Math.random()*10)+80;

let solar=Math.floor(Math.random()*150)+500;

let charging=(Math.random()*0.8+2).toFixed(2);

let cost=Math.floor(Math.random()*30)+40;

document.getElementById("batteryValue").innerHTML=battery+"%";

document.getElementById("solarValue").innerHTML=solar+" W";

document.getElementById("chargingValue").innerHTML=charging+" kW";

document.getElementById("costValue").innerHTML="₹"+cost;

},3000);

}
function analyticsLive(){

setInterval(()=>{

document.getElementById("energy").innerHTML=(18+Math.random()*2).toFixed(1)+" kWh";

document.getElementById("solarEnergy").innerHTML=(12+Math.random()*2).toFixed(1)+" kWh";

document.getElementById("revenue").innerHTML="₹"+Math.floor(Math.random()*200+700);

document.getElementById("co2").innerHTML=(15+Math.random()*2).toFixed(1)+" kg";

},3000);

}

function drawChart(){

const ctx=document.getElementById('energyChart');

new Chart(ctx,{

type:'line',

data:{

labels:['8AM','10AM','12PM','2PM','4PM','6PM','8PM'],

datasets:[{

label:'Energy (kWh)',

data:[2,4,6,9,12,15,18],

borderColor:'#00ff88',

backgroundColor:'rgba(0,255,136,.2)',

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:'white'

}

}

},

scales:{

x:{

ticks:{

color:'white'

}

},

y:{

ticks:{

color:'white'

}

}

}

}

});

}
let stream;

async function startCamera(){

try{

stream=await navigator.mediaDevices.getUserMedia({

video:true

});

document.getElementById("camera").srcObject=stream;

document.getElementById("camStatus").innerHTML="Online";

document.getElementById("camStatus").style.color="#00ff88";

}catch(e){

alert("Camera Permission Denied");

}

}

function stopCamera(){

if(stream){

stream.getTracks().forEach(track=>track.stop());

}

document.getElementById("camStatus").innerHTML="Offline";

document.getElementById("camera").srcObject=null;

}

function capturePhoto(){

let video=document.getElementById("camera");

let canvas=document.getElementById("canvas");

let ctx=canvas.getContext("2d");

ctx.drawImage(video,0,0,350,250);

}

function cameraClock(){

setInterval(()=>{

let now=new Date();

document.getElementById("camTime").innerHTML=

now.toLocaleTimeString();

},1000);

}
function solarLive(){

setInterval(()=>{

document.getElementById("solarPower").innerHTML=

Math.floor(Math.random()*150+500)+" W";

document.getElementById("todayGeneration").innerHTML=

(12+Math.random()*2).toFixed(1)+" kWh";

document.getElementById("efficiency").innerHTML=

Math.floor(Math.random()*5+92)+"%";

document.getElementById("co2saved").innerHTML=

Math.floor(Math.random()*5+14)+" kg";

document.getElementById("tempSolar").innerHTML=

Math.floor(Math.random()*4+31)+"°C";

},3000);

}
function batteryLive(){

let soc=82;

setInterval(()=>{

if(soc<100){

soc++;

}

document.getElementById("soc").innerHTML=soc+"%";

document.getElementById("batteryFill").style.height=soc+"%";

document.getElementById("voltageValue").innerHTML=

(48+Math.random()*4).toFixed(1)+" V";

document.getElementById("currentValue").innerHTML=

(9+Math.random()*2).toFixed(1)+" A";

document.getElementById("powerValue").innerHTML=

(2+Math.random()).toFixed(2)+" kW";

document.getElementById("temperatureValue").innerHTML=

Math.floor(Math.random()*5+30)+"°C";

document.getElementById("healthValue").innerHTML=

Math.floor(Math.random()*3+95)+"%";

document.getElementById("backupTime").innerHTML=

Math.floor(Math.random()*2+1)+"h "+Math.floor(Math.random()*59)+"m";

},3000);

}