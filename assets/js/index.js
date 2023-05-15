const elements = document.getElementsByTagName('section')

document.addEventListener('scroll', function (event) {
    checkElements();
}, true);

function checkElements() {
    for (let i = 0; i < elements.length; i++) {
        const elem = elements.item(i);
        if (elem.getBoundingClientRect().top >= -200 && elem.getBoundingClientRect().top < 200) {
            viewScene(elem)
        }else{
            disableScene(elem)
        }
    }
}

checkElements();

function viewScene(section) {
    let els = $(section).find('.ani')
    for (let i = 0; i < els.length; i++) {
        els[i].classList.remove('hid')
        els[i].classList.add(els[i].getAttribute('ani'))
    }
}

function disableScene(section) {
    let els = $(section).find('.ani')
    for (let i = 0; i < els.length; i++) {
        els[i].classList.add('hid')
        els[i].classList.remove(els[i].getAttribute('ani'))
    }
}


let currentSlide = 0;
let imageCount = document.querySelectorAll(".imgsli");

function startSlider() {
    
    if (imageCount.length === 0) {
        imageCount = document.querySelectorAll(".imgsli");
        images.style.transform = `translateX(0px)`;
        return;
    }
    if (currentSlide === imageCount.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    
    let images = document.querySelector(".ul2");
    let images2 = document.querySelector(".ul1");
    let images3 = document.querySelector(".ul3");
    const vh = (document.documentElement.clientHeight*0.4)/(20/9);
  
  images.style.transform = `translateX(-${currentSlide * (vh)}px)`;
  images2.style.transform = `translateX(-${currentSlide * (vh)}px)`;
  images3.style.transform = `translateX(-${currentSlide * (vh)}px)`;

}

function prevSlide() {
    if (currentSlide ===  0) {
        currentSlide = imageCount.length-1;
    } else {
          currentSlide--;
      }
      let images = document.querySelector(".ul2");
      let images2 = document.querySelector(".ul1");
      let images3 = document.querySelector(".ul3");
      const vh = (document.documentElement.clientHeight*0.4)/(20/9);
      images.style.transform = `translateX(-${currentSlide * (vh)}px)`;
    images2.style.transform = `translateX(-${currentSlide * (vh)}px)`;
    images3.style.transform = `translateX(-${currentSlide * (vh)}px)`;
}

function nextSlide() {
    if (currentSlide === imageCount.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      let images = document.querySelector(".ul2");
      let images2 = document.querySelector(".ul1");
      let images3 = document.querySelector(".ul3");
      const vh = (document.documentElement.clientHeight*0.4)/(20/9);
      images.style.transform = `translateX(-${currentSlide * (vh)}px)`;
      images2.style.transform = `translateX(-${currentSlide * (vh)}px)`;
      images3.style.transform = `translateX(-${currentSlide * (vh)}px)`;
}

setInterval(() => {
  startSlider();
}, 5000);