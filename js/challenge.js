document.addEventListener("DOMContentLoaded", () => {
    function timer() {
        let timerStart
        return {
            start() {
                timerStart = setInterval(function (){
                let counterElement = document.getElementById('counter')
                const counterNum = parseInt(counterElement.innerText)
                counterElement.innerText = counterNum + 1
            }, 1e3)}, 
            stop () {
                clearInterval(timerStart)
            }
        }
    }
    const interval = timer()
    interval.start()
    let counter = document.getElementById('counter')
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const submit = document.getElementById('comment-form')


    function submitComment(event){
        event.preventDefault()
        const commentForm = document.querySelector('#list')
        const comment = document.querySelector('#comment-input')
        const newP = document.createElement('p')
        newP.innerText = comment.value
        commentForm.append(newP)
        comment.value = ""
    }

    pause.addEventListener("click", pauseTimer)

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
    function pauseTimer(){
        if (pause.innerText === 'pause'){
            interval.stop()
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
            pause.innerText = 'resume'
        } else {
            interval.start()
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false
            pause.innerText = 'pause' 
        }
    }
    submit.addEventListener("submit", submitComment)
})