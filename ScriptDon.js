document.getElementById("donquixote").addEventListener("click", function () {
    // Play audio
    const audio = new Audio("donscream.mp3"); // change to your audio file
    audio.currentTime = 0;
    audio.play();

    // Create the image element
    const img = document.createElement("img");
    img.src = "donquixote.jpg"; // change to your image
    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.pointerEvents = "none";
    img.style.opacity = "0";            // start invisible
    img.style.transition = "opacity 0.3s ease"; // fade animation

    // Random position
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 300;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    img.style.left = randX + "px";
    img.style.top = randY + "px";

    document.body.appendChild(img);

    // Fade in
    requestAnimationFrame(() => {
        img.style.opacity = "1";
    });

    // Fade out before removal
    setTimeout(() => {
        img.style.opacity = "0"; 
        setTimeout(() => img.remove(), 300); // wait for fade-out to finish
    }, 6000);
});
