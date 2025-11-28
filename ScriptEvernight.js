const button = document.getElementById('evernightButton');
let isPlaying = false;
    let audio = new Audio('ever9.mp3');
    function Dance() {
        if (isPlaying) {
            // Reset everything if already playing
            audio.pause();
            audio.currentTime = 0;
            var img = document.getElementById("evernightImage");
            img.src = "evernight.png";
            clearTimeout(window.danceTimeout);
            clearTimeout(window.imageTimeout);
            isPlaying = false;
        }
        
        // Start new animation
        isPlaying = true;
        audio.play();
        var img = document.getElementById("evernightImage");
        img.src = "evernight.gif";
        
        // Set timeouts for ending
        window.danceTimeout = setTimeout(function() {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
        }, 3650);
        
        window.imageTimeout = setTimeout(function() {
            img.src = "evernight.png";
        }, 3650);
    }
evernightButton.addEventListener('click', Dance);