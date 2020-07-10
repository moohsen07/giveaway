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

// dark mode

let darkSwitch = document.querySelector(".dark-switch")

let darkMode = localStorage.getItem("darkMode")

const enableDarkMode = () => {

  darkSwitch.style.color = "#d8ad2c"

  document.body.classList.add("dark")

  document.body.style.backgroundColor = "#000"

  document.querySelector(".buttons .send").style.cssText = "background-color: transparent ;color: var(--seceond-color);"

  document.querySelector(".buttons .fb-btn").style.cssText = "background-color: transparent ;color: #4C6EF5;"

  localStorage.setItem("darkMode", "enable")

}
const disableDarkMode = () => {

  darkSwitch.style.color = "inherit"

  document.body.classList.remove("dark")

  document.body.style.backgroundColor = "#fff"

  localStorage.setItem("darkMode", null)

}

if (darkMode == "enable") {

  enableDarkMode()

}

darkSwitch.addEventListener("click", () => {

  let darkMode = localStorage.getItem("darkMode")

  if (darkMode !== "enable") enableDarkMode()

  else disableDarkMode()

})