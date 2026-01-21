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
        const optionExists = Array.from(select.options).some((option) => option.value === theme);
        const resolvedTheme = optionExists ? theme : defaultTheme;
        document.documentElement.setAttribute('data-theme', resolvedTheme);
        if (select.value !== resolvedTheme) {
            select.value = resolvedTheme;
        }
    };

    applyTheme(initialTheme);

    select.addEventListener('change', (event) => {
        const theme = event.target.value;
        applyTheme(theme);
        localStorage.setItem(THEME_KEY, theme);
    });
})();
