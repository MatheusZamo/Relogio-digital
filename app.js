const clockContainer = document.querySelector('.clock-container')

const checkLengthClock = (value) => String(value).length === 1 ? `0${value}` : value

const insertClockInHTML = (hours,minutes,seconds) => {
    const insertInHTML = `
    <span>${checkLengthClock(hours)}</span> :
    <span>${checkLengthClock(minutes)}</span> : 
    <span>${checkLengthClock(seconds)}</span>
    `
    clockContainer.innerHTML = insertInHTML
}

const showClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
    
    insertClockInHTML(hours,minutes,seconds)
}

setInterval(showClock,1000)