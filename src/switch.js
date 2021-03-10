const refs = {
    bodyStyle: document.querySelector('body'),
    switchToggle: document.querySelector('#theme-switch-toggle'),
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.switchToggle.addEventListener('change', switchTheme);

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.bodyStyle.classList.add(Theme.DARK)
    refs.switchToggle.checked = true;
} else {
    refs.bodyStyle.classList.add(Theme.LIGHT)
}    

function switchTheme(event) {
    if (event.target.checked) {
        refs.bodyStyle.classList.add(Theme.DARK);
        refs.bodyStyle.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK)
    } else {
        refs.bodyStyle.classList.add(Theme.LIGHT);
        refs.bodyStyle.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

// ====================================================================
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.
