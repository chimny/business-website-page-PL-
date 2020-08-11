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
const welcomeP = document.querySelector('.welcome p .text');
const welcomeH1 = document.querySelector('.welcome h1 .text');
const welcomeH2 = document.querySelector('.welcome h2 .text');
const spanP = document.querySelector('.welcome p span.cursor');
const spanH1 = document.querySelector('.welcome h1 span.cursor');
const spanH2 = document.querySelector('.welcome h2 span.cursor');


const welcomePContent = 'witaj!';
const welcomeH1Content = 'jestem jan nowak';
const welcomeH2Content = 'web developer - freelancer';

const time = 100;
const flashingCursor = 300;
const delay = 1000;
let i = 0;



function typingEffect() {

  welcomeP.textContent += welcomePContent[i];
  i++;
  if (i == welcomePContent.length) {
    clearInterval(timer);

    setTimeout(() => {
      clearInterval(cursoranimationP);
      spanP.classList.remove('active');
      i = 0;

      function typingEffect2() {
        welcomeH1.textContent += welcomeH1Content[i];
        i++;
        if (i == welcomeH1Content.length) {
          clearInterval(timer2);
          setTimeout(() => {
            clearInterval(cursoranimationH1);
            spanH1.classList.remove('active');
            i = 0;

            function typingEffect3() {
              welcomeH2.textContent += welcomeH2Content[i];
              i++;
              if (i == welcomeH2Content.length) {

                clearInterval(timer3);
              }

            }
            const cursoranimationH2 = setInterval(() => {
              spanH2.classList.toggle('active');
            }, flashingCursor);
            const timer3 = setInterval(typingEffect3, time);
          }, delay)

        }
      }

      const cursoranimationH1 = setInterval(() => {
        spanH1.classList.toggle('active');
      }, flashingCursor);
      const timer2 = setInterval(typingEffect2, time);
    }, delay)

  }



}



const cursoranimationP = setInterval(() => {
  spanP.classList.toggle('active');
}, flashingCursor);




const timer = setInterval(typingEffect, time);