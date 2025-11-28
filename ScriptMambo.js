let lastImgIndex = -1; // track last image
let audioHistory = []; // store last two audio indices

document.getElementById("MamBoButton").addEventListener("click", function () {
    // --- Audio ---
    const audiosrc = ['MamboWow.mp3', 'Mambo.mp3', 'MamboOhYeah.mp3'];
    
    let audioIndex;
    do {
        audioIndex = Math.floor(Math.random() * audiosrc.length);
    } while (audioHistory.length >= 2 && audioIndex === audioHistory[audioHistory.length - 1] && audioIndex === audioHistory[audioHistory.length - 2]);

    // update history
    audioHistory.push(audioIndex);
    if (audioHistory.length > 2) audioHistory.shift(); // keep last 2

    const audio = new Audio(audiosrc[audioIndex]);
    audio.currentTime = 0;
    audio.play();

    // --- Image ---
const imgsrc = [
    'mambo1.jpg',
    'mambo2.jpg',
    'mambo3.jpg',
    'mambo4.jpg'
];  
    let imgIndex;
    do {
        imgIndex = Math.floor(Math.random() * imgsrc.length);
    } while (imgIndex === lastImgIndex); // prevent same image twice
    lastImgIndex = imgIndex;

    const img = document.createElement("img");
    img.src = imgsrc[imgIndex];
    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.pointerEvents = "none";
    img.style.opacity = "0"; 
    img.style.transition = "opacity 0.3s ease";

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
        setTimeout(() => img.remove(), 300);
    }, 600);
});
