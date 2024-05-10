const elements = document.getElementsByClassName('ani')

document.addEventListener('scroll', function (event) {
    checkElements();
}, true);

function checkElements() {
    for (let i = 0; i < elements.length; i++) {
        const elem = elements.item(i);
        if (elem.getBoundingClientRect().top >= -400 && elem.getBoundingClientRect().top < 700) {
            viewScene(elem)
        }else{
            disableScene(elem)
        }
    }
}

checkElements();

function viewScene(section) {
    section.classList.remove('hid')
    section.classList.add(section.getAttribute('ani'))
}

function disableScene(section) {
    section.classList.add('hid')
    section.classList.remove(section.getAttribute('ani'))
}

function checkedBtn() {
checkbox = document.getElementById('dn')
    if (checkbox.checked) {
        setTheme('theme-dark');
        let color = getComputedStyle(document.documentElement)
.getPropertyValue('--color-secondary');
        $("meta[name='theme-color']").attr('content', color);
        checkbox.checked = true;
    } else {
        setTheme('theme-light');
        let color = getComputedStyle(document.documentElement)
.getPropertyValue('--color-secondary');
        $("meta[name='theme-color']").attr('content', color);
        checkbox.checked = false;
    }
}
// function to toggle between light and dark theme
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
    let color = getComputedStyle(document.documentElement)
.getPropertyValue('--color-secondary');
        $("meta[name='theme-color']").attr('content', color);
} else {
    setTheme('theme-dark');
    let color = getComputedStyle(document.documentElement)
.getPropertyValue('--color-secondary');
        $("meta[name='theme-color']").attr('content', color);
}
}