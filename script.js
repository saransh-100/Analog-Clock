setInterval(()=>{
    const date = new Date();
    const hourTime = date.getHours();
    const minuteTime = date.getMinutes();
    const secondTime = date.getSeconds();
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const hrotation = 30*hourTime + minuteTime/2;
    const mrotation = 6*minuteTime;
    const srotation = 6*secondTime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000)