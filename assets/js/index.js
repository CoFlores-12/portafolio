const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const section2 = entry.target.querySelector('.secmain2');
      if (entry.isIntersecting) {
        section2On()
        return;
      }
      section2Off()
       const section3 = entry.target.querySelector('.secmain3');
       console.log("3");
      if (entry.isIntersecting) {
        section3On()
        return;
      }
      section3Off()
      const section4 = entry.target.querySelector('.secmain4');
      if (entry.isIntersecting) {
        section4On()
        return;
      }
      section4Off()
    });
  });
  
observer.observe(document.querySelector('.secmain2'));
observer.observe(document.querySelector('.secmain3'));
observer.observe(document.querySelector('.secmain4'));


function section2On() {
    const elements = ['sch2']
    const animations = ['backInUp']
    for (let i = 0; i < elements.length; i++) {
        document.getElementsByClassName(elements[i]).item(0).classList.add(animations[i])
    }
}

function section2Off() {
    const elements = ['sch2']
    const animations = ['backInUp']
    for (let i = 0; i < elements.length; i++) {
        document.getElementsByClassName(elements[i]).item(0).classList.remove(animations[i])
    }
}
function section3On() {
    const elements = ['sch3']
    const animations = ['backInUp']
    for (let i = 0; i < elements.length; i++) {
        document.getElementsByClassName(elements[i]).item(0).classList.add(animations[i])
    }
}

function section3Off() {
    const elements = ['sch3']
    const animations = ['backInUp']
    for (let i = 0; i < elements.length; i++) {
        document.getElementsByClassName(elements[i]).item(0).classList.remove(animations[i])
    }
}
function section4On() {
    const elements = ['sch4']
    const animations = ['backInUp']
    for (let i = 0; i < elements.length; i++) {
        document.getElementsByClassName(elements[i]).item(0).classList.add(animations[i])
    }
}

function section4Off() {
    const elements = ['sch4']
    const animations = ['backInUp']
    for (let i = 0; i < elements.length; i++) {
        document.getElementsByClassName(elements[i]).item(0).classList.remove(animations[i])
    }
}
