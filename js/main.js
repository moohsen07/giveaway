let launchDate = new Date("September 17, 2020 00:00:00").getTime()

let tick = () => {

  let now = new Date().getTime()

  let diff = launchDate - now;

  if (diff > 0) {

    let days = Math.floor(diff / (1000 * 60 * 60 * 24))

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    let sec = Math.floor((diff % (1000 * 60)) / 1000)

    if (days < 10) days = "0" + days;

    if (hours < 10) hours = "0" + hours;

    if (min < 10) min = "0" + min;

    if (sec < 10) sec = "0" + sec;

    document.querySelector(".day").textContent = days

    document.querySelector(".hour").textContent = hours

    document.querySelector(".min").textContent = min

    document.querySelector(".sec").textContent = sec

  }

}
setInterval(tick, 1000)