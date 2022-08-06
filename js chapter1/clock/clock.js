const date = { month: 'long', day: 'numeric' }
const time = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
const day = {weekday: 'long'}
const current = new Date()
const date2 = current.toLocaleDateString("en-US", date)
const time2 = current.toLocaleTimeString("en-US", time)
const day2 = current.toLocaleDateString("en-US", day)
console.log(date2)
console.log(time2)
console.log(day2)

document.getElementById("date3").innerHTML = (date2)
document.getElementById("time3").innerHTML = (time2)
document.getElementById("day3").innerHTML = (day2)