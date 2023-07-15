
const popUpEl = document.querySelector(".popUp")
const h2 = document.querySelector(".details h2")
const reconnectBtn = document.querySelector(".reconnectBtn")
let isOnline= true
let connectionInterval,timerInterval;

// bir apiye call yap ve response al
// status 200'e eşit veya yüksek ve 300den düşükse "isOnline" true, else false yap
// "isCnline" false verince popup gözüksün
// zamanlayıcıyı ayarla

const handleTimer = ()=> {

    clearInterval(connectionInterval)
    const timeEl = document.querySelector(".time")
    timeEl.innerText = 10
    let time = 11

        timerInterval = setInterval(() => {

            time--
            timeEl.innerText = time

            if(time === 0) {

                clearInterval(timerInterval)
                connectionInterval = setInterval(checkConnection,3000)
            }
        }, 1000);
}

const handlePopup = (status) => {

    if(status) {

        h2.innerText = "Connected"
        reconnectBtn.innerText = "Connected"
        popUpEl.classList.add("hidden")

    } else {

        h2.innerText = "Lost Connection"
        reconnectBtn.innerText = "Reconnect Now"
        popUpEl.classList.remove("hidden")
        handleTimer()
    }
}

const checkConnection = async()=> {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const status  = response.status
        isOnline = status >=200 && status < 300;
    } 
    catch (error) {
        isOnline = false
    }
    
    handlePopup(isOnline)
}

connectionInterval = setInterval(checkConnection,3000)

    reconnectBtn.addEventListener("click",()=> {
        clearInterval(timerInterval)
        clearInterval(connectionInterval)
        connectionInterval = setInterval(checkConnection,3000)
    })