const bosco = document.getElementById("bosco");
const pelota = document.getElementById("pelota");

function jump() {
    if (bosco.classList != "jump") {
        bosco.classList.add("jump");

        setTimeout(function () {
            bosco.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    let boscoTop = parseInt(window.getComputedStyle(bosco).getPropertyValue("top"));
  
    let pelotaLeft = parseInt(
      window.getComputedStyle(pelota).getPropertyValue("left")
    );

    //detecta el choque
    if (pelotaLeft < 45 && pelotaLeft > 0 && boscoTop >= 55) {
        // choque
        alert("Game Over!");
      }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
  });