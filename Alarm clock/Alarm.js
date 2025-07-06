let alarmTime;
document.getElementById("set-alarm").addEventListener("click", () => {
	alarmTime = document.getElementById("alarm-time").value;
	// let alarmTimeParts = alarmTimeString.split(":");
	// let alarmTime = new Date();
	// alarmTime.setHours(alarmTimeParts[0]);
	// alarmTime.setMinutes(alarmTimeParts[1]);
	alert("Alarm set")
});
setInterval(() => {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let timee = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}`;
	document.getElementById("time").innerHTML = timee;
    let music=document.querySelector("#music")
	// Check if the alarm is set and if it's time to trigger it
	if (timee==alarmTime) 
    {
		document.getElementById("alarm-text").innerHTML = "Wake Up!";
        music.play()
		
	}
    // else
    // {
    //     document.getElementById("alarm-text").innerHTML = "Alarm set";
    // }
}, 1000);
