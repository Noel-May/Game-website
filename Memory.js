function play() {
    let user = Math.floor(Math.random() * 3);
    let cpu = Math.floor(Math.random() * 3);

    if (user === cpu) {
        document.getElementById("result").innerText = "You Win!";
    } else {
        document.getElementById("result").innerText = "Try Again";
    }
}
