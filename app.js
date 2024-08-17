const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const period = document.querySelector('.time-period');
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']




setInterval(()=>{
    const time = new Date();
    let hours
    let hrs = time.getHours();
    let mins = time.getMinutes()
    if (hrs>12){
        period.innerText="PM";
        hours = hrs-12;
    }else{
        period.innerText="AM";
        hours = hrs

    }
    hour.innerText = (hours<10?"0":"")+hours;
    min.innerText = (mins<10?"0":"")+mins;

    day.innerText = weekdays[time.getDay()];

},1000)

