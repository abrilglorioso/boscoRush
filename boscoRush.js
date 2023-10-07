const bosco = document.getElementById("bosco");

function jump() {
    bosco.classList.add("jump");  
}

document.addEventListener("keydown", function (event) {
    jump();
  });