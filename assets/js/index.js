const elements = document.getElementsByClassName('ani')

document.addEventListener('scroll', function (event) {
    checkElements();
}, true /*Capture event*/);

function checkElements() {
    const trigger = window.innerHeight;
    for (let i = 0; i < elements.length; i++) {
        const elem = elements.item(i);
        if (elem.getBoundingClientRect().top < trigger) {
            elem.classList.remove('hid')
            elem.classList.add(elem.getAttribute('ani'))
        }else{
            elem.classList.add('hid')
            elem.classList.remove(elem.getAttribute('ani'))
        }
    }
}

$(document).on("scroll", checkElements());