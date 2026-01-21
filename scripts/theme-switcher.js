(function () {
    const THEME_KEY = 'cheatsheet-theme';
    const defaultTheme = document.documentElement.getAttribute('data-theme') || 'ocean';

    const select = document.getElementById('theme-selector');
    if (!select) {
        return;
    }

    const storedTheme = localStorage.getItem(THEME_KEY);
    const initialTheme = storedTheme || defaultTheme;

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (select.value !== theme) {
            select.value = theme;
        }
    };

    applyTheme(initialTheme);

    select.addEventListener('change', (event) => {
        const theme = event.target.value;
        applyTheme(theme);
        localStorage.setItem(THEME_KEY, theme);
    });
})();
