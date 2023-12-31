const socialLogo = document.getElementsByClassName('icons-light');
const themeToggle = document.getElementById('slider');

function toggleTheme() {
    const isDarkMode = themeToggle.checked;
    document.body.classList.toggle('dark-theme', isDarkMode);
    updateSocialIcons(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : 'light-theme');
}

function updateSocialIcons(isDarkMode) {
    for (let i = 0; i < socialLogo.length; i++) {
        socialLogo[i].classList.toggle('icons-dark', isDarkMode);
    }
}

function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggle.checked = savedTheme === 'dark-theme';
        updateSocialIcons(themeToggle.checked);
    }
}

themeToggle.addEventListener('change', toggleTheme);

checkTheme();