// --- Fix 1: Preload Audio by creating them in the global scope (already done) ---
const audiohover = new Audio("limbushover.wav");
const audioclick = new Audio("limbusclick.wav");

// Preload hover image
const imghover = new Image();
imghover.src = "limbushover.png";   // 🔥 the glowing / alternate image

// Get the clickable image link
const limbusLink = document.getElementById("limbus-link");
const limbusGotoPage = document.getElementById("limbus-goto-page");

if (limbusGotoPage) {

    // Store original image src so we can restore it later
    const originalSrc = limbusGotoPage.src;

    // --- Hover Event ---
    limbusGotoPage.addEventListener("mouseover", () => {

        // Change image to hover image
        limbusGotoPage.src = imghover.src;

        // Play hover sound
        audiohover.currentTime = 0;
        audiohover.play().catch(() => {});
    });

    // --- Mouse Leave Event ---
    limbusGotoPage.addEventListener("mouseout", () => {

        // Restore original image
        limbusGotoPage.src = originalSrc;
    });

    // --- Click Event ---
    limbusGotoPage.addEventListener("click", function(Event) {
        Event.preventDefault();

        audioclick.currentTime = 0;
        audioclick.play().then(() => {
            setTimeout(() => {
                window.location.href = limbusLink.href;
            }, 200);
        }).catch(() => {
            setTimeout(() => {
                window.location.href = limbusLink.href;
            }, 200);
        });
    });
}
