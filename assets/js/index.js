const elements = document.getElementsByClassName('ani')

document.addEventListener('scroll', function (event) {
    checkElements();
}, true);

function checkElements() {
    for (let i = 0; i < elements.length; i++) {
        const elem = elements.item(i);
        if (elem.getBoundingClientRect().top >= -500 && elem.getBoundingClientRect().top < 600) {
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

