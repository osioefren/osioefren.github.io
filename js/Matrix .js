document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.querySelector(".intro");
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match the .intro section
    function resizeCanvas() {
        canvas.width = introSection.clientWidth;
        canvas.height = introSection.clientHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix effect setup
    const columns = Math.floor(canvas.width / 20);
    const drops = new Array(columns).fill(1);
    const fontSize = 16;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Fade effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0"; // Green matrix color
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);
});
