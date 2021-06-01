document.addEventListener("DOMContentLoaded", () => {
    const playing = !0
    const timer = function() {
        return setInterval(function (){
            let counterElement = document.getElementById('counter')
            const counterNum = parseInt(counterElement.innerText)
            counterElement.innerText = counterNum + 1
        }, 1e3)
    }
    const interval = timer()
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const commentForm = document.getElementsByTagName("form")[0]

    minus.addEventListener("click", function(){
        let counterElement = document.getElementById('counter')
        const counterNum = parseInt(counterElement.innerText)
        counterElement.innerText = counterNum - 1
    })
    plus.addEventListener("click", function(){
        let counterElement = document.getElementById('counter')
        const counterNum = parseInt(counterElement.innerText)
        counterElement.innerText = counterNum + 1
    })
    let secondsArray = []
    heart.addEventListener("click", function(){
        let counterElement = document.getElementById('counter')
        const counterNum = parseInt(counterElement.innerText)
        const likes = document.querySelector('.likes')

        console.log(secondsArray)
        if (secondsArray.includes(counterNum)){
            secondsArray.push(counterNum)
            const times = secondsArray.filter( (a) => a === counterNum)
            const likesElement = document.getElementById(`${counterNum}`)
            likesElement.innerHTML = `${counterNum} has been liked ${times.length} times.`
            console.log(times)
        } else {
            const likesElement = document.createElement('li')
            likesElement.id = `${counterNum}`
            likesElement.innerHTML = `${counterNum} has been liked 1 time.`
            secondsArray.push(counterNum)
            likes.append(likesElement)
        }
    })
})