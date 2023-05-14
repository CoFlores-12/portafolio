const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const section2 = entry.target.querySelector('.section2');
      if (entry.isIntersecting) {
        addAnimation('section2Animate')
        return;
      }
      deleteAnimation('section2Animate')
    });
  });
  
observer.observe(document.querySelector('.section2'));

function addAnimation(nameClass) {
    const elements = document.getElementsByClassName(nameClass)
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).classList.add('animate__animated')
    }
}

function deleteAnimation(nameClass) {
    const elements = document.getElementsByClassName(nameClass)
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).classList.remove('animate__animated')
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    document.getElementsByClassName('animatePrueba').item(0).classList.add('animate__animated','animate__backInUp')
    await sleep(3000);
    document.getElementsByClassName('animatePrueba').item(0).classList.remove('animate__animated')
    await sleep(3000);
    document.getElementsByClassName('animatePrueba').item(0).classList.add('animate__animated')
}
test()