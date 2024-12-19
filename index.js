
function updateClock()
{
    const time = new Date();
    let hour = time.getHours();
    const meridium = hour >=12 ? "PM": "AM";
    hour = hour%12 || 12;
    hour=hour.toString().padStart(2,0); //padstart is used to display atleast two numbers e.g(00) instead jst 0

    const min = time.getMinutes().toString().padStart(2,0);

    const sec = time.getSeconds().toString().padStart(2,0);

    let timeString= `${hour}:${min}:${sec} ${meridium}`;
    document.getElementById("clock").textContent=timeString;


}

updateClock();
setInterval(updateClock,1000);