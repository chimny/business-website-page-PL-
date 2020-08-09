// menu appearance
const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');
const cancel = document.querySelector('.fa-times');
const aside = document.querySelector('aside');

burger.addEventListener('click', () => {
  icon.classList.toggle('show');
  cancel.classList.toggle('show');
  aside.classList.toggle('hiddenMenu');
})



// typing effect in header section
const welcomeP = document.querySelector('.welcome p');
const welcomeH1 = document.querySelector('.welcome h1');
const welcomeH2 = document.querySelector('.welcome h2');

const welcomePContent = 'witaj!';
const welcomeH1Content = 'jestem jan nowak';
const welcomeH2Content = 'web developer - freelancer';

let time = 100;
let delay = 300;
let i = 0;



function typingEffect() {

  welcomeP.textContent += welcomePContent[i];
  i++;
  if (i == welcomePContent.length) {
    clearInterval(timer);
    i = 0;

    function typingEffect2() {
      welcomeH1.textContent += welcomeH1Content[i];
      i++;
      if (i == welcomeH1Content.length) {
        clearInterval(timer2);
        i = 0;

        function typingEffect3() {
          welcomeH2.textContent += welcomeH2Content[i];
          i++;
          if (i == welcomeH2Content.length) {
            clearInterval(timer3);
          }


        }
        const timer3 = setInterval(typingEffect3, time);
      }
    }


    const timer2 = setInterval(typingEffect2, time);
  }



}



const timer = setInterval(typingEffect, time);