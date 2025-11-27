/* document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("reveal-logos-btn");
    const wrapper = document.getElementById("logos-wrapper");
    const footer = document.querySelector(".sticky-footer");

    let shown = false;

    btn.addEventListener("click", () => {
        if (shown) return;

        // reveal logos
        wrapper.classList.add("visible");
        wrapper.setAttribute("aria-hidden", "false");

        // shift footer upward
        footer.classList.add("shift-up");

        shown = true;
    });
});
*/