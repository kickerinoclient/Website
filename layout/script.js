document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("matrix-canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var characters = "KICKERINO";
    characters = characters.split("");

    var fontSize = 10;
    var columns = canvas.width / fontSize;
    var drops = [];

    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#4d4d4d";
        ctx.font = fontSize + "px monospace";

        for (var i = 0; i < drops.length; i++) {
            var text = characters[Math.floor(Math.random() * characters.length)];

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);
});