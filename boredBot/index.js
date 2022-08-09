const btn = document.getElementById("bored-button")
function getActivityIdea() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            document.getElementById("idea").textContent = data.activity
            document.body.classList.add("fun")
            document.getElementById("title").textContent = "🦾 HappyBot🦿"
        })
        btn.classList.add('on')
        setTimeout(() => btn.classList.remove('on'),200)
}

btn.addEventListener("click", getActivityIdea)