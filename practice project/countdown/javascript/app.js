const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const text = document.querySelector(".text")
const countdown = document.querySelectorAll(".countdown h1")

const futureTime = new Date(2027, 0, 1, 0, 0, 0)
const futureYear = futureTime.getFullYear()
const futureMonth = months[futureTime.getMonth()]
const futureDate = futureTime.getDate()
const futureDay = weekdays[futureTime.getDay()]
const futureHour = futureTime.getHours()
const futureMinute = futureTime.getMinutes()
const futureSecond = futureTime.getSeconds()


text.innerHTML = `           THE YEAR <br /> IS <span>${futureYear}</span> A.D. <br>
IN A DARK WOOD, <br />
NEAR JERUSALEM. <br />
A MAN WANDERS, HAVING LOST HIS WAY. <span>${futureDay}</span> <br />
THIS MAN IS DANTE. <br />
<span>${futureMonth}</span> REACHING THE BOTTOM <br />
OF A BRIGHT, SUNLIT HILL,  <br />
HE BEGINS TO CLIMB IT, <br />
HOPING TO HAVE FOUND <br />
THE RIGHT PATH OUT OF <br />
THE SURROUNDING DARKNESS. <br>
<span>${futureDate}`

const getRemainingTime = () =>{
    const currentTime = new Date()
    const currentTimeM = currentTime.getTime()
    const futureTimeM = futureTime.getTime()
    const remainingTime = futureTimeM - currentTimeM

    const oneSecond = 1000
    const oneMinute = oneSecond * 60
    const oneHour = oneSecond * 60 * 60
    const oneDay = oneSecond * 60 * 60 * 24

    const doubleZero = (item) => {
        if(item < 10) {
            return `0${item}`
        } else {
            return item
        }
    }

    const remainingDay = doubleZero(Math.floor(remainingTime / oneDay))
    const remainingHour = doubleZero(Math.floor((remainingTime % oneDay)/oneHour))
    const remainingMinute = doubleZero(Math.floor((remainingTime % oneHour)/oneMinute))
    const remainingSecond = doubleZero(Math.floor((remainingTime % oneMinute)/oneSecond))
    const remainingPercentage = doubleZero(`${Math.floor(remainingTime * 100 / (futureTime - new Date(2017, 0, 1, 0, 0, 0).getTime()))}%`)

    const data = [remainingDay, remainingHour, remainingMinute, remainingSecond, remainingPercentage]

    countdown.forEach((item,index) => {
        item.textContent = data[index]
    }
    )

    if (remainingTime <= 0) {
        clearInterval(timeRefresh)
        const expiredMessage = document.querySelector(".countdown")
        expiredMessage.innerHTML = `<h1>INFERNO !</h1>`
        expiredMessage.style.color = "black"
        expiredMessage.style.backgroundColor = "var(--red)"
    }
}

const timeRefresh = setInterval(getRemainingTime, 1000) 

getRemainingTime()