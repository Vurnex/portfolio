const toggleSwitch = document.querySelectorAll('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.forEach(el => el.addEventListener('change', switchTheme, false));

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');

        document.getElementById("checkbox1").checked = true;
        document.getElementById("checkbox2").checked = true;

        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');

        document.getElementById("checkbox1").checked = false;
        document.getElementById("checkbox2").checked = false;

        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {

        document.getElementById("checkbox1").checked = true;
        document.getElementById("checkbox2").checked = true;
    }
}