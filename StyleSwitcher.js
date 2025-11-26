let darkmode = localStorage.getItem('darkmode');
const themeSwitcher = document.getElementById('switchLD');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkmode', 'enabled');
}
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode', null);
}
if (darkmode === 'enabled') {
    enableDarkMode();
}
switchLD.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'enabled' ? enableDarkMode() : disableDarkMode();
})