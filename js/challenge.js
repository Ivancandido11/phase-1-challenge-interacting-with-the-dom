document.addEventListener("DOMContentLoaded", () => {
    function replaceArray(array){
        if (Array.isArray(array)){
            for (let i = 0, c = Array(array.length); i < array.length; i++)
            c[i] = array[i]
            return c
        }
        return Array.from(array)
    }
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
    heart.addEventListener("click", function(){
        let counterElement = document.getElementById('counter')
        const counterNum = parseInt(counterElement.innerText)
        const likes = document.querySelector('.likes')
        let commentLikes = void 0
        if([].concat(replaceArray(likes.children)).map(function(counterElement){
            return parseInt(counterElement.dataset.num)
        }).includes(counterNum)){
            commentLikes = document.querySelector('[data-num="'+counterNum+'"]')
            const numOfLikes = parseInt(commentLikes.children[0].innerText)
            commentLikes.innerHTML = `${counterNum} has been liked <span>
            ${numOfLikes + 1}</span> times`
        } else (commentLikes = document.createElement("li")).setAttribute("data-num"
        , counterNum), commentLikes.innerHTML = `${counterNum} has been liked <span>1</span> time`,
        likes.appendChild(commentLikes)
    })
})